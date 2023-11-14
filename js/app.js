let valorTotal = 0;
limpar();

function adicionar() {
    let produtoSelecionado = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let carrinho = document.getElementById('lista-produtos');
    let campoValorTotal = document.getElementById('valor-total');

    let nomeProduto = produtoSelecionado.split('-')[0];
    let valorUnitario = produtoSelecionado.split('R$')[1];

    let preco = quantidade * valorUnitario;

    carrinho.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>
    `;

    valorTotal += preco;

    campoValorTotal.textContent = `R$${valorTotal}`;
    document.getElementById('quantidade').value = 1;
}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}