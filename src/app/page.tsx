import { AppLayout } from "@/components/AppLayout";
import { Dropdown } from "@/components/Dropdown";

export default function Home() {
  return (
    <AppLayout metadata={{ title: "Home", description: "Home page" }}>
      <h1 className="text-2xl font-bold">Bookmarks</h1>
    </AppLayout>
  );
}
