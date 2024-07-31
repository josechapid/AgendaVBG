const getApiUrl = () => {
  if (typeof window === "undefined") {
    return process.env.VITE_API_URL_MOBILE; // Móvil (React Native)
  }
  return process.env.VITE_API_URL_WEB; // Web
};

module.exports = {
  getApiUrl,
};
