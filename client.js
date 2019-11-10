const grpc = require('grpc');
const user_service = grpc.load('./user_service.proto').UserService;
const client = new user_service(
    'localhost:8080',
    grpc.credentials.createInsecure()
);
module.exports = client;