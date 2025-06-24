# bun-hono-api-manually

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```
Bun is an all-in-one toolkit for JavaScript and TypeScript apps. It ships as a single executable called bun.
Bun.serve({
  port: 3000,
  fetch: app.fetch,
})

console.log('🚀 Server running on http://localhost:3000')

At its core is the Bun runtime, a fast JavaScript runtime designed as a drop-in replacement for Node.js. It's written in Zig and powered by JavaScriptCore under the hood, dramatically reducing startup times and memory usage.
This project was created using `bun init` in bun v1.2.10. [Bun]
(https://bun.sh/docs) is a fast all-in-one JavaScript runtime.

Hono
Hono - means flame🔥 in Japanese - is a small, simple, and ultrafast web framework built on Web Standards. It works on any JavaScript runtime: Cloudflare Workers, Fastly Compute, Deno, Bun, Vercel, Netlify, AWS Lambda, Lambda@Edge, and Node.js. (https://hono.dev/docs/)



Fast, but not only fast.


import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('Hono!'))

export default app
package.json
{
  "name": "bun-hono-api-manually",
  "module": "index.ts",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "bun run server.ts"
  },
  "devDependencies": {
    "@types/bun": "latest"
  },
  "peerDependencies": {
    "typescript": "^5"
  },
  "dependencies": {
    "hono": "^4.8.2"
  }
}
//////////////////
bun run dev
