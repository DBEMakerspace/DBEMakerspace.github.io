import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "5a6d2ab5-c8e5-46e5-a1dc-8a8f46fd9c6a", // Get this from tina.io
  token: "a6a2fcc5f60525115a773235620e8b21c8fafd2e", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "/",
  },
  media: {
    tina: {
      mediaRoot: "/assets/images",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        name: "exhibitions",
        label: "Exhibitions",
        path: "_exhibitions",
        format: "markdown",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "equipment",
        label: "Equipment",
        path: "_equipment",
        format: "markdown",
       
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "parent",
            label: "Sub Category",
            required: true,
            list: true,
            options: [
              {
                value: "Fabrication",
                label: "Fabrication"
              },
              {
                value: "Multimedia",
                label: "Multimedia"
              },
              {
                value: "Other",
                label: "Other"
              },
            ],
          },

          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
