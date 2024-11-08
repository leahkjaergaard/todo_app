"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, error } = useSWR("https://dummyjson.com/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.products.map((product) => (
        <li key={product.id}>{product.category}</li>
      ))}
    </ul>
  );
}
