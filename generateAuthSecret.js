const crypto = require('crypto');

const authSecret = crypto.randomBytes(32).toString('hex');
console.log(authSecret);
