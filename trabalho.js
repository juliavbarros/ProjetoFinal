function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
    
    const adocao = idade === 1 && porte === 'M'
 
    return adocao
}

const nome = `Pitoco`
const peso = 14.5

function calcularConsumoDeRacao(nome, idade, peso) {
    
    return peso * 300;
}


function decidirTipoDeAtividadePorPorte (porte) {

    if(porte === 'pequeno'){
        return 'brincar dentro de casa'
    }
    return 'free';
}


async function buscarDadoAsync () {
  return 'Pipoca'

}

export {

    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}