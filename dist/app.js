const pages = [
  {key:'about', number:'01', title:'个人介绍', en:'ABOUT', hint:'个人简介 / 教育经历 / 联系方式'},
  {key:'research', number:'02', title:'主要研究', en:'RESEARCH', hint:'研究方向 / 研究项目 / 学术笔记'},
  {key:'teaching', number:'03', title:'教学计划', en:'TEACHING', hint:'课程安排 / 教学日历 / 课程资料'},
  {key:'activities', number:'04', title:'参与活动', en:'ACTIVITIES', hint:'学术会议 / 交流访问 / 学术服务'},
  {key:'publications', number:'05', title:'学术发表', en:'PUBLICATIONS', hint:'期刊论文 / 会议论文 / 预印本'},
  {key:'projects', number:'06', title:'工程项目', en:'PROJECTS', hint:'书籍写作 / 分卷 PDF / 阅读与下载'}
];
const guestbookPage = {key:'guestbook', number:'07', title:'留言板', en:'GUESTBOOK', hint:'问题 / 想法 / 交流'};
const main = document.querySelector('#main');
const nav = document.querySelector('#primary-nav');
const menu = document.querySelector('.menu-toggle');
let currentPage = 'home';
const arrow = '<span aria-hidden="true">↗</span>';
const ACADEMIC_EMAIL = 'daizihao@amss.ac.cn';
const ACADEMIC_IDENTIFIERS = [
  {label:'arXiv',en:'AUTHOR ID',value:null,url:null},
  {label:'ORCID',en:'RESEARCHER ID',value:null,url:null}
];
const HOME_QUOTES = [
  {
    "text": "我们的工作或许微小，却具有某种恒久性。",
    "author": "哈代",
    "work": "一个数学家的辩白",
    "translation": true,
    "sourceUrl": "https://web.njit.edu/~akansu/PAPERS/GHHardy-AMathematiciansApology.pdf#page=13",
    "sourceLocation": "§6，原书第9页"
  },
  {
    "text": "凭逻辑证明，凭直觉创造。",
    "author": "庞加莱",
    "work": "科学与方法",
    "translation": true,
    "sourceUrl": "https://henripoincarepapers.univ-nantes.fr/chp/text/hp1999sm",
    "sourceLocation": "第二编第二章，§9"
  },
  {
    "text": "学而不思则罔，思而不学则殆。",
    "author": "孔子",
    "work": "论语·为政",
    "translation": false,
    "sourceUrl": "https://ctext.org/analects/wei-zheng/zh",
    "sourceLocation": "第二篇第十五章"
  },
  {
    "text": "数是人类心灵的自由创造。",
    "author": "戴德金",
    "work": "数是什么，数应当是什么？",
    "translation": true,
    "sourceUrl": "https://www.math.ru.nl/werkgroepen/gmfw/bronnen/dedekind1.html",
    "sourceLocation": "第一版序言，第III页"
  },
  {
    "text": "正确地看待数学，它既有真理，也有至高的美。",
    "author": "罗素",
    "work": "数学的研究",
    "translation": true,
    "sourceUrl": "https://www.gutenberg.org/files/25447/25447-h/25447-h.htm",
    "sourceLocation": "The Study of Mathematics，1918年版第60页"
  },
  {
    "text": "要有勇气运用你自己的理智。",
    "author": "康德",
    "work": "回答这个问题：什么是启蒙？",
    "translation": true,
    "sourceUrl": "https://www.korpora.org/kant/aa08/035.html",
    "sourceLocation": "学院版VIII，第35页，第6–7行"
  },
  {
    "text": "仅有良好的头脑还不够，还要善于运用它。",
    "author": "笛卡尔",
    "work": "谈谈方法",
    "translation": true,
    "sourceUrl": "https://www.unicaen.fr/puc/sources/prodescartes/consult/descartes/Oeuvres/Oeuvres_Descartes/discours_de_la_methode.xml/dm_preface.html",
    "sourceLocation": "第一部分开头，AT VI，第2页"
  },
  {
    "text": "所有卓越之物，都既艰难又稀少。",
    "author": "斯宾诺莎",
    "work": "伦理学",
    "translation": true,
    "sourceUrl": "https://www.iliesi.cnr.it/spinoza/ethica/ethica_xhtml.html",
    "sourceLocation": "第五部命题42附释，最后一句"
  },
  {
    "text": "问渠那得清如许？为有源头活水来。",
    "author": "朱熹",
    "work": "观书有感·其一",
    "translation": false,
    "sourceUrl": "https://zh.wikisource.org/wiki/%E8%A7%80%E6%9B%B8%E6%9C%89%E6%84%9F",
    "sourceLocation": "其一，后二句"
  },
  {
    "text": "我们必须知道，我们终将知道。",
    "author": "希尔伯特",
    "work": "Naturerkennen und Logik",
    "translation": true,
    "sourceUrl": "https://www.swr.de/swrkultur/wissen/archivradio/david-hilbert-1930-radioansprache-102.html",
    "sourceLocation": "1930年9月8日广播演讲结尾"
  }
];

