import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getSession } from "@auth0/nextjs-auth0";

import BlogContent from "@/src/app/ui/blog/blog-content";

export default withPageAuthRequired(
  async function Page({
    params,
  }: {
    params?: Record<string, string | string[]>;
  }) {
    const { id } = params as { id: string };

    const session = await getSession();
    const user = session?.user;

    return (
      <>
        <BlogContent blogId={id} userId={user?.id} />
      </>
    );
  },
  {
    returnTo({ params }: { params?: Record<string, string | string[]> }) {
      return `/blog/${params?.id}`;
    },
  }
);
