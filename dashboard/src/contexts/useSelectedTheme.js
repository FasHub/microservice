import { createContext, useContext } from "react";

export const ThemeProvider = createContext({
  selectedTheme: null,
  setSelectedTheme: () => { }
});

export const SideBarProvider = ThemeProvider.Provider;

export default function useSideBar () { 
  return useContext(ThemeProvider);
}