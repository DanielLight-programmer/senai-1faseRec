// function executar_68_1_12(){}

// function executar_68_1_11(){}

function executar_68_1_10(){}

function executar_68_1_9(){}

function executar_68_1_8(){}

function executar_68_1_7(){

}

function executar_68_1_6(){

}

function executar_68_1_5(){
    const personagens = [
        "Lúcio Fernando",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates",
        "Junin"
    ];
   let i =  personagens.indexOf("Capitão Ganso")
  personagens.splice(i, 1)
console.log("personagens: ", personagens)
// console.log("splice: ", personagens)
mostrarArray(personagens);

}


function executar_68_1_4(){
    const personagens = [
        "Lúcio Fernando",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates"
    ]; 
    personagens.shift()
    console.log(personagens);
    mostrarArray(personagens);
    
    

}
function executar_68_1_3(){
    
    const personagens = [
        "Lúcio Fernando",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates"
    ];
    mostrarArray(personagens);
    console.log(personagens);
    
    
}

function executar_68_1_2(){
const personagens =  ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
    personagens.unshift("Dona Bete");
    mostrarArray(personagens);
   
}

// Exercicios do doc {#0068}



function executar_68_1_1(){
    const personagens =  ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
    personagens.push("Gill Bates");
    // console.log(personagens);
    mostrarArray(personagens);
}            


function mostrarArray(a){
    document.getElementById("resultado").innerHTML=""
     for (let i=0; i<a.length; i++){
        console.log(a[i]);
        document.getElementById("resultado").innerHTML += `<p>${a[i]}</p>`;

     }
}
