"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { teamFormSchema, type TeamFormData } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, ChefHat, Users, Clock, MapPin } from "lucide-react";

const roles = [
  "Cocinero/a",
  "Ayudante de cocina",
  "Mozo/a",
  "Bachero / Lavaplatos",
  "Logística",
  "Servicio",
  "Otro",
];

const disponibilidades = [
  "Fines de semana",
  "Entre semana",
  "Ambos",
  "A definir según evento",
];

export function SumateContent() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TeamFormData>({
    resolver: zodResolver(teamFormSchema),
  });

  const onSubmit = async (data: TeamFormData) => {
    // v1: log to console. v2: send to Supabase / API
    console.log("Team form data:", data);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-foreground py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-block text-xs font-semibold tracking-[0.2em] uppercase text-warm">
              Oportunidades
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Sumate al
              <br />
              <span className="text-warm">equipo Oliva</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Estamos buscando personas apasionadas por la gastronomía y el servicio.
              Si te gusta trabajar en eventos y querés sumar experiencia, queremos conocerte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roles */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ChefHat,
                title: "Cocina",
                desc: "Cocineros/as y ayudantes de cocina con ganas de crecer en eventos gastronómicos.",
              },
              {
                icon: Users,
                title: "Servicio",
                desc: "Mozos/as y personal de servicio con buena presencia y trato al cliente.",
              },
              {
                icon: Clock,
                title: "Logística y apoyo",
                desc: "Bacheros, logística y roles de apoyo. Fundamentales para que todo funcione.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border/50 p-6"
              >
                <item.icon className="mb-3 h-8 w-8 text-olive" />
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center rounded-2xl border border-olive/20 bg-olive/5 p-12 text-center"
              >
                <CheckCircle2 className="h-16 w-16 text-olive" />
                <h3 className="mt-6 font-display text-2xl font-bold">
                  ¡Recibimos tu postulación!
                </h3>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Vamos a revisar tus datos y si tu perfil encaja con lo que buscamos,
                  nos ponemos en contacto. ¡Gracias por tu interés en ser parte de Oliva!
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
              >
                <h2 className="font-display text-2xl font-bold">Postulación</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Completá tus datos y contanos sobre vos.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {/* Nombre y Apellido */}
                  <div className="sm:col-span-2">
                    <Label htmlFor="nombreApellido">Nombre y apellido *</Label>
                    <Input
                      id="nombreApellido"
                      placeholder="Ej: Juan Pérez"
                      {...register("nombreApellido")}
                      className="mt-1.5"
                    />
                    {errors.nombreApellido && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.nombreApellido.message}
                      </p>
                    )}
                  </div>

                  {/* Edad */}
                  <div>
                    <Label htmlFor="edad">Edad (opcional)</Label>
                    <Input
                      id="edad"
                      placeholder="Ej: 28"
                      {...register("edad")}
                      className="mt-1.5"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input
                      id="telefono"
                      placeholder="Ej: 11 2345-6789"
                      {...register("telefono")}
                      className="mt-1.5"
                    />
                    {errors.telefono && (
                      <p className="mt-1 text-xs text-destructive">{errors.telefono.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Ej: juan@email.com"
                      {...register("email")}
                      className="mt-1.5"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Rol */}
                  <div>
                    <Label>Rol al que te postulás *</Label>
                    <Select onValueChange={(val: string | null) => val && setValue("rol", val)}>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Seleccioná" />
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.rol && (
                      <p className="mt-1 text-xs text-destructive">{errors.rol.message}</p>
                    )}
                  </div>

                  {/* Zona */}
                  <div>
                    <Label htmlFor="zona">Zona donde vivís</Label>
                    <Input
                      id="zona"
                      placeholder="Ej: Zona Norte, GBA"
                      {...register("zona")}
                      className="mt-1.5"
                    />
                  </div>

                  {/* Disponibilidad */}
                  <div className="sm:col-span-2">
                    <Label>Disponibilidad</Label>
                    <Select onValueChange={(val: string | null) => val && setValue("disponibilidad", val)}>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Seleccioná tu disponibilidad" />
                      </SelectTrigger>
                      <SelectContent>
                        {disponibilidades.map((d) => (
                          <SelectItem key={d} value={d}>
                            {d}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Experiencia */}
                  <div className="sm:col-span-2">
                    <Label htmlFor="experiencia">Experiencia previa</Label>
                    <Textarea
                      id="experiencia"
                      placeholder="Ej: Trabajé 2 años como mozo en eventos. También tengo experiencia en barra..."
                      rows={3}
                      {...register("experiencia")}
                      className="mt-1.5"
                    />
                  </div>

                  {/* Mensaje */}
                  <div className="sm:col-span-2">
                    <Label htmlFor="mensaje">¿Algo más que quieras contarnos?</Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cualquier dato extra que consideres relevante..."
                      rows={3}
                      {...register("mensaje")}
                      className="mt-1.5"
                    />
                  </div>

                  {/* CV placeholder */}
                  <div className="sm:col-span-2">
                    <Label>CV (próximamente)</Label>
                    <div className="mt-1.5 flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30 p-6 text-center">
                      <p className="text-sm text-muted-foreground">
                        La carga de CV estará disponible próximamente.
                        <br />
                        Por ahora, podés enviarlo a{" "}
                        <a
                          href="mailto:hola@olivagastronomia.com.ar"
                          className="font-medium text-olive underline"
                        >
                          hola@olivagastronomia.com.ar
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 w-full bg-olive py-6 text-base font-semibold hover:bg-olive-dark sm:w-auto sm:px-10"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar postulación
                    </>
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
