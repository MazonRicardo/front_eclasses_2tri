// BASE_URL aponta para o JSON local enquanto a API não está integrada.
// Quando a API estiver pronta, basta trocar para: 'http://localhost:3000/api'
const BASE_URL = 'http://localhost:3000/api/';

async function trataErros(response) {
    try {
        if (!response.ok) {
            throw new Erorr(`HTTP error! status: ${response.statusText}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Erro ao buuscar jogos:', error);
        alert('Erro ao buscar jogos. Por favor, tente novamente mais tarde');
        return[];
    }
}

// Retorna todos os jogos
async function getJogos() {
    const response = await fetch(`${BASE_URL}jogos`);
    return trataErros(response);
}

// Retorna todos os times
async function getTimes() {
    const response = await fetch(`${BASE_URL}times`);
    return trataErros(response);
}

// Retorna todos os competidores
async function getCompetidores() {
    const response = await fetch(`${BASE_URL}competidores`);
    return trataErros(response);
}

// Retorna todos os confrontos
async function getConfrontos() {
    const response = await fetch(`${BASE_URL}confrontos`);
    return trataErros(response);
}
