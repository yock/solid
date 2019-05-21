const ENV = {
  baseURL: 'http://example.com'
}

class WebServiceClient {
  get(request) {
    const response = fetch(request.getWebAPIRequest());
    return request.extractResponse(request);
  }
}

class WebServiceRequest {
  buildInstance(obj) {}

  extractResponse(response) {
    this.logResponse(response);
    const obj = JSON.parse(response.body); 
    return buildInstance(obj);
  }

  logResponse(response) {
    // logging code...
  }
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

  extractResponse(response) {
    this.logResponse(response);
    const obj = JSON.parse(response.body); 
    const profileVersion = response.headers['X-Profile-Version'];
    const profile = obj.profile;
    return new Profile(profile.name, profile.birthdate, profile.accessLevel, profileVersion);
  }
}
