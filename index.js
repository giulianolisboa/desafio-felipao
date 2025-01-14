//Desafio nével do héroi
let nomeDoHeroi = "João do Agreste";
let xp = 8435;

let nivel = "";

if (xp < 1000){
    nivel = "Ferro";
}else if (xp >= 1001 && <= 2000){
    nivel = "Bronze";
}else if (xp >= 2001 && <= 5000){
    nivel = "Prata";
}else if (xp >= 5001 && <= 7000){
    nivel = "Ouro";
}else if (xp >= 7001 && <= 8000){
    nivel = "Platina";
}else if (xp >= 8001 && <= 9000){
    nivel = "Ascedente";
}else if (xp >= 9001 && <= 10000){
    nivel = "Imortal";
}else if (xp >= 10001){
    nivel = "Radiante";
}
//Saída

console.log("O hério de nome "  nomeDoHeroi " está no nível de " nivel)

