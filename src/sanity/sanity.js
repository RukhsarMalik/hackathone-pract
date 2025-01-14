import { createClient } from '@sanity/client';


const client = createClient({
  projectId: 'hvxy4pua',  
  dataset: 'production',      
  useCdn: true,                  
});

export default client;
