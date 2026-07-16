import { Outlet, createFileRoute } from "@tanstack/react-router";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { DocsTopBar } from "@/components/docs/DocsTopBar";
import { Footer } from "@/components/docs/Footer";

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
});

function DocsLayout() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex max-w-[1500px]">
        <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-white/5 bg-sidebar/60 backdrop-blur-xl lg:block">
          <DocsSidebar />
        </aside>
        <div className="min-w-0 flex-1">
          <DocsTopBar />
          <main className="mx-auto max-w-5xl px-4 py-8 sm:px-8 sm:py-10">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
