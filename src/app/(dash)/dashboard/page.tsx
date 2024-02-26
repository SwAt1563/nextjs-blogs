import styles from "./page.module.css";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { notFound } from "next/navigation";

import Stats from "./(stats)/stats";

export default withPageAuthRequired(
  async function Dashboard() {
    const session = await getSession();
    const user = session?.user;

    if (user?.role !== "ADMIN") {
      return notFound();
    }

    return (
      <>
        <div className="container mb-3">
          <Stats styles={styles} />
        </div>
      </>
    );
  },
  { returnTo: "/dashboard" }
);
