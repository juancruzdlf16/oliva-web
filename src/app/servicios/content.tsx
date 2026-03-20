"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { services } from "@/data/services";

export function ServiciosContent() {
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
              Servicios
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Todo lo que necesitás
              <br />
              <span className="text-warm">para un evento perfecto</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Desde la cocina hasta el servicio de mesa, nos encargamos de cada detalle
              gastronómico para que vos disfrutes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col rounded-2xl border border-border/50 bg-white p-8 shadow-sm transition-all hover:border-olive/20 hover:shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-olive/10 text-olive transition-colors group-hover:bg-olive group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-olive/5 px-3 py-1 text-xs font-medium text-olive"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contacto"
                  className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-olive transition-colors hover:text-olive-dark"
                >
                  Consultar
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tagline="Cómo trabajamos"
            title="De la idea al evento"
            description="Un proceso simple y personalizado para que todo salga como lo soñaste."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Nos contactás",
                desc: "Contanos sobre tu evento: fecha, lugar, cantidad de invitados y qué tenés en mente.",
              },
              {
                step: "02",
                title: "Armamos la propuesta",
                desc: "Diseñamos un menú y una propuesta de servicio a medida, con opciones y presupuesto claro.",
              },
              {
                step: "03",
                title: "Ajustamos detalles",
                desc: "Refinamos juntos cada detalle: preferencias, restricciones alimentarias, tiempos y logística.",
              },
              {
                step: "04",
                title: "Disfrutás tu evento",
                desc: "Nosotros nos encargamos de todo el día del evento. Vos solo tenés que disfrutar.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span className="font-display text-5xl font-bold text-olive/10">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-foreground to-foreground/90 p-10 text-center text-white sm:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                ¿Listo para tu próximo evento?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
                Escribinos y armamos una propuesta personalizada para vos.
              </p>
              <Link
                href="/contacto"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-olive px-8 py-4 text-base font-semibold text-white transition-all hover:bg-olive-dark"
              >
                Pedir propuesta
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
