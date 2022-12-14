import Link from "next/link";

type PageParams = Record<string, string>;

export default function TestLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: PageParams;
}) {
  return (
    <div>
      {children}
      <br></br>
      <Link href={`/test/${params?.testId}`}>Main</Link>
      <br></br>
      <Link href={`/test/${params?.testId}/leaf`}>Leaf</Link>
      <br></br>
      <Link href={`/test/[testId]/leaf`}>Leaf using testId = [testId]</Link>
      <br></br>
      <Link
        href={{
          pathname: "/test/[testId]/leaf",
          query: {
            testId: params?.testId,
          },
        }}
      >
        Leaf using url object (seems to do a pre-fetch but still forces a page
        reload)
      </Link>
    </div>
  );
}
