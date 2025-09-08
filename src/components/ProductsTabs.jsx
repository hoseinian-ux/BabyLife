// src/components/ProductsTabs.jsx
import Link from "next/link";

export default function ProductsTabs({ active }) {
  const categories = [
    { key: "all", label: "همه" },
    { key: "girl", label: "دخترانه" },
    { key: "boy", label: "پسرانه" },
    { key: "spring", label: "بهاره" },
    { key: "autumn", label: "پاییزه" },
  ];

  return (
    <div className="flex justify-center gap-4 mb-6">
      {categories.map((cat) => (
        <Link
          key={cat.key}
          href={`/shop/${cat.key}`}
          className={`px-4 py-2 rounded-md ${
            active === cat.key
              ? "bg-[#9eaa92] text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {cat.label}
        </Link>
      ))}
    </div>
  );
}
