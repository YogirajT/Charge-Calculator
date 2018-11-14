import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalcResponseModel } from '../calc-response-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GumastaService {
  constructor(private http: HttpClient) { }

  getPricing(gumastaModel: HttpParams): Observable<CalcResponseModel> {
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    const options = {
        headers: httpHeaders
    };
    return this.http
    .post<CalcResponseModel>('http://legaldocs.local/drafts/gumasta/calc-gumasta-chg.php', gumastaModel, options)
    .pipe(
        map((response) => response)
    );
  }

  getDistrict(state: string):  Observable<any> {
    const params = new HttpParams().set('state', state);
    return this.http.get(`http://legaldocs.local/_api/gumasta/villages.php`, { params: params }).pipe(
      map((response) => response )
    );
  }
}
