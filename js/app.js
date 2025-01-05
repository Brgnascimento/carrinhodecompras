let total = 0;
document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').innerHTML = 'R$ 0'

function adicionar(){
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    if(isNaN(quantidade) || quantidade<=0){
        alert('Ops, você não colocou a quantidade!');
    } else {
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    
    // Calcular subtotal
    let subTotal = quantidade * valorUnitario;
    let valorTotalNoSite = document.getElementById('valor-total');
    let carrinho = document.getElementById('lista-produtos');
    
    // Adicionar no carrinho
    carrinho.innerHTML+=`<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;

    // Atribui o total
    document.getElementById('quantidade').value = '';
    total += subTotal;
    valorTotalNoSite.innerHTML = `R$ ${total}`;}
    
}   


function limpar(){
    total = 0;
    document.getElementById('lista-produtos').innerHTML = ''
    document.getElementById('valor-total').innerHTML = 'R$ 0'
}