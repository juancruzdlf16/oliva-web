"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
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
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

const eventTypes = [
  "Casamiento",
  "Cumpleaños",
  "Evento corporativo",
  "Cena privada",
  "Cocktail",
  "Aniversario",
  "Evento social",
  "Otro",
];

const contactPreferences = [
  "WhatsApp",
  "Llamada telefónica",
  "Email",
  "Sin preferencia",
];

export function ContactoContent() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // v1: log to console. v2: send to Supabase / API
    console.log("Contact form data:", data);
    await new Promise((r) => setTimeout(r, 1000)); // simulate
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
            <span className="mb-4 inline-block text-xs font-semibold tracking-[0.2em] uppercase text-olive-light">
              Contacto
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Contanos sobre
              <br />
              <span className="text-warm">tu evento</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Completá el formulario y nos ponemos en contacto con una propuesta
              personalizada. También podés escribirnos directo por WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h2 className="font-display text-2xl font-bold">Otras formas de contacto</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Si preferís, podés contactarnos directamente por cualquiera de estos medios.
              </p>

              <div className="mt-8 space-y-6">
                <a
                  href="https://wa.me/5491162183225?text=Hola!%20Quiero%20consultar%20por%20un%20evento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border/50 bg-white p-4 transition-all hover:border-[#25D366]/30 hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">WhatsApp</p>
                    <p className="text-xs text-muted-foreground">+54 9 1162-183225</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-white p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive/10 text-olive">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Teléfono</p>
                    <p className="text-xs text-muted-foreground">+54 9 1162-183225</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-white p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive/10 text-olive">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-xs text-muted-foreground">hola@olivagastronomia.com.ar</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-white p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive/10 text-olive">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Ubicación</p>
                    <p className="text-xs text-muted-foreground">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2"
            >
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
                      ¡Recibimos tu consulta!
                    </h3>
                    <p className="mt-3 max-w-md text-muted-foreground">
                      Nos vamos a poner en contacto con vos a la brevedad para charlar
                      sobre tu evento y armarte una propuesta. ¡Gracias por elegirnos!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
                  >
                    <h2 className="font-display text-2xl font-bold">Pedir propuesta</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Completá los datos y nos ponemos en contacto.
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      {/* Nombre */}
                      <div className="sm:col-span-2">
                        <Label htmlFor="nombre">Nombre *</Label>
                        <Input
                          id="nombre"
                          placeholder="Ej: María López"
                          {...register("nombre")}
                          className="mt-1.5"
                        />
                        {errors.nombre && (
                          <p className="mt-1 text-xs text-destructive">{errors.nombre.message}</p>
                        )}
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
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Ej: maria@email.com"
                          {...register("email")}
                          className="mt-1.5"
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                        )}
                      </div>

                      {/* Tipo de evento */}
                      <div>
                        <Label>Tipo de evento *</Label>
                        <Select onValueChange={(val: string | null) => val && setValue("tipoEvento", val)}>
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Seleccioná" />
                          </SelectTrigger>
                          <SelectContent>
                            {eventTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.tipoEvento && (
                          <p className="mt-1 text-xs text-destructive">
                            {errors.tipoEvento.message}
                          </p>
                        )}
                      </div>

                      {/* Fecha estimada */}
                      <div>
                        <Label htmlFor="fechaEstimada">Fecha estimada</Label>
                        <Input
                          id="fechaEstimada"
                          type="date"
                          {...register("fechaEstimada")}
                          className="mt-1.5"
                        />
                      </div>

                      {/* Cantidad de personas */}
                      <div>
                        <Label htmlFor="cantidadPersonas">Cantidad de personas</Label>
                        <Input
                          id="cantidadPersonas"
                          placeholder="Ej: 80"
                          {...register("cantidadPersonas")}
                          className="mt-1.5"
                        />
                      </div>

                      {/* Ubicación */}
                      <div>
                        <Label htmlFor="ubicacion">Ubicación del evento</Label>
                        <Input
                          id="ubicacion"
                          placeholder="Ej: Pilar, Buenos Aires"
                          {...register("ubicacion")}
                          className="mt-1.5"
                        />
                      </div>

                      {/* Preferencia de contacto */}
                      <div className="sm:col-span-2">
                        <Label>¿Cómo preferís que te contactemos?</Label>
                        <Select onValueChange={(val: string | null) => val && setValue("preferenciaContacto", val)}>
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Sin preferencia" />
                          </SelectTrigger>
                          <SelectContent>
                            {contactPreferences.map((pref) => (
                              <SelectItem key={pref} value={pref}>
                                {pref}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Mensaje */}
                      <div className="sm:col-span-2">
                        <Label htmlFor="mensaje">Contanos más sobre tu evento</Label>
                        <Textarea
                          id="mensaje"
                          placeholder="Ej: Es un casamiento para 100 personas en una estancia. Nos gustaría un menú de pasos con opciones vegetarianas..."
                          rows={4}
                          {...register("mensaje")}
                          className="mt-1.5"
                        />
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
                          Enviar consulta
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
