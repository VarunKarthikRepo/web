import config from "../config";

export const fetchAddresses = async (addressText) => {
  const url = `${config.nominatimSearchApi}&q=${encodeURIComponent(
    addressText
  )}`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (ex) {
    return {
      error: ex,
    };
  }
};
