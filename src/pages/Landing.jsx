import {motion} from "framer-motion";
import Button from "../components/Button";

export default function Landing(){
return <motion.main initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-indigo-50 via-white to-teal-50">
<div className="card max-w-5xl w-full p-10 md:p-16 text-center">
<div className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold mb-6">
PersonaMind AI Assessment
</div>
<h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
Kenali Dirimu Melalui Tes MBTI Modern
</h1>
<p className="text-gray-500 text-lg mt-6 max-w-2xl mx-auto">
Temukan pola berpikir, cara mengambil keputusan, kekuatan dan gaya komunikasi berdasarkan tipe kepribadianmu.
</p>
<div className="mt-10">
<a href="/test"><Button>Mulai Tes Sekarang</Button></a>
</div>
<div className="grid md:grid-cols-4 gap-4 mt-12 text-left">
{["Analyst","Diplomat","Sentinel","Explorer"].map(x=>
<div className="p-5 rounded-2xl bg-gray-50" key={x}>
<h3 className="font-bold">{x}</h3><p className="text-sm text-gray-500">Kategori kepribadian</p>
</div>)}
</div>
</div></motion.main>
}