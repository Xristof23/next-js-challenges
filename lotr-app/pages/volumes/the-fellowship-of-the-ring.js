import Link from "next/link";
import Image from "next/image";

<Image
  src="../resources/public/images/the-fellowship-of-the-ring.png"
  height={140}
  width={233}
  alt="Picture of the Book: The fellowship ..."
/>;

import { volumes } from "@/resources/lib/data";
export default function TheFellowship() {
  const LOTRVolOne = volumes[0];

  return (
    <div>
      <h1>{volumes[0].title}</h1>

      <p>{volumes[0].description}</p>
      {/* change into map */}
      <ul>
        <li>
          {LOTRVolOne.books[0].ordinal}: {LOTRVolOne.books[0].title}
        </li>
        <li>
          {LOTRVolOne.books[1].ordinal}: {LOTRVolOne.books[1].title}
        </li>
      </ul>
      <Link href="/volumes">← All volumes</Link>
    </div>
  );
}
