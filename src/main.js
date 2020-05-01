"use strict";
// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Vue.config.productionTip = false
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
var jspb = require("google-protobuf");
var ds = require("./scripts/proto/proto");
var pj = require("protobufjs");
var grpc_web_1 = require("@improbable-eng/grpc-web");
var f = new ds.com.variflight.fidstest.flight.FlightInfo();
pj.load("main.proto", function (err, proto) {
    if (!proto) {
        return;
    }
    var type = proto.lookupType("com.variflight.fidstest.flight.FlightInfo");
    // console.log(f);
    for (var idx in type.fields) {
        var field = type.fields[idx];
        f[field.name] = "1";
        // console.log("set", field.name, "to", field.defaultValue);
    }
    // console.log(f);
});
function call(method) {
}
call(ds.com.variflight.fidstest.flight.FlightService.prototype.pullFlightInfo);
var y = ds.com.variflight.fidstest.flight.FlightService.create(function (method, data, callback) {
    var resultData;
    var TypeBridge = /** @class */ (function (_super) {
        __extends(TypeBridge, _super);
        function TypeBridge() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TypeBridge.deserializeBinary = function (bytes) {
            resultData = bytes;
            return null;
        };
        TypeBridge.prototype.serializeBinary = function () {
            return data;
        };
        TypeBridge.prototype.toObject = function (includeInstance) {
        };
        return TypeBridge;
    }(jspb.Message));
    var param = new TypeBridge();
    grpc_web_1.grpc.unary({
        requestStream: false,
        responseStream: false,
        methodName: "PullFlightInfo",
        service: { serviceName: "com.variflight.fidstest.flight.FlightService" },
        requestType: TypeBridge,
        responseType: TypeBridge
    }, {
        host: "http://127.0.0.1:8085",
        request: param,
        metadata: { ts: "0" },
        transport: grpc_web_1.grpc.WebsocketTransport(),
        onEnd: function (response) {
            callback(null, resultData);
        }
    });
});
console.log("start");
var req = new ds.com.variflight.fidstest.flight.Nothing();
req.test = "1";
y.pullFlightInfo(req, function (err, f) {
    console.log(f === null || f === void 0 ? void 0 : f.value);
});
console.log("end");
// bootstrap the demo
var demo = new Vue({
    el: "#demo",
    data: {
        searchQuery: "",
        gridColumns: ["name", "power"],
        gridData: [
            { name: "Chuck Norris", power: Infinity },
            { name: "Bruce Lee", power: 9000 },
            { name: "Jackie Chan", power: 7000 },
            { name: "Jet Li", power: 8000 }
        ]
    }
});
