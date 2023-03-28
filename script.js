//substituir texto

let texto ="Estão chegando as provas"
console.log(texto.replace("provas","avaliações"))

//fixar o valor

let num = 223.45555
console.log(num.toFixed(2))

//caixa alert

//alert("olá meu amigo(a)")

//caixa de confirmação

//let teste = confirm("Você é um aluno ?")
//console.log(teste)

//caixa de prompt
/*
let texto1 = prompt("Digite seu nome")
console.log("O nome dela é: " ,texto1)
document.write("O nome dele é: ",texto1)
*/

//if

if(20 <= 20){
    document.write("20 é maior ")
    document.write("<br></br>")
}

//if else

if( 25 > 15){
    document.write("O numero é maior")
    document.write("<br></br>")
}else{
    document.write("O numero é menor")
    document.write("<br></br>")
}

//if else declarando variavel 

let numero =10

if(numero > 10){
    document.write("O numero é maior")
}else{
    document.write("O numero é menor")
    document.write("<br></br>")
}

//if else encadeado

let idade = 18

if(idade <= 12){
    document.write("É uma criança")

}else if(idade <=17){
    document.write("É um adolescente")

}else if(idade <=30){
    document.write("É um jovem adulto")

}else{
    document.write("É um adulto experiente")

}


