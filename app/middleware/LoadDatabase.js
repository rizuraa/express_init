const db = require('../config/database');
// tes koneksi 
exports.loadDatabase = async (req, res, next) => {
    try {
        await db.authenticate();
        console.log('Database Connected...');
    } catch (error) {
        console.log(`Database Error: ${error}`);
    }
    next();
}