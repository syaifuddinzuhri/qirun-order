import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import PublicLayout from "@/layouts/PublicLayout";

const Home = dynamic(async () => await import("@/modules/home"));

const HomePage: NextPage = () => {
    return <Home />;
};

export default createNextPage(HomePage, {
    layout: children => <PublicLayout>{children}</PublicLayout>,
});
