'use stricp';// modo restrito
// esse modo faz com que o javascript opere de forma mais e rigorosa, ajudando a evitar erros comuns de programação
// consumo de API - https://viacep.com.br/

// funçao para limpar limpar formulario
const limparFormulario = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('Bairro').value =  '';
    document.getElementById('complemento').value =  '';
    document.getElementById('cidade').value =  '';
    document.getElementById('uf').value =  '';
}
const eNumero = (numero) => /^[0-9]+$/. 

