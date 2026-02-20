import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";

// --- TEMPORARY LOCK SCREEN TO REVERT LATER ---
function TemporaryLock({ children }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("giget_unlocked") === "true") {
      setIsUnlocked(true);
    }
  }, []);

  if (isUnlocked) {
    return children;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "test-giget-publique") {
      localStorage.setItem("giget_unlocked", "true");
      setIsUnlocked(true);
    } else {
      setError(true);
      setInputValue("");
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f0f2f5', fontFamily: 'Manrope, sans-serif' }}>
      <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center', maxWidth: '400px', width: '90%' }}>
        <h2 style={{ marginBottom: '1rem', color: '#ff0000ff', fontWeight: 'bold', fontSize: '2rem' }}>Accès Restreint</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="password"
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value); setError(false); }}
            placeholder="Code d'accès"
            style={{ padding: '0.75rem', borderRadius: '4px', border: error ? '1px solid red' : '1px solid #ccc', fontSize: '1rem' }}
          />
          {error && <span style={{ color: 'red', fontSize: '0.875rem' }}>Code incorrect</span>}
          <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#0056b3', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1rem', cursor: 'pointer', fontWeight: 'bold' }}>
            Valider
          </button>
        </form>
      </div>
    </div>
  );
}
// ---------------------------------------------

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TemporaryLock>
      <RouterProvider router={router} />
    </TemporaryLock>
  </StrictMode>
);
