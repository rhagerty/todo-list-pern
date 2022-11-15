const Pool = require('pg').Pool;

 const pool = new Pool({
    user: 'postgres',
    password: 'Box73995!',
    host:'localhost',
    port: 5432,
    database: 'hospital-management'

 });

 
 module.exports = pool;