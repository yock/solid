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

  logResponse(response) {/*...*/}
}
