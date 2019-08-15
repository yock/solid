class WebServiceClient {
  get(request) {
    const response = fetch(request.getWebAPIRequest());
    return request.extractResponse(response);
  }
}

class WebServiceRequest {
  extractResponse(response) {
    this.logResponse(response);
    const obj = JSON.parse(response.body); 
    return buildInstance(obj);
  }

  logResponse(response) {/*...*/}
}

class SomethingElseRequest extends WebServiceRequest {
  getWebAPIRequest() {
    return new Request('/something-else');
  }

  buildInstance(obj) {/*...*/}
}

class ProfileRequest extends WebServiceRequest {
  constructor(authToken) {
    this.authToken = authToken;
  }

  getWebAPIRequest() {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${this.authToken}`);
    return new Request(`${ENV['baseURL']}/profile`, { headers });
  }

  extractResponse(response) {/*...*/}
}
