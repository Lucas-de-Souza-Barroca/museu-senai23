const imagem = document.getElementById("imagem");

function troca1(){
    imagem.src = "imagens/img1.jpg"
    setTimeout("troca3()",3000)
}

function troca2(){
    imagem.src = "imagens/img2.webp"
    setTimeout("troca1()",3000)
}

function troca3(){
    imagem.src = "imagens/img3.webp"
    setTimeout("troca2()",3000)
}

troca1()