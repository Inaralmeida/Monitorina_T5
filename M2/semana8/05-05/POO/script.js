//criamos a class molde de pokemon
class Pokemon {
  //a class recebe o nome, id, foto, o valor de ataque, defesa e o hp do pokemon
  constructor(nome, foto, id, hp, ataque, defesa) {
    (this._nome = nome),
      (this._ataque = ataque),
      (this._foto = foto),
      (this._defesa = defesa),
      (this._id = id),
      (this._hp = hp);
  }

  //Método de luta, que avalia o valor de ataque dos dois pokemons passados como parametro, o pokemon com ataque mais forte ganha
  Lutar(pokemon1, pokemon2) {
    if (pokemon1._ataque > pokemon2._ataque) {
      return pokemon1;
    } else if (pokemon1._ataque < pokemon2._ataque) {
      return pokemon2;
    } else {
      return "EMPATE";
    }
  }

  //Usamos o get para proteger as informações e não poderem ser alteradas manualmente fora da class
  get nome() {
    return this._nome;
  }
  get ataque() {
    return this._ataque;
  }
  get foto() {
    return this._foto;
  }
  get id() {
    return this._id;
  }
  get defesa() {
    return this._defesa;
  }
  get hp() {
    return this._hp;
  }
}

//variavel global que vai armazenar o objeto pokemon que é criado após a requisição
let poke1, poke2;

$("#verLutadores").click(() => {
  //função que inicia o processo de requisição e armazenamento de pokemons
  criaPokemon(2);
});

$("#lutar").click(() => {
  lutar();
});

function criaPokemon(quantidade) {
  $(".lutadores").removeClass("invisivel");
  $("#lutar").removeClass("invisivel");
  $("#vencedor").addClass("invisivel");

  //Guarda os pokemons
  const arrayPokemons = [];

  //faz o numero determinado de requisições
  for (let i = 0; i < quantidade; i++) {
    //gera um numero aleatorio toda vez que o for reinicia
    let numero = Math.ceil(Math.random() * (800 - 0) + 0);

    //chama a função que faz a requisição passando como parametro o numero que vai ser o ID do pokemon
    // e o array que vai guardar o pokemon
    requisicao(numero, arrayPokemons);
  }
}

function requisicao(id, arrayPokemons) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  $.ajax({
    url: url,
    success: function (resultado) {
      //salva o objeto que é criado na função cria objeto dentro do array pokemon
      arrayPokemons.push(criaObjeto(resultado));

      //se já tiver acontecido as duas requisições, ou seja, se o length do arraypokemon for maior que 1 então chamamos a função pra mostrar o card na tela
      if (arrayPokemons.length > 1) {
          //para mostar na tela passamos o index do array pokemon e a direção em que o card ficará na tela L= left R=rigth
        addNaTela(arrayPokemons[0], "R");
        addNaTela(arrayPokemons[1], "L");
        poke1 = arrayPokemons[0];
        poke2 = arrayPokemons[1];
      }
    },
  });
}

//função que cria o objeto pokemon, salva nele as informações que vem da api e retorna o proprio objeto
function criaObjeto(resultado) {
  const pokemon = {
    nome: resultado.name,
    foto: resultado.sprites.front_default,
    id: resultado.id,
    hp: resultado.stats[0].base_stat,
    ataque: resultado.stats[1].base_stat,
    defesa: resultado.stats[2].base_stat,
  };

  return pokemon
}

//Usando o JQuery encontramos os elementos no html e adicionamos as informaçoes do pokemon da vez
function addNaTela(pokemon, lado) {
  $(`.nome${lado}`).text(pokemon.nome);
  $(`.hp${lado}`).text(pokemon.hp);
  $(`.ataque${lado}`).text(pokemon.ataque);
  $(`.defesa${lado}`).text(pokemon.defesa);
  $(`.foto${lado}`).attr("src", pokemon.foto);
  $(`.id${lado}`).text(pokemon.id);
}


//A function Lutar é aciodada quando o botão de luta for clicado
function lutar() {
    //instancia um pokemon com base na class Pokemon passando todos os parametros pedidos pela class, essas informações vem da variavel global que recebe o objeto pokemon criado com as informações que vem da requisição
  const lutador1 = new Pokemon(
    poke1.nome,
    poke1.foto,
    poke1.id,
    poke1.hp,
    poke1.ataque,
    poke1.defesa
  );
  const lutador2 = new Pokemon(
    poke2.nome,
    poke2.foto,
    poke2.id,
    poke2.hp,
    poke2.ataque,
    poke2.defesa
  );

  //Após instanciado Lutador1 podemos acessar os métodos da classe pokemon, um deles é o Lutar, onde passamos como parametro os dois lutadores que foram instanciados da class Pokemon
  const resultado = lutador1.Lutar(lutador1, lutador2);

  if (typeof resultado === "string") {
    $("#vencedor-nome").text("EMPATE");
  } else {
    $("#vencedor-foto").attr("src", resultado.foto);
    $("#vencedor-nome").text(resultado.nome);
  }

  $(".lutadores").addClass("invisivel");
  $("#vencedor").removeClass("invisivel");
}
