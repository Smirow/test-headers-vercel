import Link from "next/link";

type PageParams = Record<string, string>;

export default function TestLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: PageParams;
}) {
  console.log(params);
  return (
    <div>
      <Link href={`test/${params?.testId}`}>Main</Link>
      <Link href={`test/${params?.testId}/second`}>Second</Link>
      <Link
        href={{ pathname: "/test/[testId]", query: { testId: params?.testId } }}
      >
        SecondQuery
      </Link>
    </div>
  );
}
