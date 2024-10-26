function verificar() {
    var data = new Date() //data atual
    var ano = data.getFullYear() //ano atual com os 4 digitos
    var fano = document.getElementById('txtano') //ano do forms
    var res = document.querySelector('div#res') 
    
    if (fano.value.length == 0 || fano.value > ano) { 
        window.alert('ERRO - Verifique os dados e tente novamente')
        //ano vazio ou maior do que o atual

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

        var img = document.createElement('img') //criando elemento pelo js
        img.setAttribute('id', 'foto') //dando um id pro elemento
        img.style.width = '190px'
        img.style.borderRadius = '50%'

        if (fsex[0].checked) { //se for homem (pegando dado do radio)
            gênero = 'Homem'

            if (idade >= 0 && idade <= 12) { //criança
                img.setAttribute('src', 'bebe-h.png')
            } 

            else if (idade >=13 && idade < 21) { //jovem
                img.setAttribute('src', 'jovem-h.png')
            }

            else if (idade < 60) {//adulto
                img.setAttribute('src', 'adulto-h.png')
            }

            else { //idoso
                img.setAttribute('src', 'idoso-h.png')
            }

        } else if (fsex[1].checked) { //se for mulher 
            gênero = 'Mulher'

            if (idade >= 0 && idade <= 12) { //criança
                img.setAttribute('src', 'bebe-m.png')
            } 

            else if (idade >=13 && idade < 21) { //jovem
                img.setAttribute('src', 'jovem-m.png')
            }

            else if (idade < 60) {//adulto
                img.setAttribute('src', 'adulto-m.png')
            }

            else { //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }

        
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos <br>`
        res.appendChild(img)

        res.style.textAlign = 'center'
    }
}