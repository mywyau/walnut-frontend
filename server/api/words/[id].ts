export default defineEventHandler(async (event) => {


 // max-age=3600	                Browser caches for 1 hour
 // s-maxage=86400	              CDN caches for 24 hours
 // stale-while-revalidate=600	  Serve stale for 10 mins while updating

  setHeader(
    event,
    "cache-control",
    "public, max-age=3600, s-maxage=86400, stale-while-revalidate=600"
  );

  const id = getRouterParam(event, "id");
  const origin = getRequestURL(event).origin;

  try {
    return await $fetch(`${origin}/content/cantonese/words/${id}.json`);
  } catch {
    throw createError({
      statusCode: 404,
      statusMessage: "Word not found",
    });
  }
});
