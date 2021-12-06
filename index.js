// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(string){
    cats.push(string);
}

function destructivelyPrependCat(string){
    cats.unshift(string);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(string){
    const copyCats = [...cats, string];
    return copyCats;
}

function prependCat(string){
    const copyCats = cats.slice();
    copyCats.unshift(string);
    return copyCats;
}


function removeFirstCat(){
    const copyCats = cats.slice();
    copyCats.shift();
    return copyCats;
}

function removeLastCat(){
    const copyCats = cats.slice();
    copyCats.pop();
    return copyCats;
}