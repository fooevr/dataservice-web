// package: com.variflight.dataservice.test
// file: TestMessage.proto

var TestMessage_pb = require("./TestMessage_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ScoreService = (function () {
  function ScoreService() {}
  ScoreService.serviceName = "com.variflight.dataservice.test.ScoreService";
  return ScoreService;
}());

ScoreService.GetAllScores = {
  methodName: "GetAllScores",
  service: ScoreService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: TestMessage_pb.StudentScoresMap
};

exports.ScoreService = ScoreService;

function ScoreServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ScoreServiceClient.prototype.getAllScores = function getAllScores(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScoreService.GetAllScores, {
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

exports.ScoreServiceClient = ScoreServiceClient;

