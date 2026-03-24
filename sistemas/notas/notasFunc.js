//Função para obter media
function media(nota1,nota2){
    return (nota1+nota2)/2;
}
//Função para obter Grau
    function grau(media){
        if(media>8) return"A";
    else if(media>=6) return"B";
    else if(media>=4) return"C";
    else if(media>=2) return"D";
    else return "E";
    };
//Função para validar um aluno
 function validaAluno({nome,nota1,nota2}){
    if(!nome) return "Insira o nome";
    if(Number.isNaN(nota1)&& Number.IsiNaN(nota2)) return "insira numeros";
    if(nota1<0 || nota1>10 || nota2<0 || nota2>10) return "a nota deve estar entre 0 e 10";
 }
//função (limparElementos) para limpar o textContent de elementos a partir de uma classe
function limparElementos(nomeClasse){
    const elementos = document.querySelectorAll(nomeClasse);
    elementos.forEach(elemento => elemento.textContent="");
}
//exportar as funções
export {limparElementos,validaAluno,grau,media}; 
