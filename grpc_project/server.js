const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.resolve(__dirname, 'service.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const proto = grpc.loadPackageDefinition(packageDefinition);

function sayHello(call, callback) {
  console.log(`Received message from client: ${call.request.name}`);
  const reply = { message: `Hello, ${call.request.name}!` };
  callback(null, reply);
}

function main() {
  const server = new grpc.Server();
  server.addService(proto.Greeter.service, { SayHello: sayHello });
  const address = '0.0.0.0:50051';
  server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`Server running at ${address}`);
    server.start();
  });
}

main();