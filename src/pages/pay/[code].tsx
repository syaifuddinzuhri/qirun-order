import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import PublicLayout from "@/layouts/PublicLayout";

const Checkout = dynamic(async () => await import("@/modules/checkout/checkout"));

const CheckoutPage: NextPage = () => {
  return <Checkout />;
};

export default createNextPage(CheckoutPage, {
  layout: children => <PublicLayout>{children}</PublicLayout>,
});
