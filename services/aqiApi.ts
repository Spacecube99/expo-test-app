export const getAQI = async () => {
  const url =
    "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=40.7128&longitude=-96.9906&current=us_aqi,pm10,pm2_5";

  const res = await fetch(url);
  const data = await res.json();

  return data;
};