class WebServiceClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(path) {
    return fetch(this.baseURL + path);
  }
}

class WebServiceProfileMapper {
  constructor(response) {
    this.response = response;
  }

  getInstance() {
    const obj = JSON.parse(this.response.body); 
    return new Profile(obj.name, obj.birthdate, obj.accessLevel);
  }
}

const client = new WebServiceClient('http://example.com');
const profileResponse = client.get('/profile');
const profile = new WebServiceProfileMapper(profileResponse).getInstance();
