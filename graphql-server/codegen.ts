import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./lib/schema.ts",
  generates: {
    "./lib/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        // we put the path based we on type.ts file
        contextType: "./context#DataSourceContext", // get the type of Context from context file
        mappers: {
          Track: "./models#TrackModel", // get the type of Track that we get from RestAPI, for make mapping with autherId and auther object
          Author: "./models#AuthorModel",
          Module: "./models#ModuleModel",
        },
      },
    },
  },
};

export default config;