import Link from "next/link";
import { introduction } from "@/resources/lib/data";
export default function Volumes() {
  return (
    <div>
      <h1>Overview</h1>
      <p> {introduction} </p>
      <h2>All volumes</h2>
      <ul>
        <li>
          <Link href="volumes/the-fellowship-of-the-ring">
            The fellowship of the ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The two towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The return of the king
          </Link>
        </li>
      </ul>
    </div>
  );
}
