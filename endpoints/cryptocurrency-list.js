const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const getActiveCryptocurrencies = (key) => api.get('/listings/latest')
 .set('X-CMC_PRO_API_KEY', key)
 .set('Content-Type', 'application/json')
 .send({
   start:"1",
   limit:"5000",
   convert:"USD"
 })

module.exports = {
   getActiveCryptocurrencies
}
