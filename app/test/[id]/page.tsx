import Link from "next/link";

export default function TestPage() {
  const id = 2;
  return (
    <div>
      TEST PAGE {id}
      <Link href={`/test/${id + 1}`}>dd</Link>
    </div>
  );
}
