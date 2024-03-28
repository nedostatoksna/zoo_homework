interface Animal {
    name: string;
    color: string;
    weight: number;
    numberOfFeedings: number;
    dateOfBirth: Date;
    herbivores: boolean;
    predator: boolean;
}
interface Parrot extends Animal {
    doing: () => 'imitating sounds';
    herbivores: true;
    predator: false;
}
interface Kangaroo extends Animal {
    doing: () => 'using their tail as a fifth leg';
    herbivores: true;
    predator: false;
}
interface Elephant extends Animal {
    doing: () => 'making pathways in dense forest';
    herbivores: true;
    predator: false;
}
interface Wolf extends Animal {
    doing: () => 'keeping deer and elk populations in check';
    predator: true;
    herbivores: false;
}
interface Lynx extends Animal {
    doing: () => 'hunting at night';
    predator: true;
    herbivores: false;
}
interface Deer extends Animal {
    doing: () => 'running away and seeking cover';
    herbivores: true;
    predator: false;
}
interface Hare extends Animal {
    doing: () => 'grazing on vegetation and the bark of young trees and bushes';
    herbivores: true;
    predator: false;
}
interface Beaver extends Animal {
    doing: () => 'blocking rivers and streams with trees and mud, creating new lakes, ponds, and floodplains';
    herbivores: true;
    predator: false;
}
interface Giraffe extends Animal {
    doing: () => 'traveling miles in search of food';
    herbivores: true;
    predator: false;
}
interface Hedgehog extends Animal {
    doing: () => 'curling into a prickly and unappetizing ball that deters most predators';
    herbivores: false;
    predator: true;
}

export  {
    Parrot, 
    Kangaroo, 
    Elephant, 
    Deer, 
    Lynx, 
    Wolf, 
    Hare, 
    Beaver, 
    Giraffe, 
    Hedgehog, 
    Animal
} 