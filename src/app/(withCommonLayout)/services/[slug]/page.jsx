import Image from "next/image";
import { Clock, Star, CheckCircle } from "lucide-react";
import BookingBtn from "../_component/BookingBtn";
import { getSingleService } from "@/services/servicesAction";

export function generateStaticParams() {
  return [
    { slug: "6730aac9af70525950f07b66" },
    { slug: "66d1b3e8878f84fdc5cd1e3f" },
  ];
}

// const getSingleService = async (id) => {
//   const res = await fetch(
//     `https://car-washing-system-cleanify-server.vercel.app/api/v1/services/${id}`
//     // { cache: "no-store" }
//   );
//   return res.json();
// };

const ServiceDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const serviceRes = await getSingleService(slug);
  const service = serviceRes?.data;

  console.log(serviceRes, service);
  if (!service) {
    return <div className="py-20 text-center">Service not found</div>;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-3">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8">
          {/* Image */}
          <div className="relative h-[420px] overflow-hidden rounded-3xl">
            <Image
              src={service.img}
              alt={service.name}
              fill
              className="object-cover"
              priority
            />

            {service.isFeatured && (
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
                <Star size={16} className="text-yellow-400" />
                Featured Service
              </div>
            )}
          </div>

          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold text-gray-200 sm:text-4xl">
              {service.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {service.duration} minutes
              </div>

              <div className="text-lg font-semibold text-gray-500">
                ₹{service.price.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="prose max-w-none prose-gray">
            <div dangerouslySetInnerHTML={{ __html: service.description }} />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-6">
            <div>
              <p className="text-sm text-gray-500">Service Price</p>
              <p className="text-3xl font-bold text-gray-900">
                ₹{service.price.toLocaleString()}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock size={16} />
              Estimated Time: {service.duration} mins
            </div>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Professional Equipment
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Trained Specialists
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Safe & Eco-Friendly Products
              </li>
            </ul>

            <BookingBtn service={service} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsPage;
