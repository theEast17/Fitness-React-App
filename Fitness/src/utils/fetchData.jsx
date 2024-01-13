const key = import.meta.env.VITE_RAPIDAPI_KEY;

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": key,
  },
};

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': key,
    },
  };

export const fetchData = async (url, options) => {
  const res = await fetch(url+'?limit=1000', options);
  const data = await res.json();
  return data;
};
export const fetchYoutubeData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
