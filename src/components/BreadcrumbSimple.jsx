import Link from "next/link";

export default function Breadcrumb({ items }) {
  return (
    <nav className="text-sm mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-grayDark">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {idx < items.length - 1 ? (
              <>
                <Link
                  href={item.href}
                  className="text-primary hover:text-secondary transition"
                >
                  {item.label}
                </Link>
                <span className="text-gray-400">/</span>
              </>
            ) : (
              <span className="font-semibold text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
