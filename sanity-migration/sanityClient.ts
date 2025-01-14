// sanityClient.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: 'process.env.NEXT_PUBLIC_SANITY_DATASET',       
  apiVersion: '2024-01-04',     
  useCdn: false,                
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});