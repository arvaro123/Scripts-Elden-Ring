/*
let lista = []

function adicionar(){
    let boss = prompt("Nome do boss")
    lista.push(boss)
    alert("Nome adicionado com sucesso!")
}
function removerUltimo(){
    lista.pop()
    alert("Ultimo produto removido com sucesso! ")
    mostrarTudo()
}
function mostrarTudo(){
    console.clear() // Limpa o console das mensagens anteriores
    for(let i = 0; i < lista.length; i++){
        console.log(lista[i])
    }
}
function removerTodos(){
    lista.length = 0
    alert("Todos Foram Removidos")
    mostrarTudo()
}
*/

let lista = []
let contadorId = 1

function adicionar(){
    let nome = prompt("Nome do boss")
    if(nome === null || nome.trim() === "" ){
        alert("Operação cancelada!")
        return
    }
    let regiao = prompt("Nome do boss")
    if(regiao === null || regiao.trim() === "" ){
        alert("Operação cancelada!")
        return
    }
    let arma = prompt("Nome do boss")
    if(arma === null || arma.trim() === "" ){
        alert("Operação cancelada!")
        return
    }
   let boss = {
    id: contadorId,
    nome: nome,
    regiao: regiao,
    arma: arma
   }
   lista.push(boss)
   contadorId++
   alert("Boss adicionado com sucesso!")
   mostrarTudo
}
function removerUltimo(){
    if(lista.lenght === 0){
        alert("A lista já está vazia!")
        return
    }
    lista.pop()
    alert("Ultimo produto removido com sucesso! ")
    mostrarTudo()
}
function removerTodos(){
    lista.length = 0
    contadorId = 1
    alert("Todos Foram Removidos")
    mostrarTudo()
}
function mostrarTudo(){
    if(lista.lenght === 0){
        alert("A lista esta vazia!")
        return
    }
    let texto = ""
    for(let i = 0; i < lista.lenght; i++){
        let boss = lista[i]
        texto += `ID: ${boss.id}\nNome: ${boss.nome}\nRegião: ${boss.regiao}\nArma: ${boss.arma}\n\n`
    }
    alert(texto)
}