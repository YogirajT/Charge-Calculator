import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalcResponseModel } from '../calc-response-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MsmeService {

  constructor(private http: HttpClient) { }

  getPricing(msmeModel: HttpParams): Observable<CalcResponseModel> {
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    const options = {
        headers: httpHeaders
    };
    return this.http
    .post<CalcResponseModel>('http://legaldocs.local/drafts/msme/calc-msme-chg.php', msmeModel, options)
    .pipe(
        map((response) => response)
    );
  }

}
