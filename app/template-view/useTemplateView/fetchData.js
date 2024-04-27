import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_TEMPLATE_API;
const TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN;

export default async function fetchData() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response?.data;
  } catch (error) {
    console.log("error thrown");
    console.error("Error fetching data:", { error });
  }
}
