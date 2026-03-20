import type { Metadata } from "next";
import { SumateContent } from "./content";

export const metadata: Metadata = {
  title: "Sumate al Equipo",
  description:
    "Buscamos cocineros, mozos, ayudantes de cocina y profesionales para eventos gastronómicos. Postulate y trabajá con nosotros.",
};

export default function SumatePage() {
  return <SumateContent />;
}
