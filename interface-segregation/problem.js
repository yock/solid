class WebServiceClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(request) {
    const authentication = request.getAuthentication();
    let response = null;

    // Both sides of this `if` look similar
    if (authentication) {
      response = fetch(this.baseURL + request.path(), authentication);
    } else {
      response = fetch(this.baseURL + request.path());
    }
    return request.extractResponse(response);
  }
}

class Request {
  path() {}
  buildInstance(obj) {}

  /**
   * Not all requests are authenticated. This is awkward.
   */
  getAuthentication() {
    return null;
  }

  extractResponse(response) {
    this.logResponse(response);
    const obj = JSON.parse(response.body); 
    return buildInstance(obj);
  }

  logResponse(response) {
    // logging code...
  }
}

class SomethingElseRequest extends Request {
  path() {
    return '/something-else';
  }

  buildInstance(obj) {
    const somethingElse = obj.somethingElse;
    return new SomethingElse(somethingElse.isAmazing, somethingElse.score);
  }
}

class ProfileRequest extends Request {
  constructor(authToken) {
    this.authToken = authToken;
  }

  path() {
    return '/profile';
  }

  getAuthentication() {
    return { token: this.authToken };
  }

  extractResponse(response) {
    this.logResponse(response);
    const obj = JSON.parse(response.body); 
    const profileVersion = response.headers['X-Profile-Version'];
    const profile = obj.profile;
    return new Profile(profile.name, profile.birthdate, profile.accessLevel, profileVersion);
  }
}
