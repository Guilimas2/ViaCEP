'use stricp';// modo restrito
// esse modo faz com que o javascript opere de forma mais e rigorosa, ajudando a evitar erros comuns de programação
// consumo de API - https://viacep.com.br/

// funçao para limpar limpar formulario
const limparFormulario = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('Bairro').value =  '';
    document.getElementById('cidade').value =  '';
    document.getElementById('uf').value =  '';
}
// criar regra de expressao regular (regex) para testar valor inicial informado pelo usuario 
const eNumero = (kiara) => /^[0-9]+$/. test(kiara);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);
// length e uma propiedade que verifica a quantidade de caracteres dentro do cep

// função para preencher formulario como campos  da API 
const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').valeu= endereco.logradouro;
    document.getElementById('Bairro').valeu = endereco.Bairro;
    document.getElementById('cidade').valeu = endereco = cidade;
    document.getElementById('uf').valeu = endereco = uf;
}
