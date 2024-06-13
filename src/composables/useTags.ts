export type TagInfo = {
  name: string;
  title: string;
  icon?: string;
  description?: string;
  url?: string;
};

export const useTags = async (type: 'categories' | 'tags') => {
  // const { data } = await useAsyncData(`tag:${type}`, () =>
  //   queryContent(`/notes/_${type}`).findOne()
  // );

  // const { data } = await useAsyncData('tags:_tags', () =>
  //   queryContent('/notes/_tags').find()
  // );

  // const items = data.value || [];

  const items = await  queryContent('/notes/_tags').find()

  const getInfo = (name: string) => {
    const item = items?.find(
      (x: any) => x.name.toLowerCase() === name.toLowerCase()
    );
    return (
      item || {
        name,
        title: name,
      }
    );
  };



  return {
    items,
    getInfo,
  };
};
