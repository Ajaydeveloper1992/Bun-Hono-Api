import app from './index'
Bun.serve({
    port:8080,
    fetch:app.fetch,
})
console.log("Server running on http://localhost:8080");
