
const URL = 'http://localhost:3000/api';
const NEIGHBORHOODS_URL = `${URL}/neighborhoods`;
const QUADRANTS_URL = `${URL}/quadrants`;

export default {
  getNeighborhoods() {
    return fetch(NEIGHBORHOODS_URL, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },

  addNeighborhood(neighborhood) {
    return fetch(NEIGHBORHOODS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(neighborhood)
    })
      .then(response => response.json());
  },

  updateNeighborhood(neighborhood) {
    return fetch(`${NEIGHBORHOODS_URL}/${neighborhood.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(neighborhood)
    })
      .then(response => response.json());
  },

  removeNeighborhood(id) {
    return fetch(`${NEIGHBORHOODS_URL}/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  },

  getQuadrants() {
    return fetch(QUADRANTS_URL, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  }
};

