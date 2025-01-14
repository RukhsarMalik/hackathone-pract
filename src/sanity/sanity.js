import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Environment variable for project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // Environment variable for dataset
  apiVersion: '2023-01-01',                            // Use the latest or specific API version
  useCdn: process.env.NODE_ENV === 'production',       // Use CDN in production for faster response
  token: process.env.SANITY_TOKEN,         // Optional: Include token if fetching private data
});

export default client;
