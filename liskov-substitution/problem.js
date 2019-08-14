class Request {
  extractResponse(response) {
    this.logResponse(response);
    const obj = JSON.parse(response.body); 
    return buildInstance(obj);
  }

  logResponse(response) {/*...*/}
}

class ProfileRequest extends Request {
  path() {
    return '/profile';
  }

  extractResponse(response) {
    const obj = JSON.parse(response.body); 
    const profileVersion = response.headers['X-Profile-Version'];
    const profile = obj.profile;
    return new Profile(profile.name, profile.birthdate, profile.accessLevel, profileVersion);
  }
}
