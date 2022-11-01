import Link from "next/link";

export default function TestPage() {
  return (
    <div>
      <Link href={`/test/1`}>Main</Link>
      <br></br>
      <Link href={`/test/1/leaf`}>Leaf</Link>
      <br></br>
      <Link href="/test/[testId]/leaf">Leaf using testId = [testId]</Link>

      <br></br>
      <Link
        href={{
          pathname: "/test/[testId]/leaf",
          query: {
            testId: 3,
          },
        }}
      >
        Leaf using url object
      </Link>
    </div>
  );
}
