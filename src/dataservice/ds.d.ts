import * as $protobuf from "protobufjs";
/** Namespace com. */
export namespace com {

    /** Namespace variflight. */
    namespace variflight {

        /** Namespace dataservice. */
        namespace dataservice {

            /** Properties of a ChangeDesc. */
            interface IChangeDesc {

                /** ChangeDesc fieldTags */
                fieldTags?: (Uint8Array|null);

                /** ChangeDesc changeTags */
                changeTags?: (Uint8Array|null);

                /** ChangeDesc fieldsChangeDescs */
                fieldsChangeDescs?: (com.variflight.dataservice.IChangeDesc[]|null);

                /** ChangeDesc mapInt32 */
                mapInt32?: ({ [k: string]: com.variflight.dataservice.IChangeDesc }|null);

                /** ChangeDesc mapInt64 */
                mapInt64?: ({ [k: string]: com.variflight.dataservice.IChangeDesc }|null);

                /** ChangeDesc mapBool */
                mapBool?: ({ [k: string]: com.variflight.dataservice.IChangeDesc }|null);

                /** ChangeDesc mapString */
                mapString?: ({ [k: string]: com.variflight.dataservice.IChangeDesc }|null);

                /** ChangeDesc mapInt32Removed */
                mapInt32Removed?: ({ [k: string]: com.variflight.dataservice.IChangeDesc }|null);

                /** ChangeDesc mapInt64Removed */
                mapInt64Removed?: ({ [k: string]: com.variflight.dataservice.IChangeDesc }|null);

                /** ChangeDesc mapBoolRemoved */
                mapBoolRemoved?: ({ [k: string]: com.variflight.dataservice.IChangeDesc }|null);

                /** ChangeDesc mapStringRemoved */
                mapStringRemoved?: ({ [k: string]: com.variflight.dataservice.IChangeDesc }|null);
            }

            /** Represents a ChangeDesc. */
            class ChangeDesc implements IChangeDesc {

                /**
                 * Constructs a new ChangeDesc.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.variflight.dataservice.IChangeDesc);

                /** ChangeDesc fieldTags. */
                public fieldTags: Uint8Array;

                /** ChangeDesc changeTags. */
                public changeTags: Uint8Array;

                /** ChangeDesc fieldsChangeDescs. */
                public fieldsChangeDescs: com.variflight.dataservice.IChangeDesc[];

                /** ChangeDesc mapInt32. */
                public mapInt32: { [k: string]: com.variflight.dataservice.IChangeDesc };

                /** ChangeDesc mapInt64. */
                public mapInt64: { [k: string]: com.variflight.dataservice.IChangeDesc };

                /** ChangeDesc mapBool. */
                public mapBool: { [k: string]: com.variflight.dataservice.IChangeDesc };

                /** ChangeDesc mapString. */
                public mapString: { [k: string]: com.variflight.dataservice.IChangeDesc };

                /** ChangeDesc mapInt32Removed. */
                public mapInt32Removed: { [k: string]: com.variflight.dataservice.IChangeDesc };

                /** ChangeDesc mapInt64Removed. */
                public mapInt64Removed: { [k: string]: com.variflight.dataservice.IChangeDesc };

                /** ChangeDesc mapBoolRemoved. */
                public mapBoolRemoved: { [k: string]: com.variflight.dataservice.IChangeDesc };

                /** ChangeDesc mapStringRemoved. */
                public mapStringRemoved: { [k: string]: com.variflight.dataservice.IChangeDesc };

                /**
                 * Creates a new ChangeDesc instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ChangeDesc instance
                 */
                public static create(properties?: com.variflight.dataservice.IChangeDesc): com.variflight.dataservice.ChangeDesc;

