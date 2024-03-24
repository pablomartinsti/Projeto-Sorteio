function gerar() {
    
    const min = Math.ceil( document.querySelector(".começo").value)
    const max = Math.floor (document.querySelector(".fim").value)

    if (min >= max){

        alert("o valor minimo tem que ser menor que o maximo")

    }

    else{

    var resp = document.querySelector('.resp');
    resp.innerHTML = Math.floor(Math.random() * (max - min + 1) ) + min

    }


   
}
