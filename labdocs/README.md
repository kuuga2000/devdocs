# Lab Docs

This folder now uses the official Doks documentation theme and is set up to run through Docker.

## Run locally

```bash
docker compose up --build
```

Open `http://localhost:1313`.

## Create a new docs page

```bash
docker compose run --rm site npm run create docs/guides/my-page.md
```

## Build the production image

```bash
docker build -t labdocs .
docker run --rm -p 8080:80 labdocs
```

Open `http://localhost:8080`.

## Theme

This project is based on Doks:

- https://getdoks.org/docs/
- https://github.com/thuliteio/doks
