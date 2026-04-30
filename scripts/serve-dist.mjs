import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { createReadStream, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "dist");
const port = Number(process.env.PORT || process.argv[2] || 5173);
const host = process.env.HOST || "0.0.0.0";

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function resolveRequest(url) {
  const pathname = decodeURIComponent(new URL(url, "http://localhost").pathname);
  const requested = path.normalize(path.join(root, pathname));

  if (!requested.startsWith(root)) {
    return null;
  }

  if (existsSync(requested) && !requested.endsWith(path.sep)) {
    return requested;
  }

  return path.join(root, "index.html");
}

createServer(async (request, response) => {
  const file = resolveRequest(request.url || "/");

  if (!file) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    await readFile(file);
    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}).listen(port, host, () => {
  console.log(`Pixelix Media preview running at http://${host}:${port}`);
});
