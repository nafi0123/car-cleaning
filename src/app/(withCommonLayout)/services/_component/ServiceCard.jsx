import Image from "next/image";
import { Clock, Star, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({ service }) {
  const { name, description, price, img, duration, isFeatured, isDeleted } =
    service || {};

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-xl ${
        isDeleted ? "opacity-50 grayscale" : ""
      }`}
    >
      {/* Featured Badge */}
      {isFeatured && !isDeleted && (
        <div className="absolute left-4 top-4 z-10 flex items-center gap-1 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
          <Star size={14} className="text-yellow-400" />
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative h-56 w-full">
        <Image src={img} alt={name} fill className="object-cover" priority />
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p
            className="mt-2 line-clamp-3 text-sm text-gray-600"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock size={16} />
            {duration} mins
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-500">Starting at</p>
            <p className="text-2xl font-bold text-gray-900">
              ₹{price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* CTA */}
        {!isDeleted ? (
          <Link href={`/services/${service?._id}`}>
            <button className="w-full rounded-xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-900">
              Book Service
            </button>
          </Link>
        ) : (
          <div className="flex items-center justify-center gap-2 rounded-xl bg-gray-200 py-3 text-sm font-medium text-gray-600">
            <ShieldCheck size={16} />
            Service Unavailable
          </div>
        )}
      </div>
    </div>
  );
}
