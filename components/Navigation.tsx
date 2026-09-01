"use client";

import Navbar from "./Navbar";

export default function Navigation({ currentPath = "/" }: { currentPath?: string; isHome?: boolean }) {
  return <Navbar currentPath={currentPath} />;
}
