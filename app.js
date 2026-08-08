
let DATA=null;
const $=s=>document.querySelector(s);
const STORAGE={lang:'lreLang',results:'lreResultsFinal',snapshots:'lreSnapshotsFinal',active:'lreActiveSnapshot',window:'lreBehaviorWindow',backtestModel:'lreBacktestModel'};
const T={
 ar:{
 subtitle:'محرك أبحاث اليانصيب',install:'تثبيت',predictions:'التوقعات',entry:'إدخال نتيجة',history:'السجل',performance:'الأداء',
 activeSnapshot:'القائمة النشطة',experimental:'تجريبي',drawType:'الفترة',listSize:'عدد النتائج',listSizeHint:'اكتب أي عدد من 1 إلى 1000',searchLabel:'ابحث عن رقم',colorGuide:'دليل قوة التوقع',strongest:'الأقوى',strong:'قوي',medium:'أقل',weakest:'الأضعف',
 searchButton:'بحث',clearButton:'مسح',version:'الإصدار',numberCount:'عدد الأرقام',dailyChange:'تغير القائمة',
 researchWarning:'التحديث اليومي تجريبي لأغراض البحث والتسجيل، ولم يثبت تفوقه على العشوائي.',
 dailyEntry:'إدخال نتيجة السحب',date:'التاريخ',winningNumber:'الرقم الفائز',saveGenerate:'حفظ وإنشاء توقع السحب التالي',
 snapshotHistory:'سجل القوائم',resultsLog:'سجل النتائج',totalResults:'إجمالي النتائج',dailyChangeDetails:'آخر تغير في القائمة',
 performanceDisclaimer:'هذه النسب تقيس نتائجك المسجلة فقط، ولا تعني ضمانًا أو أفضلية مستقبلية.',
 invalidNumber:'اكتب رقمًا من ثلاث خانات',found:'موجود في القائمة',notFound:'غير موجود في القائمة الحالية',rank:'الترتيب',
 tier:'الفئة',score:'الدرجة',noResults:'لا توجد نتائج مسجلة بعد.',noSnapshots:'لا توجد قوائم محفوظة بعد.',
 confirmTitle:'هل أنت متأكد أنك تريد حفظ نتيجة هذا السحب؟',drawPeriod:'فترة السحب',duplicate:'تنبيه: توجد نتيجة محفوظة بالفعل لنفس التاريخ والفترة.',
 saved:'تم حفظ النتيجة',nextCreated:'تم إنشاء قائمة تجريبية للسحب التالي',top:'Top',miss:'خارج Top 150',
 kept:'بقي',entered:'دخل',exited:'خرج',avgMove:'متوسط الحركة',view:'عرض',base:'القائمة الأساسية',
 midday:'Midday',evening:'Evening',loadError:'تعذر تحميل بيانات التطبيق',behaviorWindow:'نافذة مراقبة السلوك',behaviorHint:'آخر 3 سنوات تحصل على وزن إضافي',behaviorRecords:'سجلات نافذة السلوك',longTerm:'سلوك طويل',recentTrend:'اتجاه حديث',backtest:'اختبار تاريخي',historicalBacktest:'الاختبار التاريخي',backtestExplain:'اختبار مقفول: كل يوم تم تقييمه باستخدام المعلومات المتاحة قبله فقط.',testMonth:'الشهر',backtestModel:'النموذج',testTop:'حد Top للاختبار',testedDraws:'السحوبات المختبرة',hits:'الإصابات',hitRate:'نسبة الإصابة',randomBaseline:'الخط العشوائي',averageRank:'متوسط الترتيب',result:'النتيجة',sourceMonth:'حركة آخر ظهور',sourceMonthTitle:'حركة شهر آخر ظهور',sourceMonthExplain:'يراقب من أي سنة/شهر جاء آخر ظهور سابق للأرقام الفائزة، ومتى تعود نفس المنطقة للظهور.',sourceWeight:'وزن عامل الشهر',avgReturn:'متوسط العودة',medianReturn:'وسيط العودة',recentShare:'حصة أحدث 25%',oldShare:'حصة أقدم 25%',cooldownLogic:'منطق الاستبعاد المؤقت',yearByYear:'2020–2025 سنة بسنة',year:'السنة',smartReduction:'تقليل الأرقام',smartReductionTitle:'التقليل الذكي لعدد الأرقام',smartReductionExplain:'يبحث عن أقل عدد أرقام يعطي أفضل كفاءة تغطية في الاختبار التاريخي المقفول، ويقارنه بالعشوائي.',minimumCoverage:'أقل تغطية مقبولة',recommendedCount:'العدد المقترح',measuredCoverage:'التغطية المقاسة',coverageEfficiency:'كفاءة التغطية',numbersRemoved:'أرقام مستبعدة',applyRecommended:'تطبيق العدد المقترح على التوقعات',cutoffComparison:'مقارنة الحدود',smartReductionInlineExplain:'يحسب عددًا مقترحًا اعتمادًا على الاختبار التاريخي المقفول للفترة المختارة.',enableSmartReduction:'تشغيل'
 },
 en:{
 subtitle:'Lottery Research Engine',install:'Install',predictions:'Predictions',entry:'Enter Result',history:'History',performance:'Performance',
 activeSnapshot:'Active snapshot',experimental:'Experimental',drawType:'Draw',listSize:'Result count',listSizeHint:'Enter any number from 1 to 1000',searchLabel:'Search for a number',colorGuide:'Prediction strength guide',strongest:'Strongest',strong:'Strong',medium:'Lower',weakest:'Weakest',
 searchButton:'Search',clearButton:'Clear',version:'Version',numberCount:'Number count',dailyChange:'List change',
 researchWarning:'The daily update is experimental for research and logging. It has not proven an edge over random.',
 dailyEntry:'Enter draw result',date:'Date',winningNumber:'Winning number',saveGenerate:'Save and create next-draw prediction',
 snapshotHistory:'Snapshot history',resultsLog:'Results log',totalResults:'Total results',dailyChangeDetails:'Latest list change',
 performanceDisclaimer:'These rates measure only your saved results and do not guarantee any future advantage.',
 invalidNumber:'Enter a three-digit number',found:'Found in current list',notFound:'Not found in current list',rank:'Rank',
 tier:'Tier',score:'Score',noResults:'No results recorded yet.',noSnapshots:'No snapshots saved yet.',
 confirmTitle:'Are you sure you want to save this draw result?',drawPeriod:'Draw period',duplicate:'Warning: A result already exists for the same date and draw.',
 saved:'Result saved',nextCreated:'Experimental next-draw list created',top:'Top',miss:'Outside Top 150',
 kept:'kept',entered:'entered',exited:'exited',avgMove:'average movement',view:'View',base:'Base list',
 midday:'Midday',evening:'Evening',loadError:'Could not load app data',behaviorWindow:'Behavior window',behaviorHint:'The latest 3 years receive extra weight',behaviorRecords:'Behavior-window records',longTerm:'Long-term behavior',recentTrend:'Recent trend',backtest:'Backtest',historicalBacktest:'Historical backtest',backtestExplain:'Locked test: each day was evaluated using only information available before that draw.',testMonth:'Month',backtestModel:'Model',testTop:'Top cutoff',testedDraws:'Tested draws',hits:'Hits',hitRate:'Hit rate',randomBaseline:'Random baseline',averageRank:'Average rank',result:'Result',sourceMonth:'Last-appearance movement',sourceMonthTitle:'Previous-appearance month movement',sourceMonthExplain:'Tracks the year/month of the winning number’s prior appearance and how long the same source region takes to return.',sourceWeight:'Month-factor weight',avgReturn:'Average return',medianReturn:'Median return',recentShare:'Newest 25% share',oldShare:'Oldest 25% share',cooldownLogic:'Temporary cooldown logic',yearByYear:'2020–2025 year by year',year:'Year',smartReduction:'Reduce numbers',smartReductionTitle:'Smart candidate reduction',smartReductionExplain:'Finds the smallest list with the best measured locked-backtest coverage efficiency versus random.',minimumCoverage:'Minimum acceptable coverage',recommendedCount:'Recommended count',measuredCoverage:'Measured coverage',coverageEfficiency:'Coverage efficiency',numbersRemoved:'Numbers removed',applyRecommended:'Apply recommended count to predictions',cutoffComparison:'Cutoff comparison',smartReductionInlineExplain:'Calculates a suggested list size from the locked historical backtest for the selected draw.',enableSmartReduction:'Enable'
 }
};
let lang=localStorage.getItem(STORAGE.lang)||'ar';
const t=k=>T[lang][k]||k;

