import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { BILLING_VISIBLE } from "@/lib/feature-flags";

export default function BillingLayout({ children }: { children: ReactNode }) {
    if (!BILLING_VISIBLE) {
        redirect("/");
    }

    return children;
}
