import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    paymentApi = 'https://abdul-web-api.herokuapp.com/razorPayOrder';
    // birthApi = 'https://localhost:3001/birth';
    constructor(private httpClient: HttpClient) { }

    public razorPayOrder(params): Observable<any> {
        return this.httpClient.post(this.paymentApi, params);
    }

}
