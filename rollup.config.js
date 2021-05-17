import pkg from './package.json';
import { terser } from "rollup-plugin-terser";

export default [
	{
		input: 'src/index.js',
		output: [
      { name: 'simplyWorker', file: pkg.browser, format: 'umd' },
      { name: 'simplyWorker', file: pkg.browser.replace('.js', '.min.js'), format: 'umd', plugins: [terser()] },
			{ file: pkg.main, format: 'cjs', exports: 'default' },
      { file: pkg.main.replace('.js', '.min.js'), format: 'cjs', exports: 'default', plugins: [terser()] },
			{ file: pkg.module, format: 'es' },
			{ file: pkg.module.replace('.js', '.min.js'), format: 'es', plugins: [terser()] }
		]
	}
];