require.config({
  shim: {

  },
  paths: {
    jquery: "../bower_components/jquery/dist/jquery",
    require: "../bower_components/requirejs/require",
    seedrandom: "../bower_components/seedrandom/seedrandom",
  },
  packages: [

  ]
});

requirejs(['./game']);
