import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RestService {
  private readonly BASE_URL = '/mft/rest/';
  private readonly apiURL = 'http://localhost:3000';
  private headers = {
    'content-type': 'application/json'
  };
  constructor(private http: HttpClient) {
  }

  get(url: string, response = false) {
    if (url === "userProfile0") {
      return this.http.get("./assets/json/userProfile0.json");
    } else if (url === "userProfile1") {
      return this.http.get("./assets/json/userProfile1.json");
    } else if (url === "userProfile2") {
      return this.http.get("./assets/json/userProfile2.json");
    } else if (url === "userProfile3") {
      return this.http.get("./assets/json/userProfile3.json");
    } else if (url === "userProfile4") {
      return this.http.get("./assets/json/userProfile4.json");
    } else if (url === "userProfile5") {
      return this.http.get("./assets/json/userProfile5.json");
    } else if (url === "userProfile6") {
      return this.http.get("./assets/json/userProfile6.json");
    } else if (url === "userProfile7") {
      return this.http.get("./assets/json/userProfile7.json");
    } else if (url === "userProfile8") {
      return this.http.get("./assets/json/userProfile8.json");
    } else if (url === "userProfile9") {
      return this.http.get("./assets/json/userProfile9.json");
    } else if (url === "userProfile10") {
      return this.http.get("./assets/json/userProfile10.json");
    } else if (url === "userProfile11") {
      return this.http.get("./assets/json/userProfile11.json");
    } else if (url === "userProfile12") {
      return this.http.get("./assets/json/userProfile12.json");
    } else if (url === "userProfile13") {
      return this.http.get("./assets/json/userProfile13.json");
    } else if (url === "userProfile14") {
      return this.http.get("./assets/json/userProfile14.json");
    } else if (url === "userProfile15") {
      return this.http.get("./assets/json/userProfile15.json");
    } else if (url === "userProfile16") {
      return this.http.get("./assets/json/userProfile16.json");
    } else if (url === "allTeamProfile") {
      return this.http.get("./assets/json/allTeamProfile.json");
    } else if (url === "groupDetails") {
      return this.http.get("./assets/json/groupDetails.json");
    } else if (url === "groupStageFixture") {
      return this.http.get("./assets/json/groupStageFixture.json");
    } else {
      const options = {
        headers: this.headers,
      };
      if (response) {
        options['observe'] = 'response';
      }
      return this.http.get(this.apiURL + '/' + url, options);
    }
  }

  post(url: string, body: object | any[], response = false) {
    if (url === "user/listUserDetails") {
      return this.http.get("./assets/json/listUserDetails.json");
    } else {
      const options = {
        headers: this.headers,
      };
      if (response) {
        options['observe'] = 'response';
      }
      return this.http.post(this.apiURL + '/' + url, JSON.stringify(body), options);
    }
  }

  put(url: string, body: object | any[], response = false) {
    const options = {
      headers: this.headers,
    };
    if (response) {
      options['observe'] = 'response';
    }
    return this.http.put(this.apiURL + '/' + url, JSON.stringify(body), options);
  }
}