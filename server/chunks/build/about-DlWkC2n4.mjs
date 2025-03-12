import { jsxs, jsx } from 'react/jsx-runtime';
import { w as wt } from '../_/nitro.mjs';
import { Suspense } from 'react';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import 'node:fs';
import '@tanstack/react-router';
import 'tiny-invariant';
import 'node:async_hooks';
import '@tanstack/router-core';
import '@tanstack/react-query';
import '@tanstack/react-router-with-query';
import 'axios';
import '@tanstack/history';
import 'tiny-warning';
import 'jsesc';
import 'node:stream';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';
import 'node:path';
import 'node:crypto';

function m() {
  const { data: o } = wt();
  return jsx("div", { children: JSON.stringify(o) });
}
const k = function() {
  return jsxs("main", { className: "text-center p-4 mx-auto", children: [jsx("h1", { children: "About" }), jsx(Suspense, { fallback: "Loading deferred query...", children: jsx(m, {}) })] });
};

export { k as component };
//# sourceMappingURL=about-DlWkC2n4.mjs.map
