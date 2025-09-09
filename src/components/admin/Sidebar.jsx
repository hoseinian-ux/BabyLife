import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-sm p-4 space-y-4">
      <h2 className="text-xl font-bold">پنل مدیریت</h2>
      <nav className="flex flex-col space-y-2">
        <Link href="/admin/dashboard" className="hover:text-primary">
          داشبورد
        </Link>
        <Link href="/admin/products" className="hover:text-primary">
          مدیریت محصولات
        </Link>
        <Link href="/admin/products/new" className="hover:text-primary">
          افزودن محصول
        </Link>
      </nav>
    </aside>
  );
}
