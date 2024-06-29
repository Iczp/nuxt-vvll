export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  //   const results = queryContent(query.q).find();

  return {
    query,
    // results,
  };
});