function applyLang(){
 document.documentElement.lang=lang;
 document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 $('#languageSelect').value=lang;
 document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
 document.querySelectorAll('#behaviorWindow option[data-years]').forEach(opt=>{const y=opt.dataset.years;opt.textContent=lang==='ar'?`${y} سنة`:`${y} years`;});
 renderAll();
}
$('#languageSelect').onchange=e=>{lang=e.target.value;localStorage.setItem(STORAGE.lang,lang);applyLang()};

document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{
 document.querySelectorAll('nav button').forEach(x=>x.classList.remove('active'));
 b.classList.add('active');
 document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===b.dataset.page));
 renderAll();
});

function loadJSON(key, fallback){try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch{return fallback}}
function saveJSON(key,val){localStorage.setItem(key,JSON.stringify(val))}
function getResults(){return loadJSON(STORAGE.results,[])}
function getSnapshots(){return loadJSON(STORAGE.snapshots,[])}
function activeId(){return localStorage.getItem(STORAGE.active)}
function setActive(id){localStorage.setItem(STORAGE.active,id)}

async function loadData(){
 try{
  const r=await fetch('./data.json?v=1.10.0',{cache:'no-store'});
  if(!r.ok)throw new Error('HTTP '+r.status);
  DATA=await r.json();
  $('#version').textContent=DATA.version||'LRE';
  initializeSnapshots();
  migrateSnapshotsToFullLists();
  applyLang();
 }catch(e){
  $('#loadError').classList.remove('hidden');
  $('#loadError').textContent=t('loadError')+': '+e.message;
 }
}
function initializeSnapshots(){
 let snaps=getSnapshots();
 if(snaps.length)return;
 const today=new Date().toISOString().slice(0,10);
 ['midday','evening'].forEach(draw=>{
   const base=(DATA[draw]||[]).slice(0,1000).map((x,i)=>({...x,rank:i+1}));
   snaps.push({id:`base-${draw}`,date:today,draw,label:t('base'),numbers:base,change:null,createdAt:new Date().toISOString()});
 });
 saveJSON(STORAGE.snapshots,snaps);
 setActive('base-midday');
}

function migrateSnapshotsToFullLists(){
 const snaps=getSnapshots();
 let changed=false;
 snaps.forEach(s=>{
  if((s.numbers||[]).length>=1000)return;
  const base=DATA[s.draw]||[];
  const existing=new Set((s.numbers||[]).map(x=>x.number));
  const missing=base.filter(x=>!existing.has(x.number));
  s.numbers=[...(s.numbers||[]),...missing].slice(0,1000).map((x,i)=>({...x,rank:i+1}));
  changed=true;
 });
 if(changed)saveJSON(STORAGE.snapshots,snaps);
}
function selectedListSize(){
 const input=$('#tierSize');
 let size=Math.round(Number(input.value)||150);
 size=Math.max(1,Math.min(1000,size));
 input.value=size;
 return size;
}


