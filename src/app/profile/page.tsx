import Image from "next/image";
import styles from "@/src/app/page.module.css";
import Link from "next/link";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function Profile() {
    return (
      <>
        <h1>Profile</h1>
      </>
    );
  },
  { returnTo: "/profile" }
);
