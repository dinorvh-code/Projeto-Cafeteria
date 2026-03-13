const lista = document.querySelector(".lista-produtos")

const cafe = [

{
nome: "Espresso",
descricao: "Café concentrado y aromático",
preco: "$3.50",
img: "assets/produtos/produto01.png"
},

{
nome: "Cappuccino",
descricao: "Espresso con leche vaporizada y espuma",
preco: "$4.50",
img: "assets/produtos/produto02.png"
},

{
nome: "Café Helado",
descricao: "Refrescante café frio con hielo",
preco: "$5,00",
img: "assets/produtos/produto03.png",
}

]

const reposteria = [

{
nome: "Croissant de Chocolate",
descricao: "Croissant hojaldrado con relleno de chocolate.",
preco: "$12.00",
img: "assets/produtos/produto10.png"
},

{
nome: "Tarta de Zanahoria",
descricao: "Bizcocho de zanahoria con cobertura de chocolate.",
preco: "$10.00",
img: "assets/produtos/produto11.png"
},

{
nome: "Brownie Clásico",
descricao: "Brownie de chocolate, húmedo por dentro.",
preco: "$9,00",
img: "assets/produtos/produto12.png",
}

]

const comida = [

{
nome: "Sándwich de Jamón y Queso",
descricao: "Pan tostado con jamón y queso derretido.",
preco: "$7.00",
img: "assets/produtos/produto19.png"
},

{
nome: "Tostada con Aguacate",
descricao: "Pan tostado con aguacate y un toque de sal.",
preco: "$6.00",
img: "assets/produtos/produto20.png"
},

{
nome: "Quiche de Espinaca",
descricao: "Tarta salada con espinaca y queso.",
preco: "$14,00",
img: "assets/produtos/produto21.png",
}
    
]

function mostrarProdutos(produtos){

lista.innerHTML = ""

produtos.forEach(produto => {

lista.innerHTML += `

<div class="produto">
<img class="imagem-produto" src="${produto.img}" alt="${produto.nome}">
<div class="informacao-produto">
    <p class="titulo-produto">${produto.nome}</p>
    <p class="subtitulo-produto">${produto.descricao}</p>
</div>
<div class="preco-e-btn">
<p class="preco-produto">${produto.preco}</p>
<button class="btn-produto">
    <i class="bi bi-cart"></i>
    <p class="texto-btn-produto">Agregar</p>
</button>
</div>
</div>

`

})

}

