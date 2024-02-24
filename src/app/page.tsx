import Image from "next/image";
import styles from "@/src/app/page.module.css";
import Link from "next/link";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import Hero from "@/src/app/ui/home/hero";
import Blogs from "@/src/app/ui/home/blogs";

export default withPageAuthRequired(
  async function Index() {
   

    return (
      <main className={`${styles.main}`}>
        <Hero />

        
        <Blogs />
      </main>
    );
  },
  { returnTo: "/" }
);
