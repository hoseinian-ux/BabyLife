import { NextResponse } from "next/server";
import { allProducts } from "@/lib/fakeProducts";

export async function GET(req, { params }) {
  const { id } = params;
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(req, { params }) {
  try {
    const body = await req.json();
    const idx = products.findIndex((p) => p.id == params.id);

    if (idx === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const updatedProduct = { ...products[idx], ...body };
    const updatedList = [...products];
    updatedList[idx] = updatedProduct;

    setProducts(updatedList);

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
}

//  حذف محصول
export async function DELETE(req, { params }) {
  const exists = products.some((p) => p.id == params.id);

  if (!exists) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const updatedList = products.filter((p) => p.id != params.id);
  setProducts(updatedList);

  return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
}