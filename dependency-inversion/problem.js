getRemoteProfile(authToken) {
  const client = new WebServiceClient();
  const profileRequest = new ProfileRequest(authToken);
  return client.get(profileRequest);
}
