
  (()=>{
    'use strict';

    const VERSION='9.3.8';
    const STORE='axonos_v938_';
    const SHARE_FILE='axonos-v938-share-card.png';
    const CHALLENGE_PREFIX='v938';
    const GOLD_MIN=.42;
    const GOLD_MAX=.60;

    const MODES={
      run:{name:'Run',desc:'Balanced 60-second operating-system run.',time:60,speed:1,noise:1,rounds:7},
      daily:{name:'Daily Brain',desc:'Deterministic daily seed and strict share result.',time:60,speed:1.04,noise:1.08,rounds:7,daily:true},
      sprint:{name:'Sprint',desc:'Short high-tempo run for mobile.',time:36,speed:1.32,noise:1.12,rounds:6},
      focus:{name:'Focus',desc:'Faster prompts, cleaner signal.',time:52,speed:1.18,noise:.82,rounds:8},
      artifacts:{name:'Artifacts',desc:'Anomaly-heavy privacy stress test.',time:64,speed:1.06,noise:1.38,rounds:8},
      pressure:{name:'Pressure',desc:'Stricter deadlines and harsher leakage penalty.',time:48,speed:1.42,noise:1.22,rounds:7},
      signal:{name:'Signal',desc:'Lower-pressure showcase for first-time players.',time:76,speed:.84,noise:.72,rounds:6},
      axonos:{name:'AxonOS',desc:'Cinematic clean run. Harder scoring ceiling.',time:72,speed:1.0,noise:.9,rounds:9}
    };

    const MISSIONS=[
      {title:'Mission R1',text:'Zero-friction boot.',objective:'Finish with 0 leaks.',kind:'intent',correct:'Intent: select',cards:[['Intent: select','Derived class only. No raw stream.','safe'],['Raw EEG dump','Unsafe direct access request.','raw'],['Ignore deadline','Miss hard real-time bound.','late'],['Bypass consent','Invalid permission path.','consent']]},
      {title:'Mission R2',text:'App asks for memory access.',objective:'Deny raw memory; allow only intent.',kind:'privacy',correct:'Deny raw access',cards:[['Deny raw access','Neural permission boundary holds.','safe'],['Grant raw buffer','Leaks cognitive data.','raw'],['Mirror vault','Creates unsafe copy.','leak'],['Escalate app','Violates least privilege.','cap']]},
      {title:'Mission R3',text:'Consent is revoked mid-stream.',objective:'Stop the flow immediately.',kind:'consent',correct:'Stop now',cards:[['Stop now','Revocation is immediate.','safe'],['Continue 4 ms','Consent violation.','consent'],['Cache intent','Persistence without permission.','leak'],['Ask later','Unsafe delay.','late']]},
      {title:'Mission R4',text:'Artifact shock detected.',objective:'Reject artifact before classification.',kind:'artifact',correct:'Reject artifact',cards:[['Reject artifact','Noise removed before decode.','safe'],['Classify spike','Turns artifact into intent.','bad'],['Boost gain','Amplifies the error.','bad'],['Write trace','Unsafe diagnostic exposure.','raw']]},
      {title:'Mission R5',text:'Deadline window collapses.',objective:'Keep intent inside deadline.',kind:'deadline',correct:'Commit intent',cards:[['Commit intent','Bounded response inside window.','safe'],['Wait for perfect','Deadline miss.','late'],['Fork worker','Unbounded latency path.','bad'],['Log raw wave','Privacy leak.','raw']]},
      {title:'Mission R6',text:'Phantom node appears in mesh.',objective:'Quarantine unstable node.',kind:'mesh',correct:'Quarantine node',cards:[['Quarantine node','Mesh remains deterministic.','safe'],['Trust node','Phantom path accepted.','bad'],['Replicate raw','Unsafe persistence.','raw'],['Disable vault','Breaks privacy invariant.','cap']]},
      {title:'Mission R7',text:'Third-party agent requests full context.',objective:'Expose capability token only.',kind:'agent',correct:'Token only',cards:[['Token only','Minimal permission surface.','safe'],['Full context','Overbroad cognitive disclosure.','raw'],['Debug memory','Unsafe inspection path.','leak'],['Auto-approve','No consent boundary.','consent']]},
      {title:'Mission R8',text:'Drift accumulates under pressure.',objective:'Recalibrate without exposing raw data.',kind:'calib',correct:'Recalibrate local',cards:[['Recalibrate local','Device-local correction.','safe'],['Upload trace','Raw-data exfiltration.','raw'],['Skip filter','Contaminated decode.','bad'],['Extend deadline','Hard real-time violation.','late']]},
      {title:'Mission R9',text:'Privacy Vault under load.',objective:'Preserve the vault, finish stable.',kind:'vault',correct:'Preserve vault',cards:[['Preserve vault','Cognitive data remains sealed.','safe'],['Open vault','Leak by design.','raw'],['Persist cache','Unauthorized memory.','leak'],['Share raw score','Unsafe telemetry.','raw']]}
    ];

    const QUESTS=[
      ['zeroLeak','Zero Leak','Finish a run with 0 leaks.'],
      ['stable90','Stable 90','Finish with ≥90% stability.'],
      ['combo5','Combo 5','Reach combo x5.'],
      ['daily','Daily Brain','Complete a daily run.'],
      ['privacy','Vault Keeper','Deny 3 unsafe raw requests in one run.']
    ];

    const els={
      body:document.body,homeScreen:document.getElementById('homeScreen'),playScreen:document.getElementById('playScreen'),resultScreen:document.getElementById('resultScreen'),howScreen:document.getElementById('howScreen'),
      bestTop:document.getElementById('bestTop'),streakTop:document.getElementById('streakTop'),levelTop:document.getElementById('levelTop'),soundState:document.getElementById('soundState'),motionState:document.getElementById('motionState'),
      soundBtn:document.getElementById('soundBtn'),motionBtn:document.getElementById('motionBtn'),startBtn:document.getElementById('startBtn'),dailyBtn:document.getElementById('dailyBtn'),howBtn:document.getElementById('howBtn'),brandHome:document.getElementById('brandHome'),
      modeGrid:document.getElementById('modeGrid'),rankName:document.getElementById('rankName'),levelLabel:document.getElementById('levelLabel'),xpBar:document.getElementById('xpBar'),questList:document.getElementById('questList'),leaderList:document.getElementById('leaderList'),
      canvas:document.getElementById('signalCanvas'),needle:document.getElementById('needle'),lockLabel:document.getElementById('lockLabel'),holdPad:document.getElementById('holdPad'),holdTitle:document.getElementById('holdTitle'),holdHint:document.getElementById('holdHint'),cardsGrid:document.getElementById('cardsGrid'),
      missionTitle:document.getElementById('missionTitle'),missionText:document.getElementById('missionText'),comboLabel:document.getElementById('comboLabel'),scoreHud:document.getElementById('scoreHud'),stabilityHud:document.getElementById('stabilityHud'),leaksHud:document.getElementById('leaksHud'),latencyHud:document.getElementById('latencyHud'),comboHud:document.getElementById('comboHud'),timeHud:document.getElementById('timeHud'),coachText:document.getElementById('coachText'),objectiveText:document.getElementById('objectiveText'),rivalText:document.getElementById('rivalText'),kernelLog:document.getElementById('kernelLog'),pauseBtn:document.getElementById('pauseBtn'),abortBtn:document.getElementById('abortBtn'),
      pauseModal:document.getElementById('pauseModal'),resumeBtn:document.getElementById('resumeBtn'),abortFromModalBtn:document.getElementById('abortFromModalBtn'),
      gradeText:document.getElementById('gradeText'),resultTitle:document.getElementById('resultTitle'),resultSub:document.getElementById('resultSub'),retryBtn:document.getElementById('retryBtn'),copyBtn:document.getElementById('copyBtn'),downloadBtn:document.getElementById('downloadBtn'),challengeBtn:document.getElementById('challengeBtn'),homeBtn:document.getElementById('homeBtn'),
      scoreResult:document.getElementById('scoreResult'),latencyResult:document.getElementById('latencyResult'),leaksResult:document.getElementById('leaksResult'),stabilityResult:document.getElementById('stabilityResult'),xpResult:document.getElementById('xpResult'),badgeResult:document.getElementById('badgeResult'),shareTitle:document.getElementById('shareTitle'),shareText:document.getElementById('shareText'),nextTip:document.getElementById('nextTip'),leaderResult:document.getElementById('leaderResult'),shareCanvas:document.getElementById('shareCanvas'),
      howStartBtn:document.getElementById('howStartBtn'),howCloseBtn:document.getElementById('howCloseBtn'),toast:document.getElementById('toast')
    };

    const ctx=els.canvas.getContext('2d');
    const shareCtx=els.shareCanvas.getContext('2d');
    const now=()=>performance.now();
    const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
    const fmt=n=>Math.round(n).toLocaleString('en-US');
    const todayKey=()=>{const d=new Date();return `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`};
    const escapeHTML=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

    function loadJSON(key,fallback){try{const raw=localStorage.getItem(STORE+key);return raw==null?fallback:(JSON.parse(raw)??fallback)}catch{return fallback}}
    function saveJSON(key,value){try{localStorage.setItem(STORE+key,JSON.stringify(value))}catch{}}
    function seedRand(seed){let a=(seed>>>0)||0x9e3779b9;return()=>{a=(a+0x6D2B79F5)>>>0;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296}}
    function hashSeed(text){let h=2166136261>>>0;for(let i=0;i<text.length;i++){h^=text.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
    function shuffle(input,rng){const a=[...input];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

    const P=loadJSON('profile',{best:0,streak:0,xp:0,badges:{},leaders:[],daily:{}});
    const settings=loadJSON('settings',{sound:false,motion:true});
    let selectedMode='run';
    let game=null;
    let lastResult=null;
    let runSeq=0;
    let raf=0;
    let lastTick=now();
    let audio=null;

    function normalizeProfile(){P.badges=P.badges&&typeof P.badges==='object'?P.badges:{};P.leaders=Array.isArray(P.leaders)?P.leaders:[];P.daily=P.daily&&typeof P.daily==='object'?P.daily:{};P.best=Math.max(0,Number(P.best)||0);P.streak=Math.max(0,Number(P.streak)||0);P.xp=Math.max(0,Number(P.xp)||0)}
    function levelFromXP(xp){return Math.max(1,Math.floor(Math.sqrt(Math.max(0,xp)/90))+1)}
    function rankFromLevel(l){return l>=12?'Cognitive Architect':l>=8?'Vault Commander':l>=5?'Signal Operator':l>=3?'Kernel Apprentice':'Rookie Operator'}
    function activeMode(){return (lastResult&&lastResult.mode)||selectedMode||'run'}

    function show(screen){for(const el of [els.homeScreen,els.playScreen,els.resultScreen,els.howScreen])el.classList.remove('active');els[screen+'Screen'].classList.add('active');els.body.dataset.screen=screen}
    function toast(text){els.toast.textContent=text;els.toast.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>els.toast.classList.remove('show'),1500)}
    function beep(type='ok'){if(!settings.sound)return;try{audio=audio||new (window.AudioContext||window.webkitAudioContext)();const o=audio.createOscillator();const g=audio.createGain();o.connect(g);g.connect(audio.destination);o.type='sine';o.frequency.value=type==='bad'?150:type==='gold'?780:520;g.gain.setValueAtTime(.0001,audio.currentTime);g.gain.exponentialRampToValueAtTime(.05,audio.currentTime+.02);g.gain.exponentialRampToValueAtTime(.0001,audio.currentTime+.16);o.start();o.stop(audio.currentTime+.18)}catch{}}

    function log(text,cls='info'){if(!game)return;game.log.push([text,cls]);game.log=game.log.slice(-80);els.kernelLog.innerHTML=game.log.map(([t,c])=>`<div class="${c}">${escapeHTML(t)}</div>`).join('');els.kernelLog.scrollTop=els.kernelLog.scrollHeight}
    function setHoldEnabled(enabled){els.holdPad.disabled=!enabled;els.holdPad.classList.toggle('is-disabled',!enabled);els.holdPad.setAttribute('aria-disabled',enabled?'false':'true')}
    function lockCards(locked){els.cardsGrid.querySelectorAll('.choice').forEach(b=>{b.disabled=!!locked;b.setAttribute('aria-disabled',locked?'true':'false')})}
    function clearTimer(name){if(game&&game[name]){clearTimeout(game[name]);game[name]=0}}
    function clearRunTimers(){clearTimer('choiceTimer');clearTimer('transitionTimer')}
    function stopLoop(){if(raf){cancelAnimationFrame(raf);raf=0}}
    function cleanupRun(){if(!game)return;clearRunTimers();game.holding=false;game.pointerId=null;setHoldEnabled(false);els.holdPad.classList.remove('holding');lockCards(true);stopLoop()}

    function renderHome(){
      normalizeProfile();
      const lvl=levelFromXP(P.xp);
      const xpForLevel=450;
      const xpProgress=clamp(Math.round((P.xp%xpForLevel)/xpForLevel*100),0,100);
      els.bestTop.textContent=fmt(P.best);els.streakTop.textContent=P.streak;els.levelTop.textContent=lvl;els.soundState.textContent=settings.sound?'On':'Off';els.motionState.textContent=settings.motion?'On':'Off';
      els.rankName.textContent=rankFromLevel(lvl);els.levelLabel.textContent='Level '+lvl;els.xpBar.style.width=xpProgress+'%';
      els.modeGrid.innerHTML=Object.entries(MODES).map(([k,m])=>`<button type="button" class="mode ${k===selectedMode?'active':''}" data-mode="${k}" role="option" aria-selected="${k===selectedMode}"><b>${m.name}</b><span>${m.desc}</span></button>`).join('');
      els.modeGrid.querySelectorAll('.mode').forEach(b=>b.addEventListener('click',()=>{selectedMode=b.dataset.mode||'run';renderHome()}));
      els.questList.innerHTML=QUESTS.map(([id,name])=>`<div class="miniItem"><span>${P.badges[id]?'✓':'○'} ${name}</span><strong>${P.badges[id]?'done':'open'}</strong></div>`).join('');
      const leaders=P.leaders.slice(0,5);els.leaderList.innerHTML=leaders.length?leaders.map((x,i)=>`<div class="miniItem"><span>#${i+1} ${escapeHTML(x.mode||'Run')} · ${escapeHTML(x.grade||'—')}</span><strong>${fmt(x.score||0)}</strong></div>`).join(''):'<div class="miniItem"><span>No local runs yet</span><strong>—</strong></div>';
    }

    function start(mode=selectedMode){
      if(!MODES[mode])mode='run';
      if(game)cleanupRun();
      selectedMode=mode;
      const cfg=MODES[mode];
      const seed=mode==='daily'?hashSeed(`${VERSION}:${mode}:${todayKey()}`):Math.floor(Math.random()*0xffffffff);
      const rnd=seedRand(seed);
      const rounds=shuffle(MISSIONS,rnd).slice(0,cfg.rounds);
      const id=++runSeq;
      game={id,mode,cfg,seed,rnd,rounds,round:0,phase:'boot',started:now(),time:cfg.time,score:0,stability:100,leaks:0,combo:0,maxCombo:0,latencies:[],privacyDenials:0,holds:0,attempts:0,paused:false,finished:false,persisted:false,holding:false,pointerId:null,holdStart:0,choiceOpenAt:0,choiceDue:0,choiceRemainingMs:0,choiceTimer:0,transitionTimer:0,transitionDue:0,transitionRemainingMs:0,needle:.08+rnd()*.08,needleDir:1,artifact:0,answered:false,log:[]};
      lastResult=null;
      show('play');els.cardsGrid.innerHTML='';els.kernelLog.innerHTML='';els.pauseModal.classList.remove('active');setHoldEnabled(true);setupMission();log(`boot axonos-evolver/${VERSION} mode=${cfg.name} seed=${seed}`,'info');log('runtime FSM: hold -> choose -> resolving -> result','ok');log('privacy vault: local-only; no neural data path','ok');beep('gold');lastTick=now();loop();
    }

    function setupMission(){
      if(!game||game.finished)return;
      clearRunTimers();
      const m=game.rounds[game.round%game.rounds.length];
      game.phase='hold';game.answered=false;game.holding=false;game.pointerId=null;game.holdStart=0;game.choiceOpenAt=0;game.choiceDue=0;game.choiceRemainingMs=0;game.transitionRemainingMs=0;game.needle=.05+game.rnd()*.16;game.needleDir=1;game.artifact=0;
      els.cardsGrid.innerHTML='';setHoldEnabled(true);els.holdPad.classList.remove('holding');els.holdTitle.textContent='Hold signal';els.holdHint.textContent='Release when the cursor enters gold.';els.lockLabel.textContent='Hold to stabilize';
      els.missionTitle.textContent=m.title;els.missionText.textContent=m.text;els.objectiveText.textContent=m.objective;els.coachText.innerHTML='<b>Coach:</b> hold until the needle enters gold.';log(`mission ${game.round+1}/${game.rounds.length}: ${m.kind}`,'info');updateHUD();
    }

    function choiceWindowMs(){if(!game)return 4200;const base=5200-(game.cfg.speed-1)*950-game.round*110;return Math.round(clamp(base,2600,6500))}
    function armChoiceTimer(ms=choiceWindowMs()){if(!game||game.finished||game.phase!=='choose')return;clearTimer('choiceTimer');game.choiceRemainingMs=ms;game.choiceDue=now()+ms;const id=game.id;game.choiceTimer=setTimeout(()=>{if(!game||game.id!==id||game.finished||game.paused||game.phase!=='choose'||game.answered)return;timeoutChoice()},ms)}
    function scheduleTransition(ms){if(!game||game.finished)return;clearTimer('transitionTimer');game.transitionRemainingMs=ms;game.transitionDue=now()+ms;const id=game.id;game.transitionTimer=setTimeout(()=>{if(!game||game.id!==id||game.finished||game.paused)return;game.transitionTimer=0;advanceRound()},ms)}

    function showCards(){
      if(!game||game.finished||game.paused||game.phase!=='hold'||game.holding)return;
      const m=game.rounds[game.round%game.rounds.length];
      game.phase='choose';game.answered=false;game.choiceOpenAt=now();setHoldEnabled(false);els.holdPad.classList.remove('holding');
      const windowMs=choiceWindowMs();
      els.holdTitle.textContent='Intent gate open';els.holdHint.textContent=`Choose the safe path in ${(windowMs/1000).toFixed(1)}s.`;
      const cards=shuffle(m.cards,game.rnd);
      els.cardsGrid.innerHTML=cards.map(c=>`<button type="button" class="choice" data-title="${escapeHTML(c[0])}"><b>${escapeHTML(c[0])}</b><span>${escapeHTML(c[1])}</span><small>${escapeHTML(c[2])}</small></button>`).join('');
      els.cardsGrid.querySelectorAll('.choice').forEach(btn=>btn.addEventListener('click',()=>answer(btn),{once:true}));
      els.coachText.innerHTML='<b>Coach:</b> lock acquired.<br>Select the safe capability path before timeout.';log('signal lock accepted; opening timed card gate','ok');armChoiceTimer(windowMs);updateHUD();
    }

    function revealCorrect(m){els.cardsGrid.querySelectorAll('.choice').forEach(b=>{if(b.dataset.title===m.correct)b.classList.add('correct')})}
    function classifyLeak(title){const t=String(title||'').toLowerCase();return (t.includes('raw')||t.includes('context')||t.includes('vault')||t.includes('cache'))?2:1}

    function answer(btn){
      if(!game||game.finished||game.paused||game.phase!=='choose'||game.answered)return;
      game.answered=true;clearTimer('choiceTimer');lockCards(true);game.phase='resolving';game.attempts++;
      const m=game.rounds[game.round%game.rounds.length];const title=btn.dataset.title||'';const decisionMs=Math.max(0,now()-(game.choiceOpenAt||now()));
      const latency=clamp(1.45+game.rnd()*1.85+(decisionMs/1000)*.48+(game.cfg.speed-1)*.82+game.leaks*.08,1.3,9.8);game.latencies.push(latency);revealCorrect(m);
      const correct=title===m.correct;
      if(correct){btn.classList.add('correct');game.combo++;game.maxCombo=Math.max(game.maxCombo,game.combo);const bonus=game.combo*55+Math.max(0,Math.round((game.stability-70)*8));game.score+=920+bonus;game.stability=clamp(game.stability+2.6,0,100);if(title.toLowerCase().includes('deny')||title.toLowerCase().includes('token'))game.privacyDenials++;els.coachText.innerHTML='<b>Coach:</b> correct gate.<br>Derived intent stayed inside permissions.';log(`safe path: ${title}; latency=${latency.toFixed(2)}ms`,'ok');beep('ok')}
      else{btn.classList.add('wrong');game.combo=0;game.leaks+=classifyLeak(title);game.stability=clamp(game.stability-9.5,0,100);game.score=Math.max(0,game.score-260);els.coachText.innerHTML='<b>Coach:</b> wrong gate.<br>The green card was the safe path.';log(`violation: ${title}; leak_count=${game.leaks}`,'bad');beep('bad')}
      updateHUD();scheduleTransition(settings.motion?620:220);
    }

    function timeoutChoice(){
      if(!game||game.finished||game.paused||game.phase!=='choose'||game.answered)return;
      game.answered=true;clearTimer('choiceTimer');lockCards(true);game.phase='resolving';game.attempts++;
      const m=game.rounds[game.round%game.rounds.length];revealCorrect(m);
      els.cardsGrid.querySelectorAll('.choice').forEach(b=>{if(b.dataset.title===m.correct)b.classList.add('timeout')});
      const latency=clamp((choiceWindowMs()/1000)+game.rnd()*.6,2.8,10.5);game.latencies.push(latency);game.combo=0;game.leaks+=1;game.stability=clamp(game.stability-7.5,0,100);game.score=Math.max(0,game.score-180);els.coachText.innerHTML='<b>Coach:</b> deadline missed.<br>The safe path is revealed in gold.';log(`deadline miss: no card selected; leak_count=${game.leaks}`,'bad');beep('bad');updateHUD();scheduleTransition(settings.motion?760:260);
    }

    function advanceRound(){if(!game||game.finished)return;clearRunTimers();game.round++;if(game.round>=game.rounds.length||game.time<=0)finish('complete');else setupMission()}

    function awardBadges(zero,stable){normalizeProfile();const got=[];if(zero&&!P.badges.zeroLeak){P.badges.zeroLeak=1;got.push('Zero Leak')}if(stable&&!P.badges.stable90){P.badges.stable90=1;got.push('Stable 90')}if(game.maxCombo>=5&&!P.badges.combo5){P.badges.combo5=1;got.push('Combo 5')}if(game.mode==='daily'&&!P.badges.daily){P.badges.daily=1;got.push('Daily Brain')}if(game.privacyDenials>=3&&!P.badges.privacy){P.badges.privacy=1;got.push('Vault Keeper')}return got[0]||''}

    function finish(reason='complete'){
      if(!game||game.finished)return;
      cleanupRun();game.finished=true;game.phase='finished';game.time=Math.max(0,game.time);
      const avg=game.latencies.length?game.latencies.reduce((a,b)=>a+b,0)/game.latencies.length:0;const zero=game.leaks===0;const stable=game.stability>=90;const cleanBonus=zero?900:0;const finalScore=Math.max(0,Math.round(game.score+game.stability*11+cleanBonus-game.leaks*320));game.score=finalScore;
      const grade=finalScore>=8500&&zero?'S':finalScore>=6800?'A':finalScore>=5000?'B':finalScore>=3200?'C':'D';const xp=Math.max(20,Math.round(finalScore/90)+(zero?40:0)+(stable?25:0));
      normalizeProfile();const badge=awardBadges(zero,stable);
      if(!game.persisted){P.best=Math.max(P.best,finalScore);P.streak=zero?P.streak+1:0;P.xp+=xp;P.leaders=[{score:finalScore,mode:game.cfg.name,grade,date:new Date().toISOString().slice(0,10)},...P.leaders].sort((a,b)=>(b.score||0)-(a.score||0)).slice(0,8);if(game.mode==='daily')P.daily[todayKey()]=Math.max(Number(P.daily[todayKey()])||0,finalScore);saveJSON('profile',P);game.persisted=true}
      lastResult={version:VERSION,mode:game.mode,modeName:game.cfg.name,seed:game.seed,score:finalScore,grade,avg,xp,badge,leaks:game.leaks,stability:Math.round(game.stability),reason};
      els.gradeText.textContent=grade;els.resultTitle.textContent=zero?'AxonOS online':'Kernel survived';els.resultSub.textContent=zero?'Privacy intact · consent respected · signal stable':'Some boundaries failed · rerun to restore zero-leak status';
      els.scoreResult.textContent=fmt(finalScore);els.latencyResult.textContent=avg?avg.toFixed(2)+'ms':'—';els.leaksResult.textContent=game.leaks;els.stabilityResult.textContent=Math.round(game.stability)+'%';els.xpResult.textContent='+'+xp;els.badgeResult.textContent=badge||'—';els.shareTitle.textContent=`${grade}-grade · ${fmt(finalScore)} pts`;els.shareText.textContent=`${game.cfg.name} run · ${game.leaks} leaks · ${avg?avg.toFixed(2):'—'} ms avg · ${Math.round(game.stability)}% stability · AxonOS Evolver v${VERSION}.`;els.nextTip.textContent=game.leaks?'Deny every raw access request and answer before the card deadline.':'Push combo without sacrificing the privacy vault.';
      els.leaderResult.innerHTML=P.leaders.slice(0,5).map((x,i)=>`<div class="miniItem"><span>#${i+1} ${escapeHTML(x.mode||'Run')} · ${escapeHTML(x.grade||'—')}</span><strong>${fmt(x.score||0)}</strong></div>`).join('');renderHome();show('result');beep(grade==='S'?'gold':'ok')
    }

    function updateHUD(){
      if(!game)return;els.scoreHud.textContent=fmt(game.score);els.stabilityHud.textContent=Math.round(game.stability)+'%';els.leaksHud.textContent=game.leaks;els.comboHud.textContent=game.combo;els.comboLabel.textContent='combo x'+game.combo;els.timeHud.textContent=Math.max(0,Math.ceil(game.time));const lastLatency=game.latencies.length?game.latencies[game.latencies.length-1]:0;els.latencyHud.textContent=lastLatency?lastLatency.toFixed(2)+'ms':'—';els.rivalText.textContent=P.best?`Beat ${fmt(P.best)} local best.`:'Beat your best score.';
      if(game.phase==='choose'&&game.choiceDue){const ms=Math.max(0,game.choiceDue-now());els.lockLabel.textContent=`Intent gate · ${(ms/1000).toFixed(1)}s`;els.holdHint.textContent=`Choose the safe path in ${(ms/1000).toFixed(1)}s.`}
    }

    function tick(dt){
      if(!game||game.paused||game.finished)return;
      game.time-=dt/1000;if(game.time<=0){finish('timeout');return}
      const spd=.42*game.cfg.speed;game.needle+=game.needleDir*spd*dt/1000;if(game.needle>1){game.needle=1;game.needleDir=-1}if(game.needle<0){game.needle=0;game.needleDir=1}els.needle.style.left=(game.needle*100)+'%';
      if(game.holding){game.holds+=dt;const inGold=game.needle>=GOLD_MIN&&game.needle<=GOLD_MAX;els.lockLabel.textContent=inGold?'Gold lock · release':'Stabilizing';game.stability=clamp(game.stability+(inGold?.018:-.010)*dt/16,0,100);if(game.rnd()<.006*game.cfg.noise){game.artifact=1;game.stability=clamp(game.stability-1.1,0,100);log('artifact pulse rejected by guard','warn')}}
      else if(game.phase==='hold'){els.lockLabel.textContent='Hold to stabilize'}
      if(game.phase==='choose'){game.stability=clamp(game.stability-.012*dt/16,0,100)}
      updateHUD();
    }

    function draw(t){
      const w=els.canvas.width,h=els.canvas.height;ctx.clearRect(0,0,w,h);ctx.fillStyle='#060912';ctx.fillRect(0,0,w,h);ctx.strokeStyle='rgba(255,255,255,.045)';ctx.lineWidth=1;for(let x=0;x<w;x+=64){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}for(let y=0;y<h;y+=52){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
      const channels=[.28,.50,.72];const colors=['rgba(125,231,255,.9)','rgba(241,199,107,.9)','rgba(199,166,255,.82)'];const noise=(game?game.cfg.noise:1);for(let c=0;c<3;c++){ctx.beginPath();ctx.lineWidth=2;ctx.strokeStyle=colors[c];for(let x=0;x<w;x++){const p=(x/w)*Math.PI*8;const base=Math.sin(p+t/520+c*1.7)*24+Math.sin(p*2.7+t/740+c)*9;const jitter=Math.sin(x*.083+t/90+c)*5*noise;const artifact=(game&&game.artifact&&x>w*.53&&x<w*.57)?(c===1?-96:72):0;const y=h*channels[c]+base+jitter+artifact;if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)}ctx.stroke()}
      if(game){game.artifact=Math.max(0,game.artifact-.025);ctx.fillStyle='rgba(241,199,107,.08)';ctx.fillRect(w*GOLD_MIN,0,w*(GOLD_MAX-GOLD_MIN),h);ctx.fillStyle='rgba(255,255,255,.72)';ctx.font='22px ui-monospace,monospace';ctx.fillText(`synthetic-signal · FSM-stable · local-only · v${VERSION}`,24,40);ctx.fillStyle='rgba(147,164,187,.9)';ctx.font='18px ui-monospace,monospace';ctx.fillText(`phase=${game.phase} score=${Math.round(game.score)} leaks=${game.leaks} stability=${Math.round(game.stability)}%`,24,h-30)}
    }

    function loop(){if(!game||game.finished)return;const t=now();const dt=Math.min(50,t-lastTick);lastTick=t;tick(dt);if(!game||game.finished)return;draw(t);raf=requestAnimationFrame(loop)}

    function pointerDown(e){if(!game||game.finished||game.paused||game.phase!=='hold'||game.holding||els.holdPad.disabled)return;if(e&&e.button!==undefined&&e.button!==0)return;if(e&&e.preventDefault)e.preventDefault();game.holding=true;game.holdStart=now();game.pointerId=e&&e.pointerId!==undefined?e.pointerId:null;try{if(game.pointerId!==null&&els.holdPad.setPointerCapture)els.holdPad.setPointerCapture(game.pointerId)}catch{}els.holdPad.classList.add('holding');els.holdTitle.textContent='Stabilizing';els.holdHint.textContent='Release inside gold.'}
    function cancelHold(reason='signal interrupted'){if(!game||!game.holding)return;game.holding=false;game.pointerId=null;els.holdPad.classList.remove('holding');els.holdTitle.textContent='Hold signal';els.holdHint.textContent='Release when the cursor enters gold.';log(reason,'warn')}
    function pointerUp(e){if(!game||game.finished||game.paused||game.phase!=='hold'||!game.holding)return;if(e&&e.pointerId!==undefined&&game.pointerId!==null&&e.pointerId!==game.pointerId)return;if(e&&e.preventDefault)e.preventDefault();try{if(game.pointerId!==null&&els.holdPad.releasePointerCapture)els.holdPad.releasePointerCapture(game.pointerId)}catch{}game.pointerId=null;game.holding=false;els.holdPad.classList.remove('holding');const held=now()-game.holdStart;const inGold=game.needle>=GOLD_MIN&&game.needle<=GOLD_MAX;if(inGold&&held>220){game.score+=450+Math.round(held/10);game.stability=clamp(game.stability+5,0,100);beep('gold');showCards()}else{game.combo=0;game.stability=clamp(game.stability-8,0,100);game.score=Math.max(0,game.score-120);els.coachText.innerHTML='<b>Coach:</b> wait for gold.<br>A clean lock is worth more than panic speed.';log('lock rejected: release outside gold band','bad');beep('bad');updateHUD();els.holdTitle.textContent='Hold signal';els.holdHint.textContent='Try again: release in gold.'}}

    function pause(){if(!game||game.finished||game.paused)return;cancelHold('runtime paused');game.paused=true;if(game.phase==='choose'&&game.choiceDue){game.choiceRemainingMs=Math.max(250,game.choiceDue-now());clearTimer('choiceTimer')}if(game.transitionTimer&&game.transitionDue){game.transitionRemainingMs=Math.max(0,game.transitionDue-now());clearTimer('transitionTimer')}els.pauseModal.classList.add('active');log('runtime paused','warn')}
    function resume(){if(!game||game.finished||!game.paused)return;game.paused=false;els.pauseModal.classList.remove('active');lastTick=now();if(game.phase==='choose'&&!game.answered)armChoiceTimer(game.choiceRemainingMs||choiceWindowMs());if(game.phase==='resolving')scheduleTransition(game.transitionRemainingMs||250);log('runtime resumed','ok');stopLoop();loop()}
    function abort(){if(game)cleanupRun();game=null;lastResult=null;els.cardsGrid.innerHTML='';els.kernelLog.innerHTML='';els.pauseModal.classList.remove('active');setHoldEnabled(true);show('home');renderHome()}
    function homeFromResult(){if(game)cleanupRun();game=null;show('home');renderHome()}

    function resultText(){const r=lastResult;if(!r)return'';return `I became the Brain OS: ${r.grade}-grade · ${fmt(r.score)} pts · ${r.leaks} leaks · ${r.avg?r.avg.toFixed(2):'—'} avg latency · AxonOS Evolver v${VERSION} · https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/`}
    async function copy(text){try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);toast('Copied');return}throw new Error('clipboard unavailable')}catch{try{const ta=document.createElement('textarea');ta.value=text;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.top='0';ta.style.left='0';ta.style.opacity='0';document.body.appendChild(ta);ta.focus();ta.select();const ok=document.execCommand('copy');ta.remove();toast(ok?'Copied':'Copy blocked')}catch{toast('Copy blocked')}}}
    function downloadCard(){const r=lastResult;if(!r){toast('No result yet');return}const c=els.shareCanvas,ctx=shareCtx;ctx.clearRect(0,0,c.width,c.height);const g=ctx.createLinearGradient(0,0,c.width,c.height);g.addColorStop(0,'#050509');g.addColorStop(.5,'#111827');g.addColorStop(1,'#050509');ctx.fillStyle=g;ctx.fillRect(0,0,c.width,c.height);ctx.strokeStyle='rgba(241,199,107,.55)';ctx.lineWidth=4;ctx.strokeRect(42,42,c.width-84,c.height-84);ctx.fillStyle='#f1c76b';ctx.font='44px ui-sans-serif,system-ui';ctx.fillText('AXONOS · BECOME THE BRAIN OS',80,130);ctx.fillStyle='#ffffff';ctx.font='bold 106px ui-sans-serif,system-ui';ctx.fillText(`${r.grade}-GRADE`,80,300);ctx.font='bold 78px ui-sans-serif,system-ui';ctx.fillText(`${fmt(r.score)} POINTS`,80,405);ctx.fillStyle='#cbd7ea';ctx.font='38px ui-sans-serif,system-ui';ctx.fillText(`${r.leaks} leaks · ${r.avg?r.avg.toFixed(2)+'ms':'—'} avg latency · ${r.stability}% stability`,80,500);ctx.fillStyle='#7de7ff';ctx.font='32px ui-sans-serif,system-ui';ctx.fillText(`AxonOS Evolver v${VERSION} · local-only · reads no neural data`,80,760);const a=document.createElement('a');a.download=SHARE_FILE;a.href=c.toDataURL('image/png');a.style.display='none';document.body.appendChild(a);a.click();setTimeout(()=>a.remove(),0);toast('Card downloaded')}

    function bindSafe(){
      els.startBtn.addEventListener('click',()=>start(selectedMode));els.dailyBtn.addEventListener('click',()=>start('daily'));els.howBtn.addEventListener('click',()=>show('how'));els.howStartBtn.addEventListener('click',()=>start(selectedMode));els.howCloseBtn.addEventListener('click',()=>show('home'));els.brandHome.addEventListener('click',e=>{e.preventDefault();abort()});
      els.soundBtn.addEventListener('click',()=>{settings.sound=!settings.sound;saveJSON('settings',settings);renderHome();if(settings.sound)beep('gold')});
      els.motionBtn.addEventListener('click',()=>{settings.motion=!settings.motion;saveJSON('settings',settings);renderHome()});
      els.holdPad.addEventListener('pointerdown',pointerDown);window.addEventListener('pointerup',pointerUp);window.addEventListener('pointercancel',e=>{cancelHold('pointer cancelled')});els.holdPad.addEventListener('lostpointercapture',()=>{cancelHold('pointer capture lost')});
      window.addEventListener('keydown',e=>{if(e.code==='Space'){if(!game||e.repeat||game.phase!=='hold')return;e.preventDefault();pointerDown(e)}if(e.key==='Escape'&&game&&!game.finished)pause()});
      window.addEventListener('keyup',e=>{if(e.code==='Space')pointerUp(e)});
      els.pauseBtn.addEventListener('click',pause);els.abortBtn.addEventListener('click',abort);els.resumeBtn.addEventListener('click',resume);els.abortFromModalBtn.addEventListener('click',abort);
      els.retryBtn.addEventListener('click',()=>start(activeMode()));els.homeBtn.addEventListener('click',homeFromResult);els.copyBtn.addEventListener('click',()=>copy(resultText()));els.challengeBtn.addEventListener('click',()=>{const r=lastResult;copy(`${CHALLENGE_PREFIX}-${r?r.mode:selectedMode}-${todayKey()}-${(r?r.seed:0).toString(36)}`)});els.downloadBtn.addEventListener('click',downloadCard);
      document.addEventListener('visibilitychange',()=>{if(document.hidden&&game&&!game.finished&&!game.paused)pause()});window.addEventListener('blur',()=>{if(game&&game.holding)cancelHold('window lost focus')});
    }

    normalizeProfile();bindSafe();renderHome();draw(now());
  })();
  