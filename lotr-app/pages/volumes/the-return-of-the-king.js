import Link from "next/link";
import { volumes } from "@/resources/lib/data";
export default function ReturnKing() {
  return (
    <div>
      <h1>The return of the king</h1>
      <Link href="/volumes">← All volumes</Link>
    </div>
  );
}
