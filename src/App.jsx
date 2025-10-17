import { useEffect, useState } from "react";
const App = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      {alert && <Message />}
      <button onClick={() => setAlert(!alert)}>Toggle</button>
    </div>
  );
};

function Message() {
  useEffect(() => {
    const clearId = setInterval(() => {
      console.log("useEffect");
    }, 1000);
    return () => {
      clearInterval(clearId);
    };
  }, []);
  return <h2>Message...</h2>;
}
export default App;
