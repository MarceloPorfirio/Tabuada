function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Por favaor, digite um numero!')

    }else{
        var n = Number(num.value) // converte a variável para número
        var c = 1
        tab.innerHTML= '' // esta parte serve para zerar o formulário da tabela, caso contrário, os valores permanecem acumulados

        while(c <=10){ // enquanto c for menor ou igual a 10
            var item = document.createElement('option') // cria um elemento de opção
            item.text = `${n} x ${c} = ${n*c}` // mostra a multiplicação entre n e c
            tab.appendChild(item) // adiciona um elemento filho
            item.value = `tab${c}` // seleciona as tabelas para controle , utilizado mais em php
            c++
        }
       }
}