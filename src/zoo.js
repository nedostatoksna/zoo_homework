"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isAllowedInCommonAviary = function (animal) {
    if ('herbivores' in animal && animal.herbivores === true) {
        return true;
    }
    return false;
};
var putAnimalsInTheAviaries = function (animal) {
    var zoo = [];
    var commonAviary = [];
    zoo.push(commonAviary);
    if (isAllowedInCommonAviary(animal) === true) {
        commonAviary.push(animal);
    }
    else {
        var predatorsAviary = [];
        predatorsAviary.push(animal);
        zoo.push(predatorsAviary);
    }
    return zoo;
};
