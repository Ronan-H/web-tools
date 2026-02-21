import { PageHeader } from "../components/page-header";
import PageLayout from "../components/page-layout";
import RNG from "./rng";

export default function RNGPage() {
  return (
    <PageLayout>
        <PageHeader title="Random Number Generator" />
        <RNG />
    </PageLayout>
  );
}
