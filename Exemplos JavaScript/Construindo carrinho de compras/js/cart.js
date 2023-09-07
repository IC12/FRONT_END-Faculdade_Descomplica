var valorTotal = [0,0];
var valorProduto = [50.00,30.00];
var qtd = [0,0];

function addItem(item){
    var quantidade = document.getElementById('qtd' + item);
    var total = document.getElementById('total' + item);

    qtd[item] += 1;
    quantidade.innerHTML = qtd[item];
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();
}

function removeItem(item){
    if(qtd[item] > 0){
        var quantidade = document.getElementById('qtd' + item);
        var total = document.getElementById('total' + item);
        
        qtd[item] -= 1;
        quantidade.innerHTML = qtd[item];
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
        total.innerHTML = valorTotal[item].toFixed(2);
        valorCompra();
    }
}

function valorCompra(){
    var valorTotalCompra = document.getElementById('valorTotal');
    var valor = 0;

    for(var i = 0; i < valorTotal.length; i++){
        valor += valorTotal[i];
    }

    valorTotalCompra.innerHTML = valor.toFixed(2);
}