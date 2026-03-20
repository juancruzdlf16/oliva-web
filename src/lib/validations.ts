import { z } from "zod";

export const contactFormSchema = z.object({
  nombre: z.string().min(2, "Ingresá tu nombre"),
  telefono: z.string().min(8, "Ingresá un teléfono válido"),
  email: z.string().email("Ingresá un email válido"),
  tipoEvento: z.string().min(1, "Seleccioná un tipo de evento"),
  fechaEstimada: z.string().optional(),
  cantidadPersonas: z.string().optional(),
  ubicacion: z.string().optional(),
  mensaje: z.string().optional(),
  preferenciaContacto: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const teamFormSchema = z.object({
  nombreApellido: z.string().min(2, "Ingresá tu nombre y apellido"),
  edad: z.string().optional(),
  telefono: z.string().min(8, "Ingresá un teléfono válido"),
  email: z.string().email("Ingresá un email válido"),
  rol: z.string().min(1, "Seleccioná un rol"),
  experiencia: z.string().optional(),
  zona: z.string().optional(),
  disponibilidad: z.string().optional(),
  mensaje: z.string().optional(),
});

export type TeamFormData = z.infer<typeof teamFormSchema>;
