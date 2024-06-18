import type { ParsedContent } from '@nuxt/content/types';

export type TagInfo = {
  name: string;
  title: string;
  icon?: string;
  description?: string;
  url?: string;
};

export const useTags = (type: 'categories' | 'tags') => {
  // const { data } = await useAsyncData(`tag:${type}`, () =>
  //   queryContent(`/notes/_${type}`).findOne()
  // );

  // const { data } = await useAsyncData('tags:_tags', () =>
  //   queryContent('/notes/_tags').find()
  // );

  // const items = data.value || [];

  // const items = await queryContent('/notes/_tags').find();

  const getTag = async (tag: string | undefined) => {
    const result = ref();
    if (!tag) {
      return result;
    }
    try {
      const { data } = await useAsyncData(`tag:${tag}`, () => {
        return queryContent(`tags`)
          .where({
            _type: 'markdown',
            _path: {
              $regex: `/${tag}$`,
              $not: {
                $regex: '.*_dir$',
              },
            },
          })
          .findOne();
      });
      result.value = data.value;
    } catch (e) {
      console.warn(`tag is null:${tag}`, e);
    }

    return result;
  };

  const getTags = async (tags: string[]) => {
    const obj = ref<{
      [key: string]: ParsedContent | null;
    }>({});
    tags.map(async (x) => {
      try {
        const tag = await getTag(x);
        obj.value[x] = tag.value;
      } catch (e) {
        console.warn(e);
      }
    });
    return obj;
  };

  // const getInfo = (name: string) => {
  //   const item = items?.find(
  //     (x: any) => x.name.toLowerCase() === name.toLowerCase()
  //   );
  //   return (
  //     item || {
  //       name,
  //       title: name,
  //     }
  //   );
  // };

  return {
    // items,
    // getInfo,
    getTag,
    getTags,
  };
};