                /**
                 * Encodes the specified ChangeDesc message. Does not implicitly {@link com.variflight.dataservice.ChangeDesc.verify|verify} messages.
                 * @param message ChangeDesc message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.variflight.dataservice.IChangeDesc, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ChangeDesc message, length delimited. Does not implicitly {@link com.variflight.dataservice.ChangeDesc.verify|verify} messages.
                 * @param message ChangeDesc message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.variflight.dataservice.IChangeDesc, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ChangeDesc message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ChangeDesc
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.variflight.dataservice.ChangeDesc;

                /**
                 * Decodes a ChangeDesc message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ChangeDesc
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.variflight.dataservice.ChangeDesc;

                /**
                 * Verifies a ChangeDesc message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ChangeDesc message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ChangeDesc
                 */
                public static fromObject(object: { [k: string]: any }): com.variflight.dataservice.ChangeDesc;

                /**
                 * Creates a plain object from a ChangeDesc message. Also converts values to other types if specified.
                 * @param message ChangeDesc
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.variflight.dataservice.ChangeDesc, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ChangeDesc to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace fidstest. */
        namespace fidstest {

            /** Namespace flight. */
            namespace flight {

                /** Properties of a FlightInfo. */
                interface IFlightInfo {

                    /** FlightInfo fid */
                    fid?: (string|null);

                    /** FlightInfo isArrive */
                    isArrive?: (boolean|null);

                    /** FlightInfo fNo */
                    fNo?: (string|null);

                    /** FlightInfo fDate */
                    fDate?: (number|Long|null);

                    /** FlightInfo aNo */
                    aNo?: (google.protobuf.IStringValue|null);

                    /** FlightInfo dep */
                    dep?: (string|null);

                    /** FlightInfo arr */
                    arr?: (string|null);

                    /** FlightInfo std */
                    std?: (number|Long|null);

                    /** FlightInfo sta */
                    sta?: (number|Long|null);

                    /** FlightInfo etd */
                    etd?: (google.protobuf.IInt64Value|null);

                    /** FlightInfo eta */
                    eta?: (google.protobuf.IInt64Value|null);

                    /** FlightInfo atd */
                    atd?: (google.protobuf.IInt64Value|null);

                    /** FlightInfo ata */
                    ata?: (google.protobuf.IInt64Value|null);

                    /** FlightInfo fMode */
                    fMode?: (google.protobuf.IStringValue|null);

                    /** FlightInfo alIata */
                    alIata?: (string|null);

                    /** FlightInfo alIcao */
                    alIcao?: (string|null);

                    /** FlightInfo cla */
                    cla?: (string|null);

                    /** FlightInfo fStatus */
                    fStatus?: (string|null);

                    /** FlightInfo delayCode */
                    delayCode?: (google.protobuf.IStringValue|null);

                    /** FlightInfo delayCn */
                    delayCn?: (google.protobuf.IStringValue|null);

                    /** FlightInfo sflight */
                    sflight?: (google.protobuf.IStringValue|null);

                    /** FlightInfo stand */
                    stand?: (google.protobuf.IStringValue|null);

                    /** FlightInfo gate */
                    gate?: (google.protobuf.IStringValue|null);

                    /** FlightInfo car */
                    car?: (google.protobuf.IStringValue|null);

                    /** FlightInfo mp1 */
                    mp1?: (google.protobuf.IStringValue|null);

                    /** FlightInfo cid */
                    cid?: (google.protobuf.IStringValue|null);

                    /** FlightInfo cld */
                    cld?: (google.protobuf.IStringValue|null);

                    /** FlightInfo cea */
                    cea?: (google.protobuf.IStringValue|null);

                    /** FlightInfo vl */
                    vl?: (google.protobuf.IStringValue|null);

                    /** FlightInfo msMap */
                    msMap?: ({ [k: string]: string }|null);

                    /** FlightInfo rsArray */
                    rsArray?: (string[]|null);
                }

                /** Represents a FlightInfo. */
                class FlightInfo implements IFlightInfo {

                    /**
                     * Constructs a new FlightInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.variflight.fidstest.flight.IFlightInfo);

                    /** FlightInfo fid. */
                    public fid: string;

                    /** FlightInfo isArrive. */
                    public isArrive: boolean;

                    /** FlightInfo fNo. */
                    public fNo: string;

                    /** FlightInfo fDate. */
                    public fDate: (number|Long);

                    /** FlightInfo aNo. */
                    public aNo?: (google.protobuf.IStringValue|null);

