var cities = ['New York', 'San Francisco', 'Philly']

cities = ['Buffalo', ...cities]

function addElementToBeginningOfArray(arr, element){
    arr = [element, ...arr]
    return arr
}

function destructivelyAddElementToBeginningOfArray(arr, element){
    return [element, ...arr]
}
 
function addElementToEndOfArray(arr, element){
    return [...arr, element]
}

function destructivelyAddElementToEndOfArray(arr, element){
    arr = [...arr, element]
    return arr
}

function accessElementInArray(arr,index){
    index = parseInt(index)
    return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
     arr.shift()
     arr = arr
     return arr
}

function removeElementFromBeginningOfArray(arr){
    return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr){
    arr.pop()
    arr = arr
    return arr
}

function removeElementFromEndOfArray(arr){
    arr.pop()
    return arr
}

