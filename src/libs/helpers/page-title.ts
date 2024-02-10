export default function defineRouteTitle(title: string) {
  return async () => {
    document.title = title;

    return { title };
  };
}
