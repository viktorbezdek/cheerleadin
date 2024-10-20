declare module "google-trends-api" {
  export function realTimeTrends(options: { geo: string; category: string }): Promise<string>
}

declare module "ramda" {
  export function head<T>(list: readonly T[]): T | undefined
  export function isEmpty(value: any): boolean
  export function map<T, U>(fn: (x: T) => U, list: T[]): U[]
  export function path<T>(path: string[], obj: any): T
  export function pipe(...fns: Function[]): Function
  export function prop<T>(prop: string, obj: any): T
}

// Ignore the conflicting fetch declarations
declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Window {
    fetch: unknown
  }
}

export {}
