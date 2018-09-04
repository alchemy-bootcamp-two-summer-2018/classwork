
const URL = '/api';
const NEIGHBORHOODS_URL = `${URL}/neighborhoods`;
const RESTAURANTS_URL = `${URL}/restaurants`;
const AUTH_URL = `${URL}/auth`;

function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(err => { 
    throw err.message; 
  });
}

export function getNeighborhoods() {
  return fetch(NEIGHBORHOODS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addNeighborhood(neighborhood) {
  return fetch(NEIGHBORHOODS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(neighborhood)
  })
    .then(responseHandler);
}

export function updateNeighborhood(neighborhood) {
  return fetch(`${NEIGHBORHOODS_URL}/${neighborhood.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(neighborhood)
  })
    .then(response => response.json());
}

export function removeNeighborhood(id) {
  return fetch(`${NEIGHBORHOODS_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json());
}

export function getQuadrants() {
  return fetch(`${URL}/quadrants`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(responseHandler);
}

export function getQuadrant(id) {
  return fetch(`${URL}/quadrants/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function getRestaurants(neighborhoodId) {
  // use `encodeURIComponent(value)` if things in query string need
  // to be escaped (like spaces, punctuation, etc)
  return fetch(`${RESTAURANTS_URL}?neighborhoodId=${neighborhoodId}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addRestaurant(restaurant) {
  return fetch(RESTAURANTS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(restaurant)
  })
    .then(response => response.json());
}

export function signUp(credentials) {
  return fetch(`${AUTH_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })
    .then(responseHandler);
}

export function signIn(credentials) {
  return fetch(`${AUTH_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })
    .then(responseHandler);
}


