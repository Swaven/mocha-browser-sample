suite('coin', () => {
  let sut = new Myclass()
  test('foo', () => {
    assert.equal(sut.foo(2), 4)
  })

  test('promise resolve', () => {
    assert.isFulfilled(sut.prom('pouet'))
  })

  test('promise resolve', () => {
    assert.isRejected(sut.prom('coin'))
  })
})