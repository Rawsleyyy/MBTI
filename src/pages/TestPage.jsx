import {useState} from "react";
import {questions} from "../data/mbti";
import {useTest} from "../context/TestContext";
import Button from "../components/Button";

export default function TestPage(){
const {answers,setAnswers}=useTest();
const [i,setI]=useState(0);
const progress=((i+1)/questions.length)*100;
function pick(v){setAnswers({...answers,[i]:v})}
return <main className="min-h-screen p-6 md:p-12 bg-gradient-to-br from-slate-50 to-indigo-50">
<div className="max-w-3xl mx-auto card p-8 md:p-12">
<div className="flex justify-between mb-4">
<span className="font-bold">PersonaMind Test</span>
<span>{i+1}/{questions.length}</span>
</div>
<div className="h-3 rounded-full bg-gray-200 overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-500 to-teal-400" style={{width:`${progress}%`}}/>
</div>
<h2 className="text-2xl md:text-3xl font-bold mt-10 mb-8">{questions[i][0]}</h2>
<div className="grid grid-cols-5 gap-3">
{[1,2,3,4,5].map(v=><button key={v} onClick={()=>pick(v)}
className={`rounded-2xl py-4 font-bold transition ${answers[i]===v?"bg-indigo-600 text-white":"bg-gray-100 hover:bg-indigo-100"}`}>
{v}</button>)}
</div>
<div className="flex justify-between mt-10">
<Button onClick={()=>setI(Math.max(0,i-1))}>Sebelumnya</Button>
<Button onClick={()=>i===questions.length-1?location.href="/result":setI(i+1)}>Lanjut</Button>
</div>
</div></main>
}