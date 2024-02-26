// header.tsx
import React from "react";
import { getSession } from "@auth0/nextjs-auth0";
import { getGreetingBasedOnTime } from "@/src/lib/handle-time/time";

const WelcomeMessage = async () => {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="container">
      <h3 className="pt-3 text-muted">
        {getGreetingBasedOnTime()},{" "}
        <span className="text-primary">{user?.username}</span>
      </h3>
    </div>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WelcomeMessage />
      {children}
    </>
  );
}
