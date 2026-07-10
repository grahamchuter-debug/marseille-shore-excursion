"use client";

import { useState } from "react";
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

const PACE_OPTIONS: Pace[] = ["Relaxed", "Moderate", "Active"];

function LinkCard({ link }: { link: PlannerLink }) {
  return (
    <Link href={link.href} className="card-editorial group block p-5">
      <p className="font-display text-base font-bold text-gray-900 group-hover:text-coastal-800">{link.label}</p>
      <p className="mt-1 text-sm text-gray-600">{link.why}</p>
    </Link>
  );
}

export function MarseilleCruisePlanner() {
  const [arrivalTime, setArrivalTime] = useState("08:00");
  const [departureTime, setDepartureTime] = useState("17:00");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [interests, setInterests] = useState<string[]>(["history"]);
  const [visitType, setVisitType] = useState<PlannerInput["visitType"]>("first-time");
  const [pace, setPace] = useState<Pace>("Moderate");
  const [walkingTolerance, setWalkingTolerance] = useState<PlannerInput["walkingTolerance"]>("full");
  const [travelStyle, setTravelStyle] = useState<PlannerInput["travelStyle"]>("guided");
  const [plan, setPlan] = useState<PlannerResult | null>(null);

  function toggleInterest(id: string) {
    setInterests((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  }

  function generate() {
    setPlan(
      generateMarseillePlan({
        arrivalTime,
        departureTime,
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

  return (
    <div className="card-feature">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Arrival time (local)</label>
          <input
            type="time"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Departure / all-aboard time</label>
          <input
            type="time"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
          <div className="flex flex-wrap gap-2">
            {INTEREST_OPTIONS.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => toggleInterest(o.id)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  interests.includes(o.id)
                    ? "bg-coastal-800 text-white"
                    : "bg-white text-coastal-800 border border-coastal-200 hover:bg-coastal-50"
                }`}
                aria-pressed={interests.includes(o.id)}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Visiting Marseille</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred pace</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Walking tolerance</label>
          <select
            value={walkingTolerance}
            onChange={(e) => setWalkingTolerance(e.target.value as PlannerInput["walkingTolerance"])}
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Travel style</label>
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
      </div>

      {plan && (
        <div className="mt-8 space-y-8">
          <div className="rounded-xl border border-coastal-200 bg-coastal-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-maple-600">Why this matches</p>
            <h3 className="font-display text-xl font-bold text-gray-900 mt-1">{plan.bestFitType}</h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-coastal-600">{plan.duration}</p>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">{plan.whyThisMatches}</p>
          </div>

          <section>
            <h3 className="section-title text-xl mb-4">Recommended for your day</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <LinkCard link={plan.principalExcursion} />
              <LinkCard link={plan.alternative} />
            </div>
          </section>

          {plan.independentAddOn && (
            <section>
              <h3 className="section-title text-xl mb-4">Worth adding if you have time</h3>
              <LinkCard link={plan.independentAddOn} />
            </section>
          )}

          <section>
            <h3 className="section-title text-xl mb-4">Return-to-ship consideration</h3>
            <p className="text-sm leading-relaxed text-gray-700 rounded-xl border border-sandstone-400/50 bg-white p-5">
              {plan.returnConsideration}
            </p>
          </section>

          <p className="text-xs text-gray-500">
            Guidance is indicative — always confirm your ship&apos;s all-aboard time and build a 60–90
            minute return buffer. Aix, Cassis and deeper Provence routes need extra contingency for road
            traffic back to the terminals.
          </p>
        </div>
      )}
    </div>
  );
}
