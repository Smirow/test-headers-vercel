import Link from "next/link";

export default function TestLayout({ params }: { params: { testId: string } }) {
  console.log(params);
  return (
    <div>
      <Link href={`test/${params.testId}`}>Main</Link>
      <Link href={`test/${params.testId}/second`}>Second</Link>
    </div>
  );
}
