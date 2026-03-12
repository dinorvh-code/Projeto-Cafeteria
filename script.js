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
img: "assets/produtos/produto03.png"
},

{
nome: "Latte",
descricao: "Espresso con bastante leche vaporizada, suave y cremoso.",
preco: "$4.50",
img: "assets/produtos/produto04.png"
},

{
nome: "Mocha",
descricao: "Café espresso con chocolate y leche vaporizada.",
preco: "$4.80",
img: "assets/produtos/produto05.png"
},

{
nome: "Macchiato",
descricao: "Espresso con un toque de espuma de leche.",
preco: "$3.80",
img: "assets/produtos/produto06.png"
},

{
nome: "Chocolate Caliente",
descricao: "Bebida caliente de chocolate con leche cremosa.",
preco: "$4.20",
img: "assets/produtos/produto07.png"
},

{
nome: "Flat White",
descricao: "Café espresso con leche vaporizada, textura suave y cremosa.",
preco: "$4.30",
img: "assets/produtos/produto08.png"
},

{
nome: "Caramel Latte",
descricao: "Espresso con leche vaporizada y jarabe de caramelo dulce.",
preco: "$4.90",
img: "assets/produtos/produto09.png"
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
img: "assets/produtos/produto12.png"
},

{
nome: "Cheesecake de Frutos Rojos",
descricao: "Tarta cremosa con cobertura de frutos rojos.",
preco: "$14.00",
img: "assets/produtos/produto13.png"
},

{
nome: "Cookie de Chocolate",
descricao: "Galleta grande con chispas de chocolate.",
preco: "$8.00",
img: "assets/produtos/produto14.png"
},

{
nome: "Tarta de Limón",
descricao: "Base crujiente con crema de limón.",
preco: "$12.00",
img: "assets/produtos/produto15.png"
},

{
nome: "Muffin de Arándanos",
descricao: "Muffin suave con arándanos.",
preco: "$11.00",
img: "assets/produtos/produto16.png"
},

{
nome: "Pan de Miel",
descricao: "Dulce de miel relleno con dulce de leche.",
preco: "$9,50",
img: "assets/produtos/produto17.png"
},

{
nome: "Mini Churros",
descricao: "Mini churros con azúcar y canela.",
preco: "$13.00",
img: "assets/produtos/produto18.png"
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
img: "assets/produtos/produto21.png"
},

{
nome: "Sándwich de Pollo",
descricao: "Pan con pollo desmenuzado y mayonesa.",
preco: "$7.00",
img: "assets/produtos/produto22.png"
},

{
nome: "Panini Caprese",
descricao: "Panini con tomate, mozzarella y albahaca.",
preco: "$5.00",
img: "assets/produtos/produto23.png"
},

{
nome: "Empanada de Carne",
descricao: "Empanada rellena con carne sazonada.",
preco: "$10.00",
img: "assets/produtos/produto24.png"
},

{
nome: "Wrap de Pollo",
descricao: "Tortilla con pollo, lechuga y salsa.",
preco: "$16.50",
img: "assets/produtos/produto25.png"
},

{
nome: "Bagel con Queso Crema",
descricao: "Bagel tostado con queso crema.",
preco: "$13.00",
img: "assets/produtos/produto26.png"
},

{
nome: "Tostada con Huevo",
descricao: "Pan tostado con huevo y mantequilla.",
preco: "$5.50",
img: "assets/produtos/produto27.png"
}
    
]

function mostrarProdutos(produtos){

    lista.innerHTML

    produtos.forEach(produto => {

`

<div class="produto">
<img class="imagem-produto" src="${produto.img}" alt="*">
<div class="informacao-produto">
    <p class="titulo-produto">${produto.titulo}</p>
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

document.querySelector(".btn01-produtos").addEventListener("click", () => mostrarProdutos(cafe))

