/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.variflight = (function() {

        /**
         * Namespace variflight.
         * @memberof com
         * @namespace
         */
        var variflight = {};

        variflight.dataservice = (function() {

            /**
             * Namespace dataservice.
             * @memberof com.variflight
             * @namespace
             */
            var dataservice = {};

            dataservice.ChangeDesc = (function() {

                /**
                 * Properties of a ChangeDesc.
                 * @memberof com.variflight.dataservice
                 * @interface IChangeDesc
                 * @property {Uint8Array|null} [fieldTags] ChangeDesc fieldTags
                 * @property {Uint8Array|null} [changeTags] ChangeDesc changeTags
                 * @property {Array.<com.variflight.dataservice.IChangeDesc>|null} [fieldsChangeDescs] ChangeDesc fieldsChangeDescs
                 * @property {Object.<string,com.variflight.dataservice.IChangeDesc>|null} [mapInt32] ChangeDesc mapInt32
                 * @property {Object.<string,com.variflight.dataservice.IChangeDesc>|null} [mapInt64] ChangeDesc mapInt64
                 * @property {Object.<string,com.variflight.dataservice.IChangeDesc>|null} [mapBool] ChangeDesc mapBool
                 * @property {Object.<string,com.variflight.dataservice.IChangeDesc>|null} [mapString] ChangeDesc mapString
                 * @property {Object.<string,com.variflight.dataservice.IChangeDesc>|null} [mapInt32Removed] ChangeDesc mapInt32Removed
                 * @property {Object.<string,com.variflight.dataservice.IChangeDesc>|null} [mapInt64Removed] ChangeDesc mapInt64Removed
                 * @property {Object.<string,com.variflight.dataservice.IChangeDesc>|null} [mapBoolRemoved] ChangeDesc mapBoolRemoved
                 * @property {Object.<string,com.variflight.dataservice.IChangeDesc>|null} [mapStringRemoved] ChangeDesc mapStringRemoved
                 */

                /**
                 * Constructs a new ChangeDesc.
                 * @memberof com.variflight.dataservice
                 * @classdesc Represents a ChangeDesc.
                 * @implements IChangeDesc
                 * @constructor
                 * @param {com.variflight.dataservice.IChangeDesc=} [properties] Properties to set
                 */
                function ChangeDesc(properties) {
                    this.fieldsChangeDescs = [];
                    this.mapInt32 = {};
                    this.mapInt64 = {};
                    this.mapBool = {};
                    this.mapString = {};
                    this.mapInt32Removed = {};
                    this.mapInt64Removed = {};
                    this.mapBoolRemoved = {};
                    this.mapStringRemoved = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ChangeDesc fieldTags.
                 * @member {Uint8Array} fieldTags
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @instance
                 */
                ChangeDesc.prototype.fieldTags = $util.newBuffer([]);

                /**
                 * ChangeDesc changeTags.
                 * @member {Uint8Array} changeTags
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @instance
                 */
                ChangeDesc.prototype.changeTags = $util.newBuffer([]);

                /**
                 * ChangeDesc fieldsChangeDescs.
                 * @member {Array.<com.variflight.dataservice.IChangeDesc>} fieldsChangeDescs
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @instance
                 */
                ChangeDesc.prototype.fieldsChangeDescs = $util.emptyArray;

                /**
                 * ChangeDesc mapInt32.
                 * @member {Object.<string,com.variflight.dataservice.IChangeDesc>} mapInt32
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @instance
                 */
                ChangeDesc.prototype.mapInt32 = $util.emptyObject;

                /**
                 * ChangeDesc mapInt64.
                 * @member {Object.<string,com.variflight.dataservice.IChangeDesc>} mapInt64
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @instance
                 */
                ChangeDesc.prototype.mapInt64 = $util.emptyObject;

                /**
                 * ChangeDesc mapBool.
                 * @member {Object.<string,com.variflight.dataservice.IChangeDesc>} mapBool
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @instance
                 */
                ChangeDesc.prototype.mapBool = $util.emptyObject;

                /**
                 * ChangeDesc mapString.
                 * @member {Object.<string,com.variflight.dataservice.IChangeDesc>} mapString
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @instance
                 */
                ChangeDesc.prototype.mapString = $util.emptyObject;

                /**
                 * ChangeDesc mapInt32Removed.
                 * @member {Object.<string,com.variflight.dataservice.IChangeDesc>} mapInt32Removed
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @instance
                 */
                ChangeDesc.prototype.mapInt32Removed = $util.emptyObject;

                /**
                 * ChangeDesc mapInt64Removed.
                 * @member {Object.<string,com.variflight.dataservice.IChangeDesc>} mapInt64Removed
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @instance
                 */
                ChangeDesc.prototype.mapInt64Removed = $util.emptyObject;

                /**
                 * ChangeDesc mapBoolRemoved.
                 * @member {Object.<string,com.variflight.dataservice.IChangeDesc>} mapBoolRemoved
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @instance
                 */
                ChangeDesc.prototype.mapBoolRemoved = $util.emptyObject;

                /**
                 * ChangeDesc mapStringRemoved.
                 * @member {Object.<string,com.variflight.dataservice.IChangeDesc>} mapStringRemoved
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @instance
                 */
                ChangeDesc.prototype.mapStringRemoved = $util.emptyObject;

                /**
                 * Creates a new ChangeDesc instance using the specified properties.
                 * @function create
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @static
                 * @param {com.variflight.dataservice.IChangeDesc=} [properties] Properties to set
                 * @returns {com.variflight.dataservice.ChangeDesc} ChangeDesc instance
                 */
                ChangeDesc.create = function create(properties) {
                    return new ChangeDesc(properties);
                };

                /**
                 * Encodes the specified ChangeDesc message. Does not implicitly {@link com.variflight.dataservice.ChangeDesc.verify|verify} messages.
                 * @function encode
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @static
                 * @param {com.variflight.dataservice.IChangeDesc} message ChangeDesc message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChangeDesc.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fieldTags != null && Object.hasOwnProperty.call(message, "fieldTags"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.fieldTags);
                    if (message.changeTags != null && Object.hasOwnProperty.call(message, "changeTags"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.changeTags);
                    if (message.fieldsChangeDescs != null && message.fieldsChangeDescs.length)
                        for (var i = 0; i < message.fieldsChangeDescs.length; ++i)
                            $root.com.variflight.dataservice.ChangeDesc.encode(message.fieldsChangeDescs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.mapInt32 != null && Object.hasOwnProperty.call(message, "mapInt32"))
                        for (var keys = Object.keys(message.mapInt32), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                            $root.com.variflight.dataservice.ChangeDesc.encode(message.mapInt32[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.mapInt64 != null && Object.hasOwnProperty.call(message, "mapInt64"))
                        for (var keys = Object.keys(message.mapInt64), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]);
                            $root.com.variflight.dataservice.ChangeDesc.encode(message.mapInt64[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.mapBool != null && Object.hasOwnProperty.call(message, "mapBool"))
                        for (var keys = Object.keys(message.mapBool), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 0 =*/8).bool(keys[i]);
                            $root.com.variflight.dataservice.ChangeDesc.encode(message.mapBool[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.mapString != null && Object.hasOwnProperty.call(message, "mapString"))
                        for (var keys = Object.keys(message.mapString), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.com.variflight.dataservice.ChangeDesc.encode(message.mapString[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.mapInt32Removed != null && Object.hasOwnProperty.call(message, "mapInt32Removed"))
                        for (var keys = Object.keys(message.mapInt32Removed), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                            $root.com.variflight.dataservice.ChangeDesc.encode(message.mapInt32Removed[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.mapInt64Removed != null && Object.hasOwnProperty.call(message, "mapInt64Removed"))
                        for (var keys = Object.keys(message.mapInt64Removed), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]);
                            $root.com.variflight.dataservice.ChangeDesc.encode(message.mapInt64Removed[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.mapBoolRemoved != null && Object.hasOwnProperty.call(message, "mapBoolRemoved"))
                        for (var keys = Object.keys(message.mapBoolRemoved), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 0 =*/8).bool(keys[i]);
                            $root.com.variflight.dataservice.ChangeDesc.encode(message.mapBoolRemoved[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.mapStringRemoved != null && Object.hasOwnProperty.call(message, "mapStringRemoved"))
                        for (var keys = Object.keys(message.mapStringRemoved), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.com.variflight.dataservice.ChangeDesc.encode(message.mapStringRemoved[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                /**
                 * Encodes the specified ChangeDesc message, length delimited. Does not implicitly {@link com.variflight.dataservice.ChangeDesc.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @static
                 * @param {com.variflight.dataservice.IChangeDesc} message ChangeDesc message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChangeDesc.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ChangeDesc message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.variflight.dataservice.ChangeDesc} ChangeDesc
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChangeDesc.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.variflight.dataservice.ChangeDesc(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fieldTags = reader.bytes();
                            break;
                        case 2:
                            message.changeTags = reader.bytes();
                            break;
                        case 3:
                            if (!(message.fieldsChangeDescs && message.fieldsChangeDescs.length))
                                message.fieldsChangeDescs = [];
                            message.fieldsChangeDescs.push($root.com.variflight.dataservice.ChangeDesc.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            reader.skip().pos++;
                            if (message.mapInt32 === $util.emptyObject)
                                message.mapInt32 = {};
                            key = reader.int32();
                            reader.pos++;
                            message.mapInt32[key] = $root.com.variflight.dataservice.ChangeDesc.decode(reader, reader.uint32());
                            break;
                        case 5:
                            reader.skip().pos++;
                            if (message.mapInt64 === $util.emptyObject)
                                message.mapInt64 = {};
                            key = reader.int64();
                            reader.pos++;
                            message.mapInt64[typeof key === "object" ? $util.longToHash(key) : key] = $root.com.variflight.dataservice.ChangeDesc.decode(reader, reader.uint32());
                            break;
                        case 6:
                            reader.skip().pos++;
                            if (message.mapBool === $util.emptyObject)
                                message.mapBool = {};
                            key = reader.bool();
                            reader.pos++;
                            message.mapBool[key] = $root.com.variflight.dataservice.ChangeDesc.decode(reader, reader.uint32());
                            break;
                        case 7:
                            reader.skip().pos++;
                            if (message.mapString === $util.emptyObject)
                                message.mapString = {};
                            key = reader.string();
                            reader.pos++;
                            message.mapString[key] = $root.com.variflight.dataservice.ChangeDesc.decode(reader, reader.uint32());
                            break;
                        case 8:
                            reader.skip().pos++;
                            if (message.mapInt32Removed === $util.emptyObject)
                                message.mapInt32Removed = {};
                            key = reader.int32();
                            reader.pos++;
                            message.mapInt32Removed[key] = $root.com.variflight.dataservice.ChangeDesc.decode(reader, reader.uint32());
                            break;
                        case 9:
                            reader.skip().pos++;
                            if (message.mapInt64Removed === $util.emptyObject)
                                message.mapInt64Removed = {};
                            key = reader.int64();
                            reader.pos++;
                            message.mapInt64Removed[typeof key === "object" ? $util.longToHash(key) : key] = $root.com.variflight.dataservice.ChangeDesc.decode(reader, reader.uint32());
                            break;
                        case 10:
                            reader.skip().pos++;
                            if (message.mapBoolRemoved === $util.emptyObject)
                                message.mapBoolRemoved = {};
                            key = reader.bool();
                            reader.pos++;
                            message.mapBoolRemoved[key] = $root.com.variflight.dataservice.ChangeDesc.decode(reader, reader.uint32());
                            break;
                        case 11:
                            reader.skip().pos++;
                            if (message.mapStringRemoved === $util.emptyObject)
                                message.mapStringRemoved = {};
                            key = reader.string();
                            reader.pos++;
                            message.mapStringRemoved[key] = $root.com.variflight.dataservice.ChangeDesc.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ChangeDesc message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.variflight.dataservice.ChangeDesc} ChangeDesc
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChangeDesc.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ChangeDesc message.
                 * @function verify
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ChangeDesc.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fieldTags != null && message.hasOwnProperty("fieldTags"))
                        if (!(message.fieldTags && typeof message.fieldTags.length === "number" || $util.isString(message.fieldTags)))
                            return "fieldTags: buffer expected";
                    if (message.changeTags != null && message.hasOwnProperty("changeTags"))
                        if (!(message.changeTags && typeof message.changeTags.length === "number" || $util.isString(message.changeTags)))
                            return "changeTags: buffer expected";
                    if (message.fieldsChangeDescs != null && message.hasOwnProperty("fieldsChangeDescs")) {
                        if (!Array.isArray(message.fieldsChangeDescs))
                            return "fieldsChangeDescs: array expected";
                        for (var i = 0; i < message.fieldsChangeDescs.length; ++i) {
                            var error = $root.com.variflight.dataservice.ChangeDesc.verify(message.fieldsChangeDescs[i]);
                            if (error)
                                return "fieldsChangeDescs." + error;
                        }
                    }
                    if (message.mapInt32 != null && message.hasOwnProperty("mapInt32")) {
                        if (!$util.isObject(message.mapInt32))
                            return "mapInt32: object expected";
                        var key = Object.keys(message.mapInt32);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key32Re.test(key[i]))
                                return "mapInt32: integer key{k:int32} expected";
                            {
                                var error = $root.com.variflight.dataservice.ChangeDesc.verify(message.mapInt32[key[i]]);
                                if (error)
                                    return "mapInt32." + error;
                            }
                        }
                    }
                    if (message.mapInt64 != null && message.hasOwnProperty("mapInt64")) {
                        if (!$util.isObject(message.mapInt64))
                            return "mapInt64: object expected";
                        var key = Object.keys(message.mapInt64);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key64Re.test(key[i]))
                                return "mapInt64: integer|Long key{k:int64} expected";
                            {
                                var error = $root.com.variflight.dataservice.ChangeDesc.verify(message.mapInt64[key[i]]);
                                if (error)
                                    return "mapInt64." + error;
                            }
                        }
                    }
                    if (message.mapBool != null && message.hasOwnProperty("mapBool")) {
                        if (!$util.isObject(message.mapBool))
                            return "mapBool: object expected";
                        var key = Object.keys(message.mapBool);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key2Re.test(key[i]))
                                return "mapBool: boolean key{k:bool} expected";
                            {
                                var error = $root.com.variflight.dataservice.ChangeDesc.verify(message.mapBool[key[i]]);
                                if (error)
                                    return "mapBool." + error;
                            }
                        }
                    }
                    if (message.mapString != null && message.hasOwnProperty("mapString")) {
                        if (!$util.isObject(message.mapString))
                            return "mapString: object expected";
                        var key = Object.keys(message.mapString);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.com.variflight.dataservice.ChangeDesc.verify(message.mapString[key[i]]);
                            if (error)
                                return "mapString." + error;
                        }
                    }
                    if (message.mapInt32Removed != null && message.hasOwnProperty("mapInt32Removed")) {
                        if (!$util.isObject(message.mapInt32Removed))
                            return "mapInt32Removed: object expected";
                        var key = Object.keys(message.mapInt32Removed);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key32Re.test(key[i]))
                                return "mapInt32Removed: integer key{k:int32} expected";
                            {
                                var error = $root.com.variflight.dataservice.ChangeDesc.verify(message.mapInt32Removed[key[i]]);
                                if (error)
                                    return "mapInt32Removed." + error;
                            }
                        }
                    }
                    if (message.mapInt64Removed != null && message.hasOwnProperty("mapInt64Removed")) {
                        if (!$util.isObject(message.mapInt64Removed))
                            return "mapInt64Removed: object expected";
                        var key = Object.keys(message.mapInt64Removed);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key64Re.test(key[i]))
                                return "mapInt64Removed: integer|Long key{k:int64} expected";
                            {
                                var error = $root.com.variflight.dataservice.ChangeDesc.verify(message.mapInt64Removed[key[i]]);
                                if (error)
                                    return "mapInt64Removed." + error;
                            }
                        }
                    }
                    if (message.mapBoolRemoved != null && message.hasOwnProperty("mapBoolRemoved")) {
                        if (!$util.isObject(message.mapBoolRemoved))
                            return "mapBoolRemoved: object expected";
                        var key = Object.keys(message.mapBoolRemoved);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key2Re.test(key[i]))
                                return "mapBoolRemoved: boolean key{k:bool} expected";
                            {
                                var error = $root.com.variflight.dataservice.ChangeDesc.verify(message.mapBoolRemoved[key[i]]);
                                if (error)
                                    return "mapBoolRemoved." + error;
                            }
                        }
                    }
                    if (message.mapStringRemoved != null && message.hasOwnProperty("mapStringRemoved")) {
                        if (!$util.isObject(message.mapStringRemoved))
                            return "mapStringRemoved: object expected";
                        var key = Object.keys(message.mapStringRemoved);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.com.variflight.dataservice.ChangeDesc.verify(message.mapStringRemoved[key[i]]);
                            if (error)
                                return "mapStringRemoved." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ChangeDesc message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.variflight.dataservice.ChangeDesc} ChangeDesc
                 */
                ChangeDesc.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.variflight.dataservice.ChangeDesc)
                        return object;
                    var message = new $root.com.variflight.dataservice.ChangeDesc();
                    if (object.fieldTags != null)
                        if (typeof object.fieldTags === "string")
                            $util.base64.decode(object.fieldTags, message.fieldTags = $util.newBuffer($util.base64.length(object.fieldTags)), 0);
                        else if (object.fieldTags.length)
                            message.fieldTags = object.fieldTags;
                    if (object.changeTags != null)
                        if (typeof object.changeTags === "string")
                            $util.base64.decode(object.changeTags, message.changeTags = $util.newBuffer($util.base64.length(object.changeTags)), 0);
                        else if (object.changeTags.length)
                            message.changeTags = object.changeTags;
                    if (object.fieldsChangeDescs) {
                        if (!Array.isArray(object.fieldsChangeDescs))
                            throw TypeError(".com.variflight.dataservice.ChangeDesc.fieldsChangeDescs: array expected");
                        message.fieldsChangeDescs = [];
                        for (var i = 0; i < object.fieldsChangeDescs.length; ++i) {
                            if (typeof object.fieldsChangeDescs[i] !== "object")
                                throw TypeError(".com.variflight.dataservice.ChangeDesc.fieldsChangeDescs: object expected");
                            message.fieldsChangeDescs[i] = $root.com.variflight.dataservice.ChangeDesc.fromObject(object.fieldsChangeDescs[i]);
                        }
                    }
                    if (object.mapInt32) {
                        if (typeof object.mapInt32 !== "object")
                            throw TypeError(".com.variflight.dataservice.ChangeDesc.mapInt32: object expected");
                        message.mapInt32 = {};
                        for (var keys = Object.keys(object.mapInt32), i = 0; i < keys.length; ++i) {
                            if (typeof object.mapInt32[keys[i]] !== "object")
                                throw TypeError(".com.variflight.dataservice.ChangeDesc.mapInt32: object expected");
                            message.mapInt32[keys[i]] = $root.com.variflight.dataservice.ChangeDesc.fromObject(object.mapInt32[keys[i]]);
                        }
                    }
                    if (object.mapInt64) {
                        if (typeof object.mapInt64 !== "object")
                            throw TypeError(".com.variflight.dataservice.ChangeDesc.mapInt64: object expected");
                        message.mapInt64 = {};
                        for (var keys = Object.keys(object.mapInt64), i = 0; i < keys.length; ++i) {
                            if (typeof object.mapInt64[keys[i]] !== "object")
                                throw TypeError(".com.variflight.dataservice.ChangeDesc.mapInt64: object expected");
                            message.mapInt64[keys[i]] = $root.com.variflight.dataservice.ChangeDesc.fromObject(object.mapInt64[keys[i]]);
                        }
                    }
                    if (object.mapBool) {
                        if (typeof object.mapBool !== "object")
                            throw TypeError(".com.variflight.dataservice.ChangeDesc.mapBool: object expected");
                        message.mapBool = {};
                        for (var keys = Object.keys(object.mapBool), i = 0; i < keys.length; ++i) {
                            if (typeof object.mapBool[keys[i]] !== "object")
                                throw TypeError(".com.variflight.dataservice.ChangeDesc.mapBool: object expected");
                            message.mapBool[keys[i]] = $root.com.variflight.dataservice.ChangeDesc.fromObject(object.mapBool[keys[i]]);
                        }
                    }
                    if (object.mapString) {
                        if (typeof object.mapString !== "object")
                            throw TypeError(".com.variflight.dataservice.ChangeDesc.mapString: object expected");
                        message.mapString = {};
                        for (var keys = Object.keys(object.mapString), i = 0; i < keys.length; ++i) {
                            if (typeof object.mapString[keys[i]] !== "object")
                                throw TypeError(".com.variflight.dataservice.ChangeDesc.mapString: object expected");
                            message.mapString[keys[i]] = $root.com.variflight.dataservice.ChangeDesc.fromObject(object.mapString[keys[i]]);
                        }
                    }
                    if (object.mapInt32Removed) {
                        if (typeof object.mapInt32Removed !== "object")
                            throw TypeError(".com.variflight.dataservice.ChangeDesc.mapInt32Removed: object expected");
                        message.mapInt32Removed = {};
                        for (var keys = Object.keys(object.mapInt32Removed), i = 0; i < keys.length; ++i) {
                            if (typeof object.mapInt32Removed[keys[i]] !== "object")
                                throw TypeError(".com.variflight.dataservice.ChangeDesc.mapInt32Removed: object expected");
                            message.mapInt32Removed[keys[i]] = $root.com.variflight.dataservice.ChangeDesc.fromObject(object.mapInt32Removed[keys[i]]);
                        }
                    }
                    if (object.mapInt64Removed) {
                        if (typeof object.mapInt64Removed !== "object")
                            throw TypeError(".com.variflight.dataservice.ChangeDesc.mapInt64Removed: object expected");
                        message.mapInt64Removed = {};
                        for (var keys = Object.keys(object.mapInt64Removed), i = 0; i < keys.length; ++i) {
                            if (typeof object.mapInt64Removed[keys[i]] !== "object")
                                throw TypeError(".com.variflight.dataservice.ChangeDesc.mapInt64Removed: object expected");
                            message.mapInt64Removed[keys[i]] = $root.com.variflight.dataservice.ChangeDesc.fromObject(object.mapInt64Removed[keys[i]]);
                        }
                    }
                    if (object.mapBoolRemoved) {
                        if (typeof object.mapBoolRemoved !== "object")
                            throw TypeError(".com.variflight.dataservice.ChangeDesc.mapBoolRemoved: object expected");
                        message.mapBoolRemoved = {};
                        for (var keys = Object.keys(object.mapBoolRemoved), i = 0; i < keys.length; ++i) {
                            if (typeof object.mapBoolRemoved[keys[i]] !== "object")
                                throw TypeError(".com.variflight.dataservice.ChangeDesc.mapBoolRemoved: object expected");
                            message.mapBoolRemoved[keys[i]] = $root.com.variflight.dataservice.ChangeDesc.fromObject(object.mapBoolRemoved[keys[i]]);
                        }
                    }
                    if (object.mapStringRemoved) {
                        if (typeof object.mapStringRemoved !== "object")
                            throw TypeError(".com.variflight.dataservice.ChangeDesc.mapStringRemoved: object expected");
                        message.mapStringRemoved = {};
                        for (var keys = Object.keys(object.mapStringRemoved), i = 0; i < keys.length; ++i) {
                            if (typeof object.mapStringRemoved[keys[i]] !== "object")
                                throw TypeError(".com.variflight.dataservice.ChangeDesc.mapStringRemoved: object expected");
                            message.mapStringRemoved[keys[i]] = $root.com.variflight.dataservice.ChangeDesc.fromObject(object.mapStringRemoved[keys[i]]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ChangeDesc message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @static
                 * @param {com.variflight.dataservice.ChangeDesc} message ChangeDesc
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ChangeDesc.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.fieldsChangeDescs = [];
                    if (options.objects || options.defaults) {
                        object.mapInt32 = {};
                        object.mapInt64 = {};
                        object.mapBool = {};
                        object.mapString = {};
                        object.mapInt32Removed = {};
                        object.mapInt64Removed = {};
                        object.mapBoolRemoved = {};
                        object.mapStringRemoved = {};
                    }
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.fieldTags = "";
                        else {
                            object.fieldTags = [];
                            if (options.bytes !== Array)
                                object.fieldTags = $util.newBuffer(object.fieldTags);
                        }
                        if (options.bytes === String)
                            object.changeTags = "";
                        else {
                            object.changeTags = [];
                            if (options.bytes !== Array)
                                object.changeTags = $util.newBuffer(object.changeTags);
                        }
                    }
                    if (message.fieldTags != null && message.hasOwnProperty("fieldTags"))
                        object.fieldTags = options.bytes === String ? $util.base64.encode(message.fieldTags, 0, message.fieldTags.length) : options.bytes === Array ? Array.prototype.slice.call(message.fieldTags) : message.fieldTags;
                    if (message.changeTags != null && message.hasOwnProperty("changeTags"))
                        object.changeTags = options.bytes === String ? $util.base64.encode(message.changeTags, 0, message.changeTags.length) : options.bytes === Array ? Array.prototype.slice.call(message.changeTags) : message.changeTags;
                    if (message.fieldsChangeDescs && message.fieldsChangeDescs.length) {
                        object.fieldsChangeDescs = [];
                        for (var j = 0; j < message.fieldsChangeDescs.length; ++j)
                            object.fieldsChangeDescs[j] = $root.com.variflight.dataservice.ChangeDesc.toObject(message.fieldsChangeDescs[j], options);
                    }
                    var keys2;
                    if (message.mapInt32 && (keys2 = Object.keys(message.mapInt32)).length) {
                        object.mapInt32 = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.mapInt32[keys2[j]] = $root.com.variflight.dataservice.ChangeDesc.toObject(message.mapInt32[keys2[j]], options);
                    }
                    if (message.mapInt64 && (keys2 = Object.keys(message.mapInt64)).length) {
                        object.mapInt64 = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.mapInt64[keys2[j]] = $root.com.variflight.dataservice.ChangeDesc.toObject(message.mapInt64[keys2[j]], options);
                    }
                    if (message.mapBool && (keys2 = Object.keys(message.mapBool)).length) {
                        object.mapBool = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.mapBool[keys2[j]] = $root.com.variflight.dataservice.ChangeDesc.toObject(message.mapBool[keys2[j]], options);
                    }
                    if (message.mapString && (keys2 = Object.keys(message.mapString)).length) {
                        object.mapString = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.mapString[keys2[j]] = $root.com.variflight.dataservice.ChangeDesc.toObject(message.mapString[keys2[j]], options);
                    }
                    if (message.mapInt32Removed && (keys2 = Object.keys(message.mapInt32Removed)).length) {
                        object.mapInt32Removed = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.mapInt32Removed[keys2[j]] = $root.com.variflight.dataservice.ChangeDesc.toObject(message.mapInt32Removed[keys2[j]], options);
                    }
                    if (message.mapInt64Removed && (keys2 = Object.keys(message.mapInt64Removed)).length) {
                        object.mapInt64Removed = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.mapInt64Removed[keys2[j]] = $root.com.variflight.dataservice.ChangeDesc.toObject(message.mapInt64Removed[keys2[j]], options);
                    }
                    if (message.mapBoolRemoved && (keys2 = Object.keys(message.mapBoolRemoved)).length) {
                        object.mapBoolRemoved = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.mapBoolRemoved[keys2[j]] = $root.com.variflight.dataservice.ChangeDesc.toObject(message.mapBoolRemoved[keys2[j]], options);
                    }
                    if (message.mapStringRemoved && (keys2 = Object.keys(message.mapStringRemoved)).length) {
                        object.mapStringRemoved = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.mapStringRemoved[keys2[j]] = $root.com.variflight.dataservice.ChangeDesc.toObject(message.mapStringRemoved[keys2[j]], options);
                    }
                    return object;
                };

                /**
                 * Converts this ChangeDesc to JSON.
                 * @function toJSON
                 * @memberof com.variflight.dataservice.ChangeDesc
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ChangeDesc.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ChangeDesc;
            })();

            return dataservice;
        })();

        variflight.fidstest = (function() {

            /**
             * Namespace fidstest.
             * @memberof com.variflight
             * @namespace
             */
            var fidstest = {};

            fidstest.flight = (function() {

                /**
                 * Namespace flight.
                 * @memberof com.variflight.fidstest
                 * @namespace
                 */
                var flight = {};

                flight.FlightInfo = (function() {

                    /**
                     * Properties of a FlightInfo.
                     * @memberof com.variflight.fidstest.flight
                     * @interface IFlightInfo
                     * @property {string|null} [fid] FlightInfo fid
                     * @property {boolean|null} [isArrive] FlightInfo isArrive
                     * @property {string|null} [fNo] FlightInfo fNo
                     * @property {number|Long|null} [fDate] FlightInfo fDate
                     * @property {google.protobuf.IStringValue|null} [aNo] FlightInfo aNo
                     * @property {string|null} [dep] FlightInfo dep
                     * @property {string|null} [arr] FlightInfo arr
                     * @property {number|Long|null} [std] FlightInfo std
                     * @property {number|Long|null} [sta] FlightInfo sta
                     * @property {google.protobuf.IInt64Value|null} [etd] FlightInfo etd
                     * @property {google.protobuf.IInt64Value|null} [eta] FlightInfo eta
                     * @property {google.protobuf.IInt64Value|null} [atd] FlightInfo atd
                     * @property {google.protobuf.IInt64Value|null} [ata] FlightInfo ata
                     * @property {google.protobuf.IStringValue|null} [fMode] FlightInfo fMode
                     * @property {string|null} [alIata] FlightInfo alIata
                     * @property {string|null} [alIcao] FlightInfo alIcao
                     * @property {string|null} [cla] FlightInfo cla
                     * @property {string|null} [fStatus] FlightInfo fStatus
                     * @property {google.protobuf.IStringValue|null} [delayCode] FlightInfo delayCode
                     * @property {google.protobuf.IStringValue|null} [delayCn] FlightInfo delayCn
                     * @property {google.protobuf.IStringValue|null} [sflight] FlightInfo sflight
                     * @property {google.protobuf.IStringValue|null} [stand] FlightInfo stand
                     * @property {google.protobuf.IStringValue|null} [gate] FlightInfo gate
                     * @property {google.protobuf.IStringValue|null} [car] FlightInfo car
                     * @property {google.protobuf.IStringValue|null} [mp1] FlightInfo mp1
                     * @property {google.protobuf.IStringValue|null} [cid] FlightInfo cid
                     * @property {google.protobuf.IStringValue|null} [cld] FlightInfo cld
                     * @property {google.protobuf.IStringValue|null} [cea] FlightInfo cea
                     * @property {google.protobuf.IStringValue|null} [vl] FlightInfo vl
                     * @property {Object.<string,string>|null} [msMap] FlightInfo msMap
                     * @property {Array.<string>|null} [rsArray] FlightInfo rsArray
                     */

                    /**
                     * Constructs a new FlightInfo.
                     * @memberof com.variflight.fidstest.flight
                     * @classdesc Represents a FlightInfo.
                     * @implements IFlightInfo
                     * @constructor
                     * @param {com.variflight.fidstest.flight.IFlightInfo=} [properties] Properties to set
                     */
                    function FlightInfo(properties) {
                        this.msMap = {};
                        this.rsArray = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FlightInfo fid.
                     * @member {string} fid
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.fid = "";

                    /**
                     * FlightInfo isArrive.
                     * @member {boolean} isArrive
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.isArrive = false;

                    /**
                     * FlightInfo fNo.
                     * @member {string} fNo
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.fNo = "";

                    /**
                     * FlightInfo fDate.
                     * @member {number|Long} fDate
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.fDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * FlightInfo aNo.
                     * @member {google.protobuf.IStringValue|null|undefined} aNo
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.aNo = null;

                    /**
                     * FlightInfo dep.
                     * @member {string} dep
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.dep = "";

                    /**
                     * FlightInfo arr.
                     * @member {string} arr
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.arr = "";

                    /**
                     * FlightInfo std.
                     * @member {number|Long} std
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.std = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * FlightInfo sta.
                     * @member {number|Long} sta
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.sta = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * FlightInfo etd.
                     * @member {google.protobuf.IInt64Value|null|undefined} etd
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.etd = null;

                    /**
                     * FlightInfo eta.
                     * @member {google.protobuf.IInt64Value|null|undefined} eta
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.eta = null;

                    /**
                     * FlightInfo atd.
                     * @member {google.protobuf.IInt64Value|null|undefined} atd
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.atd = null;

                    /**
                     * FlightInfo ata.
                     * @member {google.protobuf.IInt64Value|null|undefined} ata
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.ata = null;

                    /**
                     * FlightInfo fMode.
                     * @member {google.protobuf.IStringValue|null|undefined} fMode
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.fMode = null;

                    /**
                     * FlightInfo alIata.
                     * @member {string} alIata
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.alIata = "";

                    /**
                     * FlightInfo alIcao.
                     * @member {string} alIcao
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.alIcao = "";

                    /**
                     * FlightInfo cla.
                     * @member {string} cla
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.cla = "";

                    /**
                     * FlightInfo fStatus.
                     * @member {string} fStatus
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.fStatus = "";

                    /**
                     * FlightInfo delayCode.
                     * @member {google.protobuf.IStringValue|null|undefined} delayCode
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.delayCode = null;

                    /**
                     * FlightInfo delayCn.
                     * @member {google.protobuf.IStringValue|null|undefined} delayCn
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.delayCn = null;

                    /**
                     * FlightInfo sflight.
                     * @member {google.protobuf.IStringValue|null|undefined} sflight
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.sflight = null;

                    /**
                     * FlightInfo stand.
                     * @member {google.protobuf.IStringValue|null|undefined} stand
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.stand = null;

                    /**
                     * FlightInfo gate.
                     * @member {google.protobuf.IStringValue|null|undefined} gate
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.gate = null;

                    /**
                     * FlightInfo car.
                     * @member {google.protobuf.IStringValue|null|undefined} car
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.car = null;

                    /**
                     * FlightInfo mp1.
                     * @member {google.protobuf.IStringValue|null|undefined} mp1
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.mp1 = null;

                    /**
                     * FlightInfo cid.
                     * @member {google.protobuf.IStringValue|null|undefined} cid
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.cid = null;

                    /**
                     * FlightInfo cld.
                     * @member {google.protobuf.IStringValue|null|undefined} cld
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.cld = null;

                    /**
                     * FlightInfo cea.
                     * @member {google.protobuf.IStringValue|null|undefined} cea
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.cea = null;

                    /**
                     * FlightInfo vl.
                     * @member {google.protobuf.IStringValue|null|undefined} vl
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.vl = null;

                    /**
                     * FlightInfo msMap.
                     * @member {Object.<string,string>} msMap
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.msMap = $util.emptyObject;

                    /**
                     * FlightInfo rsArray.
                     * @member {Array.<string>} rsArray
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     */
                    FlightInfo.prototype.rsArray = $util.emptyArray;

                    /**
                     * Creates a new FlightInfo instance using the specified properties.
                     * @function create
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @static
                     * @param {com.variflight.fidstest.flight.IFlightInfo=} [properties] Properties to set
                     * @returns {com.variflight.fidstest.flight.FlightInfo} FlightInfo instance
                     */
                    FlightInfo.create = function create(properties) {
                        return new FlightInfo(properties);
                    };

                    /**
                     * Encodes the specified FlightInfo message. Does not implicitly {@link com.variflight.fidstest.flight.FlightInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @static
                     * @param {com.variflight.fidstest.flight.IFlightInfo} message FlightInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FlightInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.fid != null && Object.hasOwnProperty.call(message, "fid"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.fid);
                        if (message.isArrive != null && Object.hasOwnProperty.call(message, "isArrive"))
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isArrive);
                        if (message.fNo != null && Object.hasOwnProperty.call(message, "fNo"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.fNo);
                        if (message.fDate != null && Object.hasOwnProperty.call(message, "fDate"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.fDate);
                        if (message.aNo != null && Object.hasOwnProperty.call(message, "aNo"))
                            $root.google.protobuf.StringValue.encode(message.aNo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.dep != null && Object.hasOwnProperty.call(message, "dep"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.dep);
                        if (message.arr != null && Object.hasOwnProperty.call(message, "arr"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.arr);
                        if (message.std != null && Object.hasOwnProperty.call(message, "std"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.std);
                        if (message.sta != null && Object.hasOwnProperty.call(message, "sta"))
                            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.sta);
                        if (message.etd != null && Object.hasOwnProperty.call(message, "etd"))
                            $root.google.protobuf.Int64Value.encode(message.etd, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        if (message.eta != null && Object.hasOwnProperty.call(message, "eta"))
                            $root.google.protobuf.Int64Value.encode(message.eta, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                        if (message.atd != null && Object.hasOwnProperty.call(message, "atd"))
                            $root.google.protobuf.Int64Value.encode(message.atd, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                        if (message.ata != null && Object.hasOwnProperty.call(message, "ata"))
                            $root.google.protobuf.Int64Value.encode(message.ata, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                        if (message.fMode != null && Object.hasOwnProperty.call(message, "fMode"))
                            $root.google.protobuf.StringValue.encode(message.fMode, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                        if (message.alIata != null && Object.hasOwnProperty.call(message, "alIata"))
                            writer.uint32(/* id 15, wireType 2 =*/122).string(message.alIata);
                        if (message.alIcao != null && Object.hasOwnProperty.call(message, "alIcao"))
                            writer.uint32(/* id 16, wireType 2 =*/130).string(message.alIcao);
                        if (message.cla != null && Object.hasOwnProperty.call(message, "cla"))
                            writer.uint32(/* id 17, wireType 2 =*/138).string(message.cla);
                        if (message.fStatus != null && Object.hasOwnProperty.call(message, "fStatus"))
                            writer.uint32(/* id 18, wireType 2 =*/146).string(message.fStatus);
                        if (message.delayCode != null && Object.hasOwnProperty.call(message, "delayCode"))
                            $root.google.protobuf.StringValue.encode(message.delayCode, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
                        if (message.delayCn != null && Object.hasOwnProperty.call(message, "delayCn"))
                            $root.google.protobuf.StringValue.encode(message.delayCn, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
                        if (message.sflight != null && Object.hasOwnProperty.call(message, "sflight"))
                            $root.google.protobuf.StringValue.encode(message.sflight, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
                        if (message.stand != null && Object.hasOwnProperty.call(message, "stand"))
                            $root.google.protobuf.StringValue.encode(message.stand, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
                        if (message.gate != null && Object.hasOwnProperty.call(message, "gate"))
                            $root.google.protobuf.StringValue.encode(message.gate, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
                        if (message.car != null && Object.hasOwnProperty.call(message, "car"))
                            $root.google.protobuf.StringValue.encode(message.car, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
                        if (message.mp1 != null && Object.hasOwnProperty.call(message, "mp1"))
                            $root.google.protobuf.StringValue.encode(message.mp1, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
                        if (message.cid != null && Object.hasOwnProperty.call(message, "cid"))
                            $root.google.protobuf.StringValue.encode(message.cid, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
                        if (message.cld != null && Object.hasOwnProperty.call(message, "cld"))
                            $root.google.protobuf.StringValue.encode(message.cld, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
                        if (message.cea != null && Object.hasOwnProperty.call(message, "cea"))
                            $root.google.protobuf.StringValue.encode(message.cea, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
                        if (message.vl != null && Object.hasOwnProperty.call(message, "vl"))
                            $root.google.protobuf.StringValue.encode(message.vl, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
                        if (message.msMap != null && Object.hasOwnProperty.call(message, "msMap"))
                            for (var keys = Object.keys(message.msMap), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 30, wireType 2 =*/242).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.msMap[keys[i]]).ldelim();
                        if (message.rsArray != null && message.rsArray.length)
                            for (var i = 0; i < message.rsArray.length; ++i)
                                writer.uint32(/* id 31, wireType 2 =*/250).string(message.rsArray[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified FlightInfo message, length delimited. Does not implicitly {@link com.variflight.fidstest.flight.FlightInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @static
                     * @param {com.variflight.fidstest.flight.IFlightInfo} message FlightInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FlightInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a FlightInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.variflight.fidstest.flight.FlightInfo} FlightInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FlightInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.variflight.fidstest.flight.FlightInfo(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.fid = reader.string();
                                break;
                            case 2:
                                message.isArrive = reader.bool();
                                break;
                            case 3:
                                message.fNo = reader.string();
                                break;
                            case 4:
                                message.fDate = reader.int64();
                                break;
                            case 5:
                                message.aNo = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 6:
                                message.dep = reader.string();
                                break;
                            case 7:
                                message.arr = reader.string();
                                break;
                            case 8:
                                message.std = reader.int64();
                                break;
                            case 9:
                                message.sta = reader.int64();
                                break;
                            case 10:
                                message.etd = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                                break;
                            case 11:
                                message.eta = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                                break;
                            case 12:
                                message.atd = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                                break;
                            case 13:
                                message.ata = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                                break;
                            case 14:
                                message.fMode = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 15:
                                message.alIata = reader.string();
                                break;
                            case 16:
                                message.alIcao = reader.string();
                                break;
                            case 17:
                                message.cla = reader.string();
                                break;
                            case 18:
                                message.fStatus = reader.string();
                                break;
                            case 19:
                                message.delayCode = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 20:
                                message.delayCn = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 21:
                                message.sflight = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 22:
                                message.stand = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 23:
                                message.gate = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 24:
                                message.car = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 25:
                                message.mp1 = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 26:
                                message.cid = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 27:
                                message.cld = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 28:
                                message.cea = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 29:
                                message.vl = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            case 30:
                                reader.skip().pos++;
                                if (message.msMap === $util.emptyObject)
                                    message.msMap = {};
                                key = reader.string();
                                reader.pos++;
                                message.msMap[key] = reader.string();
                                break;
                            case 31:
                                if (!(message.rsArray && message.rsArray.length))
                                    message.rsArray = [];
                                message.rsArray.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a FlightInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.variflight.fidstest.flight.FlightInfo} FlightInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FlightInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a FlightInfo message.
                     * @function verify
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    FlightInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.fid != null && message.hasOwnProperty("fid"))
                            if (!$util.isString(message.fid))
                                return "fid: string expected";
                        if (message.isArrive != null && message.hasOwnProperty("isArrive"))
                            if (typeof message.isArrive !== "boolean")
                                return "isArrive: boolean expected";
                        if (message.fNo != null && message.hasOwnProperty("fNo"))
                            if (!$util.isString(message.fNo))
                                return "fNo: string expected";
                        if (message.fDate != null && message.hasOwnProperty("fDate"))
                            if (!$util.isInteger(message.fDate) && !(message.fDate && $util.isInteger(message.fDate.low) && $util.isInteger(message.fDate.high)))
                                return "fDate: integer|Long expected";
                        if (message.aNo != null && message.hasOwnProperty("aNo")) {
                            var error = $root.google.protobuf.StringValue.verify(message.aNo);
                            if (error)
                                return "aNo." + error;
                        }
                        if (message.dep != null && message.hasOwnProperty("dep"))
                            if (!$util.isString(message.dep))
                                return "dep: string expected";
                        if (message.arr != null && message.hasOwnProperty("arr"))
                            if (!$util.isString(message.arr))
                                return "arr: string expected";
                        if (message.std != null && message.hasOwnProperty("std"))
                            if (!$util.isInteger(message.std) && !(message.std && $util.isInteger(message.std.low) && $util.isInteger(message.std.high)))
                                return "std: integer|Long expected";
                        if (message.sta != null && message.hasOwnProperty("sta"))
                            if (!$util.isInteger(message.sta) && !(message.sta && $util.isInteger(message.sta.low) && $util.isInteger(message.sta.high)))
                                return "sta: integer|Long expected";
                        if (message.etd != null && message.hasOwnProperty("etd")) {
                            var error = $root.google.protobuf.Int64Value.verify(message.etd);
                            if (error)
                                return "etd." + error;
                        }
                        if (message.eta != null && message.hasOwnProperty("eta")) {
                            var error = $root.google.protobuf.Int64Value.verify(message.eta);
                            if (error)
                                return "eta." + error;
                        }
                        if (message.atd != null && message.hasOwnProperty("atd")) {
                            var error = $root.google.protobuf.Int64Value.verify(message.atd);
                            if (error)
                                return "atd." + error;
                        }
                        if (message.ata != null && message.hasOwnProperty("ata")) {
                            var error = $root.google.protobuf.Int64Value.verify(message.ata);
                            if (error)
                                return "ata." + error;
                        }
                        if (message.fMode != null && message.hasOwnProperty("fMode")) {
                            var error = $root.google.protobuf.StringValue.verify(message.fMode);
                            if (error)
                                return "fMode." + error;
                        }
                        if (message.alIata != null && message.hasOwnProperty("alIata"))
                            if (!$util.isString(message.alIata))
                                return "alIata: string expected";
                        if (message.alIcao != null && message.hasOwnProperty("alIcao"))
                            if (!$util.isString(message.alIcao))
                                return "alIcao: string expected";
                        if (message.cla != null && message.hasOwnProperty("cla"))
                            if (!$util.isString(message.cla))
                                return "cla: string expected";
                        if (message.fStatus != null && message.hasOwnProperty("fStatus"))
                            if (!$util.isString(message.fStatus))
                                return "fStatus: string expected";
                        if (message.delayCode != null && message.hasOwnProperty("delayCode")) {
                            var error = $root.google.protobuf.StringValue.verify(message.delayCode);
                            if (error)
                                return "delayCode." + error;
                        }
                        if (message.delayCn != null && message.hasOwnProperty("delayCn")) {
                            var error = $root.google.protobuf.StringValue.verify(message.delayCn);
                            if (error)
                                return "delayCn." + error;
                        }
                        if (message.sflight != null && message.hasOwnProperty("sflight")) {
                            var error = $root.google.protobuf.StringValue.verify(message.sflight);
                            if (error)
                                return "sflight." + error;
                        }
                        if (message.stand != null && message.hasOwnProperty("stand")) {
                            var error = $root.google.protobuf.StringValue.verify(message.stand);
                            if (error)
                                return "stand." + error;
                        }
                        if (message.gate != null && message.hasOwnProperty("gate")) {
                            var error = $root.google.protobuf.StringValue.verify(message.gate);
                            if (error)
                                return "gate." + error;
                        }
                        if (message.car != null && message.hasOwnProperty("car")) {
                            var error = $root.google.protobuf.StringValue.verify(message.car);
                            if (error)
                                return "car." + error;
                        }
                        if (message.mp1 != null && message.hasOwnProperty("mp1")) {
                            var error = $root.google.protobuf.StringValue.verify(message.mp1);
                            if (error)
                                return "mp1." + error;
                        }
                        if (message.cid != null && message.hasOwnProperty("cid")) {
                            var error = $root.google.protobuf.StringValue.verify(message.cid);
                            if (error)
                                return "cid." + error;
                        }
                        if (message.cld != null && message.hasOwnProperty("cld")) {
                            var error = $root.google.protobuf.StringValue.verify(message.cld);
                            if (error)
                                return "cld." + error;
                        }
                        if (message.cea != null && message.hasOwnProperty("cea")) {
                            var error = $root.google.protobuf.StringValue.verify(message.cea);
                            if (error)
                                return "cea." + error;
                        }
                        if (message.vl != null && message.hasOwnProperty("vl")) {
                            var error = $root.google.protobuf.StringValue.verify(message.vl);
                            if (error)
                                return "vl." + error;
                        }
                        if (message.msMap != null && message.hasOwnProperty("msMap")) {
                            if (!$util.isObject(message.msMap))
                                return "msMap: object expected";
                            var key = Object.keys(message.msMap);
                            for (var i = 0; i < key.length; ++i)
                                if (!$util.isString(message.msMap[key[i]]))
                                    return "msMap: string{k:string} expected";
                        }
                        if (message.rsArray != null && message.hasOwnProperty("rsArray")) {
                            if (!Array.isArray(message.rsArray))
                                return "rsArray: array expected";
                            for (var i = 0; i < message.rsArray.length; ++i)
                                if (!$util.isString(message.rsArray[i]))
                                    return "rsArray: string[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a FlightInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.variflight.fidstest.flight.FlightInfo} FlightInfo
                     */
                    FlightInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.variflight.fidstest.flight.FlightInfo)
                            return object;
                        var message = new $root.com.variflight.fidstest.flight.FlightInfo();
                        if (object.fid != null)
                            message.fid = String(object.fid);
                        if (object.isArrive != null)
                            message.isArrive = Boolean(object.isArrive);
                        if (object.fNo != null)
                            message.fNo = String(object.fNo);
                        if (object.fDate != null)
                            if ($util.Long)
                                (message.fDate = $util.Long.fromValue(object.fDate)).unsigned = false;
                            else if (typeof object.fDate === "string")
                                message.fDate = parseInt(object.fDate, 10);
                            else if (typeof object.fDate === "number")
                                message.fDate = object.fDate;
                            else if (typeof object.fDate === "object")
                                message.fDate = new $util.LongBits(object.fDate.low >>> 0, object.fDate.high >>> 0).toNumber();
                        if (object.aNo != null) {
                            if (typeof object.aNo !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.aNo: object expected");
                            message.aNo = $root.google.protobuf.StringValue.fromObject(object.aNo);
                        }
                        if (object.dep != null)
                            message.dep = String(object.dep);
                        if (object.arr != null)
                            message.arr = String(object.arr);
                        if (object.std != null)
                            if ($util.Long)
                                (message.std = $util.Long.fromValue(object.std)).unsigned = false;
                            else if (typeof object.std === "string")
                                message.std = parseInt(object.std, 10);
                            else if (typeof object.std === "number")
                                message.std = object.std;
                            else if (typeof object.std === "object")
                                message.std = new $util.LongBits(object.std.low >>> 0, object.std.high >>> 0).toNumber();
                        if (object.sta != null)
                            if ($util.Long)
                                (message.sta = $util.Long.fromValue(object.sta)).unsigned = false;
                            else if (typeof object.sta === "string")
                                message.sta = parseInt(object.sta, 10);
                            else if (typeof object.sta === "number")
                                message.sta = object.sta;
                            else if (typeof object.sta === "object")
                                message.sta = new $util.LongBits(object.sta.low >>> 0, object.sta.high >>> 0).toNumber();
                        if (object.etd != null) {
                            if (typeof object.etd !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.etd: object expected");
                            message.etd = $root.google.protobuf.Int64Value.fromObject(object.etd);
                        }
                        if (object.eta != null) {
                            if (typeof object.eta !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.eta: object expected");
                            message.eta = $root.google.protobuf.Int64Value.fromObject(object.eta);
                        }
                        if (object.atd != null) {
                            if (typeof object.atd !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.atd: object expected");
                            message.atd = $root.google.protobuf.Int64Value.fromObject(object.atd);
                        }
                        if (object.ata != null) {
                            if (typeof object.ata !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.ata: object expected");
                            message.ata = $root.google.protobuf.Int64Value.fromObject(object.ata);
                        }
                        if (object.fMode != null) {
                            if (typeof object.fMode !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.fMode: object expected");
                            message.fMode = $root.google.protobuf.StringValue.fromObject(object.fMode);
                        }
                        if (object.alIata != null)
                            message.alIata = String(object.alIata);
                        if (object.alIcao != null)
                            message.alIcao = String(object.alIcao);
                        if (object.cla != null)
                            message.cla = String(object.cla);
                        if (object.fStatus != null)
                            message.fStatus = String(object.fStatus);
                        if (object.delayCode != null) {
                            if (typeof object.delayCode !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.delayCode: object expected");
                            message.delayCode = $root.google.protobuf.StringValue.fromObject(object.delayCode);
                        }
                        if (object.delayCn != null) {
                            if (typeof object.delayCn !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.delayCn: object expected");
                            message.delayCn = $root.google.protobuf.StringValue.fromObject(object.delayCn);
                        }
                        if (object.sflight != null) {
                            if (typeof object.sflight !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.sflight: object expected");
                            message.sflight = $root.google.protobuf.StringValue.fromObject(object.sflight);
                        }
                        if (object.stand != null) {
                            if (typeof object.stand !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.stand: object expected");
                            message.stand = $root.google.protobuf.StringValue.fromObject(object.stand);
                        }
                        if (object.gate != null) {
                            if (typeof object.gate !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.gate: object expected");
                            message.gate = $root.google.protobuf.StringValue.fromObject(object.gate);
                        }
                        if (object.car != null) {
                            if (typeof object.car !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.car: object expected");
                            message.car = $root.google.protobuf.StringValue.fromObject(object.car);
                        }
                        if (object.mp1 != null) {
                            if (typeof object.mp1 !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.mp1: object expected");
                            message.mp1 = $root.google.protobuf.StringValue.fromObject(object.mp1);
                        }
                        if (object.cid != null) {
                            if (typeof object.cid !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.cid: object expected");
                            message.cid = $root.google.protobuf.StringValue.fromObject(object.cid);
                        }
                        if (object.cld != null) {
                            if (typeof object.cld !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.cld: object expected");
                            message.cld = $root.google.protobuf.StringValue.fromObject(object.cld);
                        }
                        if (object.cea != null) {
                            if (typeof object.cea !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.cea: object expected");
                            message.cea = $root.google.protobuf.StringValue.fromObject(object.cea);
                        }
                        if (object.vl != null) {
                            if (typeof object.vl !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.vl: object expected");
                            message.vl = $root.google.protobuf.StringValue.fromObject(object.vl);
                        }
                        if (object.msMap) {
                            if (typeof object.msMap !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.msMap: object expected");
                            message.msMap = {};
                            for (var keys = Object.keys(object.msMap), i = 0; i < keys.length; ++i)
                                message.msMap[keys[i]] = String(object.msMap[keys[i]]);
                        }
                        if (object.rsArray) {
                            if (!Array.isArray(object.rsArray))
                                throw TypeError(".com.variflight.fidstest.flight.FlightInfo.rsArray: array expected");
                            message.rsArray = [];
                            for (var i = 0; i < object.rsArray.length; ++i)
                                message.rsArray[i] = String(object.rsArray[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a FlightInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @static
                     * @param {com.variflight.fidstest.flight.FlightInfo} message FlightInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FlightInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.rsArray = [];
                        if (options.objects || options.defaults)
                            object.msMap = {};
                        if (options.defaults) {
                            object.fid = "";
                            object.isArrive = false;
                            object.fNo = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.fDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.fDate = options.longs === String ? "0" : 0;
                            object.aNo = null;
                            object.dep = "";
                            object.arr = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.std = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.std = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.sta = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.sta = options.longs === String ? "0" : 0;
                            object.etd = null;
                            object.eta = null;
                            object.atd = null;
                            object.ata = null;
                            object.fMode = null;
                            object.alIata = "";
                            object.alIcao = "";
                            object.cla = "";
                            object.fStatus = "";
                            object.delayCode = null;
                            object.delayCn = null;
                            object.sflight = null;
                            object.stand = null;
                            object.gate = null;
                            object.car = null;
                            object.mp1 = null;
                            object.cid = null;
                            object.cld = null;
                            object.cea = null;
                            object.vl = null;
                        }
                        if (message.fid != null && message.hasOwnProperty("fid"))
                            object.fid = message.fid;
                        if (message.isArrive != null && message.hasOwnProperty("isArrive"))
                            object.isArrive = message.isArrive;
                        if (message.fNo != null && message.hasOwnProperty("fNo"))
                            object.fNo = message.fNo;
                        if (message.fDate != null && message.hasOwnProperty("fDate"))
                            if (typeof message.fDate === "number")
                                object.fDate = options.longs === String ? String(message.fDate) : message.fDate;
                            else
                                object.fDate = options.longs === String ? $util.Long.prototype.toString.call(message.fDate) : options.longs === Number ? new $util.LongBits(message.fDate.low >>> 0, message.fDate.high >>> 0).toNumber() : message.fDate;
                        if (message.aNo != null && message.hasOwnProperty("aNo"))
                            object.aNo = $root.google.protobuf.StringValue.toObject(message.aNo, options);
                        if (message.dep != null && message.hasOwnProperty("dep"))
                            object.dep = message.dep;
                        if (message.arr != null && message.hasOwnProperty("arr"))
                            object.arr = message.arr;
                        if (message.std != null && message.hasOwnProperty("std"))
                            if (typeof message.std === "number")
                                object.std = options.longs === String ? String(message.std) : message.std;
                            else
                                object.std = options.longs === String ? $util.Long.prototype.toString.call(message.std) : options.longs === Number ? new $util.LongBits(message.std.low >>> 0, message.std.high >>> 0).toNumber() : message.std;
                        if (message.sta != null && message.hasOwnProperty("sta"))
                            if (typeof message.sta === "number")
                                object.sta = options.longs === String ? String(message.sta) : message.sta;
                            else
                                object.sta = options.longs === String ? $util.Long.prototype.toString.call(message.sta) : options.longs === Number ? new $util.LongBits(message.sta.low >>> 0, message.sta.high >>> 0).toNumber() : message.sta;
                        if (message.etd != null && message.hasOwnProperty("etd"))
                            object.etd = $root.google.protobuf.Int64Value.toObject(message.etd, options);
                        if (message.eta != null && message.hasOwnProperty("eta"))
                            object.eta = $root.google.protobuf.Int64Value.toObject(message.eta, options);
                        if (message.atd != null && message.hasOwnProperty("atd"))
                            object.atd = $root.google.protobuf.Int64Value.toObject(message.atd, options);
                        if (message.ata != null && message.hasOwnProperty("ata"))
                            object.ata = $root.google.protobuf.Int64Value.toObject(message.ata, options);
                        if (message.fMode != null && message.hasOwnProperty("fMode"))
                            object.fMode = $root.google.protobuf.StringValue.toObject(message.fMode, options);
                        if (message.alIata != null && message.hasOwnProperty("alIata"))
                            object.alIata = message.alIata;
                        if (message.alIcao != null && message.hasOwnProperty("alIcao"))
                            object.alIcao = message.alIcao;
                        if (message.cla != null && message.hasOwnProperty("cla"))
                            object.cla = message.cla;
                        if (message.fStatus != null && message.hasOwnProperty("fStatus"))
                            object.fStatus = message.fStatus;
                        if (message.delayCode != null && message.hasOwnProperty("delayCode"))
                            object.delayCode = $root.google.protobuf.StringValue.toObject(message.delayCode, options);
                        if (message.delayCn != null && message.hasOwnProperty("delayCn"))
                            object.delayCn = $root.google.protobuf.StringValue.toObject(message.delayCn, options);
                        if (message.sflight != null && message.hasOwnProperty("sflight"))
                            object.sflight = $root.google.protobuf.StringValue.toObject(message.sflight, options);
                        if (message.stand != null && message.hasOwnProperty("stand"))
                            object.stand = $root.google.protobuf.StringValue.toObject(message.stand, options);
                        if (message.gate != null && message.hasOwnProperty("gate"))
                            object.gate = $root.google.protobuf.StringValue.toObject(message.gate, options);
                        if (message.car != null && message.hasOwnProperty("car"))
                            object.car = $root.google.protobuf.StringValue.toObject(message.car, options);
                        if (message.mp1 != null && message.hasOwnProperty("mp1"))
                            object.mp1 = $root.google.protobuf.StringValue.toObject(message.mp1, options);
                        if (message.cid != null && message.hasOwnProperty("cid"))
                            object.cid = $root.google.protobuf.StringValue.toObject(message.cid, options);
                        if (message.cld != null && message.hasOwnProperty("cld"))
                            object.cld = $root.google.protobuf.StringValue.toObject(message.cld, options);
                        if (message.cea != null && message.hasOwnProperty("cea"))
                            object.cea = $root.google.protobuf.StringValue.toObject(message.cea, options);
                        if (message.vl != null && message.hasOwnProperty("vl"))
                            object.vl = $root.google.protobuf.StringValue.toObject(message.vl, options);
                        var keys2;
                        if (message.msMap && (keys2 = Object.keys(message.msMap)).length) {
                            object.msMap = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.msMap[keys2[j]] = message.msMap[keys2[j]];
                        }
                        if (message.rsArray && message.rsArray.length) {
                            object.rsArray = [];
                            for (var j = 0; j < message.rsArray.length; ++j)
                                object.rsArray[j] = message.rsArray[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this FlightInfo to JSON.
                     * @function toJSON
                     * @memberof com.variflight.fidstest.flight.FlightInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    FlightInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return FlightInfo;
                })();

                flight.Nothing = (function() {

                    /**
                     * Properties of a Nothing.
                     * @memberof com.variflight.fidstest.flight
                     * @interface INothing
                     * @property {string|null} [test] Nothing test
                     */

                    /**
                     * Constructs a new Nothing.
                     * @memberof com.variflight.fidstest.flight
                     * @classdesc Represents a Nothing.
                     * @implements INothing
                     * @constructor
                     * @param {com.variflight.fidstest.flight.INothing=} [properties] Properties to set
                     */
                    function Nothing(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Nothing test.
                     * @member {string} test
                     * @memberof com.variflight.fidstest.flight.Nothing
                     * @instance
                     */
                    Nothing.prototype.test = "";

                    /**
                     * Creates a new Nothing instance using the specified properties.
                     * @function create
                     * @memberof com.variflight.fidstest.flight.Nothing
                     * @static
                     * @param {com.variflight.fidstest.flight.INothing=} [properties] Properties to set
                     * @returns {com.variflight.fidstest.flight.Nothing} Nothing instance
                     */
                    Nothing.create = function create(properties) {
                        return new Nothing(properties);
                    };

                    /**
                     * Encodes the specified Nothing message. Does not implicitly {@link com.variflight.fidstest.flight.Nothing.verify|verify} messages.
                     * @function encode
                     * @memberof com.variflight.fidstest.flight.Nothing
                     * @static
                     * @param {com.variflight.fidstest.flight.INothing} message Nothing message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Nothing.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.test != null && Object.hasOwnProperty.call(message, "test"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.test);
                        return writer;
                    };

                    /**
                     * Encodes the specified Nothing message, length delimited. Does not implicitly {@link com.variflight.fidstest.flight.Nothing.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.variflight.fidstest.flight.Nothing
                     * @static
                     * @param {com.variflight.fidstest.flight.INothing} message Nothing message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Nothing.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Nothing message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.variflight.fidstest.flight.Nothing
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.variflight.fidstest.flight.Nothing} Nothing
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Nothing.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.variflight.fidstest.flight.Nothing();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.test = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Nothing message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.variflight.fidstest.flight.Nothing
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.variflight.fidstest.flight.Nothing} Nothing
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Nothing.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Nothing message.
                     * @function verify
                     * @memberof com.variflight.fidstest.flight.Nothing
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Nothing.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.test != null && message.hasOwnProperty("test"))
                            if (!$util.isString(message.test))
                                return "test: string expected";
                        return null;
                    };

                    /**
                     * Creates a Nothing message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.variflight.fidstest.flight.Nothing
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.variflight.fidstest.flight.Nothing} Nothing
                     */
                    Nothing.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.variflight.fidstest.flight.Nothing)
                            return object;
                        var message = new $root.com.variflight.fidstest.flight.Nothing();
                        if (object.test != null)
                            message.test = String(object.test);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Nothing message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.variflight.fidstest.flight.Nothing
                     * @static
                     * @param {com.variflight.fidstest.flight.Nothing} message Nothing
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Nothing.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.test = "";
                        if (message.test != null && message.hasOwnProperty("test"))
                            object.test = message.test;
                        return object;
                    };

                    /**
                     * Converts this Nothing to JSON.
                     * @function toJSON
                     * @memberof com.variflight.fidstest.flight.Nothing
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Nothing.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Nothing;
                })();

                flight.FlightList = (function() {

                    /**
                     * Properties of a FlightList.
                     * @memberof com.variflight.fidstest.flight
                     * @interface IFlightList
                     * @property {Object.<string,com.variflight.fidstest.flight.IFlightInfo>|null} [value] FlightList value
                     */

                    /**
                     * Constructs a new FlightList.
                     * @memberof com.variflight.fidstest.flight
                     * @classdesc Represents a FlightList.
                     * @implements IFlightList
                     * @constructor
                     * @param {com.variflight.fidstest.flight.IFlightList=} [properties] Properties to set
                     */
                    function FlightList(properties) {
                        this.value = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FlightList value.
                     * @member {Object.<string,com.variflight.fidstest.flight.IFlightInfo>} value
                     * @memberof com.variflight.fidstest.flight.FlightList
                     * @instance
                     */
                    FlightList.prototype.value = $util.emptyObject;

                    /**
                     * Creates a new FlightList instance using the specified properties.
                     * @function create
                     * @memberof com.variflight.fidstest.flight.FlightList
                     * @static
                     * @param {com.variflight.fidstest.flight.IFlightList=} [properties] Properties to set
                     * @returns {com.variflight.fidstest.flight.FlightList} FlightList instance
                     */
                    FlightList.create = function create(properties) {
                        return new FlightList(properties);
                    };

                    /**
                     * Encodes the specified FlightList message. Does not implicitly {@link com.variflight.fidstest.flight.FlightList.verify|verify} messages.
                     * @function encode
                     * @memberof com.variflight.fidstest.flight.FlightList
                     * @static
                     * @param {com.variflight.fidstest.flight.IFlightList} message FlightList message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FlightList.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                            for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.com.variflight.fidstest.flight.FlightInfo.encode(message.value[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        return writer;
                    };

                    /**
                     * Encodes the specified FlightList message, length delimited. Does not implicitly {@link com.variflight.fidstest.flight.FlightList.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.variflight.fidstest.flight.FlightList
                     * @static
                     * @param {com.variflight.fidstest.flight.IFlightList} message FlightList message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FlightList.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a FlightList message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.variflight.fidstest.flight.FlightList
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.variflight.fidstest.flight.FlightList} FlightList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FlightList.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.variflight.fidstest.flight.FlightList(), key;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                reader.skip().pos++;
                                if (message.value === $util.emptyObject)
                                    message.value = {};
                                key = reader.string();
                                reader.pos++;
                                message.value[key] = $root.com.variflight.fidstest.flight.FlightInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a FlightList message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.variflight.fidstest.flight.FlightList
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.variflight.fidstest.flight.FlightList} FlightList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FlightList.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a FlightList message.
                     * @function verify
                     * @memberof com.variflight.fidstest.flight.FlightList
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    FlightList.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.value != null && message.hasOwnProperty("value")) {
                            if (!$util.isObject(message.value))
                                return "value: object expected";
                            var key = Object.keys(message.value);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.com.variflight.fidstest.flight.FlightInfo.verify(message.value[key[i]]);
                                if (error)
                                    return "value." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a FlightList message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.variflight.fidstest.flight.FlightList
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.variflight.fidstest.flight.FlightList} FlightList
                     */
                    FlightList.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.variflight.fidstest.flight.FlightList)
                            return object;
                        var message = new $root.com.variflight.fidstest.flight.FlightList();
                        if (object.value) {
                            if (typeof object.value !== "object")
                                throw TypeError(".com.variflight.fidstest.flight.FlightList.value: object expected");
                            message.value = {};
                            for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i) {
                                if (typeof object.value[keys[i]] !== "object")
                                    throw TypeError(".com.variflight.fidstest.flight.FlightList.value: object expected");
                                message.value[keys[i]] = $root.com.variflight.fidstest.flight.FlightInfo.fromObject(object.value[keys[i]]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a FlightList message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.variflight.fidstest.flight.FlightList
                     * @static
                     * @param {com.variflight.fidstest.flight.FlightList} message FlightList
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FlightList.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults)
                            object.value = {};
                        var keys2;
                        if (message.value && (keys2 = Object.keys(message.value)).length) {
                            object.value = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.value[keys2[j]] = $root.com.variflight.fidstest.flight.FlightInfo.toObject(message.value[keys2[j]], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this FlightList to JSON.
                     * @function toJSON
                     * @memberof com.variflight.fidstest.flight.FlightList
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    FlightList.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return FlightList;
                })();

                flight.FlightService = (function() {

                    /**
                     * Constructs a new FlightService service.
                     * @memberof com.variflight.fidstest.flight
                     * @classdesc Represents a FlightService
                     * @extends $protobuf.rpc.Service
                     * @constructor
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     */
                    function FlightService(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }

                    (FlightService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = FlightService;

                    /**
                     * Creates new FlightService service using the specified rpc implementation.
                     * @function create
                     * @memberof com.variflight.fidstest.flight.FlightService
                     * @static
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     * @returns {FlightService} RPC service. Useful where requests and/or responses are streamed.
                     */
                    FlightService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                        return new this(rpcImpl, requestDelimited, responseDelimited);
                    };

                    /**
                     * Callback as used by {@link com.variflight.fidstest.flight.FlightService#pullFlightInfo}.
                     * @memberof com.variflight.fidstest.flight.FlightService
                     * @typedef PullFlightInfoCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {com.variflight.fidstest.flight.FlightList} [response] FlightList
                     */

                    /**
                     * Calls PullFlightInfo.
                     * @function pullFlightInfo
                     * @memberof com.variflight.fidstest.flight.FlightService
                     * @instance
                     * @param {com.variflight.fidstest.flight.INothing} request Nothing message or plain object
                     * @param {com.variflight.fidstest.flight.FlightService.PullFlightInfoCallback} callback Node-style callback called with the error, if any, and FlightList
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(FlightService.prototype.pullFlightInfo = function pullFlightInfo(request, callback) {
                        return this.rpcCall(pullFlightInfo, $root.com.variflight.fidstest.flight.Nothing, $root.com.variflight.fidstest.flight.FlightList, request, callback);
                    }, "name", { value: "PullFlightInfo" });

                    /**
                     * Calls PullFlightInfo.
                     * @function pullFlightInfo
                     * @memberof com.variflight.fidstest.flight.FlightService
                     * @instance
                     * @param {com.variflight.fidstest.flight.INothing} request Nothing message or plain object
                     * @returns {Promise<com.variflight.fidstest.flight.FlightList>} Promise
                     * @variation 2
                     */

                    /**
                     * Callback as used by {@link com.variflight.fidstest.flight.FlightService#stream}.
                     * @memberof com.variflight.fidstest.flight.FlightService
                     * @typedef StreamCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {com.variflight.fidstest.flight.Nothing} [response] Nothing
                     */

                    /**
                     * Calls Stream.
                     * @function stream
                     * @memberof com.variflight.fidstest.flight.FlightService
                     * @instance
                     * @param {com.variflight.fidstest.flight.INothing} request Nothing message or plain object
                     * @param {com.variflight.fidstest.flight.FlightService.StreamCallback} callback Node-style callback called with the error, if any, and Nothing
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(FlightService.prototype.stream = function stream(request, callback) {
                        return this.rpcCall(stream, $root.com.variflight.fidstest.flight.Nothing, $root.com.variflight.fidstest.flight.Nothing, request, callback);
                    }, "name", { value: "Stream" });

                    /**
                     * Calls Stream.
                     * @function stream
                     * @memberof com.variflight.fidstest.flight.FlightService
                     * @instance
                     * @param {com.variflight.fidstest.flight.INothing} request Nothing message or plain object
                     * @returns {Promise<com.variflight.fidstest.flight.Nothing>} Promise
                     * @variation 2
                     */

                    return FlightService;
                })();

                return flight;
            })();

            return fidstest;
        })();

        variflight.test = (function() {

            /**
             * Namespace test.
             * @memberof com.variflight
             * @namespace
             */
            var test = {};

            test.user = (function() {

                /**
                 * Properties of a user.
                 * @memberof com.variflight.test
                 * @interface Iuser
                 * @property {number|null} [id] user id
                 * @property {string|null} [name] user name
                 * @property {google.protobuf.IStringValue|null} [comment] user comment
                 * @property {Object.<string,com.variflight.test.Iorder>|null} [orderArray] user orderArray
                 */

                /**
                 * Constructs a new user.
                 * @memberof com.variflight.test
                 * @classdesc Represents a user.
                 * @implements Iuser
                 * @constructor
                 * @param {com.variflight.test.Iuser=} [properties] Properties to set
                 */
                function user(properties) {
                    this.orderArray = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * user id.
                 * @member {number} id
                 * @memberof com.variflight.test.user
                 * @instance
                 */
                user.prototype.id = 0;

                /**
                 * user name.
                 * @member {string} name
                 * @memberof com.variflight.test.user
                 * @instance
                 */
                user.prototype.name = "";

                /**
                 * user comment.
                 * @member {google.protobuf.IStringValue|null|undefined} comment
                 * @memberof com.variflight.test.user
                 * @instance
                 */
                user.prototype.comment = null;

                /**
                 * user orderArray.
                 * @member {Object.<string,com.variflight.test.Iorder>} orderArray
                 * @memberof com.variflight.test.user
                 * @instance
                 */
                user.prototype.orderArray = $util.emptyObject;

                /**
                 * Creates a new user instance using the specified properties.
                 * @function create
                 * @memberof com.variflight.test.user
                 * @static
                 * @param {com.variflight.test.Iuser=} [properties] Properties to set
                 * @returns {com.variflight.test.user} user instance
                 */
                user.create = function create(properties) {
                    return new user(properties);
                };

                /**
                 * Encodes the specified user message. Does not implicitly {@link com.variflight.test.user.verify|verify} messages.
                 * @function encode
                 * @memberof com.variflight.test.user
                 * @static
                 * @param {com.variflight.test.Iuser} message user message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                user.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.comment != null && Object.hasOwnProperty.call(message, "comment"))
                        $root.google.protobuf.StringValue.encode(message.comment, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.orderArray != null && Object.hasOwnProperty.call(message, "orderArray"))
                        for (var keys = Object.keys(message.orderArray), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                            $root.com.variflight.test.order.encode(message.orderArray[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                /**
                 * Encodes the specified user message, length delimited. Does not implicitly {@link com.variflight.test.user.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.variflight.test.user
                 * @static
                 * @param {com.variflight.test.Iuser} message user message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                user.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a user message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.variflight.test.user
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.variflight.test.user} user
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                user.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.variflight.test.user(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int32();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.comment = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 4:
                            reader.skip().pos++;
                            if (message.orderArray === $util.emptyObject)
                                message.orderArray = {};
                            key = reader.int32();
                            reader.pos++;
                            message.orderArray[key] = $root.com.variflight.test.order.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a user message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.variflight.test.user
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.variflight.test.user} user
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                user.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a user message.
                 * @function verify
                 * @memberof com.variflight.test.user
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                user.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.comment != null && message.hasOwnProperty("comment")) {
                        var error = $root.google.protobuf.StringValue.verify(message.comment);
                        if (error)
                            return "comment." + error;
                    }
                    if (message.orderArray != null && message.hasOwnProperty("orderArray")) {
                        if (!$util.isObject(message.orderArray))
                            return "orderArray: object expected";
                        var key = Object.keys(message.orderArray);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key32Re.test(key[i]))
                                return "orderArray: integer key{k:int32} expected";
                            {
                                var error = $root.com.variflight.test.order.verify(message.orderArray[key[i]]);
                                if (error)
                                    return "orderArray." + error;
                            }
                        }
                    }
                    return null;
                };

                /**
                 * Creates a user message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.variflight.test.user
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.variflight.test.user} user
                 */
                user.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.variflight.test.user)
                        return object;
                    var message = new $root.com.variflight.test.user();
                    if (object.id != null)
                        message.id = object.id | 0;
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.comment != null) {
                        if (typeof object.comment !== "object")
                            throw TypeError(".com.variflight.test.user.comment: object expected");
                        message.comment = $root.google.protobuf.StringValue.fromObject(object.comment);
                    }
                    if (object.orderArray) {
                        if (typeof object.orderArray !== "object")
                            throw TypeError(".com.variflight.test.user.orderArray: object expected");
                        message.orderArray = {};
                        for (var keys = Object.keys(object.orderArray), i = 0; i < keys.length; ++i) {
                            if (typeof object.orderArray[keys[i]] !== "object")
                                throw TypeError(".com.variflight.test.user.orderArray: object expected");
                            message.orderArray[keys[i]] = $root.com.variflight.test.order.fromObject(object.orderArray[keys[i]]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a user message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.variflight.test.user
                 * @static
                 * @param {com.variflight.test.user} message user
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                user.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.orderArray = {};
                    if (options.defaults) {
                        object.id = 0;
                        object.name = "";
                        object.comment = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.comment != null && message.hasOwnProperty("comment"))
                        object.comment = $root.google.protobuf.StringValue.toObject(message.comment, options);
                    var keys2;
                    if (message.orderArray && (keys2 = Object.keys(message.orderArray)).length) {
                        object.orderArray = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.orderArray[keys2[j]] = $root.com.variflight.test.order.toObject(message.orderArray[keys2[j]], options);
                    }
                    return object;
                };

                /**
                 * Converts this user to JSON.
                 * @function toJSON
                 * @memberof com.variflight.test.user
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                user.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return user;
            })();

            test.order = (function() {

                /**
                 * Properties of an order.
                 * @memberof com.variflight.test
                 * @interface Iorder
                 * @property {number|null} [id] order id
                 * @property {number|Long|null} [orderTime] order orderTime
                 * @property {number|null} [totalPrice] order totalPrice
                 * @property {google.protobuf.IStringValue|null} [address] order address
                 * @property {Object.<string,com.variflight.test.IorderItem>|null} [orderItemMap] order orderItemMap
                 * @property {Array.<com.variflight.test.IorderItem>|null} [orderItemArray] order orderItemArray
                 * @property {Object.<string,number>|null} [pricesMap] order pricesMap
                 * @property {number|null} [userid] order userid
                 * @property {com.variflight.test.Iuser|null} [parentUser] order parentUser
                 */

                /**
                 * Constructs a new order.
                 * @memberof com.variflight.test
                 * @classdesc Represents an order.
                 * @implements Iorder
                 * @constructor
                 * @param {com.variflight.test.Iorder=} [properties] Properties to set
                 */
                function order(properties) {
                    this.orderItemMap = {};
                    this.orderItemArray = [];
                    this.pricesMap = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * order id.
                 * @member {number} id
                 * @memberof com.variflight.test.order
                 * @instance
                 */
                order.prototype.id = 0;

                /**
                 * order orderTime.
                 * @member {number|Long} orderTime
                 * @memberof com.variflight.test.order
                 * @instance
                 */
                order.prototype.orderTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * order totalPrice.
                 * @member {number} totalPrice
                 * @memberof com.variflight.test.order
                 * @instance
                 */
                order.prototype.totalPrice = 0;

                /**
                 * order address.
                 * @member {google.protobuf.IStringValue|null|undefined} address
                 * @memberof com.variflight.test.order
                 * @instance
                 */
                order.prototype.address = null;

                /**
                 * order orderItemMap.
                 * @member {Object.<string,com.variflight.test.IorderItem>} orderItemMap
                 * @memberof com.variflight.test.order
                 * @instance
                 */
                order.prototype.orderItemMap = $util.emptyObject;

                /**
                 * order orderItemArray.
                 * @member {Array.<com.variflight.test.IorderItem>} orderItemArray
                 * @memberof com.variflight.test.order
                 * @instance
                 */
                order.prototype.orderItemArray = $util.emptyArray;

                /**
                 * order pricesMap.
                 * @member {Object.<string,number>} pricesMap
                 * @memberof com.variflight.test.order
                 * @instance
                 */
                order.prototype.pricesMap = $util.emptyObject;

                /**
                 * order userid.
                 * @member {number} userid
                 * @memberof com.variflight.test.order
                 * @instance
                 */
                order.prototype.userid = 0;

                /**
                 * order parentUser.
                 * @member {com.variflight.test.Iuser|null|undefined} parentUser
                 * @memberof com.variflight.test.order
                 * @instance
                 */
                order.prototype.parentUser = null;

                /**
                 * Creates a new order instance using the specified properties.
                 * @function create
                 * @memberof com.variflight.test.order
                 * @static
                 * @param {com.variflight.test.Iorder=} [properties] Properties to set
                 * @returns {com.variflight.test.order} order instance
                 */
                order.create = function create(properties) {
                    return new order(properties);
                };

                /**
                 * Encodes the specified order message. Does not implicitly {@link com.variflight.test.order.verify|verify} messages.
                 * @function encode
                 * @memberof com.variflight.test.order
                 * @static
                 * @param {com.variflight.test.Iorder} message order message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                order.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                    if (message.orderTime != null && Object.hasOwnProperty.call(message, "orderTime"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.orderTime);
                    if (message.totalPrice != null && Object.hasOwnProperty.call(message, "totalPrice"))
                        writer.uint32(/* id 3, wireType 1 =*/25).double(message.totalPrice);
                    if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                        $root.google.protobuf.StringValue.encode(message.address, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.orderItemMap != null && Object.hasOwnProperty.call(message, "orderItemMap"))
                        for (var keys = Object.keys(message.orderItemMap), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                            $root.com.variflight.test.orderItem.encode(message.orderItemMap[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.pricesMap != null && Object.hasOwnProperty.call(message, "pricesMap"))
                        for (var keys = Object.keys(message.pricesMap), i = 0; i < keys.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 1 =*/17).double(message.pricesMap[keys[i]]).ldelim();
                    if (message.userid != null && Object.hasOwnProperty.call(message, "userid"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.userid);
                    if (message.orderItemArray != null && message.orderItemArray.length)
                        for (var i = 0; i < message.orderItemArray.length; ++i)
                            $root.com.variflight.test.orderItem.encode(message.orderItemArray[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.parentUser != null && Object.hasOwnProperty.call(message, "parentUser"))
                        $root.com.variflight.test.user.encode(message.parentUser, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified order message, length delimited. Does not implicitly {@link com.variflight.test.order.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.variflight.test.order
                 * @static
                 * @param {com.variflight.test.Iorder} message order message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                order.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an order message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.variflight.test.order
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.variflight.test.order} order
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                order.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.variflight.test.order(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int32();
                            break;
                        case 2:
                            message.orderTime = reader.int64();
                            break;
                        case 3:
                            message.totalPrice = reader.double();
                            break;
                        case 4:
                            message.address = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                            break;
                        case 5:
                            reader.skip().pos++;
                            if (message.orderItemMap === $util.emptyObject)
                                message.orderItemMap = {};
                            key = reader.int32();
                            reader.pos++;
                            message.orderItemMap[key] = $root.com.variflight.test.orderItem.decode(reader, reader.uint32());
                            break;
                        case 8:
                            if (!(message.orderItemArray && message.orderItemArray.length))
                                message.orderItemArray = [];
                            message.orderItemArray.push($root.com.variflight.test.orderItem.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            reader.skip().pos++;
                            if (message.pricesMap === $util.emptyObject)
                                message.pricesMap = {};
                            key = reader.int32();
                            reader.pos++;
                            message.pricesMap[key] = reader.double();
                            break;
                        case 7:
                            message.userid = reader.int32();
                            break;
                        case 9:
                            message.parentUser = $root.com.variflight.test.user.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an order message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.variflight.test.order
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.variflight.test.order} order
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                order.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an order message.
                 * @function verify
                 * @memberof com.variflight.test.order
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                order.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    if (message.orderTime != null && message.hasOwnProperty("orderTime"))
                        if (!$util.isInteger(message.orderTime) && !(message.orderTime && $util.isInteger(message.orderTime.low) && $util.isInteger(message.orderTime.high)))
                            return "orderTime: integer|Long expected";
                    if (message.totalPrice != null && message.hasOwnProperty("totalPrice"))
                        if (typeof message.totalPrice !== "number")
                            return "totalPrice: number expected";
                    if (message.address != null && message.hasOwnProperty("address")) {
                        var error = $root.google.protobuf.StringValue.verify(message.address);
                        if (error)
                            return "address." + error;
                    }
                    if (message.orderItemMap != null && message.hasOwnProperty("orderItemMap")) {
                        if (!$util.isObject(message.orderItemMap))
                            return "orderItemMap: object expected";
                        var key = Object.keys(message.orderItemMap);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key32Re.test(key[i]))
                                return "orderItemMap: integer key{k:int32} expected";
                            {
                                var error = $root.com.variflight.test.orderItem.verify(message.orderItemMap[key[i]]);
                                if (error)
                                    return "orderItemMap." + error;
                            }
                        }
                    }
                    if (message.orderItemArray != null && message.hasOwnProperty("orderItemArray")) {
                        if (!Array.isArray(message.orderItemArray))
                            return "orderItemArray: array expected";
                        for (var i = 0; i < message.orderItemArray.length; ++i) {
                            var error = $root.com.variflight.test.orderItem.verify(message.orderItemArray[i]);
                            if (error)
                                return "orderItemArray." + error;
                        }
                    }
                    if (message.pricesMap != null && message.hasOwnProperty("pricesMap")) {
                        if (!$util.isObject(message.pricesMap))
                            return "pricesMap: object expected";
                        var key = Object.keys(message.pricesMap);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key32Re.test(key[i]))
                                return "pricesMap: integer key{k:int32} expected";
                            if (typeof message.pricesMap[key[i]] !== "number")
                                return "pricesMap: number{k:int32} expected";
                        }
                    }
                    if (message.userid != null && message.hasOwnProperty("userid"))
                        if (!$util.isInteger(message.userid))
                            return "userid: integer expected";
                    if (message.parentUser != null && message.hasOwnProperty("parentUser")) {
                        var error = $root.com.variflight.test.user.verify(message.parentUser);
                        if (error)
                            return "parentUser." + error;
                    }
                    return null;
                };

                /**
                 * Creates an order message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.variflight.test.order
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.variflight.test.order} order
                 */
                order.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.variflight.test.order)
                        return object;
                    var message = new $root.com.variflight.test.order();
                    if (object.id != null)
                        message.id = object.id | 0;
                    if (object.orderTime != null)
                        if ($util.Long)
                            (message.orderTime = $util.Long.fromValue(object.orderTime)).unsigned = false;
                        else if (typeof object.orderTime === "string")
                            message.orderTime = parseInt(object.orderTime, 10);
                        else if (typeof object.orderTime === "number")
                            message.orderTime = object.orderTime;
                        else if (typeof object.orderTime === "object")
                            message.orderTime = new $util.LongBits(object.orderTime.low >>> 0, object.orderTime.high >>> 0).toNumber();
                    if (object.totalPrice != null)
                        message.totalPrice = Number(object.totalPrice);
                    if (object.address != null) {
                        if (typeof object.address !== "object")
                            throw TypeError(".com.variflight.test.order.address: object expected");
                        message.address = $root.google.protobuf.StringValue.fromObject(object.address);
                    }
                    if (object.orderItemMap) {
                        if (typeof object.orderItemMap !== "object")
                            throw TypeError(".com.variflight.test.order.orderItemMap: object expected");
                        message.orderItemMap = {};
                        for (var keys = Object.keys(object.orderItemMap), i = 0; i < keys.length; ++i) {
                            if (typeof object.orderItemMap[keys[i]] !== "object")
                                throw TypeError(".com.variflight.test.order.orderItemMap: object expected");
                            message.orderItemMap[keys[i]] = $root.com.variflight.test.orderItem.fromObject(object.orderItemMap[keys[i]]);
                        }
                    }
                    if (object.orderItemArray) {
                        if (!Array.isArray(object.orderItemArray))
                            throw TypeError(".com.variflight.test.order.orderItemArray: array expected");
                        message.orderItemArray = [];
                        for (var i = 0; i < object.orderItemArray.length; ++i) {
                            if (typeof object.orderItemArray[i] !== "object")
                                throw TypeError(".com.variflight.test.order.orderItemArray: object expected");
                            message.orderItemArray[i] = $root.com.variflight.test.orderItem.fromObject(object.orderItemArray[i]);
                        }
                    }
                    if (object.pricesMap) {
                        if (typeof object.pricesMap !== "object")
                            throw TypeError(".com.variflight.test.order.pricesMap: object expected");
                        message.pricesMap = {};
                        for (var keys = Object.keys(object.pricesMap), i = 0; i < keys.length; ++i)
                            message.pricesMap[keys[i]] = Number(object.pricesMap[keys[i]]);
                    }
                    if (object.userid != null)
                        message.userid = object.userid | 0;
                    if (object.parentUser != null) {
                        if (typeof object.parentUser !== "object")
                            throw TypeError(".com.variflight.test.order.parentUser: object expected");
                        message.parentUser = $root.com.variflight.test.user.fromObject(object.parentUser);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an order message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.variflight.test.order
                 * @static
                 * @param {com.variflight.test.order} message order
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                order.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.orderItemArray = [];
                    if (options.objects || options.defaults) {
                        object.orderItemMap = {};
                        object.pricesMap = {};
                    }
                    if (options.defaults) {
                        object.id = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.orderTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.orderTime = options.longs === String ? "0" : 0;
                        object.totalPrice = 0;
                        object.address = null;
                        object.userid = 0;
                        object.parentUser = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.orderTime != null && message.hasOwnProperty("orderTime"))
                        if (typeof message.orderTime === "number")
                            object.orderTime = options.longs === String ? String(message.orderTime) : message.orderTime;
                        else
                            object.orderTime = options.longs === String ? $util.Long.prototype.toString.call(message.orderTime) : options.longs === Number ? new $util.LongBits(message.orderTime.low >>> 0, message.orderTime.high >>> 0).toNumber() : message.orderTime;
                    if (message.totalPrice != null && message.hasOwnProperty("totalPrice"))
                        object.totalPrice = options.json && !isFinite(message.totalPrice) ? String(message.totalPrice) : message.totalPrice;
                    if (message.address != null && message.hasOwnProperty("address"))
                        object.address = $root.google.protobuf.StringValue.toObject(message.address, options);
                    var keys2;
                    if (message.orderItemMap && (keys2 = Object.keys(message.orderItemMap)).length) {
                        object.orderItemMap = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.orderItemMap[keys2[j]] = $root.com.variflight.test.orderItem.toObject(message.orderItemMap[keys2[j]], options);
                    }
                    if (message.pricesMap && (keys2 = Object.keys(message.pricesMap)).length) {
                        object.pricesMap = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.pricesMap[keys2[j]] = options.json && !isFinite(message.pricesMap[keys2[j]]) ? String(message.pricesMap[keys2[j]]) : message.pricesMap[keys2[j]];
                    }
                    if (message.userid != null && message.hasOwnProperty("userid"))
                        object.userid = message.userid;
                    if (message.orderItemArray && message.orderItemArray.length) {
                        object.orderItemArray = [];
                        for (var j = 0; j < message.orderItemArray.length; ++j)
                            object.orderItemArray[j] = $root.com.variflight.test.orderItem.toObject(message.orderItemArray[j], options);
                    }
                    if (message.parentUser != null && message.hasOwnProperty("parentUser"))
                        object.parentUser = $root.com.variflight.test.user.toObject(message.parentUser, options);
                    return object;
                };

                /**
                 * Converts this order to JSON.
                 * @function toJSON
                 * @memberof com.variflight.test.order
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                order.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return order;
            })();

            test.orderItem = (function() {

                /**
                 * Properties of an orderItem.
                 * @memberof com.variflight.test
                 * @interface IorderItem
                 * @property {number|null} [id] orderItem id
                 * @property {string|null} [name] orderItem name
                 * @property {number|null} [price] orderItem price
                 * @property {number|null} [orderid] orderItem orderid
                 */

                /**
                 * Constructs a new orderItem.
                 * @memberof com.variflight.test
                 * @classdesc Represents an orderItem.
                 * @implements IorderItem
                 * @constructor
                 * @param {com.variflight.test.IorderItem=} [properties] Properties to set
                 */
                function orderItem(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * orderItem id.
                 * @member {number} id
                 * @memberof com.variflight.test.orderItem
                 * @instance
                 */
                orderItem.prototype.id = 0;

                /**
                 * orderItem name.
                 * @member {string} name
                 * @memberof com.variflight.test.orderItem
                 * @instance
                 */
                orderItem.prototype.name = "";

                /**
                 * orderItem price.
                 * @member {number} price
                 * @memberof com.variflight.test.orderItem
                 * @instance
                 */
                orderItem.prototype.price = 0;

                /**
                 * orderItem orderid.
                 * @member {number} orderid
                 * @memberof com.variflight.test.orderItem
                 * @instance
                 */
                orderItem.prototype.orderid = 0;

                /**
                 * Creates a new orderItem instance using the specified properties.
                 * @function create
                 * @memberof com.variflight.test.orderItem
                 * @static
                 * @param {com.variflight.test.IorderItem=} [properties] Properties to set
                 * @returns {com.variflight.test.orderItem} orderItem instance
                 */
                orderItem.create = function create(properties) {
                    return new orderItem(properties);
                };

                /**
                 * Encodes the specified orderItem message. Does not implicitly {@link com.variflight.test.orderItem.verify|verify} messages.
                 * @function encode
                 * @memberof com.variflight.test.orderItem
                 * @static
                 * @param {com.variflight.test.IorderItem} message orderItem message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                orderItem.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                        writer.uint32(/* id 3, wireType 1 =*/25).double(message.price);
                    if (message.orderid != null && Object.hasOwnProperty.call(message, "orderid"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.orderid);
                    return writer;
                };

                /**
                 * Encodes the specified orderItem message, length delimited. Does not implicitly {@link com.variflight.test.orderItem.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.variflight.test.orderItem
                 * @static
                 * @param {com.variflight.test.IorderItem} message orderItem message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                orderItem.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an orderItem message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.variflight.test.orderItem
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.variflight.test.orderItem} orderItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                orderItem.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.variflight.test.orderItem();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int32();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.price = reader.double();
                            break;
                        case 4:
                            message.orderid = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an orderItem message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.variflight.test.orderItem
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.variflight.test.orderItem} orderItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                orderItem.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an orderItem message.
                 * @function verify
                 * @memberof com.variflight.test.orderItem
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                orderItem.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id))
                            return "id: integer expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.price != null && message.hasOwnProperty("price"))
                        if (typeof message.price !== "number")
                            return "price: number expected";
                    if (message.orderid != null && message.hasOwnProperty("orderid"))
                        if (!$util.isInteger(message.orderid))
                            return "orderid: integer expected";
                    return null;
                };

                /**
                 * Creates an orderItem message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.variflight.test.orderItem
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.variflight.test.orderItem} orderItem
                 */
                orderItem.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.variflight.test.orderItem)
                        return object;
                    var message = new $root.com.variflight.test.orderItem();
                    if (object.id != null)
                        message.id = object.id | 0;
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.price != null)
                        message.price = Number(object.price);
                    if (object.orderid != null)
                        message.orderid = object.orderid | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an orderItem message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.variflight.test.orderItem
                 * @static
                 * @param {com.variflight.test.orderItem} message orderItem
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                orderItem.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = 0;
                        object.name = "";
                        object.price = 0;
                        object.orderid = 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.price != null && message.hasOwnProperty("price"))
                        object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
                    if (message.orderid != null && message.hasOwnProperty("orderid"))
                        object.orderid = message.orderid;
                    return object;
                };

                /**
                 * Converts this orderItem to JSON.
                 * @function toJSON
                 * @memberof com.variflight.test.orderItem
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                orderItem.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return orderItem;
            })();

            test.Users = (function() {

                /**
                 * Properties of a Users.
                 * @memberof com.variflight.test
                 * @interface IUsers
                 * @property {Object.<string,com.variflight.test.Iuser>|null} [users] Users users
                 */

                /**
                 * Constructs a new Users.
                 * @memberof com.variflight.test
                 * @classdesc Represents a Users.
                 * @implements IUsers
                 * @constructor
                 * @param {com.variflight.test.IUsers=} [properties] Properties to set
                 */
                function Users(properties) {
                    this.users = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Users users.
                 * @member {Object.<string,com.variflight.test.Iuser>} users
                 * @memberof com.variflight.test.Users
                 * @instance
                 */
                Users.prototype.users = $util.emptyObject;

                /**
                 * Creates a new Users instance using the specified properties.
                 * @function create
                 * @memberof com.variflight.test.Users
                 * @static
                 * @param {com.variflight.test.IUsers=} [properties] Properties to set
                 * @returns {com.variflight.test.Users} Users instance
                 */
                Users.create = function create(properties) {
                    return new Users(properties);
                };

                /**
                 * Encodes the specified Users message. Does not implicitly {@link com.variflight.test.Users.verify|verify} messages.
                 * @function encode
                 * @memberof com.variflight.test.Users
                 * @static
                 * @param {com.variflight.test.IUsers} message Users message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Users.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.users != null && Object.hasOwnProperty.call(message, "users"))
                        for (var keys = Object.keys(message.users), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                            $root.com.variflight.test.user.encode(message.users[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                /**
                 * Encodes the specified Users message, length delimited. Does not implicitly {@link com.variflight.test.Users.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.variflight.test.Users
                 * @static
                 * @param {com.variflight.test.IUsers} message Users message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Users.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Users message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.variflight.test.Users
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.variflight.test.Users} Users
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Users.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.variflight.test.Users(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            reader.skip().pos++;
                            if (message.users === $util.emptyObject)
                                message.users = {};
                            key = reader.int32();
                            reader.pos++;
                            message.users[key] = $root.com.variflight.test.user.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Users message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.variflight.test.Users
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.variflight.test.Users} Users
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Users.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Users message.
                 * @function verify
                 * @memberof com.variflight.test.Users
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Users.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.users != null && message.hasOwnProperty("users")) {
                        if (!$util.isObject(message.users))
                            return "users: object expected";
                        var key = Object.keys(message.users);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key32Re.test(key[i]))
                                return "users: integer key{k:int32} expected";
                            {
                                var error = $root.com.variflight.test.user.verify(message.users[key[i]]);
                                if (error)
                                    return "users." + error;
                            }
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Users message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.variflight.test.Users
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.variflight.test.Users} Users
                 */
                Users.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.variflight.test.Users)
                        return object;
                    var message = new $root.com.variflight.test.Users();
                    if (object.users) {
                        if (typeof object.users !== "object")
                            throw TypeError(".com.variflight.test.Users.users: object expected");
                        message.users = {};
                        for (var keys = Object.keys(object.users), i = 0; i < keys.length; ++i) {
                            if (typeof object.users[keys[i]] !== "object")
                                throw TypeError(".com.variflight.test.Users.users: object expected");
                            message.users[keys[i]] = $root.com.variflight.test.user.fromObject(object.users[keys[i]]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Users message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.variflight.test.Users
                 * @static
                 * @param {com.variflight.test.Users} message Users
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Users.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.users = {};
                    var keys2;
                    if (message.users && (keys2 = Object.keys(message.users)).length) {
                        object.users = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.users[keys2[j]] = $root.com.variflight.test.user.toObject(message.users[keys2[j]], options);
                    }
                    return object;
                };

                /**
                 * Converts this Users to JSON.
                 * @function toJSON
                 * @memberof com.variflight.test.Users
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Users.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Users;
            })();

            test.OrderService = (function() {

                /**
                 * Constructs a new OrderService service.
                 * @memberof com.variflight.test
                 * @classdesc Represents an OrderService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function OrderService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (OrderService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = OrderService;

                /**
                 * Creates new OrderService service using the specified rpc implementation.
                 * @function create
                 * @memberof com.variflight.test.OrderService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {OrderService} RPC service. Useful where requests and/or responses are streamed.
                 */
                OrderService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link com.variflight.test.OrderService#getUsersOrder}.
                 * @memberof com.variflight.test.OrderService
                 * @typedef GetUsersOrderCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {com.variflight.test.Users} [response] Users
                 */

                /**
                 * Calls GetUsersOrder.
                 * @function getUsersOrder
                 * @memberof com.variflight.test.OrderService
                 * @instance
                 * @param {google.protobuf.IEmpty} request Empty message or plain object
                 * @param {com.variflight.test.OrderService.GetUsersOrderCallback} callback Node-style callback called with the error, if any, and Users
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(OrderService.prototype.getUsersOrder = function getUsersOrder(request, callback) {
                    return this.rpcCall(getUsersOrder, $root.google.protobuf.Empty, $root.com.variflight.test.Users, request, callback);
                }, "name", { value: "GetUsersOrder" });

                /**
                 * Calls GetUsersOrder.
                 * @function getUsersOrder
                 * @memberof com.variflight.test.OrderService
                 * @instance
                 * @param {google.protobuf.IEmpty} request Empty message or plain object
                 * @returns {Promise<com.variflight.test.Users>} Promise
                 * @variation 2
                 */

                return OrderService;
            })();

            return test;
        })();

        return variflight;
    })();

    return com;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.DoubleValue = (function() {

            /**
             * Properties of a DoubleValue.
             * @memberof google.protobuf
             * @interface IDoubleValue
             * @property {number|null} [value] DoubleValue value
             */

            /**
             * Constructs a new DoubleValue.
             * @memberof google.protobuf
             * @classdesc Represents a DoubleValue.
             * @implements IDoubleValue
             * @constructor
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             */
            function DoubleValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleValue value.
             * @member {number} value
             * @memberof google.protobuf.DoubleValue
             * @instance
             */
            DoubleValue.prototype.value = 0;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             * @returns {google.protobuf.DoubleValue} DoubleValue instance
             */
            DoubleValue.create = function create(properties) {
                return new DoubleValue(properties);
            };

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                return writer;
            };

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoubleValue message.
             * @function verify
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DoubleValue} DoubleValue
             */
            DoubleValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DoubleValue)
                    return object;
                var message = new $root.google.protobuf.DoubleValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.DoubleValue} message DoubleValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this DoubleValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.DoubleValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DoubleValue;
        })();

        protobuf.FloatValue = (function() {

            /**
             * Properties of a FloatValue.
             * @memberof google.protobuf
             * @interface IFloatValue
             * @property {number|null} [value] FloatValue value
             */

            /**
             * Constructs a new FloatValue.
             * @memberof google.protobuf
             * @classdesc Represents a FloatValue.
             * @implements IFloatValue
             * @constructor
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             */
            function FloatValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatValue value.
             * @member {number} value
             * @memberof google.protobuf.FloatValue
             * @instance
             */
            FloatValue.prototype.value = 0;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             * @returns {google.protobuf.FloatValue} FloatValue instance
             */
            FloatValue.create = function create(properties) {
                return new FloatValue(properties);
            };

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloatValue message.
             * @function verify
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FloatValue} FloatValue
             */
            FloatValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FloatValue)
                    return object;
                var message = new $root.google.protobuf.FloatValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.FloatValue} message FloatValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this FloatValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.FloatValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FloatValue;
        })();

        protobuf.Int64Value = (function() {

            /**
             * Properties of an Int64Value.
             * @memberof google.protobuf
             * @interface IInt64Value
             * @property {number|Long|null} [value] Int64Value value
             */

            /**
             * Constructs a new Int64Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int64Value.
             * @implements IInt64Value
             * @constructor
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             */
            function Int64Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.Int64Value
             * @instance
             */
            Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.Int64Value} Int64Value instance
             */
            Int64Value.create = function create(properties) {
                return new Int64Value(properties);
            };

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int64Value message.
             * @function verify
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int64Value} Int64Value
             */
            Int64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int64Value)
                    return object;
                var message = new $root.google.protobuf.Int64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.Int64Value} message Int64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                return object;
            };

            /**
             * Converts this Int64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Int64Value;
        })();

        protobuf.UInt64Value = (function() {

            /**
             * Properties of a UInt64Value.
             * @memberof google.protobuf
             * @interface IUInt64Value
             * @property {number|Long|null} [value] UInt64Value value
             */

            /**
             * Constructs a new UInt64Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt64Value.
             * @implements IUInt64Value
             * @constructor
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             */
            function UInt64Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.UInt64Value
             * @instance
             */
            UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt64Value} UInt64Value instance
             */
            UInt64Value.create = function create(properties) {
                return new UInt64Value(properties);
            };

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt64Value message.
             * @function verify
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt64Value} UInt64Value
             */
            UInt64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt64Value)
                    return object;
                var message = new $root.google.protobuf.UInt64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.UInt64Value} message UInt64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                return object;
            };

            /**
             * Converts this UInt64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UInt64Value;
        })();

        protobuf.Int32Value = (function() {

            /**
             * Properties of an Int32Value.
             * @memberof google.protobuf
             * @interface IInt32Value
             * @property {number|null} [value] Int32Value value
             */

            /**
             * Constructs a new Int32Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int32Value.
             * @implements IInt32Value
             * @constructor
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             */
            function Int32Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int32Value value.
             * @member {number} value
             * @memberof google.protobuf.Int32Value
             * @instance
             */
            Int32Value.prototype.value = 0;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.Int32Value} Int32Value instance
             */
            Int32Value.create = function create(properties) {
                return new Int32Value(properties);
            };

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int32Value message.
             * @function verify
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int32Value} Int32Value
             */
            Int32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int32Value)
                    return object;
                var message = new $root.google.protobuf.Int32Value();
                if (object.value != null)
                    message.value = object.value | 0;
                return message;
            };

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.Int32Value} message Int32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this Int32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Int32Value;
        })();

        protobuf.UInt32Value = (function() {

            /**
             * Properties of a UInt32Value.
             * @memberof google.protobuf
             * @interface IUInt32Value
             * @property {number|null} [value] UInt32Value value
             */

            /**
             * Constructs a new UInt32Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt32Value.
             * @implements IUInt32Value
             * @constructor
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             */
            function UInt32Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt32Value value.
             * @member {number} value
             * @memberof google.protobuf.UInt32Value
             * @instance
             */
            UInt32Value.prototype.value = 0;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt32Value} UInt32Value instance
             */
            UInt32Value.create = function create(properties) {
                return new UInt32Value(properties);
            };

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt32Value message.
             * @function verify
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt32Value} UInt32Value
             */
            UInt32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt32Value)
                    return object;
                var message = new $root.google.protobuf.UInt32Value();
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.UInt32Value} message UInt32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this UInt32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UInt32Value;
        })();

        protobuf.BoolValue = (function() {

            /**
             * Properties of a BoolValue.
             * @memberof google.protobuf
             * @interface IBoolValue
             * @property {boolean|null} [value] BoolValue value
             */

            /**
             * Constructs a new BoolValue.
             * @memberof google.protobuf
             * @classdesc Represents a BoolValue.
             * @implements IBoolValue
             * @constructor
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             */
            function BoolValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolValue value.
             * @member {boolean} value
             * @memberof google.protobuf.BoolValue
             * @instance
             */
            BoolValue.prototype.value = false;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             * @returns {google.protobuf.BoolValue} BoolValue instance
             */
            BoolValue.create = function create(properties) {
                return new BoolValue(properties);
            };

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                return writer;
            };

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BoolValue message.
             * @function verify
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "boolean")
                        return "value: boolean expected";
                return null;
            };

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BoolValue} BoolValue
             */
            BoolValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BoolValue)
                    return object;
                var message = new $root.google.protobuf.BoolValue();
                if (object.value != null)
                    message.value = Boolean(object.value);
                return message;
            };

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.BoolValue} message BoolValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = false;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this BoolValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BoolValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BoolValue;
        })();

        protobuf.StringValue = (function() {

            /**
             * Properties of a StringValue.
             * @memberof google.protobuf
             * @interface IStringValue
             * @property {string|null} [value] StringValue value
             */

            /**
             * Constructs a new StringValue.
             * @memberof google.protobuf
             * @classdesc Represents a StringValue.
             * @implements IStringValue
             * @constructor
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             */
            function StringValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringValue value.
             * @member {string} value
             * @memberof google.protobuf.StringValue
             * @instance
             */
            StringValue.prototype.value = "";

            /**
             * Creates a new StringValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             * @returns {google.protobuf.StringValue} StringValue instance
             */
            StringValue.create = function create(properties) {
                return new StringValue(properties);
            };

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringValue message.
             * @function verify
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.StringValue} StringValue
             */
            StringValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.StringValue)
                    return object;
                var message = new $root.google.protobuf.StringValue();
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.StringValue} message StringValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = "";
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this StringValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.StringValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StringValue;
        })();

        protobuf.BytesValue = (function() {

            /**
             * Properties of a BytesValue.
             * @memberof google.protobuf
             * @interface IBytesValue
             * @property {Uint8Array|null} [value] BytesValue value
             */

            /**
             * Constructs a new BytesValue.
             * @memberof google.protobuf
             * @classdesc Represents a BytesValue.
             * @implements IBytesValue
             * @constructor
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             */
            function BytesValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BytesValue value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.BytesValue
             * @instance
             */
            BytesValue.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             * @returns {google.protobuf.BytesValue} BytesValue instance
             */
            BytesValue.create = function create(properties) {
                return new BytesValue(properties);
            };

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BytesValue message.
             * @function verify
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BytesValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BytesValue} BytesValue
             */
            BytesValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BytesValue)
                    return object;
                var message = new $root.google.protobuf.BytesValue();
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.BytesValue} message BytesValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BytesValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this BytesValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BytesValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BytesValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BytesValue;
        })();

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