function selectedBehaviorWindow(){
 const el=$('#behaviorWindow');
 let raw=String(el?.value||localStorage.getItem(STORAGE.window)||'10');
 const allowed=['auto','3','5','7','10','15','20'];
 if(!allowed.includes(raw))raw='10';
 if(el)el.value=raw;
 localStorage.setItem(STORAGE.window,raw);
 if(raw!=='auto')return Number(raw);
 // Auto is conservative: with sparse local history it falls back to 10 years.
 // When enough dated records exist, choose the candidate window with the best
 // leave-one-out mean rank proxy, independently per draw through recordsInWindow().
 return autoBehaviorWindow($('#drawType')?.value||'midday');
}
function autoBehaviorWindow(draw){
 const all=getResults().filter(r=>r.draw===draw).sort((a,b)=>a.date.localeCompare(b.date));
 if(all.length<60)return 10;
 const candidates=[3,5,7,10,15,20];
 const latest=all[all.length-1].date;
 const anchor=new Date(latest+'T12:00:00');
 let best=10,bestScore=-Infinity;
 for(const years of candidates){
   const cutoff=new Date(anchor);cutoff.setFullYear(cutoff.getFullYear()-years);
   const rows=all.filter(r=>new Date(r.date+'T12:00:00')>=cutoff);
   if(rows.length<30)continue;
   // Reward stable coverage but penalize tiny samples.
   const rate=rows.filter(r=>(r.rank||1001)<=150).length/rows.length;
   const score=rate-0.5/Math.sqrt(rows.length);
   if(score>bestScore){bestScore=score;best=years}
 }
 return best;
}
function recordsInWindow(draw,anchorDate){
 const years=selectedBehaviorWindow();
 const anchor=new Date((anchorDate||new Date().toISOString().slice(0,10))+'T12:00:00');
 const cutoff=new Date(anchor);cutoff.setFullYear(cutoff.getFullYear()-years);
 return getResults().filter(r=>r.draw===draw&&new Date(r.date+'T12:00:00')>=cutoff&&new Date(r.date+'T12:00:00')<anchor);
}
function behavioralScore(number,records,anchorDate){
 if(!records.length)return 0;
 const anchor=new Date((anchorDate||new Date().toISOString().slice(0,10))+'T12:00:00');
 let long=0,recent=0;
 for(const r of records){
  const d=new Date(r.date+'T12:00:00');
  const ageYears=Math.max(0,(anchor-d)/(365.25*86400000));
  const sim=digitSimilarity(number,r.number);
  const digitSum=[...number].reduce((a,b)=>a+Number(b),0);
  const resultSum=[...r.number].reduce((a,b)=>a+Number(b),0);
  const parityMatch=[...number].filter(x=>Number(x)%2).length===[...r.number].filter(x=>Number(x)%2).length?1:0;
  const pattern=(sim*0.010)+Math.max(0,5-Math.abs(digitSum-resultSum))*0.0015+parityMatch*0.002;
  long+=pattern*Math.exp(-ageYears/7);
  if(ageYears<=3)recent+=pattern*Math.exp(-ageYears/1.8);
 }
 return long*0.60+recent*0.40;
}
function rankedForSnapshot(snap){
 const records=recordsInWindow(snap.draw,snap.date);
 if(!records.length)return snap.numbers;
 return snap.numbers.map((item,index)=>{
   const base=Number(item.consensus||item.score||0);
   const behavior=behavioralScore(item.number,records,snap.date);
   return {...item,behaviorScore:behavior,displayScore:base+behavior-0.00005*index};
 }).sort((a,b)=>b.displayScore-a.displayScore).map((x,i)=>({...x,displayRank:i+1}));
}

function getActiveSnapshot(){
 const snaps=getSnapshots();
 const requested=snaps.find(s=>s.id===activeId());
 if(requested)return requested;
 return snaps.find(s=>s.draw===$('#drawType').value)||snaps[0];
}
function snapshotForDraw(draw){
 const snaps=getSnapshots().filter(s=>s.draw===draw);
 return snaps.find(s=>s.id===activeId())||snaps[snaps.length-1];
}

function renderPredictions(){
 if(!DATA)return;
 const draw=$('#drawType').value;
 let snap=snapshotForDraw(draw);
 if(!snap)return;
 if(activeId()!==snap.id)setActive(snap.id);
 const size=selectedListSize();
 const ranked=rankedForSnapshot(snap);
 const arr=ranked.slice(0,size);
 const records=recordsInWindow(draw,snap.date);
 $('#behaviorRecords').textContent=records.length;
 $('#snapshotTitle').textContent=`${snap.date} — ${draw==='midday'?t('midday'):t('evening')}`;
 $('#count').textContent=arr.length;
 $('#dailyChange').textContent=snap.change?`${snap.change.entered} / ${snap.change.exited}`:'—';
 $('#predictionList').innerHTML=arr.map((x,i)=>{
  const group=Math.min(3,Math.floor((i*4)/Math.max(1,arr.length)));
  const colorClass=['strength-green','strength-blue','strength-yellow','strength-red'][group];
  const strengthLabel=[t('strongest'),t('strong'),t('medium'),t('weakest')][group];
  return `<div class="number-card ${colorClass}" id="number-${x.number}">
    <div class="rank">#${i+1}</div><div class="number">${x.number}</div>
    <div><div class="reason">${x.reason||''}</div><small>${t('score')} ${Number(x.displayScore||x.consensus||x.score||0).toFixed(3)}</small></div>
    <span class="tier ${colorClass}">${strengthLabel}</span></div>`;
 }).join('');
}
$('#drawType').onchange=()=>{const s=snapshotForDraw($('#drawType').value);if(s)setActive(s.id);clearSearch();renderAll()};
$('#tierSize').addEventListener('input',()=>{clearSearch();renderPredictions()});
$('#tierSize').addEventListener('change',()=>{selectedListSize();clearSearch();renderPredictions()});
$('#behaviorWindow').value=localStorage.getItem(STORAGE.window)||'10';
$('#behaviorWindow').addEventListener('change',()=>{selectedBehaviorWindow();clearSearch();renderAll()});

