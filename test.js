import test from 'ava';
import execa from 'execa';
import isIp from 'is-ip';

test('main', async t => {
	t.true(isIp(await execa.stdout('./cli.js')));
});
