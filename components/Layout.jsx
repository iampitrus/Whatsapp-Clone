import Link from "next/link";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function Layout({ children }) {
  const router = useRouter();
  const routes = [
    { href: "/", text: "CHATS" },
    { href: "/status", text: "STATUS" },
    { href: "/calls", text: "CALLS" },
  ];
  return (
    <main className="max-w-2xl h-full [&>*]:px-2">
      <nav className="pt-3 bg-maingreen">
        <div className="flex justify-between">
          <h1 className="text-2xl text-white">WhatsApp</h1>
          <div className="flex gap-2 text-white">
            <SearchIcon />
            <MoreVertIcon />
          </div>
        </div>
        {/* Nav links */}
        <div className="mt-8 pb-[0.5px] text-white [&>a]:text-sm flex">
          <CameraAltIcon sx={{ fontSize: "1.3rem" }} />
          <div className="w-full flex justify-around text-gray-300">
            {routes.map(({ href, text }) => (
              <Link
                className={router.pathname == href ? "active" : ""}
                href={href}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {children}
    </main>
  );
}

export default Layout;
