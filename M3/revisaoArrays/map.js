const numeros = [ 5, 10 ,15, 20 ,25 ,30 ,35]

const vezesDez = numeros.map((item)=> item * 2)


const pets = [
    {
      nome: 'Butters',
      idade: 3,
      tipo: 'dog',
    },
    {
      nome: 'Lizzy',
      idade: 6,
      tipo: 'dog',
    },
  
    {
      nome: 'Red',
      idade: 1,
      tipo: 'cat',
    },
    {
      nome: 'Joey',
      idade: 3,
      tipo: 'dog',
    },
  ]

  const objPets = pets.map((pet, index)=>{
    pet['id'] = index
      return pet
  })

  console.log(objPets)
