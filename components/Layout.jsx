import Link from "next/link";

function Layout({ children }) {
  return (
    <main className="">
      <nav className="bg-maingreen pt-3 px-2">
        <div className="flex justify-between">
          <h1>WhatsApp</h1>
          <div className="flex gap-2">
            <p>dk</p>
            <p>dk</p>
          </div>
        </div>
        {/* Nav links */}
        <div className="mt-6">
          maserati
          <Link href={"/"}>CHATS</Link>
          <Link href={"/status"}>STATUS</Link>
          <Link href={"/calls"}>CALLS</Link>
        </div>
      </nav>
      {children}
    </main>
  );
}

export default Layout;
