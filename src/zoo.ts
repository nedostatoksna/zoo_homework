import {Parrot, 
        Kangaroo, 
        Elephant, 
        Deer, 
        Lynx, 
        Wolf, 
        Hare, 
        Beaver, 
        Giraffe, 
        Hedgehog} from "./animals/animals";

type AnimalArg = {
    animal: Parrot | Kangaroo | Elephant | Deer | Lynx | Wolf | Hare | Beaver | Giraffe | Hedgehog
}

type isAllowedInCommonAviary = (animal: AnimalArg) => boolean

const isAllowedInCommonAviary: isAllowedInCommonAviary = (animal) => {
    if ('herbivores' in animal && animal.herbivores === true) {
        return true
    }
    return false
}

type putAnimalsInTheAviaries = (animal: AnimalArg) => {}[][]
const putAnimalsInTheAviaries: putAnimalsInTheAviaries = (animal) => {
    let zoo:{}[][] = [];
    let commonAviary:{}[] = [];
    zoo.push(commonAviary);
    if (isAllowedInCommonAviary(animal) === true) {
        commonAviary.push(animal)
    } else {
        let predatorsAviary = [];
        predatorsAviary.push(animal);
        zoo.push(predatorsAviary);
    }
    return zoo;
}