import { useViewportSize } from '@yui/use-viewport-size';

export const App = () => {
  const size = useViewportSize();
  return (
    <div>
      {size.width}px / {size.height}px
    </div>
  );
};

export default App;
