# 🎪 Showman - Manage your IoT Projects and Devices

Showman is an application to manage IoT Projects and Devices as well as orchestrating and automating connected services. It show possible integrations for a production grade application, which includes some up to date features like:

- User Auth (Keycloak)

<br>

# Application Setup

## Keycloak

Keycloak is used for local user authentication. To initially setup the provider, do the following steps on the keycloak instance after spinning up the docker compose file.

1. create new realm `showman`
2. create new client `showman-auth`

```yaml
Client ID: showman-auth
Name: Showman Auth Client
# values for dev - add others for production
Root Url: http://localhost:8081
Home Url: http://localhost:3000
Valid redirect URIs: http://localhost:3000/*

Client authentication: on
```

3. Create User for new client
4. Update the `.env` file with the keycloak credentials

## YugabyteDB

YugabyteDB serves as the primary database for application state. It's a cloud native database which is compatible with Postgres, prepared for hybrid and multi-cloud deployments and 100% open source.

1. Start the DB using the compose file
2. Open the exposed Admin UI on port 9000 (http://localhost:9000/)
3. Add a schema to the database (prisma) and start the application

## Nuxt

### Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

### Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