const rule = '<div class="skeleton-lines" aria-hidden="true"><i></i><i></i><i></i></div>';
function sectionHead(no,title,en){return `<div class="section-heading"><div><span class="section-no">${no}</span><h2>${title}</h2></div><span class="mono">${en}</span></div>`;}
function emptyState(title,description,small=false){return `<div class="empty-state${small?' compact':''}"><span class="empty-symbol" aria-hidden="true"><i></i><i></i><i></i></span><h3>${title}</h3><p>${description}</p></div>`;}
function academicEmailControl(){return `<button type="button" class="email-copy" data-copy-email aria-label="复制学术邮箱 ${ACADEMIC_EMAIL}" title="点击复制学术邮箱"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/></svg><span class="email-address">${ACADEMIC_EMAIL}</span><span class="email-copy-label" role="status" aria-live="polite">复制</span></button>`;}
async function copyAcademicEmail(button){
  if(button.disabled)return;
  const feedback=button.querySelector('.email-copy-label');
  const activeElement=document.activeElement;
  let copied=false;
  button.disabled=true;
  button.setAttribute('aria-busy','true');
  if(feedback)feedback.textContent='复制中';
  try{
    if(typeof navigator!=='undefined'&&typeof navigator.clipboard?.writeText==='function'){
      try{await navigator.clipboard.writeText(ACADEMIC_EMAIL);copied=true;}catch{}
    }
    if(!copied&&typeof document.execCommand==='function'){
      const field=document.createElement('textarea');
      field.value=ACADEMIC_EMAIL;
      field.readOnly=true;
      field.tabIndex=-1;
      field.setAttribute('aria-hidden','true');
      field.style.position='fixed';
      field.style.left='-9999px';
      field.style.top='0';
      document.body.appendChild(field);
      try{field.select();copied=document.execCommand('copy')===true;}
      finally{field.remove();}
    }
  }catch{
    copied=false;
  }finally{
    button.disabled=false;
    button.removeAttribute('aria-busy');
    if(feedback)feedback.textContent=copied?'已复制':'未能复制';
    button.title=copied?'学术邮箱已复制到剪贴板':`未能复制，请选中 ${ACADEMIC_EMAIL} 手动复制`;
    if(document.activeElement===document.body&&activeElement?.isConnected!==false)activeElement?.focus({preventScroll:true});
  }
}
function quoteAttribution(quote){return ` — ${quote.author}`;}
function homeQuoteMarkup(){
  const quote=HOME_QUOTES[quoteIndex];
  return `<div class="hero-quotes" role="region" aria-label="名人引语，悬停或聚焦可暂停" tabindex="0" title="悬停暂停，移开继续"><p class="quote-copy" id="hero-quote-content" aria-live="off" aria-atomic="true"><q id="hero-quote-text" class="hero-quote-text">${quote.text}</q><span id="hero-quote-attribution" class="hero-quote-attribution">${quoteAttribution(quote)}</span></p></div>`;
}
function syncQuoteInteraction(){
  quoteHovered=false;
  quoteFocused=false;
  if(currentPage!=='home')return;
  const region=document.querySelector('.hero-quotes');
  quoteHovered=region?.matches?.(':hover')===true;
  quoteFocused=region?.contains(document.activeElement)===true;
}
function stopQuoteRotation(){
  if(quoteTimer!==null){clearTimeout(quoteTimer);quoteTimer=null;}
}
function changeHomeQuote(direction){
  if(currentPage!=='home')return;
  const text=document.querySelector('#hero-quote-text');
  const attribution=document.querySelector('#hero-quote-attribution');
  if(!text||!attribution)return;
  quoteIndex=(quoteIndex+direction+HOME_QUOTES.length)%HOME_QUOTES.length;
  const quote=HOME_QUOTES[quoteIndex];
  quoteAnimation?.cancel();
  text.textContent=quote.text;
  attribution.textContent=quoteAttribution(quote);
  if(!motionPreference.matches&&typeof text.animate==='function'){
    quoteAnimation=text.animate([{opacity:.25},{opacity:1}],{duration:320,easing:'ease-out'});
  }
}
function startQuoteRotation(){
  stopQuoteRotation();
  if(currentPage!=='home'||quoteHovered||quoteFocused||motionPreference.matches||document.hidden)return;
  quoteTimer=setTimeout(()=>{
    quoteTimer=null;
    if(currentPage!=='home'||document.hidden||motionPreference.matches||quoteHovered||quoteFocused)return;
    changeHomeQuote(1);
    startQuoteRotation();
  },QUOTE_ROTATION_MS);
}
function academicIdentifierRows(){
  return ACADEMIC_IDENTIFIERS.map(identifier=>{
    const value=String(identifier.value??'').trim();
    const content=value?(identifier.url?`<a class="contact-link" href="${escapeResearchText(identifier.url)}" target="_blank" rel="noopener noreferrer">${escapeResearchText(value)} ${arrow}</a>`:escapeResearchText(value)):'';
    return `<div data-academic-identifier="${escapeResearchText(identifier.label)}"><dt>${escapeResearchText(identifier.label)} <span>${escapeResearchText(identifier.en)}</span></dt><dd${value?'':' class="contact-placeholder" aria-label="尚未填写"'}>${content}</dd></div>`;
  }).join('');
}
function homeLatestUpdates(){
  const latestResearch=RESEARCH_UPDATES.filter(update=>update.date&&update.title)
    .slice().sort((left,right)=>right.date.localeCompare(left.date))[0];
  const course=TEACHING_DATA.course;
  const latestActivity=filteredActivities()[0];
  return [
    {key:'research',label:'研究动态',
      title:latestResearch?.title??'研究方向概览',
      summary:latestResearch?[latestResearch.date,latestResearch.summary].filter(Boolean).join(' · '):RESEARCH_DIRECTIONS.map(direction=>direction.title).join(' · ')},
    {key:'teaching',label:'教学安排',title:course.name,
      summary:[course.term,course.role,course.weeks].filter(Boolean).join(' · ')},
    {key:'activities',label:'交流活动',title:latestActivity?.title??'学术活动待补充',
      summary:latestActivity?[`${latestActivity.startLabel}—${latestActivity.endLabel}`,latestActivity.location,latestActivity.participation].filter(Boolean).join(' · '):''}
  ];
}
function homeUpdatesMarkup(){
  return homeLatestUpdates().map(update=>`<a href="#/${update.key}"><span class="row-code">${update.label}</span><span class="update-content"><strong>${escapeResearchText(update.title)}</strong><small class="update-meta">${escapeResearchText(update.summary)}</small></span>${arrow}</a>`).join('');
}
function home(){return `
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-image" role="img" aria-label="薄雾、青山与水岸之间的现代中式建筑"></div><div class="hero-wash"></div>
    <div class="hero-topline"><span>学术档案 <i></i> ACADEMIC ARCHIVE</span><span class="hero-edition">序 / PROLOGUE</span></div>
    <div class="hero-content"><div class="eyebrow"><span></span> 在此，记录求知的足迹</div><h1 id="hero-title">山水有界<br><em>学思无涯</em><span class="title-dot">。</span></h1>${homeQuoteMarkup()}<div class="hero-identity"><span>EverStarine</span><i></i><span>学者、数学研究者、思考者</span></div><div class="hero-actions"><a class="button primary" href="#/about">了解更多 ${arrow}</a><a class="text-link" href="#/guestbook">留言板 <span aria-hidden="true">→</span></a></div></div>
    <div class="landscape-caption"><span class="crosshair" aria-hidden="true">＋</span><span>山有回响 · 水自成章<small>LANDSCAPE / KNOWLEDGE / POSSIBILITY</small></span></div>
    <div class="hero-bottom"><span><i class="status-dot"></i> EverStarine · 学术主页</span><a href="#explore" data-scroll="explore">向下探索 <span aria-hidden="true">↓</span></a></div>
  </section>
  <section class="explore section-wrap" id="explore" aria-labelledby="explore-title"><div class="section-heading"><div><span class="section-no">INDEX</span><h2 id="explore-title">循此而入</h2></div><span class="mono">SIX CHAPTERS · ONE JOURNEY</span></div><div class="chapter-grid">${pages.map(p=>`<a class="chapter" href="#/${p.key}"><div class="chapter-top"><span>${p.number}</span>${arrow}</div><span class="chapter-en">${p.en}</span><h3>${p.title}</h3><p>${p.hint}</p><span class="chapter-line" aria-hidden="true"></span></a>`).join('')}</div></section>
  <section class="updates section-wrap">${sectionHead('UPDATES','近况与记录','RESEARCH & ACADEMIC LIFE')}<div class="updates-layout"><div class="updates-label"><span class="label-kicker">持续探索，慢慢积累。</span><p>研究方向、当前课程，<br>以及最近的学术交流。</p></div><div class="update-rows">${homeUpdatesMarkup()}</div></div></section>`;}
