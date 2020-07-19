// package: com.variflight.dataservice.test
// file: TT.proto

var TT_pb = require("./TT_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TT = (function () {
  function TT() {}
  TT.serviceName = "com.variflight.dataservice.test.TT";
  return TT;
}());

TT.unary = {
  methodName: "unary",
  service: TT,
  requestStream: false,
  responseStream: false,
  requestType: TT_pb.Request,
  responseType: TT_pb.Response
};

TT.clientStream = {
  methodName: "clientStream",
  service: TT,
  requestStream: true,
  responseStream: false,
  requestType: TT_pb.Request,
  responseType: TT_pb.Response
};

TT.serverStream = {
  methodName: "serverStream",
  service: TT,
  requestStream: false,
  responseStream: true,
  requestType: TT_pb.Request,
  responseType: TT_pb.Response
};

TT.bothStream = {
  methodName: "bothStream",
  service: TT,
  requestStream: true,
  responseStream: true,
  requestType: TT_pb.Request,
  responseType: TT_pb.Response
};

exports.TT = TT;

function TTClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TTClient.prototype.unary = function unary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TT.unary, {
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

TTClient.prototype.clientStream = function clientStream(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(TT.clientStream, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

TTClient.prototype.serverStream = function serverStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TT.serverStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

TTClient.prototype.bothStream = function bothStream(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(TT.bothStream, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.TTClient = TTClient;

