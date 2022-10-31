import Link from "next/link";

export default function TestPage() {
  return (
    <div>
      <Link href={`test/${1}`}>Main</Link>
      <br></br>
      <Link href={`test/${1}/second`}>Second</Link>
    </div>
  );
}
