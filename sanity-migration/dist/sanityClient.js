"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'process.env.NEXT_PUBLIC_SANITY_DATASET',
    apiVersion: '2024-01-04',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
