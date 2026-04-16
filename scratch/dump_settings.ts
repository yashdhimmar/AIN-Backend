import pool from '../src/config/db.js';

async function dumpSettings() {
    try {
        const [rows]: any = await pool.query('SELECT key_name, value FROM settings');
        console.log('--- SETTINGS DUMP ---');
        rows.forEach((row: any) => {
            console.log(`${row.key_name}: ${row.value}`);
        });
        console.log('---------------------');
        process.exit(0);
    } catch (error) {
        console.error('Error dumping settings:', error);
        process.exit(1);
    }
}

dumpSettings();
