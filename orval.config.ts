import { defineConfig } from "orval";

export default defineConfig({
  "backend": {
    output: {
      target: "./app/api/backend/backend.ts",
      schemas: "./app/api/backend/dto",
      client: "react-query",
      httpClient: "axios",
      override: {
        mutator: {
          path: "./app/api/custom-axios.ts",
          name: "customAxios",
        },
        query: {
          useSuspenseQuery: true,
        },
      },

    },
    input: {
      target: "../api_docs/swagger.json",
    },
  },
});