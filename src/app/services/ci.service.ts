import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalcResponseModel } from '../calc-response-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CiService {
  constructor(private http: HttpClient) { }

  getPricing(ciModel: HttpParams): Observable<CalcResponseModel> {
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    const options = {
        headers: httpHeaders
    };
    return this.http
    .post<CalcResponseModel>('http://legaldocs.local/drafts/ci/calc-ci-chg.php', ciModel, options)
    .pipe(
        map((response) => response)
    );
  }
}
