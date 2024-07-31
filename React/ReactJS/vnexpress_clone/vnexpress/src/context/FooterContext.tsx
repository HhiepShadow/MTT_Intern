import { createContext } from "react";
import FooterStore from "../store/FooterStore";
import { footerItems } from "../store/FooterItems";


export const FooterContext = createContext({
  footerItems: new FooterStore(footerItems),
});

export const FooterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const footerStore = new FooterStore(footerItems);

    return (
        <FooterContext.Provider value={{footerItems: footerStore}}>
           {children}
        </FooterContext.Provider>
    )
}
