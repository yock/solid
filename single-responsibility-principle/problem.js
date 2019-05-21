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
    return new Profile(obj.name, obj.birthdate, obj.accessLevel);
  }
}

class Profile {
  constructor(name, birthdate, accessLevel) {
    this.name = name;
    this.birthdate = birthdate;
    this.accessLevel = accessLevel;
  }
}

const client = new WebServiceClient('http://example.com');
const profile = client.get('/profile');
