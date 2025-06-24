# Bun-Hono-Api
Hono - means flame🔥 in Japanese - is a small, simple, and ultrafast web framework built on Web Standards. It works on any JavaScript runtime: Cloudflare Workers, Fastly Compute, Deno, Bun, Vercel, Netlify, AWS Lambda, Lambda@Edge, and Node.js.
https://hono.dev/docs/

Bun is an all-in-one toolkit for JavaScript and TypeScript apps. It ships as a single executable called bun.

At its core is the Bun runtime, a fast JavaScript runtime designed as a drop-in replacement for Node.js. It's written in Zig and powered by JavaScriptCore under the hood, dramatically reducing startup times and memory usage.
https://bun.sh/docs

bun-hono-api/
├── index.ts        # Main routes
├── server.ts       # Server bootstrap
├── routes/
│   └── user.ts     # More modular route files (optional)
├── .gitignore
├── bun.lockb
└── package.json

Initialize Manually (optional alternative to bun create)

mkdir bun-hono-api
cd bun-hono-api
bun init -y

bun add hono

Open your package.json and update it like this:
{
  "name": "bun-hono-api-manually",
  "version": "1.0.0",
  "main": "server.ts",
  "scripts": {
    "dev": "bun run server.ts"
  },
  "dependencies": {
    "hono": "^4.0.0"
  }
}

bun run dev
