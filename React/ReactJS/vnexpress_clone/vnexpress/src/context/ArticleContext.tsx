import { createContext } from "react";
import ArticlesStore from "../store/ArticlesStore";
import { articles } from "../utils/Articles";

const ArticleContext = createContext({
    articles: new ArticlesStore(articles)
});

export const ArticleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const articlesStore = new ArticlesStore(articles);
    return (
        <ArticleContext.Provider value={{articles: articlesStore}}>
            {children}
        </ArticleContext.Provider>
    )
}

export default ArticleContext;