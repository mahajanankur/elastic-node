const express = require("express");
// const elasticsearch = require("elasticsearch");
//Custom Imports
const { Response } = require("../dto/generic");
const { ElasticClient } = require("../elasticsearch/config");
const clientEx = ElasticClient.getInstance(); 

const clientEx1 = ElasticClient.getInstance(); 
const clientEx2 = ElasticClient.getInstance(); 

//Get router from express
const router = express.Router();

//Configure Elasticsearch client.
// const ElasticClient =  new elasticsearch.Client({
//     host: 'localhost:8045',
//     log: 'trace',
//     //apiVersion: '7.2', // use the same version of your Elasticsearch instance
// });

//Resources
router.get("/status", async (req, res, next) => {
    console.log("Elastic client : ", clientEx);
    try {
        var health = await clientEx.cat.health();
    } catch (error) {
        console.log("Error getting cluster health : ", error);
    }
    
    console.log("Cluster health : ", health);
    var response = new Response(true, "Service is running!!");
    res.json(response);
});

//Make sure to export the router otherwise below error would be thrown 
//TypeError: Router.use() requires a middleware function but got a Object
module.exports = router;