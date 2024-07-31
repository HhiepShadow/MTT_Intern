import { createContext } from "react";
import QAsStore from "../store/QAsStore";
import { QAs } from "../utils/QAs";

const QAContext = createContext({
    qas: new QAsStore(QAs)
});

export const QAProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const qasStore = new QAsStore(QAs);
    return (
        <QAContext.Provider value={{qas: qasStore}}>
            {children}
        </QAContext.Provider>
    )
}

export default QAContext;