import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { notFound } from "next/navigation";

import Stats from "@/src/app/ui/dashboard/stats";
import Table from "@/src/app/ui/dashboard/table";

import { CardsSkeletons, TableSkeleton } from "@/src/app/ui/skeletons";
import { Suspense } from "react";

export default withPageAuthRequired(
  async function Page() {
    const session = await getSession();
    const user = session?.user;

    if (user?.role !== "ADMIN") {
      return notFound();
    }

    return (
      <>
        <div className="container mb-3">
          {/* <Suspense fallback={<CardsSkeletons />}>
            <Stats />
          </Suspense>
          <Suspense fallback={<TableSkeleton />}>
            <Table />
          </Suspense> */}

          <Stats />
          <Table />
        </div>
      </>
    );
  },
  { returnTo: "/dashboard" }
);
