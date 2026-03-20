import type { Metadata } from "next";
import { SobreOlivaContent } from "./content";

export const metadata: Metadata = {
  title: "Sobre Oliva",
  description:
    "Conocé la historia, el equipo y la filosofía detrás de Oliva Gastronomía. Cocina de autor con identidad argentina para eventos memorables.",
};

export default function SobreOlivaPage() {
  return <SobreOlivaContent />;
}
