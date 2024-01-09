import { Injectable } from '@angular/core';
import { config } from '@app/utility';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  getBaseUrl(){
    return config().api_url;
  }

}
