export class CartItem {
    name: string;
    serviceCharge: number;
    governmentCharge: number;
    gst: number;
    data: any;
    total: number;
    constructor(name: string, governmentCharge: number, serviceCharge: number, gst: number, data: any) {
        this.name = name;
        this.serviceCharge = serviceCharge;
        this.governmentCharge = governmentCharge;
        this.gst = gst ? gst : 0;
        this.data = data ? data : {};
        this.total = this.serviceCharge + this.governmentCharge + this.gst;
    }
}
