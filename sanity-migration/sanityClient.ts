// sanityClient.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.projectId, 
  dataset: 'production',       
  apiVersion: '2024-01-04',     
  useCdn: false,                
  token: process.env.token,
});