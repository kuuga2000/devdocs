ARG HUGO_VERSION=0.156.0

FROM node:24-bookworm-slim AS base

ARG HUGO_VERSION

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates curl git \
  && rm -rf /var/lib/apt/lists/*

RUN arch="$(dpkg --print-architecture)" \
  && case "$arch" in \
    amd64) hugo_arch="amd64" ;; \
    arm64) hugo_arch="arm64" ;; \
    *) echo "Unsupported architecture: $arch" && exit 1 ;; \
  esac \
  && curl -fsSL -o /tmp/hugo.deb "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-${hugo_arch}.deb" \
  && apt-get update \
  && apt-get install -y --no-install-recommends /tmp/hugo.deb \
  && rm -f /tmp/hugo.deb \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 1313
CMD ["npm", "run", "dev", "--", "--bind", "0.0.0.0", "--port", "1313", "--baseURL", "http://localhost:1313/"]

FROM base AS build
RUN npm run build

FROM nginx:1.27-alpine AS production
COPY --from=build /app/public /usr/share/nginx/html
EXPOSE 80
