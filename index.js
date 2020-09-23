const fs = require('fs');
const { Client } = require('@elastic/elasticsearch');

// Please use elasticsearch's xpack certificates files.
const options = {
    key: fs.readFileSync('./certs/es01.key'),
    cert: fs.readFileSync('./certs/es01.crt'),

    // This is necessary only if using client certificate authentication.
    // requestCert: true,

    // This is necessary only if the client uses a self-signed certificate.
    ca: [fs.readFileSync('./certs/ca.crt')]
};

const client = new Client(
    {
        node: 'https://localhost:9200',
        maxRetries: 5,
        requestTimeout: 60000,
        auth: {
            username: 'elastic',
            password: 'fXRf72Wz5XGClMoxP2n3'
        },
        ssl: options
    }
);

const search = async () => {
    const result = await client.search({
        index: 'alert',
        body: {
            query: {
                match_all: {}
            }
        }
    })
    console.log(result);
    return result;
}

const getIndices = async () => {
    let indices = await client.cat.indices({ format: "json" });
    console.log(indices);
    return indices;
}

// search();
getIndices();