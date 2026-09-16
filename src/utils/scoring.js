export function calculateMBTI(answers,questions){
 const score={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
 questions.forEach((q,i)=>{
  const v=answers[i]||3;
  score[q[1]]+=v;
 });
 return [
 score.E>=score.I?"E":"I",
 score.S>=score.N?"S":"N",
 score.T>=score.F?"T":"F",
 score.J>=score.P?"J":"P"
 ].join("");
}