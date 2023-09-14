// Code your solution here
function findMatching(arr, name){
    if (!arr.length){
        return []
    };

    return arr.filter(element => element.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(arr, name){
    return arr.filter(driver => driver.startsWith(name));
}

function matchName(arr, name){
    return arr.filter(x => x.name === name)
}