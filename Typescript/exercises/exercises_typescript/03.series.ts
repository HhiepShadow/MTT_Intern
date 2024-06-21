function seriesTS(tasks: Array<Function>, callback: Function) {
    let results: number[] = [];
    let index: number = 0;

    function executeNextTask() {
        if (index === tasks.length) {
            callback(null, results);
            return;
        }

        tasks[index]((err: Error, result: number) => {
            if (err) {
                callback(err);
                return;
            }
            results.push(result);
            index++;
            executeNextTask();
        })
    }

    executeNextTask();
}

console.time('Series');
seriesTS([
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
], (err: Error, result: number[]) => {
    console.log(result);
    console.timeEnd('Series');
})