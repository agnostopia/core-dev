export default {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"xo/esnext",
		"xo-typescript",
		"plugin:prettier/recommended",
		"prettier/@typescript-eslint",
	],
	rules: {
		"prettier/prettier": "error",
		/* "new-cap": [
			"error",
			{
				newIsCap: true,
				capIsNew: false,
			},
		], */
	},
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
};
