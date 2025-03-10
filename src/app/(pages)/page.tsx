import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex">
      <Link
        href="/signin"
        className="w-fit h-fit bg-stone-950 text-stone-50 px-4 py-2 rounded-full"
      >
        Signin
      </Link>
    </main>
  );
}
