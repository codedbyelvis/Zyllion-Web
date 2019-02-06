/// Loading and initializing the library:
const postgres = require('pg-promise')({
    /// Initialization Options here...
});

const databaseName = "zyllion_prod6";

/// Preparing the connection details:
// - const connection = 'postgres://username:password@host:port/database';
const connection = `postgres://Belvis:postgres@127.0.0.1:8000/${zyllion_prod6}`;

/// Creating a new database instance from the connection details:
const db = postgres(connection);

module.exports = db;