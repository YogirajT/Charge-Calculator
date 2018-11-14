export class FlState {
    constructor() {
    }
    company = <any>{
        state: <string>''
    };
    business = <any>{
        businessKind: <any> {
            otherBusinessKind: <string>'',
            kind1: <boolean>false,
            kind3: <boolean>false,
            kind5: <boolean>false,
            kind7: <boolean>false,
            kind9: <boolean>false,
            kind11: <boolean>false,
            kind13: <boolean>false,
            kind2: <boolean>false,
            kind4: <boolean>false,
            kind6: <boolean>false,
            kind8: <boolean>false,
            kind10: <boolean>false,
            kind12: <boolean>false,
            kind14: <boolean>false
        }
    };
    payment = <any>{
        validity : <string>'',
        expressPayment: <number>0
    };
}
