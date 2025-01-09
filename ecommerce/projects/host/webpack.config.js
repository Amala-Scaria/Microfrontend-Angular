const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'host',

  exposes: {
    './Component': './projects/host/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

module.exports = {
  output: {
    uniqueName: "host",
    publicPath: "auto"
  },
  plugins: [
    new withModuleFederationPlugin({
      name: 'host',
      remotes: {
        remoteApp: "remoteApp@http://localhost:4200/remoteEntry.js"
      }
    })
  ]
}
