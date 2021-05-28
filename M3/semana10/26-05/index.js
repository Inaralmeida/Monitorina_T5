const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const tabuada = numeros.map((numero, i, a)=>{
    const obj = {}
    for(let i = 0; i < a.length; i++){
        obj[`${numero} x ${i}`] = numero * i
    }
    return obj
})

console.log(tabuada)