                    /** FlightInfo dep. */
                    public dep: string;

                    /** FlightInfo arr. */
                    public arr: string;

                    /** FlightInfo std. */
                    public std: (number|Long);

                    /** FlightInfo sta. */
                    public sta: (number|Long);

                    /** FlightInfo etd. */
                    public etd?: (google.protobuf.IInt64Value|null);

                    /** FlightInfo eta. */
                    public eta?: (google.protobuf.IInt64Value|null);

                    /** FlightInfo atd. */
                    public atd?: (google.protobuf.IInt64Value|null);

                    /** FlightInfo ata. */
                    public ata?: (google.protobuf.IInt64Value|null);

                    /** FlightInfo fMode. */
                    public fMode?: (google.protobuf.IStringValue|null);

                    /** FlightInfo alIata. */
                    public alIata: string;

                    /** FlightInfo alIcao. */
                    public alIcao: string;

                    /** FlightInfo cla. */
                    public cla: string;

                    /** FlightInfo fStatus. */
                    public fStatus: string;

                    /** FlightInfo delayCode. */
                    public delayCode?: (google.protobuf.IStringValue|null);

                    /** FlightInfo delayCn. */
                    public delayCn?: (google.protobuf.IStringValue|null);

                    /** FlightInfo sflight. */
                    public sflight?: (google.protobuf.IStringValue|null);

                    /** FlightInfo stand. */
                    public stand?: (google.protobuf.IStringValue|null);

                    /** FlightInfo gate. */
                    public gate?: (google.protobuf.IStringValue|null);

                    /** FlightInfo car. */
                    public car?: (google.protobuf.IStringValue|null);

                    /** FlightInfo mp1. */
                    public mp1?: (google.protobuf.IStringValue|null);

                    /** FlightInfo cid. */
                    public cid?: (google.protobuf.IStringValue|null);

                    /** FlightInfo cld. */
                    public cld?: (google.protobuf.IStringValue|null);

                    /** FlightInfo cea. */
                    public cea?: (google.protobuf.IStringValue|null);

                    /** FlightInfo vl. */
                    public vl?: (google.protobuf.IStringValue|null);

                    /** FlightInfo msMap. */
                    public msMap: { [k: string]: string };

                    /** FlightInfo rsArray. */
                    public rsArray: string[];

                    /**
                     * Creates a new FlightInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FlightInfo instance
                     */
                    public static create(properties?: com.variflight.fidstest.flight.IFlightInfo): com.variflight.fidstest.flight.FlightInfo;

                    /**
                     * Encodes the specified FlightInfo message. Does not implicitly {@link com.variflight.fidstest.flight.FlightInfo.verify|verify} messages.
                     * @param message FlightInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.variflight.fidstest.flight.IFlightInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FlightInfo message, length delimited. Does not implicitly {@link com.variflight.fidstest.flight.FlightInfo.verify|verify} messages.
                     * @param message FlightInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.variflight.fidstest.flight.IFlightInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FlightInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FlightInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.variflight.fidstest.flight.FlightInfo;

                    /**
                     * Decodes a FlightInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FlightInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.variflight.fidstest.flight.FlightInfo;

                    /**
                     * Verifies a FlightInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FlightInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FlightInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.variflight.fidstest.flight.FlightInfo;

                    /**
                     * Creates a plain object from a FlightInfo message. Also converts values to other types if specified.
                     * @param message FlightInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.variflight.fidstest.flight.FlightInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FlightInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Nothing. */
                interface INothing {

                    /** Nothing test */
                    test?: (string|null);
                }

                /** Represents a Nothing. */
                class Nothing implements INothing {

                    /**
                     * Constructs a new Nothing.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.variflight.fidstest.flight.INothing);

                    /** Nothing test. */
                    public test: string;

                    /**
                     * Creates a new Nothing instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Nothing instance
                     */
                    public static create(properties?: com.variflight.fidstest.flight.INothing): com.variflight.fidstest.flight.Nothing;

