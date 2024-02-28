import React, { Suspense, lazy } from "react";

// Import lazy-loaded component
const App1 = lazy(() => import('app1/App1'))

const App = () => {
  return (
    <>
      <div style={styles.container}>Main Craco App</div>
      <Suspense fallback={<div>Loading...</div>}>
        <App1 />
      </Suspense>
    </>
  );
};

const styles = {
  container: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "20px",
  },
};

export default App;
