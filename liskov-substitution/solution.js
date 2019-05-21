class Request {
  path() {}
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
  path() {
    return '/profile';
  }

  extractResponse(response) {
    this.logResponse(response);
    const obj = JSON.parse(response.body); 
    const profileVersion = response.headers['X-Profile-Version'];
    const profile = obj.profile;
    return new Profile(profile.name, profile.birthdate, profile.accessLevel, profileVersion);
  }
}
