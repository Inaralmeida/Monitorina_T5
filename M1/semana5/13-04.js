

const random = [ 2 , 'palavra', {saudacao: 'ola'}, true]

for(let i = 0; i < random.length; i++){
    console.log(random[i], 'é do tipo:', typeof(random[i]))
    if(typeof(random[i]) === 'object'){
        random.splice(i, 1)
    }   
}

console.log(random)