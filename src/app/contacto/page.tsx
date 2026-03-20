import type { Metadata } from "next";
import { ContactoContent } from "./content";

export const metadata: Metadata = {
  title: "Contacto | Pedir Propuesta",
  description:
    "Pedí tu propuesta personalizada para eventos gastronómicos. Completá el formulario y te respondemos a la brevedad.",
};

export default function ContactoPage() {
  return <ContactoContent />;
}
