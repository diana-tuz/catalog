const BASE_URL = './api'

export function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export async function getData<T>(url: string): Promise<T> {
  await wait(200)

  const response = await fetch(BASE_URL + url)

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`)
  }

  return response.json() as T
}
