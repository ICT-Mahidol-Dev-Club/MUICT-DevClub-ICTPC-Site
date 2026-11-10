"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface CountdownSectionProps {
  eventDate: string; // ISO 8601
  labels: {
    label: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

export function CountdownSection({ eventDate, labels }: CountdownSectionProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(eventDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  if (!mounted) {
    return (
      <section aria-label="countdown" className="bg-slate-50/50 py-10">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-6 text-sm font-medium text-slate-500">{labels.label}</p>
          <div className="mx-auto grid max-w-lg grid-cols-4 gap-3">
            {["--", "--", "--", "--"].map((_, i) => (
              <div key={i} className="h-20 animate-pulse rounded-xl bg-slate-100" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (timeLeft.isPast) {
    return (
      <section aria-label="countdown" className="border-b border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2.5 rounded-xl border border-lime-300 bg-lime-100 px-4 py-2 font-semibold text-lime-950 shadow-sm">
            <span className="h-2.5 w-2.5 animate-ping rounded-full bg-emerald-600" />
            <span>Event is live! Good luck to all competitors!</span>
          </div>
        </div>
      </section>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: labels.days },
    { value: timeLeft.hours, label: labels.hours },
    { value: timeLeft.minutes, label: labels.minutes },
    { value: timeLeft.seconds, label: labels.seconds },
  ];

  return (
    <section aria-label="countdown" className="border-b border-slate-200/80 bg-white py-12">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-wider text-slate-500">
          <svg
            className="h-4 w-4 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{labels.label}</span>
        </div>

        <div className="mx-auto grid max-w-xl grid-cols-4 gap-2 sm:gap-4">
          {timeUnits.map((unit, idx) => (
            <Card
              key={idx}
              className="flex flex-col items-center justify-center border-slate-200/90 bg-slate-50/70 p-3 shadow-sm sm:p-5"
            >
              <span className="font-mono text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:text-xs">
                {unit.label}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