                    /**
                     * Encodes the specified Nothing message. Does not implicitly {@link com.variflight.fidstest.flight.Nothing.verify|verify} messages.
                     * @param message Nothing message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.variflight.fidstest.flight.INothing, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Nothing message, length delimited. Does not implicitly {@link com.variflight.fidstest.flight.Nothing.verify|verify} messages.
                     * @param message Nothing message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.variflight.fidstest.flight.INothing, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Nothing message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Nothing
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.variflight.fidstest.flight.Nothing;

                    /**
                     * Decodes a Nothing message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Nothing
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.variflight.fidstest.flight.Nothing;

                    /**
                     * Verifies a Nothing message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Nothing message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Nothing
                     */
                    public static fromObject(object: { [k: string]: any }): com.variflight.fidstest.flight.Nothing;

                    /**
                     * Creates a plain object from a Nothing message. Also converts values to other types if specified.
                     * @param message Nothing
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.variflight.fidstest.flight.Nothing, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Nothing to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FlightList. */
                interface IFlightList {

                    /** FlightList value */
                    value?: ({ [k: string]: com.variflight.fidstest.flight.IFlightInfo }|null);
                }

                /** Represents a FlightList. */
                class FlightList implements IFlightList {

                    /**
                     * Constructs a new FlightList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.variflight.fidstest.flight.IFlightList);

                    /** FlightList value. */
                    public value: { [k: string]: com.variflight.fidstest.flight.IFlightInfo };

                    /**
                     * Creates a new FlightList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FlightList instance
                     */
                    public static create(properties?: com.variflight.fidstest.flight.IFlightList): com.variflight.fidstest.flight.FlightList;

                    /**
                     * Encodes the specified FlightList message. Does not implicitly {@link com.variflight.fidstest.flight.FlightList.verify|verify} messages.
                     * @param message FlightList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.variflight.fidstest.flight.IFlightList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FlightList message, length delimited. Does not implicitly {@link com.variflight.fidstest.flight.FlightList.verify|verify} messages.
                     * @param message FlightList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.variflight.fidstest.flight.IFlightList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FlightList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FlightList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.variflight.fidstest.flight.FlightList;

                    /**
                     * Decodes a FlightList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FlightList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.variflight.fidstest.flight.FlightList;

                    /**
                     * Verifies a FlightList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FlightList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FlightList
                     */
                    public static fromObject(object: { [k: string]: any }): com.variflight.fidstest.flight.FlightList;

                    /**
                     * Creates a plain object from a FlightList message. Also converts values to other types if specified.
                     * @param message FlightList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.variflight.fidstest.flight.FlightList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FlightList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a FlightService */
                class FlightService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new FlightService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new FlightService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): FlightService;

                    /**
                     * Calls PullFlightInfo.
                     * @param request Nothing message or plain object
                     * @param callback Node-style callback called with the error, if any, and FlightList
                     */
                    public pullFlightInfo(request: com.variflight.fidstest.flight.INothing, callback: com.variflight.fidstest.flight.FlightService.PullFlightInfoCallback): void;

                    /**
                     * Calls PullFlightInfo.
                     * @param request Nothing message or plain object
                     * @returns Promise
                     */
                    public pullFlightInfo(request: com.variflight.fidstest.flight.INothing): Promise<com.variflight.fidstest.flight.FlightList>;

                    /**
                     * Calls Stream.
                     * @param request Nothing message or plain object
                     * @param callback Node-style callback called with the error, if any, and Nothing
                     */
                    public stream(request: com.variflight.fidstest.flight.INothing, callback: com.variflight.fidstest.flight.FlightService.StreamCallback): void;

                    /**
                     * Calls Stream.
                     * @param request Nothing message or plain object
                     * @returns Promise
                     */
                    public stream(request: com.variflight.fidstest.flight.INothing): Promise<com.variflight.fidstest.flight.Nothing>;
                }

                namespace FlightService {

                    /**
                     * Callback as used by {@link com.variflight.fidstest.flight.FlightService#pullFlightInfo}.
                     * @param error Error, if any
                     * @param [response] FlightList
                     */
                    type PullFlightInfoCallback = (error: (Error|null), response?: com.variflight.fidstest.flight.FlightList) => void;

