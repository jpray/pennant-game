const path = require('path');

function excludeNodeModulesExcept (modules)
{
    var pathSep = path.sep;
    if (pathSep == '\\') // must be quoted for use in a regexp:
        pathSep = '\\\\';
    var moduleRegExps = modules.map (function (modName) { return new RegExp("node_modules" + pathSep + modName)})

    return function (modulePath) {
        if (/node_modules/.test(modulePath)) {
            for (var i = 0; i < moduleRegExps.length; i ++)
                if (moduleRegExps[i].test(modulePath)) return false;
            return true;
        }
        return false;
    };
}

module.exports = {
  entry: './src/pennant-game.js',
  output: {
    filename: 'pennant-game.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: excludeNodeModulesExcept(["web-components-core", "utility-toolkit"]),
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-2']
        }
      }
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }
  ]
}
};
