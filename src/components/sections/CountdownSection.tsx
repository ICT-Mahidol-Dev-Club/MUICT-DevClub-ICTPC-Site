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
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
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
      <section aria-label="countdown" className="py-10 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-slate-500 mb-6">{labels.label}</p>
          <div className="grid grid-cols-4 gap-3 max-w-lg mx-auto">
            {["--", "--", "--", "--"].map((_, i) => (
              <div key={i} className="h-20 bg-slate-100 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (timeLeft.isPast) {
    return (
      <section aria-label="countdown" className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-lime-100 text-lime-950 border border-lime-300 font-semibold shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-600 animate-ping" />
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
    <section
      aria-label="countdown"
      className="py-12 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 mb-6 text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
          <svg className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{labels.label}</span>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto">
          {timeUnits.map((unit, idx) => (
            <Card
              key={idx}
              className="p-3 sm:p-5 flex flex-col items-center justify-center bg-slate-50/70 border-slate-200/90 shadow-sm"
            >
              <span className="font-mono text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">
                {unit.label}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
