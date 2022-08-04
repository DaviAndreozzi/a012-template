// const bool1 = false
// const bool2 = true
// const bool3 = 10

// if(bool1){
//     alert('entrou no if, bool1 é true')
// }else{
//     alert('Entrou no else. Bool1é false')
// }

// if(bool1 === bool2){
//     alert('O valor de bool1 e bool2 são iguais')
// }else if(bool2 === bool3){
//     alert('O valor de boo2 e bool3 são iguais')
// }else if(bool1 === bool3){
//     alert('O valor de bool1 e bool3 são iguais')
// }else{
//     alert('Não existem valores iguais')
// }

// const idade = 20

// if(idade >= 60 || idade >= 16 && idade <18 ){
//     console.log('titulo Facultativo')
// }else if (idade>=18){
//     console.log('tem direito ao titulo de eleitor')
// }else{
//     console.log('Voce não tem idade minima para emissão do titulo de eleitor')
// }

const media = 10

if(media >= 5 && media <= 10){
    console.log('Aprovado')
}else if(media >= 3 && media <= 5){
    console.log('Recuperação')
}else if(media <= 3 && media >= 0){
    console.log("Reprovado")
}else{
    console.log("Dado invalido")
}