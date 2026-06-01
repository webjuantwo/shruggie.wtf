# shruggie.wtf

![Shruggie](assets/shruggie-wtf.png)


A gimmick API that returns shruggies. Deployed on Cloudflare Workers.

## Dev

```bash
npm install
npm run dev        # starts local dev server on http://localhost:8787
```

Test locally:

```bash
curl http://localhost:8787          # plain text: ¯\_(ツ)_/¯
curl http://localhost:8787/all      # JSON array of all shruggies
curl http://localhost:8787/random   # random shruggie
curl http://localhost:8787/health   # {"ok":true}
```

Open `http://localhost:8787` in a browser to see the HTML version.

## Deploy

```bash
wrangler login        # authenticate with Cloudflare (once)
npm run deploy        # deploy to *.workers.dev subdomain
```

## Rate limiting

60 requests/minute per IP via the Workers `RATE_LIMITER` binding. Exceeding the limit
returns `429 Too Many Requests` with `Retry-After: 60`.

## Endpoints

| Path | Response |
|---|---|
| `GET /` | HTML (browser) or plain text (curl) |
| `GET /all` | JSON array of all shruggies |
| `GET /random` | `{"shruggie":"..."}` |
| `GET /health` | `{"ok":true}` |
| `GET /docs` | API documentation page |

## Example

```bash
curl -L shruggie.wtf
¯\_(ツ)_/¯
```
