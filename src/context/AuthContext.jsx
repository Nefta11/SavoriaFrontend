import { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // For demo purposes, we're just storing the user in state
  // In a real app, you would use proper authentication
  const login = (email, password) => {
    // Simulate authentication
    if (email && password) {
      setUser({ email });
      return true;
    }
    return false;
  };

  const register = (email, password, name) => {
    // Simulate registration
    if (email && password && name) {
      setUser({ email, name });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);