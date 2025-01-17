const env = window.env ?? process.env;
export const configuration = {
  NODE_ENV: env.NODE_ENV,
  API_URL: env.REACT_APP_API_URL,
  CHAT_SOCKET_URL: env.REACT_APP_CHAT_SOCKET_URL,
  NOTIFICATION_SOCKET_URL: env.REACT_APP_NOTIFICATION_SOCKET_URL,
  UPLOAD_SIZE_LIMIT_MB: env.UPLOAD_SIZE_LIMIT_MB
};
