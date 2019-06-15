#!/usr/bin/env node
'use strict';
const meow = require('meow');
const ipify = require('ipify');

const cli = meow(`
	Usage
	  $ ipify

	Options
	  --endpoint  Custom API endpoint

	Examples
	  $ ipify
	  2001:0db8:85a3:0000:0000:8a2e:0370:7334
	  $ ipify --endpoint=https://ipify.mycompany.com
	  2001:0db8:85a3:0000:0000:8a2e:0370:7334
`, {
	flags: {
		endpoint: {
			type: 'boolean'
		}
	}
});

const options = {};

if (cli.flags.endpoint) {
	options.endpoint = cli.flags.endpoint;
}

(async () => {
	console.log(await ipify(options));
})();
