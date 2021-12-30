import axios from "axios";

const checkCoingeckoStatus = async () => {
  try {
    await axios.get("https://api.coingecko.com/api/v3/ping");
    return true;
  } catch {
    return false;
  }
};

const fetchSinMarket = async () => {
  try {
    const resp = await axios.get(
      "https://api.coingecko.com/api/v3/coins/suqa/market_chart",
      {
        params: { vs_currency: "usd", days: 30 },
      }
    );
    return resp.data;
  } catch {
    return false;
  }
};

export { checkCoingeckoStatus, fetchSinMarket };
