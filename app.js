//altura e largura da página pelo objeto window
var altura = 0
var largura = 0
var vidas = 1
var tempo = 31

function ajustaTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth 
}

ajustaTamanhoTela()

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaShiba)
        window.location.href = 'youwin.html'
    }else{
    document.getElementById('tempo').innerHTML = tempo
    }
},1000)

function posicaoRandomica(){
    //remover o mosquito anterior (caso exista)
    if(document.getElementById('shiba')){
        document.getElementById('shiba').remove()

        //controle
        if(vidas > 3){
            window.location.href = 'gameover.html'
        } else{
        document.getElementById('v' + vidas).src="imagens/emptyheart.png"

        vidas ++
        }

    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    //criar o elemento HTML
    var shiba = document.createElement('img')
    shiba.src = 'imagens/naughty.png'
    shiba.className = tamanhoAleatorio()
    shiba.style.left = posicaoX + 'px'
    shiba.style.top = posicaoY + 'px'
    shiba.style.position = 'absolute'
    shiba.id = 'shiba'
    shiba.onclick = function() {
        this.remove()
    }

    document.body.appendChild(shiba)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'shiba1'
        case 1:
            return 'shiba2'
        case 2:
            return 'shiba3'
    }
}
