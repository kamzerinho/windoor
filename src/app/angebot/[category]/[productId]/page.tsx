import { products, Product } from '@/data/products';
import ProductLayout from '@/components/ProductLayout';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type PageProps = { params: { category: string; productId: string } };

export async function generateStaticParams() {
  return products.map((product: Product) => ({
    category: product.category,
    productId: product.id,
  }));
}

export default function ProductPage({ params }: PageProps) {
  const product = products.find(
    p => p.id === params.productId && p.category === params.category
  );
  if (!product) return notFound();
  const breadcrumbs = (
    <nav className="text-sm text-gray-500 py-4 px-2">
      <ol className="list-reset flex">
        <li><Link href="/" className="hover:underline">Home</Link> <span className="mx-2">/</span></li>
        <li><Link href="/angebot" className="hover:underline">Angebot</Link> <span className="mx-2">/</span></li>
        <li><Link href={`/angebot/${product.category}`} className="hover:underline capitalize">{product.category}</Link> <span className="mx-2">/</span></li>
        <li className="text-black font-semibold">{product.title}</li>
      </ol>
    </nav>
  );
  return <ProductLayout product={product} breadcrumbs={breadcrumbs} />;
} 