function pageHeader(p){return `<div class="page-header section-wrap">${detailBreadcrumb(null,p.title)}<div class="page-title-row"><div><div class="eyebrow"><span></span> ${p.en}</div><h1>${p.title}</h1></div><span class="page-number" aria-hidden="true">${p.number}</span></div><div class="page-header-bottom"><p>${p.hint.replaceAll(' / ',' · ')}</p><span class="draft-marker"><i></i> ${p.key==='projects'?'书籍编写中':p.key==='guestbook'?'留言功能准备中':p.key==='teaching'?'教学工作':p.key==='activities'?'学术交流':'内容待补充'}</span></div></div>`;}
function about(){return `
  <div class="section-wrap page-body about-layout">
    <aside class="profile-card">
      <div class="portrait-placeholder"><div class="portrait-frame"><svg viewBox="0 0 120 140" aria-hidden="true"><circle cx="60" cy="47" r="19"/><path d="M24 116v-10a36 36 0 0 1 72 0v10M16 126h88"/></svg></div><span>个人照片待补充</span><b aria-hidden="true">＋</b></div>
      <div class="profile-details">
        <h2>EverStarine</h2><p class="mono">PERSONAL PROFILE</p>
        <dl>
          <div class="profile-affiliation"><dt>所属单位</dt><dd><span class="affiliation-entry">中国科学院数学与系统科学研究院<small lang="en">（Academy of Mathematics and Systems Science）</small></span><span class="affiliation-entry">数学机械化重点实验室<small lang="en">（Key Laboratory of Mathematics Mechanization）</small></span></dd></div>
          <div><dt>职称</dt><dd>无</dd></div>
          <div><dt>研究领域</dt><dd>基础数学、应用数学</dd></div>
        </dl>
      </div>
    </aside>
    <div class="about-main">
      <section>${sectionHead('01','个人简介','BIOGRAPHY')}<div class="prose-placeholder biography"><p>学者、数学研究者、思考者。</p></div></section>
      <section>${sectionHead('02','教育与工作经历','EXPERIENCE')}
        <ol class="experience-timeline">
          <li class="timeline-placeholder"><span class="timeline-point" aria-hidden="true"></span><div><span class="mono muted"><time datetime="2024-09">2024.9</time> — 至今</span><h3>博士研究生</h3><p>中国科学院数学与系统科学研究院</p></div></li>
          <li class="timeline-placeholder"><span class="timeline-point" aria-hidden="true"></span><div><span class="mono muted"><time datetime="2021-09">2021.9</time> — <time datetime="2024-06">2024.6</time></span><h3>硕士研究生</h3><p>中国科学院数学与系统科学研究院</p></div></li>
          <li class="timeline-placeholder"><span class="timeline-point" aria-hidden="true"></span><div><span class="mono muted"><time datetime="2017-09">2017.9</time> — <time datetime="2021-06">2021.6</time></span><h3>本科</h3><p>南开大学数学科学学院</p></div></li>
        </ol>
      </section>
      <section>${sectionHead('03','联系方式','CONTACT')}<dl class="contact-grid">
        <div><dt>学术邮箱 <span>ACADEMIC EMAIL</span></dt><dd>${academicEmailControl()}</dd></div>
        <div><dt>办公地点 <span>OFFICE</span></dt><dd>数学与系统科学研究院南楼210</dd></div>
        <div><dt>GitHub <span>CODE & PROJECTS</span></dt><dd><a class="contact-link" href="https://github.com/EverStarine" target="_blank" rel="noopener noreferrer">EverStarine <span aria-hidden="true">↗</span></a></dd></div>
        <div><dt>个人简历 <span>CURRICULUM VITAE</span></dt><dd>文件待补充</dd></div>
        ${academicIdentifierRows()}
      </dl></section>
    </div>
  </div>`;}
