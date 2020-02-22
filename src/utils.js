const jwt = require('jsonwebtoken');

// Will be replaced by enviroment variable
const SECRET_KEY = "!&@^bjkbJHB!J@*&DGKJASH09@*@#@";

function getUserId(context) {
    const Authorization = context.request.get('Authorization');
    if (Authorization) {
        const token = Authorization.replace('Bearer ', ''); // Keep the token info only
        const { userId } = jwt.verify(token, SECRET_KEY);
        return userId;
    }

    throw new Error("Not authenticated");
}

module.exports = {
    SECRET_KEY,
    getUserId
}
