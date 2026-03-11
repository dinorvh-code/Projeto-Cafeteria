const btn01produtos = document.querySelector(".btn01-produtos");
const btn02produtos = document.querySelector(".btn02-produtos");
const btn03produtos = document.querySelector(".btn03-produtos")
const produtos = document.querySelector(".lista-produtos");

btn01produtos.addEventListener("click", sessao01);
btn02produtos.addEventListener("click", sessao02);
btn03produtos.addEventListener("click", sessao03)

function sessao01() {

produtos.innerHTML = 

`

<div class="produto">
<img class="imagem-produto" src="assets/produtos/produto01.png" alt="*">
<div class="informacao-produto">
    <p class="titulo-produto">Espresso</p>
    <p class="subtitulo-produto">Café concentrado y aromático</p>
</div>
<div class="preco-e-btn">
<p class="preco-produto">$3.50</p>
<button class="btn-produto">
    <i class="bi bi-cart"></i>
    <p class="texto-btn-produto">Agregar</p>
</button>
</div>
    </div>

    <div class="produto">
<img class="imagem-produto" src="assets/produtos/produto02.png" alt="*">
<div class="informacao-produto">
    <p class="titulo-produto">Cappuccino</p>
    <p class="subtitulo-produto">Espresso con leche vaporizada y espuma</p>
</div>
<div class="preco-e-btn">
<p class="preco-produto">$4.50</p>
<button class="btn-produto">
    <i class="bi bi-cart"></i>
    <p class="texto-btn-produto">Agregar</p>
</button>
</div>

    </div>
    <div class="produto">
<img class="imagem-produto" src="assets/produtos/produto03.png" alt="*">
<div class="informacao-produto">
    <p class="titulo-produto">Café Helado</p>
    <p class="subtitulo-produto">Refrescante café frío con hielo</p>
</div>
<div class="preco-e-btn">
<p class="preco-produto">$5.00
</p>
<button class="btn-produto">
    <i class="bi bi-cart"></i>
    <p class="texto-btn-produto">Agregar</p>
</button>
</div>
    </div>

`;

}

function sessao02() {

produtos.innerHTML = 

`

<div class="produto">
<img class="imagem-produto" src="assets/produtos/produto04.jpg" alt="*">
<div class="informacao-produto">
    <p class="titulo-produto">Latte</p>
    <p class="subtitulo-produto">Espresso con bastante leche vaporizada, suave y cremoso.</p>
</div>
<div class="preco-e-btn">
<p class="preco-produto">$4.50</p>
<button class="btn-produto">
    <i class="bi bi-cart"></i>
    <p class="texto-btn-produto">Agregar</p>
</button>
</div>
    </div>

    <div class="produto">
<img class="imagem-produto" src="assets/produtos/produto05.jpg" alt="*">
<div class="informacao-produto">
    <p class="titulo-produto">Mocha</p>
    <p class="subtitulo-produto">Café espresso con chocolate y leche vaporizada.</p>
</div>
<div class="preco-e-btn">
<p class="preco-produto">$4.80</p>
<button class="btn-produto">
    <i class="bi bi-cart"></i>
    <p class="texto-btn-produto">Agregar</p>
</button>
</div>

    </div>
    <div class="produto">
<img class="imagem-produto" src="assets/produtos/produto06.jpg" alt="*">
<div class="informacao-produto">
    <p class="titulo-produto">Macchiato</p>
    <p class="subtitulo-produto">Espresso con un toque de espuma de leche..</p>
</div>
<div class="preco-e-btn">
<p class="preco-produto">$3.80
</p>
<button class="btn-produto">
    <i class="bi bi-cart"></i>
    <p class="texto-btn-produto">Agregar</p>
</button>
</div>
    </div>

`;

}

function sessao03() {

produtos.innerHTML = 

`
<div class="produto">
<img class="imagem-produto" src="assets/produtos/produto07.WEBP" alt="*">
<div class="informacao-produto">
    <p class="titulo-produto">Chocolate Caliente</p>
    <p class="subtitulo-produto">Bebida caliente de chocolate con leche cremosa.</p>
</div>
<div class="preco-e-btn">
<p class="preco-produto">$4.20</p>
<button class="btn-produto">
    <i class="bi bi-cart"></i>
    <p class="texto-btn-produto">Agregar</p>
</button>
</div>
    </div>

    <div class="produto">
<img class="imagem-produto" src="assets/produtos/produto08.WEBP" alt="*">
<div class="informacao-produto">
    <p class="titulo-produto">Flat White</p>
    <p class="subtitulo-produto">Café espresso con leche vaporizada, textura suave y cremosa.</p>
</div>
<div class="preco-e-btn">
<p class="preco-produto">$4.30</p>
<button class="btn-produto">
    <i class="bi bi-cart"></i>
    <p class="texto-btn-produto">Agregar</p>
</button>
</div>

    </div>
    <div class="produto">
<img class="imagem-produto" src="assets/produtos/produto09.WEBP" alt="*">
<div class="informacao-produto">
    <p class="titulo-produto">Caramel Latte</p>
    <p class="subtitulo-produto">Espresso con leche vaporizada y jarabe de caramelo dulce.</p>
</div>
<div class="preco-e-btn">
<p class="preco-produto">$4.90
</p>
<button class="btn-produto">
    <i class="bi bi-cart"></i>
    <p class="texto-btn-produto">Agregar</p>
</button>
</div>
    </div>

`;

}