const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Will be replaced by enviroment variable
const SECRET_KEY = "!&@^bjkbJHB!J@*&DGKJASH09@*@#@";

const _post = (root, args, context, info) => {
    return context.prisma.createQuote({
        description: args.description
    })
}

const _delete = (root, args, context, info) => {
    return context.prisma.deleteQuote({
        id: args.id
    });
}

const _update = (root, args, context, info) => {
    return context.prisma.updateQuote({
        where: {
            id: args.id
        },
        data: {
            description: args.description
        }
    })
}

const _signup = async (root, args, context, info) => {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({ ...args, password });

    const token = jwt.sign({ userId: user.id }, SECRET_KEY);

    return {
        token,
        user,
    }

}

const _login = async (root, args, context, info) => {
    const user = await context.prisma.user({ email: args.email });

    if (!user) {
        throw Error("User not found");
    }

    const valid = await bcrypt.compare(args.password, user.password);

    if (!valid) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY);

    return {
        token,
        user,
    }
}

module.exports = {
    post: _post,
    delete: _delete,
    update: _update,
    signup: _signup,
    login: _login,
}
