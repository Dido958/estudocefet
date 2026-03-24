//Importar métodos de notasFunc
import {media,validaAluno,limparElementos,grau} from './notasFunc.js';
//Recuperar o form e o span de erro
    let form = document.getElementById("formMedia");
    let spanErro = document.getElementById("erro");
//registrar o evento (addEventListener) submit do form
   form.addEventListener("submit", (e) =>{
    e.preventDefault();
    limparElementos(".info");
    let aluno = {
        nome: document.getElementById("nome").value.trim(),
        nota1: Number(document.getElementById("nota1").value),
        nota2: Number(document.getElementById("nota2").value)
    }
    let erro = validaAluno(aluno);
    if(erro){
        spanErro.textContent = erro;
        setTimeout(() =>spanErro.textContent = "", 3000);
        return;
    }
    aluno.media = media(aluno.nota1,aluno.nota2);
    aluno.grau = grau(aluno.media);
    exibirDados(aluno);
   })
    //*******Dentro de addEventListener */
    //evitar o comportamento padrão do submit
    
    //limpar os elementos de exibição 
    
    //montar um objeto aluno a partir dos inputs

    //validar aluno e exibir mensagem de erro por 3 segundos e sair se tiver erro

    //obter aluno.media e aluno.grau
    
    //exibir dados do objeto aluno com o resultado
    
    //*******Dentro de addEventListener */

//Fim do addEventListener

//Função já pronta exibirDados
function exibirDados({nome, media, grau}){
    document.querySelector('#dados').textContent = "Dados do aluno";
    document.querySelector('#alunoNome').textContent = `Nome: ${nome}`;
    document.querySelector('#alunoMedia').textContent = `Média: ${media}`;
    document.querySelector('#alunoGrau').textContent = `Grau: ${grau}`;
}