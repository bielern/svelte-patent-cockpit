# Patent Cockpit Minimal Example with Svelte, Drizzle ORM and iron session management

## Database

It runs with sqlite. And the DB should be create automatically.
To ensure that ON DELETE CASCADE works, turn on the corresponding pragma

```
PRAGMA foreign_keys = ON;
```

To create a migration, run

```
npx drizzle-kit generate:sqlite --schema=src/lib/server/schema.ts --out=src/lib/server/migrations
```


## Installation

To install all dependencies, pick one of 
```bash
npm install
pnpm install
yarn
```

## Developing

Once you've installed all dependencies, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
