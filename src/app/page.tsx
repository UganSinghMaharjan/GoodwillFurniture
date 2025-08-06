import Link from "next/link";
import Image from "next/image";

const data = [
  {
    id: 1,
    label: "Tables",
    image: "/tables.png",
  },
  {
    id: 2,
    label: "Chairs",
    image: "/chairs.png",
  },
  {
    id: 3,
    label: "Sofas",
    image: "/sofas.png",
  },
  {
    id: 4,
    label: "Beds",
    image: "/beds.png",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-primary text-foreground font-sans">
      <main className="relative min-h-screen px-8 py-12 bg-cover bg-center">
        <Image
          src="/Hero.png"
          alt="Goodwill Furniture Hero Image"
          layout="fill"
          objectFit="cover"
          className=""
        />
        <div className="absolute top-50 left-250 w-full max-w-2xl bg-white rounded-xl shadow-lg p-10 space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            Welcome to{" "}
            <span className="font-cormorant block">THE GOODWILL FURNITURE</span>
          </h1>
          <p className="text-lg md:text-xl text-dark">
            Where every piece tells a story, and every story finds a home.
            Optimal furniture for your home, office, and more. Explore our
            collection.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/products"
              className="bg-warm text-dark px-6 py-3 rounded-lg text-lg font-semibold hover:bg-secondary/80 transition"
            >
              Explore Products
            </Link>
            <Link
              href="/"
              className="bg-warm border border-secondary text-dark px-6 py-3 rounded-lg text-lg font-semibold hover:bg-secondary hover:text-white transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>

      <div className="flex flex-row justify-between items-center text-center mt-12 px-10">
        <h1 className="text-4xl font-bold text-dark">Shop By Categories</h1>
        <Link
          href="/products"
          className="bg-white text-dark text-xl px-6 py-2 rounded-lg transition-all duration-300 hover:bg-secondary hover:text-white hover:shadow-lg"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-6 p-8">
        {data.map((label, index) => (
          <div key={index} className="p-4 text-center bg-white shadow rounded">
            <Image
              src={label.image}
              alt={`Goodwill Furniture - ${label.label}`}
              width={1000}
              height={1000}
              className="mb-4 w-full h-48 object-cover rounded"
            />
            <h3 className="text-black text-2xl capitalize">{label.label}</h3>
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8 font-cormorant">
        <div className="p-4 text-center bg-white shadow rounded-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/Hero.png"
            alt="Goodwill Furniture - Tables"
            width={1000}
            height={1000}
            className="mb-4 w-full h-48 object-cover rounded"
          />
          <h3 className="text-dark text-2xl">Tables</h3>
        </div>

        <div className="p-4 text-center bg-white shadow rounded-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/Hero.png"
            alt="Goodwill Furniture - Chairs"
            width={1000}
            height={1000}
            className="mb-4 w-full h-48 object-cover rounded"
          />
          <h3 className="text-dark text-2xl">Chairs</h3>
        </div>

        <div className="p-4 text-center bg-white shadow rounded-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/Hero.png"
            alt="Goodwill Furniture - Sofas"
            width={1000}
            height={1000}
            className="mb-4 w-full h-48 object-cover rounded"
          />
          <h3 className="text-dark text-2xl">Sofas</h3>
        </div>

        <div className="p-4 text-center bg-white shadow rounded-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/Hero.png"
            alt="Goodwill Furniture - Beds"
            width={1000}
            height={1000}
            className="mb-4 w-full h-48 object-cover rounded"
          />
          <h3 className="text-dark text-2xl">Beds</h3>
        </div>
      </div> */}
    </div>
  );
}
