export function classname(
  ...args: (
    | MayBe<number | string | boolean>
    | (string | number)[]
    | Record<string | number, MayBe<boolean | number>>
  )[]
): string {
  const classNames: (string | number)[] = []

  for (const arg of args) {
    if (!arg) {
      continue
    }

    if (typeof arg === 'number' || typeof arg === 'string') {
      classNames.push(arg)
    } else if (Array.isArray(arg)) {
      classNames.push(...arg)
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg[key]) {
          classNames.push(key)
        }
      }
    }
  }

  return classNames.join(' ')
}
