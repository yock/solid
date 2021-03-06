class WebServiceClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(path) {
    const response = fetch(this.baseURL + path);
    return this.parseResponse(response);
  }

  parseResponse(response) {
    const obj = JSON.parse(response.body); 
    if (obj.profile) {
      const profile = obj.profile;
      return new Profile(profile.name, profile.birthdate, profile.accessLevel);
    } else if (obj.somethingElse) {
      const somethingElse = obj.somethingElse;
      return new SomethingElse(somethingElse.isAmazing, somethingElse.score);
    }
  }
}

const client = new WebServiceClient('http://example.com');
const profile = client.get('/profile');
const somethingElse = client.get('/something-else');
