import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsPath = path.join(__dirname, '../uploads');
console.log('__dirname:', __dirname);
console.log('uploadsPath:', uploadsPath);
console.log('Exists:', fs.existsSync(uploadsPath));
if (fs.existsSync(uploadsPath)) {
    console.log('Contents:', fs.readdirSync(uploadsPath));
}
