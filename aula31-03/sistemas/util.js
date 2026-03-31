export function limparElementos(nomeDaClasse){
    let displays = document.querySelectorAll(nomeDaClasse);
    displays.forEach( elemento => elemento.textContent = "");
}

export function exibirErro(elementoDOM,msg,tempoDeExibição){
    elementoDOM.textContent = msg;
    setTimeout(() => elementoDOM.textContent = '', tempoDeExibição);
}

