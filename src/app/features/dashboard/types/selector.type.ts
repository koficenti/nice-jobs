export interface SelectorType<T> {
  default: SelectorOptionType<T> | null
  display_value: string
  is_selected_display_value: string | null
  selected: SelectorOptionType<T> | null
  options: SelectorOptionType<T>[]
}

export interface SelectorOptionType<T> {
  value: T
  display_value: string
}
