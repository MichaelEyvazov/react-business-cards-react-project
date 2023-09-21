const confirUser = rawUser => {
  const name = { ...rawUser.name, middle: rawUser.name.middle || "" };

  const address = {
    ...rawUser.address,
    state: rawUser.address.state || "not defined",
  };

  const image = {
    ...rawUser.image,
    url:
      rawUser.image.url ||
      "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460",
    alt: rawUser.image.alt || "Business card image",
  };

  

  const user = {
    ...rawUser,
    name,
    address,
    image,
  };

  return user;
};

module.exports = confirUser;