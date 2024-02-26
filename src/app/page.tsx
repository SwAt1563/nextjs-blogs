import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import Hero from "@/src/app/ui/home/hero";
import Blogs from "@/src/app/ui/home/blogs";

export default withPageAuthRequired(
  async function Page() {
    return (
      <main>
        <Hero />
        <Blogs />
      </main>
    );
  },
  { returnTo: "/" }
);
