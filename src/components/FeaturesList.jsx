"use client";
import * as FaIcons from "react-icons/fa";
import { features } from "@/lib/features";

export default function FeaturesList() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => {
            const IconComponent = FaIcons[item.icon];
            return (
              <div
                key={i}
                className="flex items-center gap-4 bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#f5f5f5]">
                  {IconComponent && (
                    <IconComponent className="text-3xl text-primary" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
