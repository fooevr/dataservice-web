// package: com.variflight.dataservice
// file: Proto.proto

var Proto_pb = require("./Proto_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Proto = (function () {
  function Proto() {}
  Proto.serviceName = "com.variflight.dataservice.Proto";
  return Proto;
}());

Proto.getProtoDescription = {
  methodName: "getProtoDescription",
  service: Proto,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: Proto_pb.ProtoDesc
};

exports.Proto = Proto;

function ProtoClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProtoClient.prototype.getProtoDescription = function getProtoDescription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Proto.getProtoDescription, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ProtoClient = ProtoClient;

