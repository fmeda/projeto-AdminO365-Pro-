let cachedToken = null;
let tokenExpiry = null;

async function getAuthToken() {
  const currentTime = new Date();
  if (cachedToken && tokenExpiry && currentTime < tokenExpiry) {
    return cachedToken; // Retorna o token armazenado
  }

  const response = await axios.post(AUTH_URL, null, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    params: {
      client_id: CLIENT_ID,
      scope: "https://graph.microsoft.com/.default",
      client_secret: CLIENT_SECRET,
      grant_type: "client_credentials",
    },
  });

  cachedToken = response.data.access_token;
  tokenExpiry = new Date(currentTime.getTime() + response.data.expires_in * 1000);
  return cachedToken;
}

module.exports = { getAuthToken };
