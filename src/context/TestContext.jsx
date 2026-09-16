import {createContext,useContext,useState} from "react";
const C=createContext();
export function TestProvider({children}){
 const [answers,setAnswers]=useState({});
 return <C.Provider value={{answers,setAnswers}}>{children}</C.Provider>
}
export const useTest=()=>useContext(C);