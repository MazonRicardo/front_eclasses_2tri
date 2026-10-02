const BASE_URL = 'http://localhost:3000/api/';

async function _request(endpoint, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options
    });

    if (response.status === 204) return null; // DELETE sem body

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.erro || response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erro em ${endpoint}:`, error);
    throw error;
  }
}

// GET
const getJogos = () => _request('jogos');
const getTimes = () => _request('times');
const getCompetidores = () => _request('competidores');
const getConfrontos = () => _request('confrontos');

// POST
const criarJogo = (dados) => _request('jogos', { method: 'POST', body: JSON.stringify(dados) });
const criarTime = (dados) => _request('times', { method: 'POST', body: JSON.stringify(dados) });
const criarCompetidor = (dados) => _request('competidores', { method: 'POST', body: JSON.stringify(dados) });
const criarConfronto = (dados) => _request('confrontos', { method: 'POST', body: JSON.stringify(dados) });

// PUT
const atualizarJogo = (id, dados) => _request(`jogos/${id}`, { method: 'PUT', body: JSON.stringify(dados) });
const atualizarTime = (id, dados) => _request(`times/${id}`, { method: 'PUT', body: JSON.stringify(dados) });
const atualizarCompetidor = (id, dados) => _request(`competidores/${id}`, { method: 'PUT', body: JSON.stringify(dados) });
const atualizarConfronto = (id, dados) => _request(`confrontos/${id}`, { method: 'PUT', body: JSON.stringify(dados) });

// DELETE
const excluirJogo = (id) => _request(`jogos/${id}`, { method: 'DELETE' });
const excluirTime = (id) => _request(`times/${id}`, { method: 'DELETE' });
const excluirCompetidor = (id) => _request(`competidores/${id}`, { method: 'DELETE' });
const excluirConfronto = (id) => _request(`confrontos/${id}`, { method: 'DELETE' });