function escapeResearchText(value){return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');}
function researchKeywords(direction){return `<ul class="research-keywords" aria-label="研究关键词">${direction.keywords.map(word=>`<li>${escapeResearchText(word)}</li>`).join('')}</ul>`;}
function research(){return `<div class="section-wrap page-body">
  <section>${sectionHead('01','研究方向','RESEARCH AREAS')}<div class="research-grid">
    ${RESEARCH_DIRECTIONS.map((direction,index)=>`<a class="research-card" href="#/${direction.key}" aria-labelledby="research-${direction.slug}-title"><div class="research-art art-${index}" aria-hidden="true"><span></span><span></span><span></span><i>R / ${direction.number}</i></div><div class="research-card-body"><span class="mono muted">DIRECTION ${direction.number}</span><h3 id="research-${direction.slug}-title">${escapeResearchText(direction.title)}</h3><p>${escapeResearchText(direction.summary)}</p>${researchKeywords(direction)}<span class="research-card-link">详细介绍 ${arrow}</span></div></a>`).join('')}
  </div></section>
  <section class="spaced-section">${sectionHead('02','研究项目','PROJECTS')}<div class="project-shell"><div class="table-head"><span>项目名称 / PROJECT</span><span>研究周期</span><span>进展</span></div>${emptyState('研究项目待补充','项目介绍与相关成果将在这里展示。',true)}</div></section>
  <section class="spaced-section note-section"><div><span class="mono muted">WORKING NOTES</span><h2>思考与札记</h2><p>记录研究过程中的问题与想法。</p></div><div class="note-placeholder"><span>学术笔记待补充</span>${rule}</div></section>
</div>`;}
function detailBreadcrumb(parent,currentTitle,ancestors=[]){
  const trail=[{key:'',title:'首页'},...(parent?[parent]:[]),...ancestors];
  return `<nav class="breadcrumb detail-breadcrumb" aria-label="当前位置"><ol>${trail.map(item=>`<li><a href="#/${escapeResearchText(item.key)}">${escapeResearchText(item.title)}</a></li><li class="breadcrumb-divider" aria-hidden="true">/</li>`).join('')}<li><span aria-current="page">${escapeResearchText(currentTitle)}</span></li></ol></nav>`;
}
function researchDetailHeader(direction){return `<div class="page-header section-wrap research-detail-header">
  ${detailBreadcrumb({key:'research',title:'主要研究'},direction.title)}
  <div class="page-title-row"><div><div class="eyebrow"><span></span> ${escapeResearchText(direction.en)}</div><h1>${escapeResearchText(direction.title)}</h1></div><span class="page-number" aria-hidden="true">R${direction.number}</span></div>
  <div class="page-header-bottom"><p>${escapeResearchText(direction.field)} · ${escapeResearchText(direction.keywords.slice(1,3).join(' · '))}</p><span class="draft-marker"><i></i> 介绍初稿</span></div>
</div>`;}
function researchDetail(direction){return `<div class="section-wrap page-body research-detail-body">
  <section class="research-overview" aria-label="方向概述">${direction.overview.map(paragraph=>`<p>${escapeResearchText(paragraph)}</p>`).join('')}${researchKeywords(direction)}</section>
  <section class="spaced-section">${sectionHead('01','研究主题','RESEARCH THEMES')}<div class="research-theme-grid">${direction.themes.map((theme,index)=>`<article class="research-theme"><span class="mono">0${index+1}</span><h3>${escapeResearchText(theme.title)}</h3><p>${escapeResearchText(theme.description)}</p></article>`).join('')}</div></section>
  <section class="spaced-section">${sectionHead('02','关注的问题','QUESTIONS')}<ol class="research-questions">${direction.questions.map(question=>`<li>${escapeResearchText(question)}</li>`).join('')}</ol></section>
  <section class="spaced-section">${sectionHead('03','方法与工具','METHODS & TOOLS')}<div class="research-methods"><p>${escapeResearchText(direction.methods)}</p></div></section>
</div>`;}
const expandedPastCourseIds = new Set();
function teachingState(){
  const query=new URLSearchParams(location.hash.split('?')[1]||'');
  return {scope:query.get('view')==='past'?'past':'current',expandedId:query.get('course')};
}
function teachingPagesForCourse(data=TEACHING_DATA){
  if(data===TEACHING_DATA)return TEACHING_PAGES;
  return TEACHING_PAGES.map(page=>{
    const kind=page.key.split('/').pop();
    const description=kind==='syllabus'?'课程目标与教学内容':kind==='notes'?`${data.textbook?.title||'课程讲义'} · 参考书链接`:'讲义与试卷待补充';
    return {...page,key:`teaching/archive/${data.course.id}/${kind}`,courseId:data.course.id,description,hint:kind==='syllabus'?'课程目标 · 教学内容 · 学习建议':page.hint};
  });
}
function teachingPageData(page){return page.courseId?PAST_COURSES.find(data=>data.course.id===page.courseId):TEACHING_DATA;}
function teachingMaterials(data=TEACHING_DATA){
  return `<div class="materials-row">${teachingPagesForCourse(data).map((page,index)=>`<a class="teaching-material" href="#/${page.key}"><span class="material-icon" aria-hidden="true">${['▤','▥','▧'][index]}</span><h3>${escapeResearchText(page.title)} <span aria-hidden="true">↗</span></h3><p>${escapeResearchText(page.description)}</p></a>`).join('')}</div>`;
}
function courseCard(data=TEACHING_DATA){
  const course=data.course;
  return `<article class="teaching-course"><div><p class="course-term">${escapeResearchText(course.term)}</p><h3>${escapeResearchText(course.name)}</h3></div><div class="course-meta"><span>${escapeResearchText(course.role)}</span>${course.weeks?`<span>${escapeResearchText(course.weeks)}</span>`:''}</div></article>`;
}
function pastCourseList(courses=PAST_COURSES,expandedId=null){
  if(!courses.length)return emptyState('历年课程待补充','过去学期的课程资料将在这里整理。');
  const ordered=[...courses].sort((left,right)=>right.course.sortOrder-left.course.sortOrder||left.course.id.localeCompare(right.course.id));
  return `<div class="past-course-list">${ordered.map(data=>{
    const course=data.course;
    const open=expandedId===course.id||expandedPastCourseIds.has(course.id);
    return `<details class="past-course" id="past-course-${course.id}" data-course-id="${course.id}"${open?' open':''}><summary aria-controls="past-materials-${course.id}"><span class="past-course-label"><span class="course-term">${escapeResearchText(course.term)}</span><strong class="past-course-name">${escapeResearchText(course.name)}</strong></span><span class="course-meta">${escapeResearchText(course.role)}</span><span class="past-course-toggle"><span class="when-closed">展开</span><span class="when-open">收起</span><span class="past-course-mark" aria-hidden="true">＋</span></span></summary><div class="past-course-materials" id="past-materials-${course.id}">${teachingMaterials(data)}</div></details>`;
  }).join('')}</div>`;
}
function weeklySchedule(){
  const weekdays=['周一','周二','周三','周四','周五'];
  return `<div class="calendar-wrap"><table class="schedule teaching-schedule"><caption class="sr-only">${TEACHING_DATA.course.name}，${TEACHING_DATA.course.term}，${TEACHING_DATA.course.weeks}，按上午、下午、晚上分组的13课时周课表</caption><colgroup><col class="schedule-period-group"><col class="schedule-period-number"><col span="5"></colgroup><thead><tr><th scope="colgroup" colspan="2">时间</th>${weekdays.map(day=>`<th scope="col">${day}</th>`).join('')}</tr></thead>${TEACHING_DATA.periodGroups.map(group=>`<tbody aria-label="${group.label}">${group.periods.map((period,index)=>`<tr>${index===0?`<th class="period-group" scope="rowgroup" rowspan="${group.periods.length}">${group.label}</th>`:''}<th class="lesson-number" scope="row" aria-label="第${period}课时">${period}</th>${[1,2,3,4,5].map(day=>{
    const session=TEACHING_DATA.sessions.find(item=>item.day===day&&item.startPeriod<=period&&item.endPeriod>=period);
    if(session&&session.startPeriod!==period)return '';
    return session?`<td class="scheduled" rowspan="${session.endPeriod-session.startPeriod+1}" aria-label="${weekdays[day-1]}，第${session.startPeriod}–${session.endPeriod}课时，${escapeResearchText(session.type)}，${escapeResearchText(session.teacher)}，${escapeResearchText(session.room)}"><div class="schedule-session"><strong>${escapeResearchText(session.type)}</strong><span>${escapeResearchText(session.teacher)}</span><small>${escapeResearchText(session.room)}</small></div></td>`:'<td><span aria-label="暂无安排">—</span></td>';
  }).join('')}</tr>`).join('')}</tbody>`).join('')}</table></div>`;
}
function teachingContent(scope='current',expandedId=null){
  const courses=`<section>${sectionHead('01','课程安排','COURSES')}<div id="course-results">${scope==='past'?pastCourseList(PAST_COURSES,expandedId):courseCard()}</div></section>`;
  if(scope==='past')return courses;
  return courses+`<section class="spaced-section">${sectionHead('02','教学日历','WEEKLY SCHEDULE')}<p class="teaching-section-note">${TEACHING_DATA.course.name} · ${TEACHING_DATA.course.term} · ${TEACHING_DATA.course.weeks}</p>${weeklySchedule()}</section><section class="spaced-section">${sectionHead('03','课程资料','MATERIALS')}${teachingMaterials()}</section>`;
}
function teaching(){
  const {scope,expandedId}=teachingState();
  return `<div class="section-wrap page-body"><div class="filter-bar teaching-scope-filter"><div class="filter-group" role="group" aria-label="教学信息范围">${[{key:'current',title:'当前学期'},{key:'past',title:'历年课程'}].map(item=>`<button class="filter${scope===item.key?' active':''}" data-teaching="${item.key}" aria-pressed="${scope===item.key}">${item.title}</button>`).join('')}</div></div><div id="teaching-results" aria-live="polite">${teachingContent(scope,expandedId)}</div></div>`;
}
function teachingDetailHeader(page){
  const data=teachingPageData(page);
  const breadcrumb=page.courseId?detailBreadcrumb({key:'teaching?view=past',title:'教学计划'},page.title,[{key:`teaching?view=past&course=${encodeURIComponent(data.course.id)}`,title:data.course.name}]):detailBreadcrumb({key:'teaching',title:'教学计划'},page.title);
  return `<div class="page-header section-wrap teaching-detail-header">
  ${breadcrumb}
  <div class="page-title-row"><div><div class="eyebrow"><span></span> ${escapeResearchText(page.en)}</div><h1>${escapeResearchText(page.title)}</h1></div><span class="page-number" aria-hidden="true">${page.number}</span></div>
  <div class="page-header-bottom"><p>${escapeResearchText(page.hint)}</p><span class="draft-marker"><i></i> ${page.status}</span></div>
</div>`;
}
function courseContext(data=TEACHING_DATA){return `<p class="teaching-context">${[data.course.name,data.course.term,data.course.weeks||data.course.role].filter(Boolean).map(escapeResearchText).join(' · ')}</p>`;}
function teachingSyllabus(data=TEACHING_DATA){
  const syllabus=data.syllabus;
  if(!syllabus)return `<div class="section-wrap page-body teaching-detail-body">${courseContext(data)}<section>${sectionHead('01','教学大纲','SYLLABUS')}${emptyState('教学大纲待补充','课程目标与教学内容将在这里整理。',true)}</section></div>`;
  const sourceNote=data.textbook?`按${data.materialsNote?'当前提供的':''}《${escapeResearchText(data.textbook.title)}》目录整理，下列页码为教材印刷页码。具体进度随课程安排调整。`:'具体进度随课程安排调整。';
  return `<div class="section-wrap page-body teaching-detail-body">${courseContext(data)}<section>${sectionHead('01','课程目标','OBJECTIVES')}<p class="teaching-intro">${escapeResearchText(syllabus.intro)}</p><ol class="teaching-objectives">${syllabus.objectives.map(item=>`<li>${escapeResearchText(item)}</li>`).join('')}</ol></section><section class="spaced-section">${sectionHead('02','教学内容','CONTENTS')}<p class="teaching-section-note">${sourceNote}</p><div class="syllabus-modules">${syllabus.modules.map(module=>`<article class="syllabus-module"><div class="syllabus-module-title"><span class="mono">第${Number(module.number)}章</span><h3>${escapeResearchText(module.title)}</h3><span class="syllabus-page-range">第${module.range}页</span></div><p><span class="syllabus-label">主题</span>${escapeResearchText(module.topics)}</p><p><span class="syllabus-label">学习重点</span>${escapeResearchText(module.goal)}</p></article>`).join('')}</div>${syllabus.note?`<p class="teaching-section-note syllabus-extra-note">${escapeResearchText(syllabus.note)}</p>`:''}</section><section class="spaced-section">${sectionHead('03','学习建议','STUDY NOTES')}<ul class="teaching-advice">${syllabus.advice.map(item=>`<li>${escapeResearchText(item)}</li>`).join('')}</ul></section></div>`;
}
function formatPdfSize(bytes){return bytes>=1024*1024?`${(bytes/1024/1024).toFixed(2)} MB`:`${Math.round(bytes/1024)} KB`;}
function teachingPdfResource(pdf,title){
  return `<article class="teaching-resource"><div class="teaching-resource-info"><span class="resource-type mono">PDF</span><h3>${escapeResearchText(title)}</h3><p>${pdf.pages}页 · ${formatPdfSize(pdf.bytes)}</p></div><div class="resource-actions"><a href="${pdf.url}" target="_blank" rel="noopener" aria-label="阅读${escapeResearchText(title)}">阅读 <span aria-hidden="true">↗</span></a><a class="resource-download" href="${pdf.url}" download="${escapeResearchText(pdf.originalName)}" aria-label="下载${escapeResearchText(title)}">下载 PDF <span aria-hidden="true">↓</span></a></div></article>`;
}
function teachingReferenceBooks(data=TEACHING_DATA){
  if(!data.referenceBooks.length)return emptyState('参考书待补充','参考书的书名与网页链接将在这里整理。',true);
  return `<ul class="teaching-references">${data.referenceBooks.map(book=>`<li><a href="${escapeResearchText(book.url)}" target="_blank" rel="noopener" title="${escapeResearchText(book.linkTitle)}"><span>${escapeResearchText(book.title)}</span><span aria-hidden="true">↗</span></a></li>`).join('')}</ul>`;
}
function teachingNotes(data=TEACHING_DATA){return `<div class="section-wrap page-body teaching-detail-body">${courseContext(data)}${data.materialsNote?`<p class="teaching-section-note">${escapeResearchText(data.materialsNote)}</p>`:''}<section>${sectionHead('01','课程讲义','COURSE NOTES')}${data.textbook?teachingPdfResource(data.textbook,data.textbook.title):emptyState('课程讲义待补充','课程讲义将在这里整理。',true)}</section><section class="spaced-section">${sectionHead('02','参考书','REFERENCE BOOKS')}${teachingReferenceBooks(data)}</section></div>`;}
function teachingExercises(data=TEACHING_DATA){
  const handouts=data.handouts.length?`<div class="teaching-resource-list">${data.handouts.map(handout=>teachingPdfResource(handout,`第${handout.number}次 · ${handout.title}`)).join('')}</div><div class="teaching-pending"><span class="mono">第${String(data.handouts.length+1).padStart(2,'0')}次及后续</span><p>待补充</p></div>`:emptyState('习题课讲义待补充','习题课讲义将在这里整理。',true);
  return `<div class="section-wrap page-body teaching-detail-body">${courseContext(data)}<section>${sectionHead('01','习题课讲义','EXERCISE NOTES')}${handouts}</section><section class="spaced-section">${sectionHead('02','试卷','EXAM PAPERS')}<div class="exam-placeholders">${data.exams.map(exam=>`<article class="exam-placeholder"><h3>${escapeResearchText(exam.title)}</h3><p>待补充</p></article>`).join('')}</div></section></div>`;
}
function filteredActivities(category='全部活动'){
  return ACTIVITY_RECORDS.filter(item=>category==='全部活动'||item.category===category).sort((left,right)=>right.startDate.localeCompare(left.startDate)||left.id.localeCompare(right.id));
}
function activityRecordList(category='全部活动'){
  const records=filteredActivities(category);
  if(!records.length)return emptyState(`${category}待补充`,'相关活动将在这里整理。');
  return `<ol class="activity-list">${records.map(record=>`<li><article class="activity-record" data-activity-id="${escapeResearchText(record.id)}"><div class="activity-date"><span class="activity-year">${record.startDate.slice(0,4)}</span><p><time datetime="${record.startDate}">${record.startLabel}</time><span aria-hidden="true">—</span><time datetime="${record.endDate}">${record.endLabel}</time></p></div><div class="activity-record-body"><span class="activity-category">${escapeResearchText(record.category)}</span><h3>${escapeResearchText(record.title)}</h3>${record.subtitle?`<p class="activity-subtitle">${escapeResearchText(record.subtitle)}</p>`:''}<div class="activity-meta"><span>${record.category==='交流访问'?'访问地':'举办地'}：${escapeResearchText(record.location)}</span><span class="activity-participation">${escapeResearchText(record.participation)}</span></div>${record.detail?`<p class="activity-detail">${escapeResearchText(record.detail)}</p>`:''}</div></article></li>`).join('')}</ol>`;
}
function activities(){return `<div class="section-wrap page-body"><section>${sectionHead('01','活动记录','ACADEMIC EXCHANGE')}<div class="filter-bar"><div class="filter-group" role="group" aria-label="活动分类">${['全部活动','学术会议','交流访问','学术服务'].map((title,index)=>`<button class="filter${index===0?' active':''}" data-activity="${title}" aria-pressed="${index===0}">${title}</button>`).join('')}</div><span class="filter-caption" id="activity-count">${ACTIVITY_RECORDS.length} 条记录</span></div><div id="activity-results" aria-live="polite">${activityRecordList()}</div></section><section class="spaced-section activity-preview">${sectionHead('02','活动剪影','MOMENTS')}<div class="moment-placeholder"><div class="moment-frame" aria-hidden="true"><span>＋</span></div><div><span class="mono">MOMENTS TO COME</span><h3>交流，让思想相遇。</h3><p>活动照片与相关记录待补充</p></div></div></section></div>`;}
function publications(){return `<div class="section-wrap page-body"><section>${sectionHead('01','发表列表','PUBLICATION LIST')}<div class="publication-toolbar"><div class="filter-group" role="group" aria-label="发表类型">${['全部','期刊论文','会议论文','预印本'].map((t,i)=>`<button class="filter${i===0?' active':''}" data-publication="${t}" aria-pressed="${i===0}">${t}</button>`).join('')}</div><label class="search-box"><span class="search-icon" aria-hidden="true"></span><input type="search" id="publication-search" placeholder="搜索标题、作者或关键词" aria-label="搜索学术发表"><kbd aria-hidden="true">/</kbd></label></div><div class="publication-meta"><span id="publication-count">全部发表 · 0 项</span><span>按年份排列 <span aria-hidden="true">↓</span></span></div><div id="publication-results" aria-live="polite">${emptyState('学术发表待补充','论文题目、作者、发表信息及相关链接将在这里展示。')}</div><div class="publication-legend"><span><i></i> 发表记录将包含</span><span>论文题目</span><span>作者信息</span><span>发表年份</span><span>期刊 / 会议</span><span>全文 / DOI</span></div></section></div>`;}
function projects(){return `<div class="section-wrap page-body projects-page"><div class="projects-intro"><p>书稿仍在编写；各卷标注当前 PDF 文件日期。</p><span class="mono">2 PROJECTS / 8 PDF FILES</span></div><div class="book-projects">${BOOK_PROJECTS.map((project,index)=>`<section class="book-project" aria-labelledby="project-${project.id}"><div class="book-project-cover cover-${project.id}"><span class="mono">WRITING PROJECT / 0${index+1}</span><div class="book-cover-lines" aria-hidden="true"><i></i><i></i><i></i></div><h2 id="project-${project.id}">${project.name}</h2><span class="book-project-en">${project.en}</span><div class="book-cover-bottom"><span><i></i> 编写中</span><span>${project.books.length} 卷 · PDF</span></div></div><div class="book-project-content"><div class="book-list-heading"><span>分卷阅读</span><span>PDF LIBRARY</span></div><ol class="book-list">${project.books.map(book=>`<li class="book-row"><span class="book-volume">第${['一','二','三','四','五'][book.volume-1]}卷</span><div class="book-info"><h3>${book.title}</h3><p>${book.pages} 页 <i>·</i> ${(book.bytes/1048576).toFixed(1)} MB <i>·</i> 文件日期 <time datetime="${book.date}">${book.date}</time></p></div><div class="book-actions"><a class="book-read" href="${book.url}" target="_blank" rel="noopener noreferrer" type="application/pdf" aria-label="在线阅读${project.name}第${book.volume}卷：${book.title} PDF，新标签页打开">阅读 PDF <span aria-hidden="true">↗</span></a><a class="book-download" href="${book.url}" download="${project.name}-第${book.volume}卷.pdf" type="application/pdf" aria-label="下载${project.name}第${book.volume}卷 PDF">下载 <span aria-hidden="true">↓</span></a></div></li>`).join('')}</ol></div></section>`).join('')}</div></div>`;}
function guestbook(){return `<div class="section-wrap page-body"><section>${sectionHead('01','交流与留言','CONVERSATION')}${emptyState('暂无留言','留言功能准备中。')}</section></div>`;}
const ALL_TEACHING_PAGES = [...TEACHING_PAGES,...PAST_COURSES.flatMap(data=>teachingPagesForCourse(data))];
const teachingPageRenderers = {syllabus:teachingSyllabus,notes:teachingNotes,exercises:teachingExercises};
const renderers = {home,about,research,teaching,activities,publications,projects,guestbook, ...Object.fromEntries(ALL_TEACHING_PAGES.map(page=>[page.key,()=>teachingPageRenderers[page.key.split('/').pop()](teachingPageData(page))])), ...Object.fromEntries(RESEARCH_DIRECTIONS.map(direction=>[direction.key,()=>researchDetail(direction)]))};
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const QUOTE_ROTATION_MS = 8000;
let quoteIndex = 0;
let quoteHovered = false;
let quoteFocused = false;
let quoteTimer = null;
let quoteAnimation = null;
const indicators = new WeakMap();
const contentAnimations = new WeakMap();
const activeAnimations = new Set();
const pageOrder = ['home', ...pages.flatMap(page=>page.key==='research'?[page.key,...RESEARCH_DIRECTIONS.map(direction=>direction.key)]:page.key==='teaching'?[page.key,...ALL_TEACHING_PAGES.map(item=>item.key)]:[page.key]), guestbookPage.key];
let hasRendered = false;

function animateContent(element,direction=1,compact=false){
  contentAnimations.get(element)?.cancel();
  if(!direction||motionPreference.matches||typeof element?.animate!=='function')return;
  const edge = direction>0
    ? 'polygon(0 0, 94% 0, 100% 100%, 0 100%)'
    : 'polygon(6% 0, 100% 0, 100% 100%, 0 100%)';
  const animation = element.animate([
    {opacity:.15,transform:`translateX(${direction*(compact?12:24)}px)`,clipPath:edge},
    {opacity:1,transform:'translateX(0)',clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}
  ],{duration:compact?260:380,easing:'cubic-bezier(.22,1,.36,1)'});
  contentAnimations.set(element,animation);
  activeAnimations.add(animation);
  animation.finished.catch(()=>{}).then(()=>{
    activeAnimations.delete(animation);
    if(contentAnimations.get(element)===animation)contentAnimations.delete(element);
  });
}

function updateIndicator(group,instant=false){
  if(typeof group?.getBoundingClientRect!=='function'||typeof document.createElement!=='function')return;
  const selected = group.querySelector('.active');
  const existingIndicator = indicators.get(group);
  if(existingIndicator)existingIndicator.hidden=!selected;
  if(!selected)return;
  const bounds = group.getBoundingClientRect();
  if(!bounds.width||!bounds.height)return;
  let indicator = indicators.get(group);
  if(!indicator){
    indicator=document.createElement('span');
    indicator.className=`motion-indicator ${group===nav?'nav-indicator':'filter-indicator'}`;
    indicator.setAttribute('aria-hidden','true');
    group.append(indicator);
    indicators.set(group,indicator);
    group.classList.add('has-motion');
    instant=true;
  }
  const item = selected.getBoundingClientRect();
  const isNav = group===nav;
  const width = isNav?20:item.width;
  const height = isNav?3:item.height;
  const x = item.left-bounds.left-group.clientLeft+group.scrollLeft+(isNav?(item.width-width)/2:0);
  const y = item.top-bounds.top-group.clientTop+group.scrollTop+(isNav?item.height-24:0);
  indicator.style.transition=instant?'none':'';
  indicator.style.width=`${width}px`;
  indicator.style.height=`${height}px`;
  indicator.style.transform=`translate(${x}px,${y}px)`;
  if(instant){indicator.getBoundingClientRect();indicator.style.transition='';}
}

function refreshIndicators(instant=true){
  updateIndicator(nav,instant);
  document.querySelectorAll('.filter-group').forEach(group=>updateIndicator(group,instant));
}

function setActive(button,selector){
  const buttons = [...document.querySelectorAll(selector)];
  const previous = buttons.findIndex(b=>b.getAttribute('aria-pressed')==='true');
  const next = buttons.indexOf(button);
  buttons.forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  updateIndicator(button.closest?.('.filter-group'));
  return previous===next?0:Math.sign(next-previous)||1;
}
function render(){
  stopQuoteRotation();
  quoteAnimation?.cancel();
  quoteAnimation=null;
  const route = location.hash.replace(/^#\/?/,'').split('?')[0];
  const previousPage = currentPage;
  currentPage = Object.hasOwn(renderers,route)?route:'home';
  const direction = RESEARCH_DIRECTIONS.find(item=>item.key===currentPage);
  const teachingPage = ALL_TEACHING_PAGES.find(item=>item.key===currentPage);
  const p = pages.find(p=>p.key===currentPage) || (currentPage===guestbookPage.key?guestbookPage:null);
  main.innerHTML=(direction?researchDetailHeader(direction):teachingPage?teachingDetailHeader(teachingPage):p?pageHeader(p):'')+renderers[currentPage]();
  document.title=direction?`${direction.title} · EverStarine`:teachingPage?`${teachingPage.title}${teachingPage.courseId?' · '+teachingPageData(teachingPage).course.name:''} · EverStarine`:p?`${p.title} · EverStarine`:'EverStarine · 个人学术主页';
  const navigationPage=direction?'research':teachingPage?'teaching':currentPage;
  nav.querySelectorAll('a').forEach(a=>{const active=a.dataset.page===navigationPage;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  nav.classList.remove('open');menu.setAttribute('aria-expanded','false');
  window.scrollTo({top:0,behavior:'instant'});
  refreshIndicators(!hasRendered);
  if(hasRendered&&previousPage!==currentPage)animateContent(main,Math.sign(pageOrder.indexOf(currentPage)-pageOrder.indexOf(previousPage)));
  hasRendered=true;
  syncQuoteInteraction();
  startQuoteRotation();
}
menu.addEventListener('click',()=>{const opened=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(opened));nav.classList.toggle('open',opened);if(opened)updateIndicator(nav,true);});
document.addEventListener('click',event=>{
  if(event.target.closest('.skip-link')){event.preventDefault();main.focus();main.scrollIntoView({behavior:'instant'});return;}
  const copyButton=event.target.closest('[data-copy-email]');
  if(copyButton){event.preventDefault();void copyAcademicEmail(copyButton);return;}
  const link=event.target.closest('[data-scroll]');
  if(link){event.preventDefault();document.getElementById(link.dataset.scroll)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});return;}
  const t=event.target.closest('[data-teaching]');if(t){if(t.dataset.teaching!==teachingState().scope)location.hash=t.dataset.teaching==='past'?'#/teaching?view=past':'#/teaching';return;}
  const a=event.target.closest('[data-activity]');if(a){const direction=setActive(a,'[data-activity]');const category=a.dataset.activity;const results=document.querySelector('#activity-results');results.innerHTML=activityRecordList(category);document.querySelector('#activity-count').textContent=`${filteredActivities(category).length} 条记录`;animateContent(results,direction,true);}
  const p=event.target.closest('[data-publication]');if(p){updatePublications(setActive(p,'[data-publication]'));}
});
function updatePublications(direction=0){const q=document.querySelector('#publication-search').value.trim();const type=document.querySelector('[data-publication].active').dataset.publication;document.querySelector('#publication-count').textContent=`${type==='全部'?'全部发表':type} · 0 项`;const results=document.querySelector('#publication-results');results.innerHTML=q?emptyState('暂无搜索结果','发表列表尚未填写，暂时没有可检索的条目。'):emptyState(type==='全部'?'学术发表待补充':`${type}待补充`,'论文题目、作者、发表信息及相关链接将在这里展示。');animateContent(results,direction,true);}
document.addEventListener('input',e=>{if(e.target.id==='publication-search')updatePublications();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const restoreFocus=nav.contains(document.activeElement);nav.classList.remove('open');menu.setAttribute('aria-expanded','false');if(restoreFocus)menu.focus();}if(e.key==='/'&&currentPage==='publications'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();document.querySelector('#publication-search').focus();}});
document.addEventListener('toggle',event=>{
  const detail=event.target;
  if(!detail.matches?.('.past-course'))return;
  if(detail.open)expandedPastCourseIds.add(detail.dataset.courseId);
  else expandedPastCourseIds.delete(detail.dataset.courseId);
},true);
window.addEventListener('hashchange',()=>{render();main.focus({preventScroll:true});});
window.addEventListener('resize',()=>refreshIndicators());
document.fonts?.ready.then(()=>refreshIndicators());
document.addEventListener('mouseover',event=>{
  if(currentPage!=='home'||!event.target.closest?.('.hero-quotes')||event.relatedTarget?.closest?.('.hero-quotes'))return;
  quoteHovered=true;startQuoteRotation();
});
document.addEventListener('mouseout',event=>{
  if(currentPage!=='home'||!event.target.closest?.('.hero-quotes')||event.relatedTarget?.closest?.('.hero-quotes'))return;
  quoteHovered=false;startQuoteRotation();
});
document.addEventListener('focusin',event=>{
  if(currentPage!=='home'||!event.target.closest?.('.hero-quotes'))return;
  quoteFocused=true;startQuoteRotation();
});
document.addEventListener('focusout',event=>{
  if(currentPage!=='home'||!event.target.closest?.('.hero-quotes')||event.relatedTarget?.closest?.('.hero-quotes'))return;
  quoteFocused=false;startQuoteRotation();
});
document.addEventListener('visibilitychange',()=>startQuoteRotation());
motionPreference.addEventListener?.('change',()=>{if(motionPreference.matches){activeAnimations.forEach(animation=>animation.finish());quoteAnimation?.cancel();}refreshIndicators();startQuoteRotation();});
render();
