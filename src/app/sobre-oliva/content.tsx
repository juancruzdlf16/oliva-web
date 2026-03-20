"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import {
  Leaf,
  Flame,
  HandHeart,
  ArrowRight,
  UtensilsCrossed,
  Users,
  Award,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export function SobreOlivaContent() {
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
              Sobre nosotros
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Somos Oliva.
              <br />
              <span className="text-warm">Cocinamos con alma.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Nacimos de la convicción de que la buena comida tiene el poder de
              transformar cualquier encuentro en algo especial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div {...fadeUp}>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-olive/15 to-warm/15">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <UtensilsCrossed className="mx-auto h-16 w-16 text-olive/30" />
                    <p className="mt-4 text-sm text-olive/50">
                      Foto del equipo cocinando
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Nuestra historia
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Oliva Gastronomía nació de la pasión por la cocina y el deseo de llevar
                  experiencias gastronómicas de calidad a cada evento. Lo que empezó como un
                  proyecto personal se convirtió en un emprendimiento que hoy acompaña
                  casamientos, cumpleaños, eventos corporativos y celebraciones de todo tipo.
                </p>
                <p>
                  Creemos en la cocina honesta: productos frescos, recetas con identidad y
                  una presentación que invite a disfrutar. Cada evento es único y merece una
                  propuesta pensada especialmente.
                </p>
                <p>
                  Nuestro equipo está formado por profesionales comprometidos que comparten
                  una misma filosofía: que cada plato cuente una historia y cada servicio
                  sea impecable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tagline="Nuestra filosofía"
            title="Lo que nos define"
            description="Tres pilares que guían todo lo que hacemos en cada evento."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Leaf,
                title: "Productos frescos y locales",
                desc: "Trabajamos con ingredientes de estación y de productores de confianza. La calidad de la materia prima es la base de todo lo que cocinamos.",
              },
              {
                icon: Flame,
                title: "Cocina con identidad",
                desc: "Nuestra cocina tiene raíz argentina, con técnicas contemporáneas y presentaciones cuidadas. Cada menú refleja quiénes somos.",
              },
              {
                icon: HandHeart,
                title: "Servicio con calidez",
                desc: "No solo cocinamos: acompañamos. Nos involucramos en cada evento para que todo fluya naturalmente y vos puedas disfrutar.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="rounded-2xl border border-border/50 bg-card p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-olive/10 text-olive">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: Award, number: "100+", label: "Eventos realizados" },
              { icon: Users, number: "5000+", label: "Comensales felices" },
              { icon: UtensilsCrossed, number: "3+", label: "Años de experiencia" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <item.icon className="mx-auto mb-3 h-8 w-8 text-olive" />
                <span className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                  {item.number}
                </span>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Querés que cocinemos para tu próximo evento?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contanos qué tenés en mente y armamos una propuesta a medida.
            </p>
            <Link
              href="/contacto"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-olive px-8 py-4 text-base font-semibold text-white transition-all hover:bg-olive-dark"
            >
              Pedir propuesta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
