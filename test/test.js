const assert = require('chai').expect;
const env = require('dotenv').config();

const endpoint = require('../endpoints/cryptocurrency-list.js');
const apiKey = process.env.API_KEY;

describe('api',() =>{
  describe(`GET`, () => {
   it(`it should fail without token`, async() => {
    const response = await endpoint.getActiveCryptocurrencies('');
    assert(response.status).to.equal(401, response.body.Error);
    assert(response.body.status.error_code).to.equal(1002);
    assert(response.body.status.error_message).to.equal('API key missing.');
   }),

   it(`it should return 200 with valid token`, async() => {
    const response = await endpoint.getActiveCryptocurrencies(apiKey);
    assert(response.status).to.equal(200);
   }),

   it(`it should fail with invalid token`, async() => {
     const response = await endpoint.getActiveCryptocurrencies('invalidApiKey');
     assert(response.status).to.equal(401, response.body.Error);
     assert(response.body.status.error_code).to.equal(1001);
     assert(response.body.status.error_message).to.equal('This API Key is invalid.');
    })
  })
})
