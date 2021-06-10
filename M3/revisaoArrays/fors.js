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


  let id = 0
  for(let pet of pets){
      pet['id'] = id
      id ++
      console.log(pet)
  }

  for(pet in pets){

    console.log(pets[pet].tipo)
    
}