export function classname(
  ...args: (
    | number
    | string
    | boolean
    | null
    | undefined
    | (string | number)[]
    | Record<string | number, boolean | number | null | undefined>
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
