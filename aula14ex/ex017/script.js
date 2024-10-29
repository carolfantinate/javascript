function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Digite um número!')

    } else {
        let n = Number(num.value)
        tab.innerHTML = ""
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option') //criando opção
            item.text = `${n} x ${c} = ${n*c}` //calculo
            item.value = `tab${c}` 
            tab.appendChild(item) //criar mais um item abaixo
        }
    }
}