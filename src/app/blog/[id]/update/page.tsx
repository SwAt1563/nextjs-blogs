import styles from "./page.module.css";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getSession } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function UpdateBlog({
    params,
  }: {
    params?: Record<string, string | string[]>;
  }) {
    const { id } = params as { id: string };

    const session = await getSession();
    const user = session?.user;

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              update
              {user?.id}
            </div>
          </div>
        </div>
      </>
    );
  },
  {
    returnTo({ params }: { params?: Record<string, string | string[]> }) {
      return `/blog/${params?.id}/update`;
    },
  }
);