                    /**
                     * Callback as used by {@link com.variflight.fidstest.flight.FlightService#stream}.
                     * @param error Error, if any
                     * @param [response] Nothing
                     */
                    type StreamCallback = (error: (Error|null), response?: com.variflight.fidstest.flight.Nothing) => void;
                }
            }
        }

        /** Namespace test. */
        namespace test {

            /** Properties of a user. */
            interface Iuser {

                /** user id */
                id?: (number|null);

                /** user name */
                name?: (string|null);

                /** user comment */
                comment?: (google.protobuf.IStringValue|null);

                /** user orderArray */
                orderArray?: ({ [k: string]: com.variflight.test.Iorder }|null);
            }

            /** Represents a user. */
            class user implements Iuser {

                /**
                 * Constructs a new user.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.variflight.test.Iuser);

                /** user id. */
                public id: number;

                /** user name. */
                public name: string;

                /** user comment. */
                public comment?: (google.protobuf.IStringValue|null);

                /** user orderArray. */
                public orderArray: { [k: string]: com.variflight.test.Iorder };

                /**
                 * Creates a new user instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns user instance
                 */
                public static create(properties?: com.variflight.test.Iuser): com.variflight.test.user;

                /**
                 * Encodes the specified user message. Does not implicitly {@link com.variflight.test.user.verify|verify} messages.
                 * @param message user message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.variflight.test.Iuser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified user message, length delimited. Does not implicitly {@link com.variflight.test.user.verify|verify} messages.
                 * @param message user message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.variflight.test.Iuser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a user message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns user
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.variflight.test.user;

                /**
                 * Decodes a user message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns user
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.variflight.test.user;

                /**
                 * Verifies a user message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a user message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns user
                 */
                public static fromObject(object: { [k: string]: any }): com.variflight.test.user;

                /**
                 * Creates a plain object from a user message. Also converts values to other types if specified.
                 * @param message user
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.variflight.test.user, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this user to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an order. */
            interface Iorder {

                /** order id */
                id?: (number|null);

                /** order orderTime */
                orderTime?: (number|Long|null);

                /** order totalPrice */
                totalPrice?: (number|null);

                /** order address */
                address?: (google.protobuf.IStringValue|null);

                /** order orderItemMap */
                orderItemMap?: ({ [k: string]: com.variflight.test.IorderItem }|null);

                /** order orderItemArray */
                orderItemArray?: (com.variflight.test.IorderItem[]|null);

                /** order pricesMap */
                pricesMap?: ({ [k: string]: number }|null);

                /** order userid */
                userid?: (number|null);

                /** order parentUser */
                parentUser?: (com.variflight.test.Iuser|null);
            }

            /** Represents an order. */
            class order implements Iorder {

                /**
                 * Constructs a new order.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.variflight.test.Iorder);

                /** order id. */
                public id: number;

                /** order orderTime. */
                public orderTime: (number|Long);

                /** order totalPrice. */
                public totalPrice: number;

                /** order address. */
                public address?: (google.protobuf.IStringValue|null);

                /** order orderItemMap. */
                public orderItemMap: { [k: string]: com.variflight.test.IorderItem };

                /** order orderItemArray. */
                public orderItemArray: com.variflight.test.IorderItem[];

                /** order pricesMap. */
                public pricesMap: { [k: string]: number };

                /** order userid. */
                public userid: number;

                /** order parentUser. */
                public parentUser?: (com.variflight.test.Iuser|null);

                /**
                 * Creates a new order instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns order instance
                 */
                public static create(properties?: com.variflight.test.Iorder): com.variflight.test.order;

                /**
                 * Encodes the specified order message. Does not implicitly {@link com.variflight.test.order.verify|verify} messages.
                 * @param message order message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.variflight.test.Iorder, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified order message, length delimited. Does not implicitly {@link com.variflight.test.order.verify|verify} messages.
                 * @param message order message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.variflight.test.Iorder, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an order message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns order
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.variflight.test.order;

                /**
                 * Decodes an order message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns order
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.variflight.test.order;

                /**
                 * Verifies an order message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an order message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns order
                 */
                public static fromObject(object: { [k: string]: any }): com.variflight.test.order;

