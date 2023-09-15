import ReactDOMServer from 'react-dom/server';
import { App } from './App';

export const SSRRender = () => ReactDOMServer.renderToString(<App />);
