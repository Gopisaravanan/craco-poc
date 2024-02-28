import React from "react";

const App = () => {
  return (
    <>
      <header style={styles.header}>
        <div style={styles.content}>Hello from micro-1</div>
      </header>
    </>
  );
};

const styles = {
  header: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  content: {
    fontSize: "24px",
    fontWeight: "bold",
  },
};

export default App;
