export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id")
  const origin = getRequestURL(event).origin;
  console.log(`${origin}/content/cantonese/words/${id}.json`)
  try {
    return await $fetch(
      `${origin}/content/cantonese/words/${id}.json`
    );
  } catch {
    throw createError({
      statusCode: 404,
      statusMessage: "Word not found",
    });
  }
});
