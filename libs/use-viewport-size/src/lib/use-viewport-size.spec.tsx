import { act } from '@testing-library/react';
import { useViewportSize } from './use-viewport-size';

import { createRoot } from 'react-dom/client';

describe('UseViewportSize', () => {
  it('should render successfully', () => {
    // Setup
    let container: HTMLDivElement | null = document.createElement('div');
    document.body.appendChild(container);

    const App = () => {
      const size = useViewportSize();
      return <div>{JSON.stringify(size)}</div>;
    };

    act(() => {
      if (container) {
        const root = createRoot(container);
        root.render(<App />);
      }
    });

    expect(container.textContent).toEqual('{"width":1024,"height":768}');

    // Teardown
    document.body.removeChild(container);
    container = null;
  });
});
