"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: 'hvxy4pua', 
    dataset: 'production', 
    apiVersion: '2024-01-04', 
    useCdn: false, 
    token: "sk5GKrdlbGvtmHKq0AswOUjIVoYqXfep72b0MCotACJCoOIJ2VfADgDzrsKaLZtPVylYAjc40xjAvyXsB4vlYwzrs495boCsWflBeJu52IOoA1q4N4ENahwNis17VuFnVUPZUyJyzCULkfVhVMUXRy9ZxZsNOdQv8Ce1vwJjTjjOOlrCscyH"
});
