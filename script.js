function gerar() {
    
    const min = Math.ceil( document.querySelector(".começo").value)
    const max = Math.floor (document.querySelector(".fim").value)
    var resp = document.querySelector('.resp');
    resp.innerHTML = Math.floor(Math.random() * (max - min + 1) ) + min
}
