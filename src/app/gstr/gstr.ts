export class Gstr {
    constructor(type: number) {
        this.payment['qGstFiling'] = type;
    }
    payment = <any>{};
}
