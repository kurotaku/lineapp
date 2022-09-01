const glob = require('glob')
const { build } = require('esbuild')
const env = require('dotenv').config().parsed
const entryPoints = glob.sync('app/javascript/*.*')

const defineList = new Object();

Object.keys(env).map((key) =>{
  defineList['process.env.' + key] = JSON.stringify(env[key])
})

const define = defineList

build({
  define,
  entryPoints,
  bundle: true,
  outdir: 'app/assets/builds',
  sourcemap: true,
  loader: {
    '.js':'jsx'
  },
  watch: {
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error)
      else console.log('watch build succeeded:', result)
    },
  },
}).then(result => {
  console.log('watching...');
}).catch(() => process.exit(1));
