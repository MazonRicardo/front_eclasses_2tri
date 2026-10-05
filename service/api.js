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

// ========== GET ==========
async function getJogos() {
  return _request('jogos');
}
async function getTimes() {
  return _request('times');
}
async function getCompetidores() {
  return _request('competidores');
}
async function getConfrontos() {
  return _request('confrontos');
}

// ========== POST ==========
async function criarJogo(dados) {
  return _request('jogos', { method: 'POST', body: JSON.stringify(dados) });
}
async function criarTime(dados) {
  return _request('times', { method: 'POST', body: JSON.stringify(dados) });
}
async function criarCompetidor(dados) {
  return _request('competidores', { method: 'POST', body: JSON.stringify(dados) });
}
async function criarConfronto(dados) {
  return _request('confrontos', { method: 'POST', body: JSON.stringify(dados) });
}

// ========== PUT ==========
async function atualizarJogo(id, dados) {
  return _request(`jogos/${id}`, { method: 'PUT', body: JSON.stringify(dados) });
}
async function atualizarTime(id, dados) {
  return _request(`times/${id}`, { method: 'PUT', body: JSON.stringify(dados) });
}
async function atualizarCompetidor(id, dados) {
  return _request(`competidores/${id}`, { method: 'PUT', body: JSON.stringify(dados) });
}
async function atualizarConfronto(id, dados) {
  return _request(`confrontos/${id}`, { method: 'PUT', body: JSON.stringify(dados) });
}

// ========== DELETE ==========
async function excluirJogo(id) {
  return _request(`jogos/${id}`, { method: 'DELETE' });
}
async function excluirTime(id) {
  return _request(`times/${id}`, { method: 'DELETE' });
}
async function excluirCompetidor(id) {
  return _request(`competidores/${id}`, { method: 'DELETE' });
}
async function excluirConfronto(id) {
  return _request(`confrontos/${id}`, { method: 'DELETE' });
}