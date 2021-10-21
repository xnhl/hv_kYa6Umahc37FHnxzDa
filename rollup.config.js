import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import css from 'rollup-plugin-css-only'
import { sass } from 'svelte-preprocess-sass'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import dotenv from 'dotenv'
dotenv.config()
const production = !process.env.ROLLUP_WATCH
function serve() {
	let server
	function toExit() { if (server) server.kill(0) }
	return {
		writeBundle() {
			if (server) return
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			})
			process.on('SIGTERM', toExit)
			process.on('exit', toExit)
		}
	}
}
export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js"
  },
  plugins: [
		replace({
			mikey: JSON.stringify(process.env.mikey),
			miceykrit: JSON.stringify(process.env.miceykrit),
			preventAssignment: true
		}),
    svelte({
      compilerOptions: { dev: !production },
      preprocess: {
        style: sass({ includePaths: ["src"] }),
        postcss: { plugins: [require("autoprefixer")] }
      }
    }),
		css({ output: "bundle.css" }),
    resolve({
      browser: true,
      dedupe: ["svelte"]
    }),
		commonjs(),
		babel({
			extensions: [".js", ".mjs", ".html", ".svelte"],
			babelHelpers: "runtime",
			exclude: ["node_modules/@babel/**"],
			presets: [[
					"@babel/preset-env",
					{ targets: "> 0.25%, not dead" }]],
			plugins: [
				"@babel/plugin-syntax-dynamic-import", [
					"@babel/plugin-transform-runtime",
					{ useESModules: true }]]
		}),
    !production && serve(),
    !production && livereload("public"),
    production && terser()
  ],
  watch: { clearScreen: false }
}
