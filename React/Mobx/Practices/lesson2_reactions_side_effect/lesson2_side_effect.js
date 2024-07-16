"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.energyLevel = 100;
        (0, mobx_1.makeAutoObservable)(this);
    }
    Animal.prototype.reduceEnergy = function () {
        this.energyLevel -= 10;
    };
    Object.defineProperty(Animal.prototype, "isHungry", {
        get: function () {
            return this.energyLevel < 50;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var giraffe = new Animal("Gary");
(0, mobx_1.autorun)(function () {
    console.log("Energy level: ", giraffe.energyLevel);
});
(0, mobx_1.autorun)(function () {
    if (giraffe.isHungry) {
        console.log("Now I'm hungry");
    }
    else {
        console.log("I'm not hungry");
    }
});
console.log("Now let's change state");
for (var i = 0; i < 10; i++) {
    giraffe.reduceEnergy();
}