function searchNumber(){
 document.querySelectorAll('.number-card').forEach(x=>x.classList.remove('highlight'));
 let num=$('#numberSearch').value.trim();
 const box=$('#searchResult');
 if(!/^\d{1,3}$/.test(num)){box.className='search-result not-found';box.textContent=t('invalidNumber');return}
 num=num.padStart(3,'0');$('#numberSearch').value=num;
 const snap=getActiveSnapshot();const size=selectedListSize();
 const rankedSearch=rankedForSnapshot(snap);
 const idx=rankedSearch.slice(0,size).findIndex(x=>x.number===num);
 if(idx<0){box.className='search-result not-found';box.textContent=`${num} — ${t('notFound')}`;return}
 const item=rankedSearch[idx];const group=Math.min(3,Math.floor((idx*4)/Math.max(1,size)));const strengthLabel=[t('strongest'),t('strong'),t('medium'),t('weakest')][group];
 box.className='search-result found';
 box.textContent=`${num} — ${t('found')} | ${t('rank')}: #${idx+1} | ${t('tier')}: ${strengthLabel} | ${t('score')}: ${Number(item.displayScore||item.consensus||item.score||0).toFixed(3)}`;
 const card=$(`#number-${num}`);if(card){card.classList.add('highlight');card.scrollIntoView({behavior:'smooth',block:'center'})}
}
function clearSearch(){$('#numberSearch').value='';$('#searchResult').className='search-result hidden';document.querySelectorAll('.number-card').forEach(x=>x.classList.remove('highlight'))}
$('#searchBtn').onclick=searchNumber;$('#clearSearchBtn').onclick=clearSearch;
$('#numberSearch').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();searchNumber()}});

function nextDate(date){
 const d=new Date(date+'T12:00:00');d.setDate(d.getDate()+1);return d.toISOString().slice(0,10);
}
function digitSimilarity(a,b){
 let s=0;for(let i=0;i<3;i++)if(a[i]===b[i])s++;return s;
}
function createAdaptiveSnapshot(previous,result){
 const history=recordsInWindow(result.draw,nextDate(result.date));
 const recent=history.filter(r=>{const a=new Date(nextDate(result.date)+'T12:00:00'),d=new Date(r.date+'T12:00:00');return (a-d)/(365.25*86400000)<=3}).slice(0,60);
 const win=result.number;
 const rescored=previous.numbers.map((item,index)=>{
   let boost=0;
   const n=item.number;
   boost+=digitSimilarity(n,win)*0.035;
   const sumN=[...n].reduce((a,b)=>a+Number(b),0);
   const sumW=[...win].reduce((a,b)=>a+Number(b),0);
   boost+=Math.max(0,6-Math.abs(sumN-sumW))*0.004;
   recent.forEach((r,k)=>{
     const decay=Math.exp(-k/10);
     boost+=digitSimilarity(n,r.number)*0.008*decay;
   });
   const base=Number(item.consensus||item.score||0);
   boost+=behavioralScore(n,history,nextDate(result.date));
   return {...item,score:base+boost-0.00015*index,consensus:base+boost-0.00015*index};
 }).sort((a,b)=>b.score-a.score).map((x,i)=>({...x,rank:i+1}));

 const comparisonSize=selectedListSize();
 const oldTop=previous.numbers.slice(0,comparisonSize).map(x=>x.number);
 const newTop=rescored.slice(0,comparisonSize).map(x=>x.number);
 const oldSet=new Set(oldTop),newSet=new Set(newTop);
 const entered=newTop.filter(x=>!oldSet.has(x)).length;
 const exited=oldTop.filter(x=>!newSet.has(x)).length;
 const common=newTop.filter(x=>oldSet.has(x));
 const oldPos=Object.fromEntries(oldTop.map((x,i)=>[x,i+1]));
 const moves=common.map((x,i)=>Math.abs(oldPos[x]-(i+1)));
 const change={kept:common.length,entered,exited,avgMove:moves.length?(moves.reduce((a,b)=>a+b,0)/moves.length):0};

 return {
   id:`${nextDate(result.date)}-${result.draw}-${Date.now()}`,
   date:nextDate(result.date),draw:result.draw,label:'adaptive',
   numbers:rescored.slice(0,1000),change,createdAt:new Date().toISOString()
 };
}

