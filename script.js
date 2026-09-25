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
    let nome = prompt("Nome do produto")
    if(nome === null || nome.trim() === "" ){
        alert("Operação cancelada!")
        return
    }
    let valores = prompt("valor total")
    if(valores === null || valores.trim() === "" ){
        alert("Operação cancelada!")
        return
    }
    let categoria = prompt("categoria do produto destaque")
    if(categoria === null || categoria.trim() === "" ){
        alert("Operação cancelada!")
        return
    }
   lista.push(nome)
   contadorId++
   alert("Nome adicionado com sucesso!")
   mostrarTudo

   let produto = {
    id: contadorId,
    nome: nome,
    valor: valores,
    categoria: categoria
   }
}
function removerUltimo(){
    if(lista.lenght === 0){
        alert("Ultimo item removido!")
        return
    }
    lista.pop()
    alert("Ultimo produto removido com sucesso! ")
    mostrarTudo()
}
function removerTodos(){
    lista.length = 0
    contadorId = 1
    alert("Todos items DELETADOS com sucesso!")
    mostrarTudo()
}
function mostrarTudo(){
    if(lista.lenght === 0){
        alert("A lista esta vazia!")
        return
    }

let mensagem = " Sua lista de produtos:\n\n"
    
    lista.forEach((produto, gerenciamento) => {
        mensagem += `${gerenciamento + 1}. ID: ${produto.id}\n`
        mensagem += `   Nome: R$ ${produto.nome}\n`
        mensagem += `   Valor: ${produto.valor}\n`
        mensagem += `   Categoria: ${produto.categoria}\n\n`
    })
    
    alert(mensagem)
}
