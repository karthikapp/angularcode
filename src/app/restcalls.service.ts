// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RestcallsService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class restcall {
  constructor(private httpClient: HttpClient) 
  { }

  getalldata()
  {
   return this.httpClient.get("http://localhost:3000/data.csv")
  }
  
}