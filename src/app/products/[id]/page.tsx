export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <h1>
      Product {id} details rendred at {new Date().toISOString()}
    </h1>
  );
}
