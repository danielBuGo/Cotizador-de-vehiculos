let acum_valor = 0


function iniciar(){
    let botoncotizar = document.getElementById("cotizar");
    botoncotizar.addEventListener("click", valorConSoat);
    botoncotizar.addEventListener("click", valorSeguro);
    botoncotizar.addEventListener("click", valorConIva);
}

function valorConSoat(){
    let vlr1= parseFloat(document.getElementById("vlrNeto").value);
    let vlr2 = parseFloat(document.getElementById("soat").value);
    let totalSoat = vlr1 + vlr2;
    let spanValorConSoat = document.getElementById("vlrConSoat");    
    spanValorConSoat.innerHTML = totalSoat;
    return totalSoat;
    
    
}

function valorSeguro(){
    let vlr1= parseFloat(document.getElementById("vlrNeto").value);
    let vlrDelSeguro = (vlr1 * 0.05);
    let spanValorConSeguro = document.getElementById("vlrSeguro");
    spanValorConSeguro.innerHTML = vlrDelSeguro;
    return vlrDelSeguro;

}

function valorConIva(){
    let vlr1 = parseFloat(document.getElementById("vlrNeto").value);
    let vlrIva = vlr1 * 0.19;
    let spanValorIva = document.getElementById("iva");
    spanValorIva.innerHTML = vlrIva;
    return vlrIva;
}

function valorTotal(){
    let matricula = parseFloat(document.getElementById("vlrMatricula").value);   

    let totalConSoat = valorConSoat();
    let totalConseguro = valorSeguro();
    let totalConIva = valorConIva();

    let valorTotal = totalConSoat + totalConseguro + totalConIva + matricula;

    let spanValorTotal = document.getElementById("vlrTotal");
    spanValorTotal.innerHTML = valorTotal;

}

function reiniciarCalculo(){    
    location.reload();
}


function cambiarimg(ruta){
    let figura = document.getElementById("imgid");
    figura.src = ruta
}
window.addEventListener("load", iniciar);
