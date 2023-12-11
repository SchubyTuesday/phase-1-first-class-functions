function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction(name) {
    return function callback(name) {

    }
}

function returnsAnAnonymousFunction() {
    return function () {
        
    }
}