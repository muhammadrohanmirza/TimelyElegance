export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-05-27'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skXrzJ9FbuQhuuBDBNQpknMrRtO4osb4JKnkkWoG1gP3E4jiEIRqMrPI6bWNSE1ia6yMwRNHD9cbGA363Xv8ATJYKqK0jZVILKSHY45dgatO74DKDqqj54u0bFnF7ZBsgGcKZ11zxyF6bkuoejmZ1hVGX73FAfFzbkaMF7DdBAHRQU8e2tG6",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
