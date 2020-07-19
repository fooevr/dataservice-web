// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
// @ts-ignore
import JsonViewer from 'vue-json-viewer'
import * as pj from "protobufjs"
import * as api from "@/api/TT_pb_service"
import {Request, Response} from "@/api/TT_pb";
import {ServiceError, TT, UnaryResponse} from "@/api/TT_pb_service";
import {grpc} from "@improbable-eng/grpc-web";
const req = new Request()
const md = new grpc.Metadata()
md.append("Ts", "0")
const client = new api.TTClient("http://10.0.0.101:8080", {
    transport: grpc.WebsocketTransport(),
});
const loop = function() {
    const x: UnaryResponse = client.unary(req, md, function (err: ServiceError | null, data: Response | null) {
        console.log(err?.message);
        console.log(data?.getValue());
        setTimeout(loop, 5000);
    })
}

//loop()
import {ServiceCaller} from "./dataservice/dataservice"
import * as impUnary from "@improbable-eng/grpc-web/dist/typings/unary";
pj.load("main.proto", function (err, proto){
    const sc = new ServiceCaller("http://127.0.0.1:8080", proto!!, TT.serviceName)
    sc.loop(TT.unary.methodName, req, 0, function(newDao:Response){
        console.log(newDao)
    }, null, function(ts:number){
        console.log(ts)
    })
})




// @ts-ignore
Vue.use(JsonViewer);

// bootstrap the demo
// @ts-ignore
const demo = new Vue({
    el: "#demo",
    data: {
        searchQuery: "",
        gridColumns: ["name", "comment"],
        gridData: [
            {name: "Chuck Norris", power: Infinity},
            {name: "Bruce Lee", power: 9000},
            {name: "Jackie Chan", power: 7000},
            {name: "Jet Li", power: 8000}
        ],
        oldJson: undefined,
        newJson: undefined
    }
});

pj.load("main.proto", function (err, proto) {
    if (!proto) {
        return;
    }
    const patch = (ns: { [ns: string]: any, }, path?: string) => {
        Object.keys(ns).forEach((key) => {
            const value = ns[key];
            const currentPath = path ? `${path}.${key}` : key;
            if (typeof value === 'object') {
                patch(value, currentPath);
            }
            if (typeof value === 'function') {
                Object.defineProperty(value, 'name', {
                    value: currentPath,
                    configurable: true,
                });
            }
        })
    }
    // patch(ds)
    // com.variflight.dataservice.test.ScoreService
    // const sc = new ServiceCaller("http://127.0.0.1:8080", proto, ds.com.variflight.dataservice.test.ScoreService.name);
    // sc.loop(ds.com.variflight.dataservice.test.ScoreService.prototype.getUsersOrder, function () {
    //     return new ds.google.protobuf.Empty();
    // }, 0, function (dao) {
    //     if(dao) {
    //         const user = (dao as IUsers as Users).users;
    //         demo.$data.oldJson = demo.$data.newJson;
    //         demo.$data.newJson = dao.toJSON();
    //         // console.log();
    //     }else{
    //         demo.$data.gridData = {};
    //     }
    // });

    // const sc = new ServiceCaller("http://127.0.0.1:8085", proto, ds.com.variflight.fidstest.flight.FlightService.name);
    // sc.loop(ds.com.variflight.fidstest.flight.FlightService.prototype.pullFlightInfo, function () {
    //     return new ds.com.variflight.fidstest.flight.Nothing();
    // }, 0, function (dao) {
    //     if(dao) {
    //         const user = (dao as IUsers as Users).users;
    //         demo.$data.oldJson = demo.$data.newJson;
    //         demo.$data.newJson = dao.toJSON();
    //         // console.log();
    //     }else{
    //         demo.$data.gridData = {};
    //     }
    // });
});
