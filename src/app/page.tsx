import { AppLayout } from "@/components/AppLayout";
import { Dropdown } from "@/components/Dropdown";
import { QuickAdd } from "@/components/QuickAdd";

import { trpc } from "@/utils/trpc";

export default function Home() {
  return (
    <AppLayout metadata={{ title: "Home", description: "Home page" }}>
      <h1 className="text-2xl font-bold">Bookmarks</h1>
      <Dropdown
        title="Work"
        items={[
          {
            label: "Work",
            value: "work",
          },
        ]}
      />
      <QuickAdd title="Work" />
    </AppLayout>
  );
}
