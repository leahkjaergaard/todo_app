import Link from "next/link";

export default async function Home() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();

  return (
    <div>
      {data.products.map((product) => (
        <div key={product.id}>
          <Link href={`/detaljer/${product.id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
}
