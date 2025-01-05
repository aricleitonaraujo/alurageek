let todosProdutos = []; // Array para armazenar produtos

document.querySelector('.btn__cadastrar').addEventListener('click', function (event) {
    event.preventDefault();

    const nomeProduto = document.querySelector('#nomeProduto').value;
    const valorProduto = document.querySelector('#valorProduto').value;
    const imagemProduto = document.querySelector('#imagemProduto').value;

    const produto = {
        nome: nomeProduto,
        preco: valorProduto,
        imagem: imagemProduto
    };

    todosProdutos.push(produto);
    renderizarProdutos();
});

function renderizarProdutos() {
    const listaProdutos = document.querySelector('#listaProdutos');
    listaProdutos.innerHTML = '<div class="cards"></div>'; // Limpa e adiciona o container .cards
    const cardsContainer = listaProdutos.querySelector('.cards');





    // para ocultar imagem e tyexto se tiver produtos
    // analizar esse código
    const semProdutosDiv = document.querySelector('.sem__produtos');

    // Verifica se há produtos na lista
    if (todosProdutos =='') {
        semProdutosDiv.style.display = 'block'; // Mostra a mensagem de "sem produtos"
    } else {
        semProdutosDiv.style.display = 'none'; // Oculta a mensagem de "sem produtos"
    }





    todosProdutos.forEach((produto, index) => {
        const produtoItem = document.createElement('div');
        produtoItem.classList.add('card');
        produtoItem.innerHTML = `
            <div class="card__topo">
                <figure>
                    <img src="${produto.imagem}" alt="Imagem de ${produto.nome}" class="produto__imagem" onerror="this.onerror=null; this.src='https://via.placeholder.com/300';">
                </figure>
                <p class="produto__nome">${produto.nome}</p>
                <div class="lixeira__preco">
                <button class="btn__deletar" data-index="${index}" aria-label="Deletar Produto">
            <i class="fas fa-trash"></i>
                </button>
            <p class="produto__preco">R$ ${produto.preco}</p>
                </div>
         </div>
        `;
        cardsContainer.appendChild(produtoItem);
    });

    adicionarFuncionalidadeDeletar();
}

function adicionarFuncionalidadeDeletar() {
    document.querySelectorAll('.btn__deletar').forEach(botao => {
        botao.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            todosProdutos.splice(index, 1);
            renderizarProdutos();
        });
    });
}

const ocultarImagem = document.querySelector('#listaProdutos').value;
if(ocultarImagem== ''){
    alert('vazio')
}
