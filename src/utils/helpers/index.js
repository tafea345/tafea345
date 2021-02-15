const contentful = require("contentful");

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = contentful.createClient({
  space: SPACE,
  accessToken: TOKEN,
});

const types = ["portfolio", "categories"];

export default client;
