# GrapeJs custom field for Strapi

This package provides a custom field for Strapi that lets you use and configure GrapeJs in no time.

Custom fields are supported since Strapi 4.4+ and offer powerful API to create highly customizable fields.

## <a id="installation"></a>🔧 Installation

Inside your Strapi app, add the package:

With `npm`:

```bash
npm install @strapi-fan/strapi-grapejs-plugin
```

With `yarn`:

```bash
yarn add @strapi-fan/strapi-grapejs-plugin
```

Then run build:

```bash
npm run build
```

or:

```bash
yarn build
```

## <a id="contributing"></a>🛠 Contributing

This section covers the way how to configure your environment if you want to contribute to this package.

### Setting up the environment

In order to start making changes in the plugin you first need to install Strapi infrastructure on top of the plugin repository.

```
npx create-strapi-app --quickstart strapi
cd strapi
```

By default Strapi does not create plugins folder so we need to create it.

```
mkdir -p src/plugins
```

Now we should clone this repository so we can work on it.

```
git clone git@github.com:vijay94/strapi-grapejs-plugin.git src/plugins/strapi-grapejs-plugin
```

Let's add an entry inside `./package.json` file so, we won't need to use `yarn` inside plugin itself.

```
"workspaces": ["./src/plugins/strapi-grapejs-plugin"]
```

Install dependencies:

```
yarn install
```

Now we need to register plugin so strapi can use it. In order to do that we need
to create (if not already created) `./config/plugins.js` file and add entry to it.

```
module.exports = ({ env }) => ({
  "grape-editor": {
    enabled: true,
    resolve: "./src/plugins/strapi-grapejs-plugin",
    config: {
      plugins: []
    }
  }
});
```

Rebuild the project and start the server:

```
yarn build
yarn develop
```