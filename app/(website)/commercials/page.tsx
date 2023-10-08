import { getAllAuthors, getAllCommercials, getSettings } from "@/lib/sanity/client";
import Commercials from "./commercials.tsx";
import { AllCommercialsQuery } from "@/utils/types/QueryResults";

export default async function CommercialsPage() {
    const settings = await getSettings();
    const commercials = await getAllCommercials();
    return <Commercials settings={settings} commercials={commercials} />;
}

// export const revalidate = 60;
