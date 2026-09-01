// Sätteri mdast plugin: antepone la base del sitio a las imágenes root-absolutas
// que Decap deja en el markdown (media_folder/public_folder => /images/blog/...).
// Las rutas relativas de los posts existentes no se tocan (el `image-marker`
// las optimiza como content assets como hasta ahora).
//
// Uso: processor: satteri({ mdastPlugins: [satteriBaseImage(base)] })
//
// Nota: en Sätteri los nodos son vistas de solo lectura; para modificar hay que
// pasar por ctx.replaceNode().

export function satteriBaseImage(base) {
  return {
    name: 'base-image',
    image(node, ctx) {
      const url = node.url;
      // base es '/portafolio-John-Berroa' (sin slash final); url arranca con '/',
      // así que base + url ya queda correcto. En dev base es '/' y no se toca nada.
      if (typeof url === 'string' && base && base !== '/' && url.startsWith('/') && !url.startsWith('//') && !url.startsWith(base)) {
        ctx.replaceNode(node, { ...node, url: base + url });
      }
    },
  };
}