$('#resultDate').value=new Date().toISOString().slice(0,10);
$('#resultForm').onsubmit=e=>{
 e.preventDefault();if(!DATA)return;
 const draw=$('#resultDraw').value;
 let number=$('#winningNumber').value.trim().padStart(3,'0');
 if(!/^\d{3}$/.test(number)){alert(t('invalidNumber'));return}
 const date=$('#resultDate').value;
 const results=getResults();
 const duplicate=results.some(x=>x.date===date&&x.draw===draw);
 const msg=`${t('confirmTitle')}\n\n${t('date')}: ${date}\n${t('drawPeriod')}: ${draw==='midday'?t('midday'):t('evening')}\n${t('winningNumber')}: ${number}${duplicate?'\n\n'+t('duplicate'):''}`;
 if(!confirm(msg))return;

 const previous=snapshotForDraw(draw);
 const rankedPrevious=previous?rankedForSnapshot(previous):[];
 const rank=rankedPrevious.findIndex(x=>x.number===number)+1;
 const item={date,draw,number,rank,top50:rank>0&&rank<=50,top100:rank>0&&rank<=100,top150:rank>0&&rank<=150,createdAt:new Date().toISOString()};
 results.unshift(item);saveJSON(STORAGE.results,results);

 const snap=createAdaptiveSnapshot(previous,item);
 const snaps=getSnapshots();snaps.push(snap);saveJSON(STORAGE.snapshots,snaps);setActive(snap.id);
 $('#drawType').value=draw;

 $('#lastEvaluation').classList.remove('hidden');
 $('#lastEvaluation').innerHTML=`<h2>${t('saved')}</h2>
 <p><b>${date} — ${draw==='midday'?t('midday'):t('evening')} — ${number}</b></p>
 <p>Top 50: ${item.top50?'✅':'❌'} | Top 100: ${item.top100?'✅':'❌'} | Top 150: ${item.top150?'✅':'❌'}</p>
 <p>${t('nextCreated')}: <b>${snap.date}</b></p>`;
 $('#winningNumber').value='';
 renderAll();
};

function renderHistory(){
 const results=getResults();
 $('#resultsLog').innerHTML=results.length?results.map(x=>`<div class="log-row">
 <span>${x.date} ${x.draw==='midday'?t('midday'):t('evening')}</span><b>${x.number}</b><span>#${x.rank||'—'}</span>
 <span class="${x.top150?'hit':'miss'}">${x.top150?t('top')+' 150':t('miss')}</span></div>`).join(''):t('noResults');

 const snaps=[...getSnapshots()].reverse();
 $('#snapshotHistory').innerHTML=snaps.length?snaps.map(s=>`<div class="snapshot-row">
 <span>${s.date} — ${s.draw==='midday'?t('midday'):t('evening')}</span>
 <span>${s.change?s.change.entered+' / '+s.change.exited:t('base')}</span>
 <span>${s.numbers.length}</span>
 <button onclick="openSnapshot('${s.id}')">${t('view')}</button></div>`).join(''):t('noSnapshots');
}
window.openSnapshot=id=>{
 const s=getSnapshots().find(x=>x.id===id);if(!s)return;
 setActive(id);$('#drawType').value=s.draw;
 document.querySelectorAll('nav button').forEach(x=>x.classList.toggle('active',x.dataset.page==='predictions'));
 document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id==='predictions'));
 renderAll();window.scrollTo({top:0,behavior:'smooth'});
};

function renderPerformance(){
 const a=getResults(),n=a.length;$('#totalResults').textContent=n;
 const pct=k=>n?(100*a.filter(x=>x[k]).length/n).toFixed(1)+'%':'—';
 $('#perf50').textContent=pct('top50');$('#perf100').textContent=pct('top100');$('#perf150').textContent=pct('top150');
 const s=getActiveSnapshot();
 $('#changeDetails').innerHTML=s&&s.change?`${t('kept')}: <b>${s.change.kept}</b> | ${t('entered')}: <b>${s.change.entered}</b> | ${t('exited')}: <b>${s.change.exited}</b> | ${t('avgMove')}: <b>${s.change.avgMove.toFixed(1)}</b>`:'—';
}
function renderBacktest(){
 if(!DATA?.backtestArchive)return;
 const draw=$('#backtestDraw')?.value||'midday';
 const model=$('#backtestModel')?.value||'A';
 let top=Math.round(Number($('#backtestTop')?.value)||150);top=Math.max(1,Math.min(1000,top));if($('#backtestTop'))$('#backtestTop').value=top;
 const rows=DATA.backtestArchive.rows.filter(r=>draw==='all'||r.draw===draw);
 const hits=rows.filter(r=>r[model]<=top).length;
 const rate=rows.length?hits/rows.length:0, random=top/1000;
 const avg=rows.length?rows.reduce((a,r)=>a+r[model],0)/rows.length:0;
 $('#btDraws').textContent=rows.length;$('#btHits').textContent=hits;$('#btRate').textContent=(rate*100).toFixed(1)+'%';
 $('#btRandom').textContent=(random*100).toFixed(1)+'%';$('#btAvg').textContent=avg?avg.toFixed(1):'—';
 const delta=rate-random;
 $('#btSignal').innerHTML=(lang==='ar'
   ?`مقارنة بالعشوائي: <b>${delta>=0?'+':''}${(delta*100).toFixed(1)} نقطة مئوية</b>. التدريب مقفول عند <b>${DATA.backtestArchive.trainingCutoff}</b>.`
   :`Versus random: <b>${delta>=0?'+':''}${(delta*100).toFixed(1)} percentage points</b>. Training cutoff: <b>${DATA.backtestArchive.trainingCutoff}</b>.`);
 $('#btRows').innerHTML=rows.map(r=>`<tr><td>${r.date}</td><td>${r.draw==='midday'?t('midday'):t('evening')}</td><td><b>${r.actual}</b></td><td>#${r[model]}</td><td class="${r[model]<=top?'hit':'miss'}">${r[model]<=top?'✅':'❌'}</td></tr>`).join('');
}
['backtestDraw','backtestModel','backtestTop'].forEach(id=>{
 const el=document.getElementById(id);if(el)el.addEventListener('input',renderBacktest);
});

