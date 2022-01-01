#!/usr/bin/env node
import meow from 'meow';
import ipify from 'ipify';

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
	importMeta: import.meta,
	flags: {
		endpoint: {
			type: 'string',
		},
	},
});

const options = {};

if (cli.flags.endpoint) {
	options.endpoint = cli.flags.endpoint;
}

console.log(await ipify(options));
