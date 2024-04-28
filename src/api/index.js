import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "bcd9d56de9msh05ea267b13df544p1c29aejsn0312a238fbf3",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data; // Change from 'response' to 'data'
  } catch (error) {
    console.log(error);
  }
};
