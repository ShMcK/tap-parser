module.exports =
[ [ 'comment', '# TAP emitted by Test::More 0.98\n' ],
  [ 'assert', { ok: true, id: 1, name: 'should be equal' } ],
  [ 'comment', '# boop\n' ],
  [ 'assert',
    { ok: false,
      id: 2,
      todo: 'but we will fix it later',
      name: 'should be equivalent' } ],
  [ 'assert', { ok: true, id: 3, name: 'should be equal' } ],
  [ 'assert', { ok: true, id: 4, name: '(unnamed assert)' } ],
  [ 'plan', { start: 1, end: 4 } ],
  [ 'comment', '# Looks like you failed 1 test of 4.\n' ],
  [ 'complete',
    { ok: true,
      count: 4,
      pass: 3,
      fail: 1,
      todo: 1,
      plan: { start: 1, end: 4 } } ] ]
