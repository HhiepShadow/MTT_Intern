type Developer = {
    name: string;
    alive?: boolean;
}

function composeTS(...funcs: Array<Function>): Function {
    return (arg) => funcs.reduceRight((acc, func) => func(acc), arg);
}

function eatTS(developer: Developer): Developer {
    console.log(`${developer.name} is eating`);
    return developer;
}

function sleepTS(developer: Developer): Developer {
    console.log(`${developer.name} is sleeping`);
    return developer;
}

function codeTS(developer: Developer): Developer {
    console.log(`${developer.name} is coding`);
    return developer;
}

const developerTS: Developer = {
    name: 'Peter',
    alive: true
};

const liveTS: Function = composeTS(sleepTS, codeTS, eatTS);
liveTS(developerTS);