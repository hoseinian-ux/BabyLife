//src\hooks\useProducts.js

"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// تابع fetch
async function fetchProducts(category, page) {
  
  const { data } = await axios.get("/api/products", {
    params: { category, page },
  });

  return data; 
}

// هوک اصلی
export function useProducts(category = "all", page = 1) {
  return useQuery({
    queryKey: ["products", category, page],
    queryFn: () => fetchProducts(category, page),
    keepPreviousData: true, 
    staleTime: 1000 * 60, 
  });
}
