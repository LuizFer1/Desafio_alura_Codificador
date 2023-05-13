



function criptar(){
    var texto = document.getElementById('texto').value
    var saida = document.getElementById('text_out')
    console.log(texto)        
    lista = []
    for(x = 0 ;x <= texto.length; x++ ) {

        if(texto[x] == "a"){
            lista.push('ai')
        }else if(texto[x] == "e"){
            lista.push('enter')
        }else if(texto[x] == "i"){
            lista.push('imes')
        }else if(texto[x] == "o"){
            lista.push('ober')
        }else if(texto[x] == "u"){
            lista.push('ufat')
        }else{
            lista.push(texto[x])
        }
        console.log(texto[x])
    }

    console.log(lista.join(''))
    saida.innerHTML = lista.join('')
}

function descripto(){
    var texto = document.getElementById('texto').value
    var saida = document.getElementById('text_out')
    var lista = []
    var chaves = [['a','ai'],['e','enter'],['i','imes'],['o',''],['u','ufat']]
    

    for(x = 0;x <= texto.length;x++) {
    
        if(texto[x] == "a"){
            texto = texto.replace('ai','a')
        }else if(texto[x] == "e"){
            texto = texto.replace('enter','e')
        }else if(texto[x] == "i"){
            texto = texto.replace('imes','i')
        }else if(texto[x] == "o"){
            texto =texto.replace('ober','o')
        }else if(texto[x] == "u"){
            texto = texto.replace('ufat','u')
        }
        lista.push(texto[x])
        }
        
        
        
    
    
    console.log(texto)
    saida.innerHTML = lista.join('')
}

function copyText() {
    var texto = document.getElementById("text_out");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência");
  }