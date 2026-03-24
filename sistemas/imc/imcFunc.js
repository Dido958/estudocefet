//Declare as funções com o prefixo export
//Função para obter o imc ( peso / altura²)
export function obtemImc(peso,altura){
    return (peso/(altura*altura)).toFixed(2);
};
//Função para obter a classificação a partir do IMC
export function classificaImc(imc){
    if (imc<18.5) return"Abaixo do peso";
    else if (imc<=24.9) return"Peso normal";
    else if (imc<=29.9) return"Execesso de peso";
    else if (imc<=34.9) return"Obesidade clsase |";
    else if (imc<= 39.9) return"Obesidade classe ||";
    else if (imc>=40.0) return"Obesidade classe |||";
}
//Função para validar uma pessoa
export function validaPessoa({nome,peso,altura}){
    if(!nome) return "Insira o nome";
    if(Number.isNaN(peso)&& Number.IsiNaN(altura)) return "insira valores numéricos";
    if(peso<0 || peso>200 || altura<0 || altura>2.5) return "não extrapola nos valores";
};
//função (limparElementos) para limpar o textContent de elementos a partir de uma classe
export function limparElementos(nomeClasse){
    const elementos = document.querySelectorAll("nomeClasse");
    elementos.forEach(elemento => elemento.textContent="");
};
