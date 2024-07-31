import { makeAutoObservable, autorun, reaction } from 'mobx'

class Animal {
    name
    energyLevel

    constructor(name) {
        this.name = name;
        this.energyLevel = 100;
        makeAutoObservable(this);
    }

    reduceEnergy() {
        this.energyLevel -= 10;
    }

    get isHungry() {
        return this.energyLevel < 50;
    }
}

const giraffe = new Animal("Gary");

// autorun(() => {
//     console.log("Energy level: ", giraffe.energyLevel);
// });

autorun(() => {
    if (giraffe.isHungry) {
        console.log("Now I'm hungry");
    } else {
        console.log("I'm not hungry");
    }
    console.log("Energy level: ", giraffe.energyLevel);
})

reaction(
    () => giraffe.isHungry,
    isHungry => {
        if (isHungry) {
            console.log("Now I'm hungry!");
        } else {
            console.log("I'm not hungry");
        }
        console.log("Energy level: ", giraffe.energyLevel);
    }
)

console.log("Now let's change state");

for (let i = 0; i < 10; i++){
    giraffe.reduceEnergy();
}