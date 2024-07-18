import React, { createContext, useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// Contexto para preferências do usuário
const UserPreferencesContext = createContext();

const UserPreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    language: 'pt',
    theme: 'light'
  });

  const updatePreferences = (newPreferences) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      ...newPreferences
    }));
  };

  return (
    <UserPreferencesContext.Provider value={{ preferences, updatePreferences }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

const useUserPreferences = () => useContext(UserPreferencesContext);

// Componente de Formulário para Preferências
const PreferencesForm = () => {
  const { preferences, updatePreferences } = useUserPreferences();

  const handleLanguageChange = (event) => {
    updatePreferences({ language: event.target.value });
  };

  const handleThemeChange = (event) => {
    updatePreferences({ theme: event.target.value });
  };

  return (
    <div>
      <h2>User Preferences</h2>
      <form>
        <label>
          Language:
          <select value={preferences.language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="pt">Portuguese</option>
            <option value="es">Spanish</option>
          </select>
        </label>
        <br />
        <label>
          Theme:
          <select value={preferences.theme} onChange={handleThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </form>
    </div>
  );
};

// Componente que aplica o tema
const ThemedComponent = () => {
  const { preferences } = useUserPreferences();

  useEffect(() => {
    document.body.className = preferences.theme;
  }, [preferences.theme]);

  return (
    <div>
      <h1>Current Theme: {preferences.theme}</h1>
      <h1>Current Language: {preferences.language}</h1>
    </div>
  );
};

// Componente Principal do App
const App = () => {
  return (
    <UserPreferencesProvider>
      <div>
        <PreferencesForm />
        <ThemedComponent />
      </div>
    </UserPreferencesProvider>
  );
};

// Renderização do App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Estilos para os temas
// styles.css
/*
body.light {
  background-color: white;
  color: black;
}

body.dark {
  background-color: black;
  color: white;
}
*/
