// module.exports =
//     "mongodb+srv://admin:passw0rd@host:27017cinema?retryWrites=true";


// async function main() {

//     /**
//  * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//  * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//  */

//     const uri = "mongodb+srv://<admin>:<passw0rd>@localhost:27017/cinema?retryWrites=true";

//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Make the appropriate DB calls
//         await listDatabases(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);