"use client";
import withAuth from "./hoc/withAuth";

const home = () => {
  return <div className="h-screen">Home</div>;
};

export default withAuth(home);
