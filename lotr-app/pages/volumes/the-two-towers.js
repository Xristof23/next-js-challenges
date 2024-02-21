import Link from "next/link";
import { volumes } from "@/resources/lib/data";
export default function TwoTowers() {
  return (
    <div>
      <h1>{volumes[1].title}</h1>
      <p>{volumes[1].description}</p>
      <ul>
        <li>
          {volumes[1].books[0].ordinal}: {volumes[1].books[0].title}
        </li>
        <li>
          {volumes[1].books[1].ordinal}: {volumes[1].books[1].title}
        </li>
      </ul>
      <Link href="/volumes">← All volumes</Link>
    </div>
  );
}
