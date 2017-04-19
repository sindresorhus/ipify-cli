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
	  82.142.31.236
	  $ ipify --endpoint=https://ipify.mycompany.com
	  82.142.31.236
`);

ipify(cli.flags.endpoint).then(console.log);
