const API = async (manName: string | undefined, womanName: string | undefined) => {
  if (!manName || !womanName) {
      throw new Error('Missing names');
  }

  const fetchLove = await fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?womanName=${womanName}&manName=${manName}`,
      {
          method: "GET",
          headers: {
              "x-rapidapi-host": "love-calculator.p.rapidapi.com",
              "x-rapidapi-key": "SIGN-UP-FOR-KEY'" // Тук поставете вашия реален API ключ
          }
      }
  );

  if (!fetchLove.ok) {
      throw new Error('Failed to fetch data');
  }

  const result = await fetchLove.json();

  return result;
};

export default API;
