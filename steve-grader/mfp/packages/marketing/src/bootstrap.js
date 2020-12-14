import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (element, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>,
    element)

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
};

if (process.env.NODE_ENV === 'development') {
  const element = document.getElementById('_marketing-dev-root');
  if (element) {
    mount(element, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };