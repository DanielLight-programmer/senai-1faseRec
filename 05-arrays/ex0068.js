function executar_68_1_2(){
const personagens =  ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
    personagens.unshift("Dona Bete");
    console.log(personagens);
    alert(personagens)

}
function executar_68_1_3(){
   
    const personagens = [
        "Lúcio Fernando",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates"
    ];

    personagens.pop("Gill Bates")
    console.log(personagens);
    alert(personagens)
    

}
// Exercicios do doc {#0068}



function executar_68_1_1(){
    const personagens =  ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
    personagens.push("Gill Bates");
    console.log(personagens);
    alert(personagens)
}            


function mostrarArray(a){
    document.getElementById("resultado").innerHTML=""
     for (let i=0; i<a.lenght; i++){
        console.log(a[i]);
        document.getElementById("resultado").innerHTML += `<p>${a[i]}</p>`;

     }
}
