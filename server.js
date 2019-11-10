const grpc = require('grpc');
const user_service_proto = grpc.load('./user_service.proto');

const s = new grpc.Server();

function login(call, callback) {
    let rq = call.request;
    console.table(rq);
    callback(null, { // a mock response
        response: { email: 'youremail@mail.com', verified: true }
    });
}

s.addService(
    user_service_proto.UserService.service, { login: login }
);

const addr = '0.0.0.0:8080';
try {
    console.log(`Starting the server on ${addr}`);
    s.bind(addr, grpc.ServerCredentials.createInsecure());
    s.start();
} catch (e) {
    console.log(e);
}