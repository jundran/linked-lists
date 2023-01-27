module.exports = {
	'env': {
		'commonjs': true,
		'es2021': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'keyword-spacing': [
			'error',
			{ 'before': true, 'after': true }
		],
		'func-call-spacing': [
			'error',
			'never'
		],
		'space-before-function-paren': [
			'error',
			'always'
		],
		'no-unused-vars': 'warn'
	}
}
