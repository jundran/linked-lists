module.exports = {
	'env': {
		'node': true,
		'commonjs': true
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
		'eol-last': [
			'error',
			'always'
		],
		'comma-dangle':
		[
			'error',
			'never'
		],
		'no-trailing-spaces': 'error',
		'no-unused-vars': 'warn'
	}
}
