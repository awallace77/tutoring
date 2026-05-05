import type { ReactNode } from "react";

function Page({
  pageName,
  children,
}: {
  pageName?: string;
  children?: ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col">
        {pageName && <h1 className="py-2">{pageName}</h1>}
        {children}
      </div>
    </>
  );
}

export default Page;
