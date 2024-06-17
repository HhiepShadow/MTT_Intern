// Life of a developer

function compose(...funcs) {
    // your code
    return (arg) => funcs.reduceRight((acc, fn, index) => fn(acc), arg);
}

function eat(developer) {
    console.log(`${developer.name} is eating`);
    return developer;
}

function code(developer) {
    console.log(`${developer.name} is coding`);
    return developer;
    // developer.alive = false; // rip
}

function sleep(developer) {
    console.log(`${developer.name} is sleeping`);
    return developer;
}

const developer = {
    name: 'Peter',
    alive: true,
};

const live = compose(sleep, code, eat);
live(developer);

// Peter is eating
// Peter is coding
// Peter is sleeping