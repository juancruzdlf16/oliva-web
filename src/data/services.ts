import { UtensilsCrossed, PartyPopper, Building2, ChefHat, Sparkles, Truck } from "lucide-react";

export const services = [
  {
    id: "eventos-sociales",
    title: "Eventos Sociales",
    description:
      "Casamientos, cumpleaños, aniversarios y celebraciones que merecen una mesa inolvidable. Diseñamos menús a medida con productos frescos y de estación.",
    icon: PartyPopper,
    features: ["Menú personalizado", "Servicio de mesa", "Ambientación gastronómica"],
  },
  {
    id: "eventos-privados",
    title: "Eventos Privados",
    description:
      "Cenas íntimas, reuniones familiares o encuentros exclusivos. Cocina de autor en tu espacio, con la calidez y el detalle que cada momento necesita.",
    icon: UtensilsCrossed,
    features: ["Cocina en el lugar", "Experiencia personalizada", "Vajilla y presentación"],
  },
  {
    id: "eventos-corporativos",
    title: "Eventos Corporativos",
    description:
      "Almuerzos ejecutivos, lanzamientos, jornadas y team buildings. Propuestas profesionales que reflejan la imagen de tu empresa.",
    icon: Building2,
    features: ["Coffee breaks", "Almuerzos ejecutivos", "Cocktails corporativos"],
  },
  {
    id: "catering-personalizado",
    title: "Catering Personalizado",
    description:
      "Armamos la propuesta gastronómica que tu evento necesita. Desde finger food hasta menú de pasos, todo pensado para sorprender.",
    icon: ChefHat,
    features: ["Finger food", "Menú de pasos", "Estaciones temáticas"],
  },
  {
    id: "experiencias-gastronomicas",
    title: "Experiencias Gastronómicas",
    description:
      "Pop-ups, cenas maridaje, showcookings y experiencias sensoriales. Gastronomía como vivencia, no solo como servicio.",
    icon: Sparkles,
    features: ["Pop-up dinners", "Showcooking", "Cenas maridaje"],
  },
  {
    id: "servicio-integral",
    title: "Servicio Integral",
    description:
      "Nos ocupamos de todo: cocina, montaje, servicio de mesa, logística y limpieza. Vos disfrutás, nosotros nos encargamos.",
    icon: Truck,
    features: ["Montaje completo", "Personal de servicio", "Logística y limpieza"],
  },
] as const;
