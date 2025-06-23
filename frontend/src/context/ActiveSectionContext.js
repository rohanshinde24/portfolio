import { createContext, useContext, useState } from 'react';

const ActiveSectionContext = createContext();

export function ActiveSectionProvider({ children }) {
  const [activeId, setActiveId] = useState('home');
  return (
    <ActiveSectionContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}
