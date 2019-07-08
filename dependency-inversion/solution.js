const localDevInstances = {
  client: new MockWebServiceClient(),
  profileRequestFactory: new ProfileRequestFactory('http://example.com')
};

const productionInstances = {
  client: new WebServiceClient(),
  profileRequestFactory: new ProfileRequestFactory('http://api.seesparkbox.com')
};

class Container {
  constructor(instances) {
    this.instances = instances;
  }

  getInstanceOf(name) {
    if (this.instances[name]) {
      return this.instances[name];
    }
    throw 'No instance by that name';
  }
}

class ProfileRequestFactory {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  getInstance(authToken) {
    return new ProfileRequest(this.baseURL, authToken);
  }
}

const container = new Container(productionInstances);

const client = container.getInstanceOf('client');
const authToken = 'token'; // From a request we haven't implemented
const profileRequest = container.getInstanceof('profileRequestFactory').getInstance(authToken);
const profile = client.get(profileRequest);

