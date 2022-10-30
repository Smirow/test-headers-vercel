import Link from "next/link";

export default function TestPage() {
  return (
    <div>
      <Link href={`test/${1}`}>Main</Link>
      <Link href={`test/${1}/second`}>Second</Link>
    </div>
  );
}
