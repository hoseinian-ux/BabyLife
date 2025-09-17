import { NextResponse } from "next/server";

// ذخیره موقت در حافظه (بعداً میشه وصل کرد به دیتابیس مثل MongoDB یا PostgreSQL)
let comments = [];

// گرفتن کامنت‌ها
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  const filtered = slug ? comments.filter((c) => c.slug === slug) : comments;
  return NextResponse.json(filtered);
}

// ثبت کامنت جدید
export async function POST(req) {
  const body = await req.json();
  const newComment = {
    id: Date.now(),
    slug: body.slug, // مشخص می‌کنیم کامنت مربوط به کدوم مقاله است
    name: body.name,
    email: body.email,
    message: body.message,
    date: new Date().toISOString(),
  };
  comments.push(newComment);
  return NextResponse.json(newComment, { status: 201 });
}
