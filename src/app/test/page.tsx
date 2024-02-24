
// page.tsx

import {  withPageAuthRequired } from "@auth0/nextjs-auth0";

import Comp from "./comp";

export default withPageAuthRequired(
  async function Test() {
  
    return (
      <>
        <h1 className="text-center mt-3">Test</h1>
        <Comp />
      </>
    );
  },
  { returnTo: "/create-page" }
);


