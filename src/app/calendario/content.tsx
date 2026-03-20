"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  isToday,
  isBefore,
  startOfDay,
} from "date-fns";
import { es } from "date-fns/locale";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Info } from "lucide-react";
import { getBookedDates, isDateBooked, getBookedDateLabel } from "@/lib/booked-dates";

const WEEKDAYS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

export function CalendarioContent() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const bookedDates = getBookedDates();

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const calendarDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  const today = startOfDay(new Date());

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
              Disponibilidad
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              ¿Cuándo es
              <br />
              <span className="text-warm">tu evento?</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Consultá nuestro calendario para ver las fechas disponibles. Trabajamos un solo
              evento por día para garantizar la máxima calidad y dedicación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm"
          >
            {/* Month nav */}
            <div className="flex items-center justify-between border-b border-border/50 px-6 py-5 sm:px-8">
              <button
                onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-olive/10 hover:text-olive"
                aria-label="Mes anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h2 className="font-display text-xl font-semibold capitalize sm:text-2xl">
                {format(currentMonth, "MMMM yyyy", { locale: es })}
              </h2>
              <button
                onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-olive/10 hover:text-olive"
                aria-label="Mes siguiente"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Weekday headers */}
            <div className="grid grid-cols-7 border-b border-border/30 bg-muted/30 px-2 sm:px-4">
              {WEEKDAYS.map((day) => (
                <div
                  key={day}
                  className="py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 px-2 py-2 sm:px-4 sm:py-4">
              {calendarDays.map((day) => {
                const dateStr = format(day, "yyyy-MM-dd");
                const booked = isDateBooked(dateStr);
                const label = getBookedDateLabel(dateStr);
                const inMonth = isSameMonth(day, currentMonth);
                const past = isBefore(day, today);
                const todayMark = isToday(day);

                return (
                  <div
                    key={dateStr}
                    className="relative p-0.5 sm:p-1"
                    title={booked ? `${label} — No disponible` : undefined}
                  >
                    <div
                      className={`
                        flex aspect-square flex-col items-center justify-center rounded-xl text-sm transition-colors
                        ${!inMonth ? "text-muted-foreground/30" : ""}
                        ${past && inMonth && !booked ? "text-muted-foreground/50" : ""}
                        ${inMonth && !past && !booked ? "text-foreground hover:bg-olive/5" : ""}
                        ${booked && inMonth ? "bg-red-50 text-red-600 font-semibold" : ""}
                        ${todayMark ? "ring-2 ring-olive ring-offset-1" : ""}
                      `}
                    >
                      <span className="text-sm sm:text-base">{format(day, "d")}</span>
                      {booked && inMonth && (
                        <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-red-400" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="border-t border-border/30 px-6 py-5 sm:px-8">
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="text-muted-foreground">Fecha ocupada</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full ring-2 ring-olive" />
                  <span className="text-muted-foreground">Hoy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-white ring-1 ring-border" />
                  <span className="text-muted-foreground">Disponible</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 rounded-2xl border border-olive/20 bg-olive/5 p-6 sm:p-8"
          >
            <div className="flex gap-4">
              <Info className="h-5 w-5 shrink-0 text-olive" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Un solo evento por día
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Para garantizar la máxima calidad y dedicación, tomamos un único evento por
                  fecha. Si la fecha que necesitás aparece como ocupada, no podemos tomar otro
                  evento ese mismo día. Te invitamos a consultarnos por fechas alternativas.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Booked list */}
          {bookedDates.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 rounded-2xl border border-border/50 bg-white p-6 shadow-sm sm:p-8"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Próximos eventos confirmados
              </h3>
              <div className="space-y-3">
                {bookedDates
                  .filter((d) => !isBefore(new Date(d.date + "T12:00:00"), today))
                  .slice(0, 8)
                  .map((d) => (
                    <div
                      key={d.date}
                      className="flex items-center justify-between rounded-xl bg-muted/30 px-4 py-3"
                    >
                      <span className="text-sm font-medium capitalize text-foreground">
                        {format(new Date(d.date + "T12:00:00"), "EEEE d 'de' MMMM", {
                          locale: es,
                        })}
                      </span>
                      <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                        {d.label}
                      </span>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="mb-6 text-lg text-muted-foreground">
              ¿Tu fecha está libre? Escribinos y empecemos a planificar.
            </p>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 rounded-lg bg-olive px-8 py-4 text-base font-semibold text-white transition-all hover:bg-olive-dark"
            >
              <Calendar className="h-5 w-5" />
              Consultar por una fecha
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
