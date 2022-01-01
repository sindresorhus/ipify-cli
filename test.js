import test from 'ava';
import {execa} from 'execa';
import isIp from 'is-ip';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['--endpoint', 'https://api.ipify.org']);
	t.true(isIp(stdout));
});
