
function gerarRecibo() {
   document.getElementById('recebido_numero').innerHTML = document.getElementById('numero_recibo').value;
   document.getElementById('recebido_valor').innerHTML = parseFloat(document.getElementById('valor').value).toLocaleString('pt-br', { minimumFractionDigits: 2 });
   document.getElementById('recebido_contratante').innerHTML = document.getElementById('contratante').value;
   document.getElementById('recebido_cpf_cnpj').innerHTML = document.getElementById('cpf_cnpj').value;
   document.getElementById('recebido_referente').innerHTML = document.getElementById('referente').value;
   document.getElementById('recebido_cidade').innerHTML = document.getElementById('cidade').value;
   document.getElementById('recebido_data').innerHTML = dataAtual();
   window.print();
}

function dataAtual() {
   let data = new Date();
   return data.getDate() + "-" + (data.getMonth() + 1) + "-" + data.getFullYear();
}



