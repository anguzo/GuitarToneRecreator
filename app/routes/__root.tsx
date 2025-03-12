import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext
} from '@tanstack/react-router'
import appCss from '~/styles/app.css?url'
import * as React from 'react'
import { Logo } from '~/components/Logo'
import type { QueryClient } from '@tanstack/react-query'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="public/G_optim.svg" />

        <HeadContent />
      </head>
      <body>
        <div className="bg-base-100 shadow sticky top-0 z-50 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="navbar min-h-20">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-square btn-ghost mx-2 sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 shadow space-y-4 p-4">
                    <li>
                      <a className="text-white text-sm" href="/#">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-sm" href="/#features">
                        Features
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-sm" href="/#integrations">
                        Integrations
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-sm" href="/#team">
                        Team
                      </a>
                    </li>
                    <li>
                      <a className="text-white text-sm" href="/#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <Link to="/" className="btn btn-ghost h-16">
                  <Logo />
                </Link>
              </div>
              <div className="navbar-center hidden sm:flex justify-center">
                <ul className="menu menu-horizontal max-h-12">
                  <li>
                    <a className="text-white text-sm" href="/#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-sm" href="/#features">
                      Features
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-sm" href="/#integrations">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-sm" href="/#team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-sm" href="/#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navbar-end">
                <a className="btn btn-ghost" href="/#contact">Join Waitlist</a>
              </div>
            </div>
          </div>
        </div>


        {/* <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <div className="navbar bg-base-100 w-full sticky top-0 z-50 max-w-6xl mx-auto">
              <div className="navbar-start ">
                <div className='dropdown'>
                  <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost mx-2 flex sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </label>
                </div>


                <Link className="btn btn-ghost text-2xl font-bold" to="/">
                  Kitarr
                </Link>
              </div>

              <div className="navbar-center  hidden flex-none sm:block ">
                <ul className="menu menu-horizontal">
                  <li>
                    <Link className="text-white" to="/">
                      Who We Are?
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-white" to="/howitworks">
                      How It Works?
                    </Link></li>
                  <li>
                    <Link className=" text-white" to="/whatsnext">
                      What's Next?
                    </Link></li>
                </ul>
              </div>
              <div className="navbar-end ">
                <a className="btn">Join Waitlist</a>
              </div>
            </div>
            {children}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>


            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              <li>
                <Link className="text-white text-2xl font-bold" to="/">
                  Kitarr
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/">
                  Who We Are?
                </Link>
              </li>
              <li>
                <Link className=" text-white" to="/howitworks">
                  How It Works?
                </Link></li>
              <li>
                <Link className=" text-white" to="/whatsnext">
                  What's Next?
                </Link></li>
            </ul>
          </div>
        </div> */}

        {children}

        <div className="text-center text-sm p-4 bg-base-100 max-h-14">
          <p>© {new Date().getFullYear()} Noise Machine OÜ. All rights reserved.</p>
        </div>
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
        {/* <ReactQueryDevtools buttonPosition="bottom-left" /> */}
        <Scripts />

      </body>
    </html>
  )
}
