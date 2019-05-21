class WebServiceClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(request) {
    const response = fetch(this.baseURL + request.path());
    return request.extractResponse(response);
  }
}

class SomethingElse {
  constructor(isAmazing, score) {
    this.isAmazing = isAmazing;
    this.score = score;
  }
}

class Profile {
  constructor(name, birthdate, accessLevel) {
    this.name = name;
    this.birthdate = birthdate;
    this.accessLevel = accessLevel;
  }
}

class SomethingElseRequest {
  path() {
    return '/something-else';
  }

  extractResponse(response) {
    const obj = JSON.parse(response.body); 
    const somethingElse = obj.somethingElse;
    return new SomethingElse(somethingElse.isAmazing, somethingElse.score);
  }
}

class ProfileRequest {
  path() {
    return '/profile';
  }

  extractResponse(response) {
    const obj = JSON.parse(response.body); 
    const profile = obj.profile;
    return new Profile(profile.name, profile.birthdate, profile.accessLevel);
  }
}

const client = new WebServiceClient('http://example.com');
const profile = client.get(new ProfileRequest());
const somethingElse = client.get(new SomethingElseRequest());
