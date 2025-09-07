//estrutura de decisão
//switch/case/break/default
let fruta = "morango"

switch (fruta) {
    case "laranja":
        console.log("suco de laranja")
    break
    case "banana":
    case "morango":
        console.log("vitamina")
    break
    case "maçã":
        console.log("suco de maçã")
    break

    default:
    console.log("suco genérico")
}