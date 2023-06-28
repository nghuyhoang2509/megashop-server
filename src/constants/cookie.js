module.exports = {
  OPTION_SET_COOKIE: {
    signed: true,
    httpOnly: true,
    expires: new Date(Date.now() + 2592000000),
    sameSite: "None",
    secure: true,
  },
  ACCESS_TOKEN: "_mega_token",
};
