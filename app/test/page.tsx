import Link from "next/link";

export default function TestPage() {
  return (
    <div>
      <Link href={`test/1`}>Main</Link>
      <br></br>
      <Link href={`test/1/leaf`}>Leaf</Link>
      <br></br>
      <Link href="test/[testId]/leaf" as={`test/1/leaf`}>
        Leaf using as
      </Link>

      <br></br>
      <Link href="test/testId/leaf">Leaf using non-numeric</Link>
    </div>
  );
}
