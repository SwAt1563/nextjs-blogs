import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import CreateBlogForm from "@/src/app/ui/create-blog/create-blog-form";

import styles from "./page.module.css";

export default withPageAuthRequired(
  async function Page() {
    const session = await getSession();
    const user = session?.user;

    return (
      <>
        <h1 className="text-center mt-3">Create a Blog</h1>
        <CreateBlogForm styles={styles} userId={user?.id}/>
      </>
    );
  },
  { returnTo: "/create-page" }
);
