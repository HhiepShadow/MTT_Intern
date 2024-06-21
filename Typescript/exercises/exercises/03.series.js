function series(tasks, callback) {
    let results = [];
    let index = 0;

    function executeNextTask() {
        if (index === tasks.length) {
            callback(null, results);
            return;
        }

        tasks[index]((err, result) => {
            if (err) {
                callback(err);
                return;
            }
            results.push(result);
            index++;
            executeNextTask();
        });
    }

    executeNextTask();
}

console.time('Series');
series([
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
            cb(null, 200);
        }, 200);
    }, (cb) => {
        setTimeout(() => {
            cb(null, 500);
        }, 500);
    }
], (err, result) => {
    console.log(result); // [100, 50, 200, 500]
    console.timeEnd('Series'); // ~ 100 + 50 + 200 + 500 = 850ms
});