import './App.scss';
import {ErrorBoundary} from "react-error-boundary";

function App() {
  return (
      <ErrorBoundary  fallback={<div>Something went wrong</div>}>
        <div className="App">
            <div>🌤️</div>
            <div className="verticalLine"></div>
            <div className="info">
                <div>-10&deg;C</div>
                <div>Екатеринбург</div>
            </div>
        </div>
      </ErrorBoundary>
  );
}

export default App;
