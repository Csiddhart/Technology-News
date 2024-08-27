import { createContext, useState } from "react";

export const AppContext=createContext();

export default function AppContextProvider({children}){
    const [articles,setArticles]=useState([]);

    const val={
        articles,
        setArticles,
        news
    }

    async function news() {
        const url=`https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json`;
        try{
            const res =await fetch(url);
            const output=await res.json();
            console.log(output);
            setArticles(output.articles);
        }catch(err){
            console.log("there is a error",err); 
            setArticles([])
        }

    }

    return <AppContext.Provider value={val}>
        {children}
    </AppContext.Provider>
}