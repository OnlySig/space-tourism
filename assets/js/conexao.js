async function planetasInfo() {
    const conexao = await fetch("data.json")
    const conexaoJson = await conexao.json()
    return conexaoJson.destinations
} 

export const infos = {
    planetasInfo
}