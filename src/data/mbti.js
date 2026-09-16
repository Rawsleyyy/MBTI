export const types=[
"INTJ","INTP","ENTJ","ENTP","INFJ","INFP","ENFJ","ENFP",
"ISTJ","ISFJ","ESTJ","ESFJ","ISTP","ISFP","ESTP","ESFP"
].map((name,i)=>({
 name,color:["#7c3aed","#2563eb","#ef4444","#f59e0b"][i%4],
 description:"Profil "+name+" yang memiliki karakter unik dan menarik.",
 strengths:["Analitis","Kreatif","Adaptif"],
 weaknesses:["Perfeksionis","Mudah bosan"],
 careers:["Developer","Designer","Consultant"],
 communication:"Komunikasi yang sesuai dengan gaya "+name
}));

export const questions=[
["Saya mendapatkan energi dari interaksi sosial","E"],
["Saya menikmati waktu sendiri untuk mengisi energi","I"],
["Saya lebih percaya fakta dibanding intuisi","S"],
["Saya sering melihat kemungkinan masa depan","N"],
["Saya mengambil keputusan berdasarkan logika","T"],
["Saya mempertimbangkan perasaan orang lain","F"],
["Saya suka membuat rencana terstruktur","J"],
["Saya nyaman dengan spontanitas","P"]
].concat(Array.from({length:12},(_,i)=>[
"Pertanyaan tambahan ke-"+(i+1),
["E","I","S","N","T","F","J","P"][i%8]
]));