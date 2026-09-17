"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Pace } from "@/data/types";
import {
  generateMarseillePlan,
  INTEREST_OPTIONS,
  VISIT_TYPE_OPTIONS,
  WALKING_TOLERANCE_OPTIONS,
  TRAVEL_STYLE_OPTIONS,
  type PlannerInput,
  type PlannerLink,
  type PlannerResult,
} from "@/data/planner";
import { getScheduleEntries } from "@/data/schedules";
import { getEntriesForDate } from "@/lib/schedule-utils";
import type { ScheduleEntry } from "@/data/types";

const PACE_OPTIONS: Pace[] = ["Relaxed", "Moderate", "Active"];

function LinkCard({ link }: { link: PlannerLink }) {
  return (
    <Link href={link.href} className="card-editorial group block p-5">
      <p className="font-display text-base font-bold text-gray-900 group-hover:text-coastal-800">
        {link.label}
      </p>
      <p className="mt-1 text-sm text-gray-600">{link.why}</p>
    </Link>
  );
}

function realTime(value: string | undefined): string {
  const v = (value || "").trim();
  if (!v || v === "00:00" || v === "0:00") return "";
  return v;
}

export function MarseilleCruisePlanner() {
  const schedule = useMemo(() => getScheduleEntries("marseille"), []);
  const dates = useMemo(() => [...new Set(schedule.map((e) => e.date))].sort(), [schedule]);

  const [callDate, setCallDate] = useState("");
  const [shipName, setShipName] = useState("");
  const [manualTimes, setManualTimes] = useState(false);
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [interests, setInterests] = useState<string[]>(["history"]);
  const [visitType, setVisitType] = useState<PlannerInput["visitType"]>("first-time");
  const [pace, setPace] = useState<Pace>("Moderate");
  const [walkingTolerance, setWalkingTolerance] = useState<PlannerInput["walkingTolerance"]>("full");
  const [travelStyle, setTravelStyle] = useState<PlannerInput["travelStyle"]>("guided");
  const [plan, setPlan] = useState<PlannerResult | null>(null);

  const shipsOnDate: ScheduleEntry[] = useMemo(() => {
    if (!callDate) return [];
    return getEntriesForDate(schedule, callDate);
  }, [schedule, callDate]);

  function applyShipSelection(date: string, ship: string) {
    setCallDate(date);
    setShipName(ship);
    const matches = getEntriesForDate(schedule, date).filter((e) => e.ship === ship);
    if (matches.length === 1) {
      const a = realTime(matches[0].arrival);
      const d = realTime(matches[0].departure);
      setArrivalTime(a);
      setDepartureTime(d);
      setManualTimes(!(a && d));
    } else if (matches.length > 1) {
      setArrivalTime("");
      setDepartureTime("");
      setManualTimes(true);
    } else {
      setArrivalTime("");
      setDepartureTime("");
      setManualTimes(true);
    }
  }

  function onDateChange(date: string) {
    setCallDate(date);
    setShipName("");
    setArrivalTime("");
    setDepartureTime("");
    setPlan(null);
    const matches = date ? getEntriesForDate(schedule, date) : [];
    if (matches.length === 1) {
      applyShipSelection(date, matches[0].ship);
    } else if (matches.length === 0) {
      setManualTimes(true);
    } else {
      setManualTimes(false);
    }
  }

  function onShipChange(ship: string) {
    if (!callDate) return;
    if (!ship) {
      setShipName("");
      setArrivalTime("");
      setDepartureTime("");
      setManualTimes(true);
      return;
    }
    applyShipSelection(callDate, ship);
  }

  function toggleInterest(id: string) {
    setInterests((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  }

  function generate() {
    setPlan(
      generateMarseillePlan({
        arrivalTime: realTime(arrivalTime) || undefined,
        departureTime: realTime(departureTime) || undefined,
        adults: Number(adults) || 1,
        children: Number(children) || 0,
        interests,
        visitType,
        pace,
        walkingTolerance,
        travelStyle,
      }),
    );
  }

  const noMatch = Boolean(callDate) && shipsOnDate.length === 0;

  return (
    <div className="card-feature">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Port call date</label>
          <input
            type="date"
            value={callDate}
            onChange={(e) => onDateChange(e.target.value)}
            list="marseille-call-dates"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
          <datalist id="marseille-call-dates">
            {dates.map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Ship</label>
          <select
            value={shipName}
            onChange={(e) => onShipChange(e.target.value)}
            disabled={!callDate || shipsOnDate.length === 0}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm disabled:bg-gray-50"
          >
            <option value="">
              {!callDate
                ? "Choose a date first"
                : shipsOnDate.length === 0
                  ? "No published match — enter times manually"
                  : shipsOnDate.length === 1
                    ? shipsOnDate[0].ship
                    : "Choose your ship"}
            </option>
            {shipsOnDate.map((e) => (
              <option key={`${e.date}-${e.ship}`} value={e.ship}>
                {e.ship} ({e.cruiseLine})
              </option>
            ))}
          </select>
        </div>

        {(manualTimes || noMatch || !callDate) && (
          <div className="rounded-lg border border-amber-100 bg-amber-50/80 px-3 py-2 text-xs text-amber-950 sm:col-span-2">
            {noMatch
              ? "No published ship for that date — enter arrival and departure manually."
              : manualTimes && shipName
                ? "Published times are incomplete for this call — enter times manually or confirm with your cruise line."
                : "Select your date and ship to pre-fill published times, or enter times manually."}
          </div>
        )}

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Arrival time (local)</label>
          <input
            type="time"
            value={arrivalTime}
            onChange={(e) => {
              setArrivalTime(e.target.value);
              setManualTimes(true);
            }}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Departure / all-aboard time
          </label>
          <input
            type="time"
            value={departureTime}
            onChange={(e) => {
              setDepartureTime(e.target.value);
              setManualTimes(true);
            }}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Adults</label>
          <input
            type="number"
            min={1}
            max={20}
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Children</label>
          <input
            type="number"
            min={0}
            max={20}
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">Interests</label>
          <div className="flex flex-wrap gap-2">
            {INTEREST_OPTIONS.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => toggleInterest(o.id)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  interests.includes(o.id)
                    ? "bg-coastal-800 text-white"
                    : "border border-coastal-200 bg-white text-coastal-800 hover:bg-coastal-50"
                }`}
                aria-pressed={interests.includes(o.id)}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Visiting Marseille</label>
          <select
            value={visitType}
            onChange={(e) => setVisitType(e.target.value as PlannerInput["visitType"])}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          >
            {VISIT_TYPE_OPTIONS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Preferred pace</label>
          <select
            value={pace}
            onChange={(e) => setPace(e.target.value as Pace)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          >
            {PACE_OPTIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Walking tolerance</label>
          <select
            value={walkingTolerance}
            onChange={(e) =>
              setWalkingTolerance(e.target.value as PlannerInput["walkingTolerance"])
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          >
            {WALKING_TOLERANCE_OPTIONS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Travel style</label>
          <select
            value={travelStyle}
            onChange={(e) => setTravelStyle(e.target.value as PlannerInput["travelStyle"])}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          >
            {TRAVEL_STYLE_OPTIONS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={generate} className="btn-primary">
          Build my Marseille plan
        </button>
        <Link href="/ship-schedules/marseille" className="btn-secondary">
          Browse ship schedules
        </Link>
      </div>

      {plan && (
        <div className="mt-8 space-y-8">
          <div className="rounded-xl border border-coastal-200 bg-coastal-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-maple-600">
              Why this matches
            </p>
            <h3 className="mt-1 font-display text-xl font-bold text-gray-900">{plan.bestFitType}</h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-coastal-600">
              {plan.duration}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">{plan.whyThisMatches}</p>
          </div>

          <section>
            <h3 className="section-title mb-4 text-xl">Recommended for your day</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <LinkCard link={plan.principalExcursion} />
              <LinkCard link={plan.alternative} />
            </div>
          </section>

          {plan.independentAddOn && (
            <section>
              <h3 className="section-title mb-4 text-xl">Worth adding if you have time</h3>
              <LinkCard link={plan.independentAddOn} />
            </section>
          )}

          <section>
            <h3 className="section-title mb-4 text-xl">Return-to-ship consideration</h3>
            <p className="rounded-xl border border-sandstone-400/50 bg-white p-5 text-sm leading-relaxed text-gray-700">
              {plan.returnConsideration}
            </p>
          </section>

          <p className="text-xs text-gray-500">
            Guidance is indicative — always confirm your ship&apos;s all-aboard time and build a
            60–90 minute return buffer. Aix, Cassis and deeper Provence routes need extra contingency
            for road traffic back to the port.
          </p>
        </div>
      )}
    </div>
  );
}
