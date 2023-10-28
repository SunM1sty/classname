> An utility for constructing classname string by passing mixed type of arguments.

## Install

```
$ npm i m1sty-classname@latest
```

## Usage

```js
import { classname } from 'm1sty-classname';

classname();
//=> ''

classname('main-cls');
//=> 'main-cls'

classname('foo', 'bar');
//=> 'foo bar'

classname('foo', true && 'bar', 'baz');
//=> 'foo bar baz'

classname('foo', { bar: true });
//=> 'foo bar'

classname({ 'foo-bar': true });
//=> 'foo-bar'

classname({ 'foo-bar': false });
//=> ''

classname({ foo: true, bar: true });
//=> 'foo bar'

classname('main-cls', 4, []);
//=> 'main-cls 4'

classname('foo', { bar: true, duck: false }, 'baz', { quux: true });
//=> 'foo bar baz quux'

classname(null, false, 'bar', undefined, 0, 1, { baz: null }, '');
//=> 'bar 1'

classname(undefined, 4, ['secondary-4', 3, 6]);
//=> '4 secondary-4 3 6'
```


## Code

### classname(...args)
Returns: `string`

The `classname` function can take ***any*** number of arguments, each of which can be an Object, Array, Boolean, or String.

## License

MIT © M1sty