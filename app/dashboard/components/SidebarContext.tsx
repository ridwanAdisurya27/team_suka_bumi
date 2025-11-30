import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  isTextVisible: boolean;
  setIsTextVisible: (visible: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isTextVisible, setIsTextVisible] = useState(true);

  return (
    <SidebarContext.Provider value={{ isTextVisible, setIsTextVisible }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
