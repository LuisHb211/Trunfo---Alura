var cartas =[
    {nome:"Bulbassauro", atributos:{ataque:7, defesa:8, magia: 6}},
    {nome:"Darth Vader", atributos:{ataque:9, defesa:8, magia:2}},
    {nome: "Shiryu", atributos: {ataque:5, defesa:9, magia:10}},
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroMaquina];
    console.log(cartaMaquina);
    var numeroJogador = parseInt(Math.random() * 3);

    while(numeroJogador == numeroMaquina){  
    var numeroJogador = parseInt(Math.random() * 3);
    };
    cartaJogador = cartas[numeroJogador];
    console.log(cartaJogador);
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirOpcoes();
};
function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes");

    for (var atributo in cartaJogador.atributos){
        console.log(atributo);
    }   
    

};





