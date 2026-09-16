import {Routes,Route} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Landing from "./pages/Landing";
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import InfoPage from "./pages/InfoPage";

export default function App(){
 return <AnimatePresence mode="wait"><Routes>
  <Route path="/" element={<Landing/>}/>
  <Route path="/test" element={<TestPage/>}/>
  <Route path="/result" element={<ResultPage/>}/>
  <Route path="/info" element={<InfoPage/>}/>
 </Routes></AnimatePresence>
}