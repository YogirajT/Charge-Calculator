import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalcResponseModel } from '../calc-response-model';

@Injectable({
  providedIn: 'root'
})
export class FlBasicService {

  constructor(private http: HttpClient) { }

  getPricing(flBasicModel: HttpParams): Observable<CalcResponseModel> {
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    const options = {
        headers: httpHeaders
    };
    return this.http
    .post<CalcResponseModel>('http://legaldocs.local/drafts/food-license/calc-fl-chg.php', flBasicModel, options)
    .pipe(
        map((response) => response)
    );
  }
}
