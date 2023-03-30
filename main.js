const form = document.getElementById('form-atividade');

let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const inputNomeCompleto = document.getElementById('nome-completo');
    const inputNumeroCelular = document.getElementById('numero-celular');

    let linha = '<tr>';
    linha += `<td>${inputNomeCompleto.value}</td>`;
    linha += `<td>${inputNumeroCelular.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeCompleto = '';
    inputNumeroCelular = '';
});