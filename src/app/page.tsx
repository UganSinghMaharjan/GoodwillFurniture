import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-primary text-foreground font-sans overflow-hidden">
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/Hero.png"
            alt="Goodwill Furniture Logo"
            width={1000}
            height={1000}
            className="mb-8 w-full h-full object-cover "
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-dark">
            Welcome to{" "}
            <span className="font-cormorant">THE GOODWILL FURNITURE</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto text-dark">
            Where every piece tells a story, and every story finds a home.
            Optimal furniture for your home, office, and more. Explore our
            collection.
          </p>
          <div className="flex justify-center space-x-8">
            <Link
              href="/products"
              className="inline-block bg-secondary text-dark px-6 py-3 rounded-lg text-lg font-semibold hover:bg-secondary/80 transition-colors"
            >
              Explore Products
            </Link>
            <Link
              href="/"
              className="inline-block bg-secondary text-dark px-6 py-3 rounded-lg text-lg font-semibold hover:bg-secondary/80 transition-colors"
            >
              learn more
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
