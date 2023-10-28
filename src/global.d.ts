type Nullable<T> = T | null
type Optional<T> = T | undefined
type MayBe<T> = T | Nullable<T> | Optional<T>
