const receivesAFunction = function(spy){
    spy()
}

receivesAFunction()

function returnsANamedFunction(){
    return function fn(){
        console.log('function')
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log('function')
    }
}