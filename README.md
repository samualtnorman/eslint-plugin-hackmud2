# @samual/eslint-plugin-hackmud2

Linting rules for hackmud scripts.

This is a fork of [vacoon/bosconian-dynamics/Aniketos](https://github.com/bosconian-dynamics)'s package [of the same name](https://github.com/bosconian-dynamics/eslint-plugin-hackmud) that enables checking of [TypeScript](https://www.typescriptlang.org/) files.

## Features

 - Permits and validates code enclosure in single top-level anonymous function
 - Permits subscript syntax `#fs.user.script()`, `#4s.user.script()`
 - Limited validation of subscript syntax
 - Permits `#db` calls
 - Defines hackmud globals `_START`, `_TIMEOUT`, `_ST`, `_TO`, `_END`
 - Permits `#D`, `#G`, and `#FMCL` preprocessor directives

This plugin is somewhat hackish, at the moment - the largest caveat is that linted scripts should not contain `$S_`, `$DB_`, `$G`, `$D`, or `$FMCL`.

## Installation

1. Make sure you have [Node.js](https://nodejs.org/) installed.
1. Open a terminal and `cd` to the folder containing your scripts.
1. Run `npm install -D eslint @samual/eslint-plugin-hackmud2`.
1. Create `.eslintrc.json` in that folder and dump the following into it:
	```js
	{
		"plugins": [ "@samual/eslint-plugin-hackmud2" ],
		"extends": "plugin:@samual/eslint-plugin-hackmud2/recommended"
	}
	```

<br>

You can [find out](https://eslint.org/docs/user-guide/integrations) how to configure your editor to recognise eslint. Then when you open that folder in your editor, you'll have linting.

If you don't actually want editor integration, you can just run `npx eslint path/to/script.js` every time you want to lint a script (must be run from the folder with `.eslintrc.json`).
