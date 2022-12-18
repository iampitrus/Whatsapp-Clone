import ChatIcon from "@mui/icons-material/Chat";

export default function Home() {
  return (
    <div className="relative h-96 w-full">
      Chat page
      <div class="p-3 rounded-full text-white bg-maingreen absolute bottom-4 right-4">
        <ChatIcon />
      </div>
    </div>
  );
}
