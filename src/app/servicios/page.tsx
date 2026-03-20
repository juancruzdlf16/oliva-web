import type { Metadata } from "next";
import { ServiciosContent } from "./content";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Eventos sociales, privados, corporativos, catering personalizado y experiencias gastronómicas. Conocé todo lo que Oliva Gastronomía puede hacer por tu evento.",
};

export default function ServiciosPage() {
  return <ServiciosContent />;
}
