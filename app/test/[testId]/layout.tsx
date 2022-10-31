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
      <Link href={`test/${params?.testId}`} prefetch={false}>
        Main
      </Link>
      <br></br>
      <Link href={`test/${params?.testId}/second`}>Leaf</Link>
      <br></br>
    </div>
  );
}
