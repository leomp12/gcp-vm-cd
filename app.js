const dotenv = require('dotenv');
dotenv.config();
dotenv.config({ path: require('path').join(__dirname, '.env') });
require('./src/index');
