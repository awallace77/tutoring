import type { ReactNode } from "react";

function Page({
  pageName,
  children,
}: {
  pageName: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="flex gap-2">
        {pageName && <h1>{pageName}</h1>}
        {children}
      </div>
    </>
  );
}

export default Page;