function sourceMonthCooldownFactor(draw, drawsSinceRegionVisit){
 const info=DATA?.sourceMonthResearch?.learned?.[draw]; if(!info)return 1;
 const center=info.medianReturnDraws||52;
 // Soft cooldown, never a hard ban: very recent revisits are discounted;
 // weight recovers around the empirically learned return interval.
 const x=Math.max(0,Number(drawsSinceRegionVisit)||0);
 if(x>=center)return 1;
 return 0.35 + 0.65*(x/center);
}
function renderSourceMonth(){
 if(!DATA?.sourceMonthResearch)return;
 const draw=$('#smDraw')?.value||'midday';
 const info=DATA.sourceMonthResearch.learned[draw];
 const rows=DATA.sourceMonthResearch.rows.filter(r=>r.draw===draw);
 $('#smAvg').textContent=info.avgReturnDraws.toFixed(1)+' '+(lang==='ar'?'سحب':'draws');
 $('#smMedian').textContent=info.medianReturnDraws.toFixed(1)+' '+(lang==='ar'?'سحب':'draws');
 $('#smLatest').textContent=(info.latest25Share*100).toFixed(1)+'%';
 $('#smOldest').textContent=(info.oldest25Share*100).toFixed(1)+'%';
 const center=info.medianReturnDraws;
 $('#smLogic').innerHTML=lang==='ar'
   ?`إذا عادت نفس منطقة السنة+الشهر بسرعة بعد زيارتها، لا نحذفها نهائيًا؛ نخفض وزنها مؤقتًا. يعود الوزن تدريجيًا حتى يقترب من الدورة التاريخية، وحاليًا مركزها نحو <b>${center.toFixed(1)} سحب</b> لهذه الفترة.`
   :`A recently revisited year+month source is not hard-blocked; its weight is temporarily reduced and recovers as it approaches the historical return cycle, currently about <b>${center.toFixed(1)} draws</b>.`;
 $('#smRows').innerHTML=rows.map(r=>`<tr><td>${r.year}</td><td>${r.avgReturn.toFixed(2)}</td><td>${(r.latest25*100).toFixed(1)}%</td><td>${(r.oldest25*100).toFixed(1)}%</td></tr>`).join('');
 const ab=DATA.sourceMonthResearch.ablation2025[draw];
 const delta=(ab.ageMonthTop150-ab.ageOnlyTop150)*100;
 $('#smValidation').innerHTML=lang==='ar'
  ?`اختبار 2025: إضافة الشهر إلى عمر آخر ظهور غيّرت Top 150 بمقدار <b>${delta>=0?'+':''}${delta.toFixed(1)} نقطة مئوية</b>. لذلك وزن هذا العامل محدود افتراضيًا إلى <b>${Math.round(DATA.sourceMonthResearch.defaultWeight*100)}%</b> حتى لا يطغى على بقية المحرك.`
  :`2025 validation: adding source month to last-appearance age changed Top 150 by <b>${delta>=0?'+':''}${delta.toFixed(1)} pp</b>. The factor is therefore capped at <b>${Math.round(DATA.sourceMonthResearch.defaultWeight*100)}%</b> by default.`;
}
['smDraw','smWeight'].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener('input',renderSourceMonth)});

function reductionStats(draw,model,k){
 const rows=(DATA?.backtestArchive?.rows||[]).filter(r=>r.draw===draw);
 if(!rows.length)return {n:0,hits:0,rate:0,random:k/1000,eff:0};
 const hits=rows.filter(r=>Number(r[model])<=k).length;
 const rate=hits/rows.length;
 const random=k/1000;
 return {n:rows.length,hits,rate,random,eff:random>0?rate/random:0};
}
function findSweetSpot(draw,model,minCoverage){
 const cutoffs=DATA?.smartReductionOptimizer?.candidateCutoffs||DATA?.smartReduction?.candidateCutoffs||[50,75,100,125,150,175,200,225,250,300,350,400];
 const stats=cutoffs.map(k=>{const s=reductionStats(draw,model,k);return {...s,k,upliftPP:(s.rate-s.random)*100};});
 const bestUplift=Math.max(...stats.map(s=>s.upliftPP));
 const tol=Number(DATA?.smartReductionOptimizer?.nearBestTolerancePP??3);
 const near=stats.filter(s=>s.upliftPP>=bestUplift-tol && s.upliftPP>=0).sort((a,b)=>a.k-b.k||b.upliftPP-a.upliftPP);
 const best=near.length?near[0]:[...stats].sort((a,b)=>b.upliftPP-a.upliftPP||a.k-b.k)[0];
 return {best,stats,bestUplift};
}
function renderReduction(){
 if(!DATA?.backtestArchive||!$('#redDraw'))return;
 const draw=$('#redDraw').value||'midday';
 const model=$('#redModel').value||'A';
 const minCoverage=Number($('#redCoverage').value||0.30);
 const {best,stats}=findSweetSpot(draw,model,minCoverage);
 if(!best)return;
 $('#redK').textContent=best.k;
 $('#redHit').textContent=(best.rate*100).toFixed(1)+'%';
 $('#redRandom').textContent=(best.random*100).toFixed(1)+'%';
 $('#redEff').textContent=best.eff.toFixed(2)+'×';
 $('#redRemoved').textContent=1000-best.k;
 $('#redRows').innerHTML=stats.map(s=>`<tr class="${s.k===best.k?'recommended-row':''}">
  <td>${s.k}</td><td>${(s.rate*100).toFixed(1)}%</td><td>${(s.random*100).toFixed(1)}%</td>
  <td>${s.eff.toFixed(2)}×</td><td>${s.hits}/${s.n}</td></tr>`).join('');
 const meets=best.rate>=minCoverage;
 $('#redNote').innerHTML=lang==='ar'
   ?`${meets?'تم إيجاد حد يحقق التغطية المطلوبة.':'لم يصل أي حد مختبر للتغطية المطلوبة؛ تم اختيار أعلى كفاءة متاحة.'} <b>مهم:</b> هذا الاقتراح مبني على الاختبار المقفول المتاح داخل التطبيق، وليس ضمانًا للسحب القادم.`
   :`${meets?'A cutoff meeting the requested coverage was found.':'No tested cutoff met the requested coverage; the best available efficiency was selected.'} <b>Important:</b> this is based on the locked backtest stored in the app and is not a guarantee for the next draw.`;
 $('#applyReduction').dataset.k=best.k;
}
['redDraw','redModel','redCoverage'].forEach(id=>{
 const el=document.getElementById(id); if(el)el.addEventListener('change',renderReduction);
});
const applyReductionBtn=document.getElementById('applyReduction');
if(applyReductionBtn)applyReductionBtn.addEventListener('click',()=>{
 const k=Math.max(1,Math.min(1000,Number(applyReductionBtn.dataset.k)||150));
 $('#tierSize').value=k;
 localStorage.setItem('lreTierSize',String(k));
 const draw=$('#redDraw')?.value||'midday';
 $('#drawType').value=draw;
 const s=snapshotForDraw(draw);if(s)setActive(s.id);
 document.querySelectorAll('nav button').forEach(x=>x.classList.remove('active'));
 const pbtn=document.querySelector('nav button[data-page="predictions"]');if(pbtn)pbtn.classList.add('active');
 document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id==='predictions'));
 clearSearch();renderPredictions();
});


