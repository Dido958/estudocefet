'use strict';
import { exibirErro } from "../util.js";
const divFilmes = document.querySelector('#divFilmes')
const spanErro = document.querySelector('#erro');
(function(){
    fetch('filmes.json')
    .then( resp => {
        if(!resp.ok) throw new Error(`ERRO: ${resp.status} - ${resp.statusText}`)
            return resp.json();
    })
    .then( dados => {
        console.log(dados);
        montarLinhaDeFilmes(dados.filmes)
    })
    .catch( erro => exibirErro(spanErro, erro.message, 3000))
})();
function montarListaDeFilmes(filmes){
    while(divFilmes.firstChild)
        divFilmes.removeChild(divFilmes,firstChild)
}
function montarLinhaDeFilmes(filmes ){
    filmes.forEach(filmes=> {
        const{id,titulo,resumo,generos,elenco,lancamento} = filmes;
        const ulFilme = document.createElement('ul');
        const liId= document.createElement('li');
        const liTitulo= document.createElement('li');
        const liResumo= document.createElement('li');
        const liGenero= document.createElement('li');
        const liElenco= document.createElement('li');
        const liLancamento= document.createElement('li');
       
        liId.innerHTML = `<strong>${id}</strong>`;
        liTitulo.innerHTML= `<strong>Titulo:</strong>${titulo}`;
        liResumo.innerHTML = `<strong>Resumo:</strong>${resumo}`;
        liLancamento.innerHTML= `<strong>Lancamento</strong>${lancamento.dia} (${lancamento.pais}))`;
        liGenero.innerHTML=`<strong>Genero:</strong>`;
        const ulGeneros = document.createElement('ul')
        liGenero.appendChild(ulGeneros);
        generos.forEach(genero=>{
            const li = document.createElement('li')
            li.textContent = genero;
            ulGeneros.appendChild(li);
        })
        liElenco.innerHTML=`<strong>Elenco:</strong>`;
       const ulElenco = document.createElement('ul');
       liElenco.appendChild(ulElenco);
        elenco.forEach( pessoa =>{
            const li = document.createElement('li')
            li.textContent = pessoa.ator;
            ulElenco.appendChild(li);
        })
        const linha= document.createElement('hr');
       
        ulFilme.append(liId,liTitulo,liResumo,liGenero,liElenco,liLancamento,linha);
        divFilmes.appendChild(ulFilme);
    })
}
 