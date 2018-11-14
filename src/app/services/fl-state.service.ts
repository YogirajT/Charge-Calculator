import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalcResponseModel } from '../calc-response-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlStateService {
  constructor(private http: HttpClient) { }

  getPricing(flStateModel: HttpParams): Observable<CalcResponseModel> {
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    const options = {
        headers: httpHeaders
    };
    return this.http
    .post<CalcResponseModel>('http://legaldocs.local/drafts/food-license-state/calc-fls-chg.php', flStateModel, options)
    .pipe(
        map((response) => response)
    );
  }
}