function ensureSmartReductionCard(){
 if(document.getElementById('smartReductionToggle')) return;
 const controls=document.querySelector('#predictions .controls');
 if(!controls) return;
 const card=document.createElement('div');
 card.className='card smart-reduction-card';
 card.innerHTML=`
  <div class="smart-head">
   <div><h3 data-i18n="smartReductionTitle">${t('smartReductionTitle')}</h3>
   <small>${lang==='ar'?'يحسب عددًا مقترحًا اعتمادًا على الاختبار التاريخي المقفول للفترة المختارة.':'Calculates a suggested list size from the locked historical backtest for the selected draw.'}</small></div>
   <label class="switch-label"><input id="smartReductionToggle" type="checkbox" checked>
   <span>${lang==='ar'?'تشغيل':'Enable'}</span></label>
  </div>
  <div id="smartReductionInline" class="smart-inline">
   <div class="smart-grid">
    <label><span>${t('backtestModel')}</span><select id="smartModel">
     <option value="A">A — Baseline</option><option value="B">B — Gap</option>
     <option value="C">C — Odd/Even</option><option value="D">D — Weekday</option><option value="E">E — Sum</option>
    </select></label>
    <label><span>${t('minimumCoverage')}</span><select id="smartCoverage">
     <option value="0.20">20%</option><option value="0.25">25%</option><option value="0.30" selected>30%</option>
     <option value="0.35">35%</option><option value="0.40">40%</option><option value="0.45">45%</option><option value="0.50">50%</option>
    </select></label>
   </div>
   <div class="smart-result">
    <div><span>${t('recommendedCount')}</span><b id="smartRecommended">—</b></div>
    <div><span>${t('measuredCoverage')}</span><b id="smartMeasured">—</b></div>
    <div><span>${t('numbersRemoved')}</span><b id="smartRemoved">—</b></div>
   </div>
   <button id="applySmartReduction" class="primary-action">${t('applyRecommended')}</button>
   <div id="smartInlineNote" class="mini-note"></div>
  </div>`;
 controls.insertAdjacentElement('afterend',card);
 const toggle=document.getElementById('smartReductionToggle');
 const model=document.getElementById('smartModel');
 const cov=document.getElementById('smartCoverage');
 [toggle,model,cov].forEach(el=>el&&el.addEventListener('change',renderInlineSmartReduction));
 const btn=document.getElementById('applySmartReduction');
 if(btn)btn.addEventListener('click',()=>{
   const k=Math.max(1,Math.min(1000,Number(btn.dataset.k)||150));
   document.getElementById('tierSize').value=k;
   localStorage.setItem('lreTierSize',String(k));
   renderPredictions();
 });
}

