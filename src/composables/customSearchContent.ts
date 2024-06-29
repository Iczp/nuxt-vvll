import { useFuse } from '@vueuse/integrations/useFuse';

export default async function customSearchContent(keyword: string) {
  const runtimeConfig = useRuntimeConfig();
  const { integrity, api } = runtimeConfig.public.content;

  // const { data } = await useAsyncFetch(
  //   `${api.baseURL}/search${integrity ? '.' + integrity : ''}.json`
  // );

  console.log('search', keyword);

  const results = await queryContent()
    .where({
      title: { $contains: keyword },
      $or: [
        {
          tags: { $contains: keyword },
        },
      ],
    })
    // .limit(5)
    .find();
  // const { results } = useFuse(search, []);

  const { list } = await useDocuments({});
  return {
    results,
    list: list.value,
  };
}
