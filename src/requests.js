const API_URL = "https://picsum.photos/v2/list";

export const fetchPicturesData = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};
