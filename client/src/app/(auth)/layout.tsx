import Link from "next/link";

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <h1>Auth Layout</h1>
        <Link href='/'>Home</Link>
        <main>
            {children}
        </main>
      </>
    );
  }