
let DATA=null;
const $=s=>document.querySelector(s);
const pages=[...document.querySelectorAll('.page')];
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('nav button').forEach(x=>x.classList.remove('active')); b.classList.add('active');
  pages.forEach(p=>p.classList.toggle('active',p.id===b.dataset.page));
  if(b.dataset.page==='performance') renderPerformance();
});
fetch('data.json').then(r=>r.json()).then(d=>{DATA=d; $('#version').textContent=d.version; renderPredictions(); renderLog(); renderBenchmarks();});
function list(){return DATA[$('#drawType').value].slice(0,+$('#tierSize').value)}
function renderPredictions(){
  if(!DATA)return; const arr=list(); $('#count').textContent=arr.length; $('#topNumber').textContent=arr[0].number;
  $('#predictionList').innerHTML=arr.map(x=>`<div class="number-card"><div class="rank">#${x.rank}</div><div class="number">${x.number}</div><div><div class="reason">${x.reason}</div><small>Score ${x.consensus.toFixed(3)}</small></div><span class="tier tier-${x.tier}">${x.tier}</span></div>`).join('');
}
$('#drawType').onchange=renderPredictions; $('#tierSize').onchange=renderPredictions;
const today=new Date().toISOString().slice(0,10); $('#resultDate').value=today;
function getLog(){return JSON.parse(localStorage.getItem('lreResults')||'[]')}
function saveLog(x){const a=getLog();a.unshift(x);localStorage.setItem('lreResults',JSON.stringify(a));}
$('#resultForm').onsubmit=e=>{
  e.preventDefault(); if(!DATA)return;
  const draw=$('#resultDraw').value, num=$('#winningNumber').value.padStart(3,'0');
  if(!/^\d{3}$/.test(num)){alert('اكتب الرقم بثلاث خانات');return}
  const rank=DATA[draw].findIndex(x=>x.number===num)+1;
  const item={date:$('#resultDate').value,draw,number:num,rank,top50:rank>0&&rank<=50,top100:rank>0&&rank<=100,top150:rank>0&&rank<=150};
  saveLog(item); $('#lastEvaluation').classList.remove('hidden');
  $('#lastEvaluation').innerHTML=`<h2>النتيجة</h2><p>الرقم <b>${num}</b> ترتيبه <b>${rank||'غير موجود'}</b></p><p>Top 50: ${item.top50?'✅':'❌'} | Top 100: ${item.top100?'✅':'❌'} | Top 150: ${item.top150?'✅':'❌'}</p>`;
  $('#winningNumber').value=''; renderLog(); renderPerformance();
}
function renderLog(){
 const a=getLog(); $('#resultsLog').innerHTML=a.length?a.map(x=>`<div class="log-row"><span>${x.date} ${x.draw}</span><b>${x.number}</b><span>#${x.rank||'—'}</span><span class="${x.top150?'hit':'miss'}">${x.top150?'Top150':'Miss'}</span></div>`).join(''):'لا توجد نتائج مسجلة بعد.';
}
function renderPerformance(){
 const a=getLog(), n=a.length; $('#totalResults').textContent=n;
 const pct=k=>n?(100*a.filter(x=>x[k]).length/n).toFixed(1)+'%':'—';
 $('#perf50').textContent=pct('top50'); $('#perf100').textContent=pct('top100'); $('#perf150').textContent=pct('top150');
}
function renderBenchmarks(){
 if(!DATA)return; const b=DATA.historicalBenchmarks;
 $('#benchmarks').innerHTML=['top50','top100','top150'].map(k=>`<div class="bar-row"><span>${k.toUpperCase()}</span><div class="bar"><i style="width:${100*b.midday[k]*4}%"></i></div><b>${(100*b.midday[k]).toFixed(1)}%</b></div>`).join('');
}
let deferredPrompt; window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').hidden=false});
$('#installBtn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').hidden=true}};
