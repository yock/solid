class WebServiceClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(request) {
    const response = fetch(this.baseURL + request.path());
    return request.extractResponse(response);
  }
}

class SomethingElseRequest {/*...*/}

class ProfileRequest {/*...*/}

const client = new WebServiceClient('http://example.com');
const profile = client.get(new ProfileRequest());
const somethingElse = client.get(new SomethingElseRequest());
