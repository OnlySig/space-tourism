async function planetasInfo() {
    const conexao = await fetch("/starter-code/data.json")
    const conexaoJson = await conexao.json()
    return conexaoJson.destinations
} 

export const infos = {
    planetasInfo
}