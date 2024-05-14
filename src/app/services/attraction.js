import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const attractionApi = createApi({
  reducerPath: "attraction",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tripplan-api.azurewebsites.net/api/v1/"}),
  endpoints: (builder) => ({
    getAttractionApi: builder.query({
      query: (name) => `attraction/?category=${name}`,
    }),
  }),
});

export const { useGetAttractionApiQuery } = attractionApi;
