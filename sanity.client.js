import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "qvy0ccge", // 🔹 Replace with your Sanity project ID
  dataset: "production", // or your dataset name
  useCdn: false, // `true` for faster response, `false` if updating content frequently
  apiVersion: "2024-03-09", // Use the latest date
});
