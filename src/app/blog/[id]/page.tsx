import styles from "./page.module.css";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getSession } from "@auth0/nextjs-auth0";

import BlogContent from "./(content)/blog-content";

export default withPageAuthRequired(
  async function Blog({
    params,
  }: {
    params?: Record<string, string | string[]>;
  }) {
    const { id } = params as { id: string };

    const session = await getSession();
    const user = session?.user;

    return (
      <>
        <BlogContent blogId={id} userId={user?.id} styles={styles} />
        
      </>
    );
  },
  {
    returnTo({ params }: { params?: Record<string, string | string[]> }) {
      return `/blog/${params?.id}`;
    },
  }
);
