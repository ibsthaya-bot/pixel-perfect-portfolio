import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Morgan — Portfolio" },
      { name: "description", content: "Premium portfolio of Alex Morgan, product designer & frontend engineer." },
      { property: "og:title", content: "Alex Morgan — Portfolio" },
      { property: "og:description", content: "Premium portfolio of Alex Morgan, product designer & frontend engineer." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/portfolio.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#0b0c0f", color: "#f3f3f0", fontFamily: "system-ui" }}>
      <p>Loading portfolio…</p>
    </div>
  );
}
