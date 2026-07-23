// Prerender the whole site to static HTML — fast, and safe on Cloudflare
// (SSR runs at build time in Node, not workerd). CSR stays enabled so
// stratum-ui's interactive components hydrate normally.
export const prerender = true;
