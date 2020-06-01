# ATWMC
ATWMC is abbreviations for `API Testing with Mocha Chai`. This is an Automation Testing Framework using [Mocha](https://mochajs.org/) as testing framework and [Chai](https://www.chaijs.com/) as assertion library. This testing framework also use [Mochawesome](https://www.npmjs.com/package/mochawesome) for generate the report.

ATWMC consume API Services from [CoinMarketCap](https://coinmarketcap.com/).So for run this test, we must already have API Key for consume their API Services.
To obtain an API key, visit https://pro.coinmarketcap.com/api and then put your API Key into `.env` file


## Setup
### Clone and Access Repository
```bash
git clone git@github.com:yayankus/atwmc.git
cd atwmc
```

### Install Dependencies
```bash
npm install package.json
```

## Usage
Run this script for running test
```bash
npm run test
```

## Report
You can access the report by run this command
```bash
npm run reports
```