                /**
                 * Creates a plain object from an order message. Also converts values to other types if specified.
                 * @param message order
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.variflight.test.order, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this order to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an orderItem. */
            interface IorderItem {

                /** orderItem id */
                id?: (number|null);

                /** orderItem name */
                name?: (string|null);

                /** orderItem price */
                price?: (number|null);

                /** orderItem orderid */
                orderid?: (number|null);
            }

            /** Represents an orderItem. */
            class orderItem implements IorderItem {

                /**
                 * Constructs a new orderItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.variflight.test.IorderItem);

                /** orderItem id. */
                public id: number;

                /** orderItem name. */
                public name: string;

                /** orderItem price. */
                public price: number;

                /** orderItem orderid. */
                public orderid: number;

                /**
                 * Creates a new orderItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns orderItem instance
                 */
                public static create(properties?: com.variflight.test.IorderItem): com.variflight.test.orderItem;

                /**
                 * Encodes the specified orderItem message. Does not implicitly {@link com.variflight.test.orderItem.verify|verify} messages.
                 * @param message orderItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.variflight.test.IorderItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified orderItem message, length delimited. Does not implicitly {@link com.variflight.test.orderItem.verify|verify} messages.
                 * @param message orderItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.variflight.test.IorderItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an orderItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns orderItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.variflight.test.orderItem;

                /**
                 * Decodes an orderItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns orderItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.variflight.test.orderItem;

                /**
                 * Verifies an orderItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an orderItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns orderItem
                 */
                public static fromObject(object: { [k: string]: any }): com.variflight.test.orderItem;

                /**
                 * Creates a plain object from an orderItem message. Also converts values to other types if specified.
                 * @param message orderItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.variflight.test.orderItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this orderItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Users. */
            interface IUsers {

                /** Users users */
                users?: ({ [k: string]: com.variflight.test.Iuser }|null);
            }

            /** Represents a Users. */
            class Users implements IUsers {

                /**
                 * Constructs a new Users.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.variflight.test.IUsers);

                /** Users users. */
                public users: { [k: string]: com.variflight.test.Iuser };

                /**
                 * Creates a new Users instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Users instance
                 */
                public static create(properties?: com.variflight.test.IUsers): com.variflight.test.Users;

                /**
                 * Encodes the specified Users message. Does not implicitly {@link com.variflight.test.Users.verify|verify} messages.
                 * @param message Users message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.variflight.test.IUsers, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Users message, length delimited. Does not implicitly {@link com.variflight.test.Users.verify|verify} messages.
                 * @param message Users message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.variflight.test.IUsers, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Users message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Users
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.variflight.test.Users;

                /**
                 * Decodes a Users message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Users
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.variflight.test.Users;

                /**
                 * Verifies a Users message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Users message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Users
                 */
                public static fromObject(object: { [k: string]: any }): com.variflight.test.Users;

                /**
                 * Creates a plain object from a Users message. Also converts values to other types if specified.
                 * @param message Users
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.variflight.test.Users, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Users to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents an OrderService */
            class OrderService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new OrderService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new OrderService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): OrderService;

                /**
                 * Calls GetUsersOrder.
                 * @param request Empty message or plain object
                 * @param callback Node-style callback called with the error, if any, and Users
                 */
                public getUsersOrder(request: google.protobuf.IEmpty, callback: com.variflight.test.OrderService.GetUsersOrderCallback): void;

                /**
                 * Calls GetUsersOrder.
                 * @param request Empty message or plain object
                 * @returns Promise
                 */
                public getUsersOrder(request: google.protobuf.IEmpty): Promise<com.variflight.test.Users>;
            }

            namespace OrderService {

                /**
                 * Callback as used by {@link com.variflight.test.OrderService#getUsersOrder}.
                 * @param error Error, if any
                 * @param [response] Users
                 */
                type GetUsersOrderCallback = (error: (Error|null), response?: com.variflight.test.Users) => void;
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
