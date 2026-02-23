import Link from "next/link";
import { PageHeader } from "../components/page-header";
import PageLayout from "../components/page-layout";
import { Button } from "@/components/ui/button";
import { TextLink } from "../components/text-link";

export default function AbvCalculatorPage() {
  return (
    <PageLayout>
        <PageHeader title="About" />
        <div className="ml-2 mr-2 text-center">
          <p>Simple, streamlined, mobile-friendly web tools.</p>
          <p>Because nobody likes ads or consent popups!</p>
          <p>Created by <TextLink href="https://github.com/Ronan-H">Ronan Hanley</TextLink>.</p>
          <div className="italic mt-2">
            <p>
              This site is in early development.
            </p>
            <p>Create a bug report or suggestion <TextLink href="https://github.com/Ronan-H/web-tools/issues">here</TextLink>.</p>
          </div>
        </div>
    </PageLayout>
  );
}
