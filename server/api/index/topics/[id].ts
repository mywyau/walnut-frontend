export default defineEventHandler(async (event) => {
  // max-age=3600	                Browser caches for 1 hour
  // s-maxage=86400	              CDN caches for 24 hours
  // stale-while-revalidate=600	  Serve stale for 10 mins while updating

  setHeader(
    event,
    "cache-control",
    "public, max-age=3600, s-maxage=86400, stale-while-revalidate=600"
  );

  const id = getRouterParam(event, "id") || "no id or missing id";
  const origin = getRequestURL(event).origin;

  console.log(`${origin}/index/topics/${id}.json`);

  try {
    return await $fetch(`${origin}/index/topics/${id}.json`);
  } catch {
    throw createError({
      statusCode: 404,
      statusMessage: "Word not found",
    });
  }
});
