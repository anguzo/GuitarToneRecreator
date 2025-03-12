import { createFileRoute } from '@tanstack/react-router'
import { useReadRootGetSuspense, getReadRootGetSuspenseQueryOptions } from "app/api//backend/backend"
import { Suspense } from 'react'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(getReadRootGetSuspenseQueryOptions())
  },
})

function RouteComponent() {

  return (
    <main className="text-center p-4 mx-auto">
      <h1>About</h1>
      <Suspense fallback="Loading deferred query...">
        <DeferredQuery />
      </Suspense>
    </main>
  )
}

function DeferredQuery() {
  const { data } = useReadRootGetSuspense()
  return <div>{JSON.stringify(data)}</div>
}