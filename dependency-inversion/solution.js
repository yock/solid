const getRemoteProfile(authToken, client = new WebServiceClient()) {
  const profileRequest = new ProfileRequest(ENV['baseURL'], authToken);
  return client.get(profileRequest);
}
