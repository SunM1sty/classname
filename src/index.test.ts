import { classname } from './index'

describe('classname', () => {
  test('Correct classname: no args ', () => {
    expect(classname()).toBe('')
  })

  test('Correct classname: string', () => {
    expect(classname('main-cls')).toBe('main-cls')
  })

  test('Correct classname: two strings', () => {
    expect(classname('foo', 'bar')).toBe('foo bar')
  })

  test('Correct classname: two strings', () => {
    expect(classname('foo', true && 'bar', 'baz')).toBe('foo bar baz')
  })

  test('Correct classname: string and truthy object', () => {
    expect(classname('foo', { bar: true })).toBe('foo bar')
  })

  test('Correct classname: truthy object', () => {
    expect(classname({ 'foo-bar': true })).toBe('foo-bar')
  })

  test('Correct classname: falsy object', () => {
    expect(classname({ 'foo-bar': false })).toBe('')
  })

  test('Correct classname: two truthy objects', () => {
    expect(classname({ foo: true }, { bar: true })).toBe('foo bar')
  })

  test('Correct classname: truthy object with two properties', () => {
    expect(classname({ foo: true, bar: true })).toBe('foo bar')
  })

  test('Correct classname: string and number with empty array', () => {
    expect(classname('main-cls', 4, [])).toBe('main-cls 4')
  })

  test('Correct classname: strings and objects', () => {
    expect(classname('foo', { bar: true, duck: false }, 'baz', { quux: true })).toBe(
      'foo bar baz quux'
    )
  })

  test('Correct classname: lots of arguments of various types', () => {
    expect(classname('foo', { bar: true, duck: false }, 'baz', { quux: true })).toBe(
      'foo bar baz quux'
    )
  })

  test('Correct classname: other falsy values are just ignored', () => {
    expect(classname(null, false, 'bar', undefined, 0, 1, { baz: null }, '')).toBe('bar 1')
  })

  test('Correct classname: string and number with various types array', () => {
    expect(classname(undefined, 4, ['secondary-4', 3, 6])).toBe('4 secondary-4 3 6')
  })
})
