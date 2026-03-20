import type { Metadata } from "next";
import { CalendarioContent } from "./content";

export const metadata: Metadata = {
  title: "Disponibilidad",
  description:
    "Consultá las fechas disponibles para tu evento. En Oliva Gastronomía trabajamos un solo evento por día para garantizar la máxima calidad.",
};

export default function CalendarioPage() {
  return <CalendarioContent />;
}
