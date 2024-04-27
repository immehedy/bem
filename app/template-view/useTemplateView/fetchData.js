import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_TEMPLATE_API;
const TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN;

export default async function fetchData() {
  try {
    console.log({ API_URL, TOKEN });
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    console.log({ response });

    return response;
  } catch (error) {
    console.log("error thrown");
    console.error("Error fetching data:", { error });
  }
}
