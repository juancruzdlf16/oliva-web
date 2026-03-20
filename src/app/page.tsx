"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChefHat,
  Heart,
  Star,
  Users,
  ArrowRight,
  Calendar,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { services } from "@/data/services";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-foreground text-white">
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground" />

        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-block rounded-full border border-olive-light/30 bg-olive/20 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-olive-light">
              Catering & Eventos
            </span>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Cocina con alma
              <br />
              <span className="text-warm">para momentos</span>
              <br />
              que importan
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Creamos experiencias gastronómicas memorables para tus eventos. Productos frescos,
              cocina de autor y un equipo que cuida cada detalle.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-olive px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-olive-dark hover:shadow-xl"
              >
                <Calendar className="h-5 w-5" />
                Consultar fecha
              </Link>
              <Link
                href="/sumate"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <Users className="h-5 w-5" />
                Sumate al equipo
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
            <div className="h-2 w-1.5 rounded-full bg-white/50 mx-auto" />
          </div>
        </motion.div>
      </section>

      {/* ─── TRUST BLOCKS ─── */}
      <section className="border-b border-border/50 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ChefHat,
                title: "Cocina de autor",
                desc: "Menús diseñados especialmente para cada evento con productos frescos y de estación",
              },
              {
                icon: Heart,
                title: "Dedicación artesanal",
                desc: "Cada plato se prepara con el cuidado y la pasión que tu evento merece",
              },
              {
                icon: Star,
                title: "Experiencia comprobada",
                desc: "Años acompañando eventos sociales, privados y corporativos en toda la región",
              },
              {
                icon: Users,
                title: "Equipo profesional",
                desc: "Cocineros, mozos y personal de servicio capacitado para cada ocasión",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-olive/10 text-olive transition-colors group-hover:bg-olive group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image placeholder */}
            <motion.div {...fadeUp} className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-olive/20 to-warm/20">
                {/* Reemplazar con imagen real del equipo / cocina */}
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <UtensilsCrossed className="mx-auto h-16 w-16 text-olive/30" />
                    <p className="mt-4 text-sm text-olive/50">Imagen del equipo / cocina</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-olive/10" />
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase text-olive">
                Sobre Oliva
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Gastronomía con identidad
                <br />
                <span className="text-olive">y corazón argentino</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Somos un equipo apasionado por la cocina y los buenos momentos. Creemos que la
                comida tiene el poder de transformar cualquier encuentro en una experiencia
                inolvidable.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Trabajamos con productos frescos, de estación y de productores locales.
                Cada menú se diseña a medida, respetando los gustos y la esencia de
                cada evento.
              </p>
              <Link
                href="/sobre-oliva"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-olive transition-colors hover:text-olive-dark"
              >
                Conocé más sobre nosotros
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tagline="Nuestros servicios"
            title="Lo que podemos hacer por tu evento"
            description="Desde una cena íntima hasta un evento corporativo de gran escala. Siempre con la misma dedicación."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all hover:border-olive/20 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-olive/10 text-olive transition-colors group-hover:bg-olive group-hover:text-white">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-olive/5 px-3 py-1 text-xs font-medium text-olive"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12 text-center">
            <Link
              href="/servicios"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-olive transition-colors hover:text-olive-dark"
            >
              Ver todos nuestros servicios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── AVAILABILITY CTA ─── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-foreground to-foreground/90 p-10 text-white sm:p-16 lg:p-20">
            <div className="mx-auto max-w-2xl text-center">
              <motion.div {...fadeUp}>
                <Sparkles className="mx-auto mb-6 h-10 w-10 text-warm" />
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  ¿Tenés una fecha en mente?
                </h2>
                <p className="mt-4 text-lg text-white/70">
                  Consultá nuestra disponibilidad y empecemos a planificar juntos tu próximo
                  evento. Cuanto antes nos escribas, más opciones tenemos para vos.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/calendario"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-foreground shadow-lg transition-all hover:bg-cream"
                  >
                    <Calendar className="h-5 w-5" />
                    Ver disponibilidad
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/20"
                  >
                    Pedir propuesta
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM CTA ─── */}
      <section className="border-t border-border/50 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase text-warm-dark">
                Oportunidades
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                ¿Querés ser parte
                <br />
                <span className="text-olive">del equipo Oliva?</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Buscamos cocineros, mozos, ayudantes y profesionales de la gastronomía
                que compartan nuestra pasión. Si te gusta trabajar en eventos y disfrutás
                de la cocina, queremos conocerte.
              </p>
              <Link
                href="/sumate"
                className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-olive px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-olive-dark"
              >
                Postulate ahora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Image placeholder */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-warm/20 to-olive/10">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Users className="mx-auto h-16 w-16 text-olive/30" />
                    <p className="mt-4 text-sm text-olive/50">Imagen del equipo en acción</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
