import styles from "./page.module.css";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import UserBlogs from "@/src/app/ui/profile/user-blogs";

export default withPageAuthRequired(
  async function Page({
    params,
  }: {
    params?: Record<string, string | string[]>;
  }) {
    const { id } = params as { id: string };

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <UserBlogs userId={id} styles={styles} />
            </div>
          </div>
        </div>
      </>
    );
  },
  {
    returnTo({ params }: { params?: Record<string, string | string[]> }) {
      return `/profile/${params?.id}`;
    },
  }
);
