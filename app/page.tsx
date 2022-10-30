import Image from "next/image";
import styles from "./page.module.css";
import { headers } from "next/headers";
import Link from "next/link";

export default function Home() {
  const headersList = headers();

  return (
    <div className={styles.container}>
      <Link href="/test">Test Page</Link>
      <Link href="/test/">Test id</Link>
    </div>
  );
}
