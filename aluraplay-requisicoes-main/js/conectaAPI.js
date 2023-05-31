async function listaVideos(){
    const conexao = await fetch("https://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos
}
