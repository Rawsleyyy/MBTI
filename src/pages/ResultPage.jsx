import {calculateMBTI} from "../utils/scoring";
import {useTest} from "../context/TestContext";
import {questions,types} from "../data/mbti";

export default function ResultPage(){
const {answers}=useTest();
let t=calculateMBTI(answers,questions);
let p=types.find(x=>x.name===t);
return <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-indigo-50 to-teal-50">
<div className="card max-w-3xl w-full p-12 text-center">
<p className="text-gray-500 font-semibold">HASIL KEPRIBADIAN</p>
<h1 className="text-7xl font-extrabold text-indigo-600 mt-4">{t}</h1>
<p className="text-xl font-bold mt-4">{p?.title}</p>
<p className="text-gray-500 mt-6">{p?.description}</p>
<a href="/" className="inline-block mt-8"><button className="px-8 py-3 rounded-xl bg-indigo-600 text-white">Kembali</button></a>
</div></main>
}