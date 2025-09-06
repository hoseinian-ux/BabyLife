"use client";
import { useEffect, useState } from "react";

// تابع تبدیل اعداد به فارسی
const toPersianNumber = (num) =>
  num.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

export default function CountdownTimer({ targetDate }) {
  const calculateTime = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = { days: 0, hours: 0, mins: 0, secs: 0 };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / (1000 * 60)) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  // برچسب‌های فارسی برای واحدها
  const labels = {
    days: "روز",
    hours: "ساعت",
    mins: "دقیقه",
    secs: "ثانیه",
  };

  return (
    <div className="flex gap-4 mt-4">
      {Object.keys(timeLeft).map((unit) => (
        <div
          key={unit}
          className="flex flex-col items-center bg-white/80 p-2 rounded-md shadow min-w-[60px]"
        >
          <span className="text-2xl font-bold">
            {toPersianNumber(timeLeft[unit].toString().padStart(2, "0"))}
          </span>
          <span className="text-xs">{labels[unit]}</span>
        </div>
      ))}
    </div>
  );
}
