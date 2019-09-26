const elasticsearch = require("elasticsearch");

//Singleton pattern for elastic search client.
exports.ElasticClient = (() => {
    let instance;
    function createInstance() {
        //var object = new Object("Ankur");
        //return object;
        instance = new elasticsearch.Client({
            host: 'localhost:8045',
            log: 'trace',
            //apiVersion: '7.2', // use the same version of your Elasticsearch instance
          });
        return instance;
    }
    //Return JSON
    return {
        getInstance: () => {
            return instance || createInstance();
        }
    };
})();

