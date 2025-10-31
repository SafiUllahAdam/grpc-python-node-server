gRPC Project
This project demonstrates a simple gRPC setup with a Node.js server and a Python client.

Files
service.proto: Protocol Buffers file defining the gRPC service.
server.js: Node.js server implementation.
client.py: Python client implementation.
Prerequisites
Node.js Server
Install Node.js.
Install dependencies:
npm install @grpc/grpc-js @grpc/proto-loader
Python Client
Install Python.
Install dependencies:
pip install grpcio grpcio-tools
Running the Project
Step 1: Generate Python Code from service.proto
Run the following command in the grpc_project directory:

python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. service.proto
Step 2: Start the Node.js Server
Run the following command in the grpc_project directory:

node server.js
Step 3: Run the Python Client
Run the following command in the grpc_project directory:

python client.py
Expected Output
The server logs:

Server running at 0.0.0.0:50051
The client prints:

Greeter client received: Hello, World!
