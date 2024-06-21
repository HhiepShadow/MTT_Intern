function looseParallel(tasks, callback) {
  // your code
  const results = [];
  // let completed = 0;
  // tasks.forEach((task, index) => {
  //   task((error, result) => {
  //     if (error) {
  //       return callback(error);
  //     }
  //     results[index] = result;
  //     // completed++;
  //     if(results.length === tasks.length) {
  //       callback(null, results.sort((a, b) => a - b));
  //     }
  //   })
  // })

  tasks.forEach((task, index) => {
    task((error, result) => {
      if (error) {
        return callback(error);
      }
      results.push(result)
      if(results.length === tasks.length) {
        callback(null, results);
      }
    })
  })
}

console.time('looseParallel');
looseParallel([
  (cb) => {
    setTimeout(() => {
      cb(null, 100);
    }, 100);
  }, (cb) => {
    setTimeout(() => {
      cb(null, 50);
    }, 50);
  }, (cb) => {
    setTimeout(() => {
      cb(null, 500);
    }, 500);
  }, (cb) => {
    setTimeout(() => {
      cb(null, 200);
    }, 200);
  }
], (err, result) => {
  console.log("looseParallel ",result); // [50, 100, 200, 500] The ordering of the result is based on the consuming time of the task
  console.timeEnd('looseParallel'); // ~500ms
});

// ------------------------------------------------------------- //

function parallel(tasks, callback) {
  // your code
  const results = [];
  let completed = 0;
  tasks.forEach((task, index) => {
    task((error, result) => {
      if (error) {
        return callback(error);
      }
      results[index] = result;
      completed++;
      if(completed === tasks.length) {
        callback(null, results);
      }
    })
  })
}
console.time('Parallel');
parallel([
  (cb) => {
    setTimeout(() => {
      cb(null, 100);
    }, 100);
  }, (cb) => {
    setTimeout(() => {
      cb(null, 50);
    }, 50);
  }, (cb) => {
    setTimeout(() => {
      cb(null, 500);
    }, 500);
  }, (cb) => {
    setTimeout(() => {
      cb(null, 200);
    }, 200);
  }
], (err, result) => {
  console.log(result); // [100, 50, 500, 200] the ordering of the result is as same as the tasks input
  console.timeEnd('Parallel'); // ~500ms
});