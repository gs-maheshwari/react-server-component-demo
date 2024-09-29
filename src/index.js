import React, { use } from 'react';
import { createRoot } from 'react-dom/client';
import { createFromFetch } from 'react-server-dom-webpack/client';

const root = createRoot(document.getElementById('root'));
root.render(<Root />);

const cache = new Map();
function Root() {
    let content = cache.get("home");
    if (!content) {
        content = createFromFetch(fetch("/rsc"));
        cache.set("home", content);
    }

    return <>{use(content)}</>
}