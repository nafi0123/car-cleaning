// export const runtime = "nodejs";
import { dbConnect } from "@/lib/dbConnect";
// export async function POST(request) {
//   const newReview = await request.json();
//   const reviewsRes = await dbConnect("reviews");
//   const res = await reviewsRes.insertOne(newReview);
//   return Response.json({
//     message: "Review added successfully!",
//     review: res,
//   });
// }

export async function GET(request) {
  const reviewsRes = await dbConnect("reviews");
  const reviews = await reviewsRes.find({}).toArray();
  return Response.json({
    reviews,
    message: "Reviews retrieved successfully!",
  });
}