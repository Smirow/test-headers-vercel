import Link from "next/link";

export default function TestPage({
  params,
}: {
  params: { [n: string]: string };
}) {
  return (
    <div>
      TEST PAGE {params.id}
      <Link href={`/test/${params.id}`}></Link>
    </div>
  );
}
