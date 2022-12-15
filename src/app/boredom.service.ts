import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoredomService {

  constructor(private _httpClient:HttpClient) { }
  getBoredom():Observable<any>{
    return this._httpClient.get("https://www.boredapi.com/api/activity")
  }
}
