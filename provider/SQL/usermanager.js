const sql = require('mssql');
const dbConnection = require('../../config/db.config');
console.log(dbConnection);
async function getUsers() {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
        .query(` 
                SELECT TOP(20) 
                CustomerId, 
                FirstName, 
                MiddleName,
                LastName,
                EmailAddress,
                Phone 
                FROM 
                salesLT.Customer 
            `);
    console.log(`Returned SQL results`);
    return results;
}

async function getcustomerbyId(id) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
        .query(` 
                SELECT 
                CustomerId, 
                FirstName, 
                MiddleName,
                LastName,
                EmailAddress,
                Phone 
                FROM 
                salesLT.Customer
                WHERE
                CustomerId = ${id}
            `);
    console.log(`Returned SQL results`);
    return results;
}

//Export 
//module.exports = { getUsers: getUsers }; 
module.exports = { getcustomerbyId: getcustomerbyId, getUsers: getUsers };
