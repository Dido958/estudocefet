//Importar métodos de imcFunc
import { obtemImc,validaPessoa,classificaImc,limparElementos } from "./imcFunc.js";
//Recuperar o botão enviar e o span de erro
    let button = document.getElementById("btnEnviar");
    let spanErro = document.getElementById("erro");
//Registrar (addEventListener) o evento click do botão 
    button.addEventListener("click", (e) =>{
        e.preventDefault();
        limparElementos(".info");
        let pessoa = {
            nome: document.getElementById("nome").value.trim(),
            peso: Number(document.getElementById("peso").value),
            altura: Number(document.getElementById("altura").value)
        }
        let erro = validaPessoa(pessoa);
        if(erro){
            spanErro.textContent = erro;
            setTimeout(() =>spanErro.textContent = "", 3000);
            return;
        }
        pessoa.imc = obtemImc(pessoa.peso,pessoa.altura);
        pessoa.classificacao = classificaImc(pessoa.imc);
        exibirDados(pessoa);
    });
    //*******Dentro de addEventListener */
    //Limpar os elementos de exibição
    
    //Montar um objeto pessoa a partir dos inputs
    
    //validar pessoa e exibir mensagem de erro por 3 segundos e sair se tiver erro
    
    //obter pessoa.imc e pessoa.classificacao
    
    //exibir dados da pessoa com o resultado
    
    //*******Dentro de addEventListener */

//Fim do addEventListener

//Função já pronta exibirDados
function exibirDados({nome, imc, classificacao}){
    document.querySelector('#dados').textContent = "Dados do pessoa";
    document.querySelector('#pessoaNome').textContent = `Nome: ${nome}`;
    document.querySelector('#pessoaImc').textContent = `Grau: ${imc}`;
    document.querySelector('#pessoaClassificacao').textContent = `Classificação: ${classificacao}`;
}