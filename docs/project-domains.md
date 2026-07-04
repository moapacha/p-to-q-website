# Project Domain Notes

This site sometimes points at projects that have their own production hostnames.

## `aleph`

Domain posture:

- Primary public domain: `https://aleph.ptoq.io`
- Repository: `https://github.com/p-to-q/aleph`
- Benchmark repository: `https://github.com/p-to-q/aleph-benchmark`

Why:

- `aleph.ptoq.io` is the canonical product surface linked from `/work`.
- Live metadata already points canonical and social URLs at `https://aleph.ptoq.io`.

Expected configuration:

1. Keep `aleph.ptoq.io` assigned to the Aleph production deployment.
2. Set production base URL metadata to `https://aleph.ptoq.io`.
3. Keep `/work` linking to `https://aleph.ptoq.io/`.

## `flatus`

Planned domain posture:

- Primary public domain: `https://flatus.ptoq.io`
- Repository: `https://github.com/p-to-q/flatus`

Why:

- `flatus.ptoq.io` keeps the project inside the `p-to-q` namespace once its deployment is ready.
- Until deployment and HTTPS are live, `/work` should keep linking to the repository instead of a broken product URL.

Expected configuration when the project deployment is ready:

1. Add `flatus.ptoq.io` to the Flatus production deployment.
2. Set production base URL metadata to `https://flatus.ptoq.io`.
3. Point HTML canonical and social metadata at `https://flatus.ptoq.io/`.
4. Switch `/work` from the repository link to `https://flatus.ptoq.io/` once the product URL is healthy.

## `jiko`

Domain posture:

- Primary public domain: `https://jiko.ptoq.io`
- Fallback / frontend deployment URL: `https://jiko-showcase.vercel.app`
- Repository: `https://github.com/p-to-q/jiko`

Why:

- `jiko.ptoq.io` keeps the project inside the `p-to-q` namespace and is the URL linked from `/work`.
- `jiko-showcase.vercel.app` remains useful as a Vercel fallback and deployment check URL, but should not be the canonical public URL.

Expected configuration:

1. Add `jiko.ptoq.io` to the `jiko-showcase` Vercel project.
2. Keep `jiko-showcase.vercel.app` assigned as the Vercel fallback.
3. Point HTML canonical and social metadata at `https://jiko.ptoq.io/`.
4. If the project uses public base URL environment variables later, set production to `NEXT_PUBLIC_BASE_URL=https://jiko.ptoq.io`.

## `murmur`

Domain posture:

- Primary public domain: `https://murmur.ptoq.io`

Why:

- `murmur.ptoq.io` is the canonical product surface linked from `/work`.

Expected configuration:

1. Keep `murmur.ptoq.io` assigned to the Murmur production deployment.
2. Set production base URL metadata to `https://murmur.ptoq.io`.
3. Keep `/work` linking to `https://murmur.ptoq.io/`.

## `agent_lifeRestarter`

Planned domain posture:

- Primary public domain: `https://machinedie.life`
- Organization alias: `https://liferestart.ptoq.io`

Why:

- `machinedie.life` is the public-facing product / artwork name.
- `liferestart.ptoq.io` keeps the project legible inside the `p-to-q` namespace.

Expected configuration when the project deployment is ready:

1. Add both hostnames to the project in Vercel.
2. Set `NEXT_PUBLIC_BASE_URL=https://machinedie.life` in production.
3. Redirect `https://liferestart.ptoq.io/*` to `https://machinedie.life/*`.
4. Keep preview deployments on their preview URLs unless a dedicated staging host is introduced later.

This repository only documents and links to that project. The actual redirect and canonical behavior must be configured in the `agent_lifeRestarter` deployment repo once it is available in the workspace.
