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

  getClient() {
    return this.instances.client;
  }

  getProfileRequestFactory() {
    return this.instances.profileRequestFactory;
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

const client = container.getClient();
const authToken = 'token'; // From a request we haven't implemented
const profileRequest = container.getProfileRequestFactory().getInstance(authToken);
const profile = client.get(profileRequest);