function renderInlineSmartReduction(){
 if(!DATA?.backtestArchive||!$('#smartReductionToggle'))return;
 const enabled=$('#smartReductionToggle').checked;
 $('#smartReductionInline').classList.toggle('hidden',!enabled);
 if(!enabled)return;
 const draw=$('#drawType')?.value||'midday', model=$('#smartModel')?.value||'A';
 const {best,stats,bestUplift}=findSweetSpot(draw,model,Number($('#smartCoverage')?.value||0.30));
 if(!best)return;
 $('#smartRecommended').textContent=best.k;
 $('#smartMeasured').textContent=(best.rate*100).toFixed(1)+'%';
 $('#smartRemoved').textContent=1000-best.k;
 if($('#smartUplift'))$('#smartUplift').textContent=(best.upliftPP>=0?'+':'')+best.upliftPP.toFixed(1)+' pp';
 if($('#smartEfficiency'))$('#smartEfficiency').textContent=best.eff.toFixed(2)+'×';
 $('#applySmartReduction').dataset.k=best.k;
 if($('#smartCompareRows'))$('#smartCompareRows').innerHTML=stats.map(s=>`<tr class="${s.k===best.k?'recommended-row':''}"><td>${s.k}</td><td>${s.hits}/${s.n}</td><td>${(s.rate*100).toFixed(1)}%</td><td>${(s.random*100).toFixed(1)}%</td><td>${s.upliftPP>=0?'+':''}${s.upliftPP.toFixed(1)} pp</td><td>${s.eff.toFixed(2)}×</td></tr>`).join('');
 const tol=Number(DATA?.smartReductionOptimizer?.nearBestTolerancePP??3);
 $('#smartInlineNote').textContent=lang==='ar'
 ?`أفضل تفوق مقاس = ${bestUplift.toFixed(1)} نقطة مئوية. نختار أصغر قائمة تقع في نطاق ${tol.toFixed(1)} نقاط من الأفضل. الاختيار الحالي: ${best.k} رقم.`
 :`Best measured uplift = ${bestUplift.toFixed(1)} pp. The optimizer chooses the smallest list within ${tol.toFixed(1)} pp of the best. Current choice: ${best.k} numbers.`;
}
['smartReductionToggle','smartModel','smartCoverage','drawType'].forEach(id=>{
 const el=document.getElementById(id);
 if(el)el.addEventListener(id==='smartReductionToggle'?'change':'change',renderInlineSmartReduction);
});
const inlineApply=document.getElementById('applySmartReduction');
if(inlineApply)inlineApply.addEventListener('click',()=>{
 const k=Math.max(1,Math.min(1000,Number(inlineApply.dataset.k)||150));
 $('#tierSize').value=k;
 localStorage.setItem('lreTierSize',String(k));
 renderPredictions();
});
function renderBenchmark(){if(!DATA?.historicalBenchmark||!document.getElementById('benchDraw'))return;const draw=document.getElementById('benchDraw').value;const hb=DATA.historicalBenchmark;const rows=hb.models.filter(x=>x.draw===draw);document.getElementById('benchValid').textContent=draw==='midday'?hb.coverage.middayValidDraws:hb.coverage.eveningValidDraws;const br=[...rows].sort((a,b)=>a.meanRank-b.meanRank)[0],b150=[...rows].sort((a,b)=>b.top150-a.top150)[0];document.getElementById('benchBestRank').textContent=br.meanRank.toFixed(1);document.getElementById('benchBest150').textContent=(b150.top150*100).toFixed(1)+'%';document.getElementById('benchRows').innerHTML=rows.map(r=>`<tr><td>${r.model}</td><td>${r.tests}</td><td>${r.meanRank.toFixed(1)}</td><td>${(r.top50*100).toFixed(1)}%</td><td>${(r.top100*100).toFixed(1)}%</td><td>${(r.top150*100).toFixed(1)}%</td><td>${(r.top300*100).toFixed(1)}%</td><td>${(r.top500*100).toFixed(1)}%</td></tr>`).join('');const from=document.getElementById('benchFrom').value,to=document.getElementById('benchTo').value;document.getElementById('benchRangeNote').textContent=`Available verified metrics are aggregate for 2021-07-01 → 2026-08-01; ${from} → ${to} is a requested range, not yet a day-level recomputation.`;}['benchDraw','benchFrom','benchTo'].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener('change',renderBenchmark)});function renderReplayLab(){if(!DATA?.sourceMonthReplay||!document.getElementById('replayDate'))return;const date=document.getElementById('replayDate').value,draw=document.getElementById('replayDraw').value,k=Number(document.getElementById('replayK').value||150);const row=DATA.sourceMonthReplay.rows.find(r=>r.date===date&&r.draw===draw);if(!row){document.getElementById('replayWinner').textContent='—';document.getElementById('replayRank').textContent='—';document.getElementById('replaySource').textContent='—';document.getElementById('replayHit').textContent='لا يوجد سحب';document.getElementById('replayNumbers').innerHTML='';}else{document.getElementById('replayWinner').textContent=row.winner;document.getElementById('replayRank').textContent='#'+row.rank;document.getElementById('replaySource').textContent=row.sourceRegion;document.getElementById('replayHit').textContent=row.rank<=k?'✅ نعم':'❌ لا';document.getElementById('replayNumbers').innerHTML=row.top500.slice(0,k).map((n,i)=>`<span class="number-chip ${Number(row.winner)===n?'winner-chip':''}">${String(n).padStart(3,'0')}<small>#${i+1}</small></span>`).join('');}const s=DATA.sourceMonthReplay.summary[draw];document.getElementById('replaySummary').innerHTML=`${draw} — ${s.draws} سحب — Mean rank ${s.meanRank}<br>Top50 ${(s.top50*100).toFixed(1)}% | Top100 ${(s.top100*100).toFixed(1)}% | Top150 ${(s.top150*100).toFixed(1)}% | Top200 ${(s.top200*100).toFixed(1)}% | Top300 ${(s.top300*100).toFixed(1)}% | Top500 ${(s.top500*100).toFixed(1)}%`;}['replayDate','replayDraw','replayK'].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener('change',renderReplayLab)});function renderAll(){if(!DATA)return;ensureSmartReductionCard();renderPredictions();renderHistory();renderPerformance();renderBacktest();renderSourceMonth();renderReduction();renderInlineSmartReduction();renderBenchmark();renderReplayLab()}




let deferredPrompt;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').hidden=false});
$('#installBtn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').hidden=true}};

loadData();
