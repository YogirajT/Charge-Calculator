import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalcResponseModel } from '../calc-response-model';

@Injectable({
  providedIn: 'root'
})
export class GstrService {

  constructor(private http: HttpClient) { }

  getPricing(gstrModel: HttpParams): Observable<CalcResponseModel> {
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    const options = {
        headers: httpHeaders
    };
    return this.http
    .post<CalcResponseModel>('http://legaldocs.local/drafts/gstr/calc-gstr-chg.php', gstrModel, options)
    .pipe(
        map((response) => response)
    );
  }
}
