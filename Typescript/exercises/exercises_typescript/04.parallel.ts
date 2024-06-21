function looseParallelTS(tasks: Array<Function>, callback: Function) {
    const results: number[] = [];

    tasks.forEach((task: Function, index: number) => {
        task((err: Error, result: number) => {
            if (err) {
                return callback(err);
            }
            results.push(result);
            if (results.length === tasks.length) {
                callback(null, results);
            }
        })
    });
}

console.time('looseParallel');
looseParallelTS([
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
], (err: Error, result: number[]) => {
  console.log("looseParallel ", result); // [50, 100, 200, 500] The ordering of the result is based on the consuming time of the task
  console.timeEnd('looseParallel'); // ~500ms
});

// ===================================================================================================================
function parallelTS(tasks: Array<Function>, callback: Function) {
  // your code
  const results: number[] = [];
  let completed: number = 0;
  tasks.forEach((task: Function, index: number) => {
    task((error: Error, result: number) => {
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
parallelTS([
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
], (err: Error, result: number[]) => {
  console.log(result); // [100, 50, 500, 200] the ordering of the result is as same as the tasks input
  console.timeEnd('Parallel'); // ~500ms
});