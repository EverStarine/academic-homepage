const pages = [
  {key:'about', number:'01', title:'个人介绍', en:'ABOUT', hint:'个人简介 / 教育经历 / 联系方式'},
  {key:'research', number:'02', title:'主要研究', en:'RESEARCH', hint:'研究方向 / 研究项目 / 学术笔记'},
  {key:'teaching', number:'03', title:'教学计划', en:'TEACHING', hint:'课程安排 / 教学日历 / 课程资料'},
  {key:'activities', number:'04', title:'参与活动', en:'ACTIVITIES', hint:'学术会议 / 交流访问 / 学术服务'},
  {key:'publications', number:'05', title:'学术发表', en:'PUBLICATIONS', hint:'期刊论文 / 会议论文 / 预印本'},
  {key:'projects', number:'06', title:'工程项目', en:'PROJECTS', hint:'书籍写作 / 分卷 PDF / 阅读与下载'}
];
const main = document.querySelector('#main');
const nav = document.querySelector('#primary-nav');
const menu = document.querySelector('.menu-toggle');
let currentPage = 'home';
const arrow = '<span aria-hidden="true">↗</span>';
const rule = '<div class="skeleton-lines" aria-hidden="true"><i></i><i></i><i></i></div>';
function sectionHead(no,title,en){return `<div class="section-heading"><div><span class="section-no">${no}</span><h2>${title}</h2></div><span class="mono">${en}</span></div>`;}
function emptyState(title,description,small=false){return `<div class="empty-state${small?' compact':''}"><span class="empty-symbol" aria-hidden="true"><i></i><i></i><i></i></span><h3>${title}</h3><p>${description}</p></div>`;}
function home(){return `
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-image" role="img" aria-label="薄雾、青山与水岸之间的现代中式建筑"></div><div class="hero-wash"></div>
    <div class="hero-topline"><span>学术档案 <i></i> ACADEMIC ARCHIVE</span><span class="hero-edition">序 / PROLOGUE</span></div>
    <div class="hero-content"><div class="eyebrow"><span></span> 在此，记录求知的足迹</div><h1 id="hero-title">山水之间<br><em>学思无界</em><span class="title-dot">。</span></h1><p class="hero-description">关于研究、教学，以及探索中的每一步。</p><div class="hero-identity"><span>EverStarine</span><i></i><span>所属单位 / 职称待填写</span></div><div class="hero-actions"><a class="button primary" href="#/research">探索研究 ${arrow}</a><a class="text-link" href="#/about">了解更多 <span aria-hidden="true">→</span></a></div><div class="profile-links"><a href="https://github.com/EverStarine" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.82c.85 0 1.71.11 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg><span>GitHub</span><span class="profile-handle">/ EverStarine</span><span aria-hidden="true">↗</span></a><span class="email-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/></svg><span>学术邮箱</span><small>待补充</small></span></div></div>
    <div class="landscape-caption"><span class="crosshair" aria-hidden="true">＋</span><span>山有回响 · 水自成章<small>LANDSCAPE / KNOWLEDGE / POSSIBILITY</small></span></div>
    <div class="hero-bottom"><span><i class="status-dot"></i> EverStarine · 学术主页</span><a href="#explore" data-scroll="explore">向下探索 <span aria-hidden="true">↓</span></a></div>
  </section>
  <section class="explore section-wrap" id="explore" aria-labelledby="explore-title"><div class="section-heading"><div><span class="section-no">INDEX</span><h2 id="explore-title">循此而入</h2></div><span class="mono">SIX CHAPTERS · ONE JOURNEY</span></div><div class="chapter-grid">${pages.map(p=>`<a class="chapter" href="#/${p.key}"><div class="chapter-top"><span>${p.number}</span>${arrow}</div><span class="chapter-en">${p.en}</span><h3>${p.title}</h3><p>${p.hint}</p><span class="chapter-line" aria-hidden="true"></span></a>`).join('')}</div></section>
  <section class="updates section-wrap">${sectionHead('UPDATES','近况与记录','RESEARCH & ACADEMIC LIFE')}<div class="updates-layout"><div class="updates-label"><span class="label-kicker">持续探索，慢慢积累。</span><p>研究进展、课程消息与学术交流，<br>将在这里陆续记录。</p></div><div class="update-rows"><a href="#/research"><span class="row-code">研究动态</span><span class="muted">研究进展待补充</span>${arrow}</a><a href="#/teaching"><span class="row-code">教学安排</span><span class="muted">课程与教学计划待补充</span>${arrow}</a><a href="#/activities"><span class="row-code">交流活动</span><span class="muted">学术活动待补充</span>${arrow}</a></div></div></section>`;}
function pageHeader(p){return `<div class="page-header section-wrap"><a class="breadcrumb" href="#/">首页 <span>/</span> <span>${p.title}</span></a><div class="page-title-row"><div><div class="eyebrow"><span></span> ${p.en}</div><h1>${p.title}</h1></div><span class="page-number" aria-hidden="true">${p.number}</span></div><div class="page-header-bottom"><p>${p.hint.replaceAll(' / ',' · ')}</p><span class="draft-marker"><i></i> ${p.key==='projects'?'书籍编写中':'内容待补充'}</span></div></div>`;}
function about(){return `<div class="section-wrap page-body about-layout"><aside class="profile-card"><div class="portrait-placeholder"><div class="portrait-frame"><svg viewBox="0 0 120 140" aria-hidden="true"><circle cx="60" cy="47" r="19"/><path d="M24 116v-10a36 36 0 0 1 72 0v10M16 126h88"/></svg></div><span>个人照片待补充</span><b aria-hidden="true">＋</b></div><div class="profile-details"><h2>EverStarine</h2><p class="mono">PERSONAL PROFILE</p><dl><div><dt>所属单位</dt><dd>待填写</dd></div><div><dt>职称 / 职务</dt><dd>待填写</dd></div><div><dt>研究领域</dt><dd>待填写</dd></div></dl></div></aside><div class="about-main"><section>${sectionHead('01','个人简介','BIOGRAPHY')}<div class="prose-placeholder"><p>个人简介待补充</p>${rule}</div></section><section>${sectionHead('02','教育与工作经历','EXPERIENCE')}<div class="timeline-placeholder"><span class="timeline-point"></span><div><span class="mono muted">时间待填写</span><h3>教育或工作经历待补充</h3><p>学校、单位与相关经历</p></div></div></section><section>${sectionHead('03','联系方式','CONTACT')}<dl class="contact-grid"><div><dt>学术邮箱 <span>ACADEMIC EMAIL</span></dt><dd>待填写</dd></div><div><dt>办公地点 <span>OFFICE</span></dt><dd>待填写</dd></div><div><dt>GitHub <span>CODE & PROJECTS</span></dt><dd><a class="contact-link" href="https://github.com/EverStarine" target="_blank" rel="noopener noreferrer">EverStarine <span aria-hidden="true">↗</span></a></dd></div><div><dt>个人简历 <span>CURRICULUM VITAE</span></dt><dd>文件待补充</dd></div></dl></section></div></div>`;}
function research(){return `<div class="section-wrap page-body"><section>${sectionHead('01','研究方向','RESEARCH AREAS')}<div class="research-grid">${['01','02','03'].map((n,i)=>`<article class="research-card"><div class="research-art art-${i}" aria-hidden="true"><span></span><span></span><span></span><i>R / ${n}</i></div><div class="research-card-body"><span class="mono muted">DIRECTION ${n}</span><h3>研究方向待补充</h3><p>研究主题、核心问题与研究方法</p><div class="placeholder-tag">关键词待填写</div></div></article>`).join('')}</div></section><section class="spaced-section">${sectionHead('02','研究项目','PROJECTS')}<div class="project-shell"><div class="table-head"><span>项目名称 / PROJECT</span><span>研究周期</span><span>进展</span></div>${emptyState('研究项目待补充','项目介绍与相关成果将在这里展示。',true)}</div></section><section class="spaced-section note-section"><div><span class="mono muted">WORKING NOTES</span><h2>思考与札记</h2><p>记录研究过程中的问题与想法。</p></div><div class="note-placeholder"><span>学术笔记待补充</span>${rule}</div></section></div>`;}
function teaching(){return `<div class="section-wrap page-body"><section>${sectionHead('01','课程安排','COURSES')}<div class="filter-bar"><div class="filter-group" role="group" aria-label="课程范围"><button class="filter active" data-teaching="current" aria-pressed="true">当前学期</button><button class="filter" data-teaching="past" aria-pressed="false">历年课程</button></div><span class="filter-caption">课程信息待补充</span></div><div id="course-results" aria-live="polite">${emptyState('当前学期课程待补充','课程名称、授课时间与课程简介将在这里展示。')}</div></section><section class="spaced-section">${sectionHead('02','教学日历','WEEKLY SCHEDULE')}<div class="calendar-wrap"><table class="schedule"><caption class="sr-only">每周教学安排，目前没有课程信息</caption><thead><tr><th scope="col">时间</th>${['周一','周二','周三','周四','周五'].map(d=>`<th scope="col">${d}</th>`).join('')}</tr></thead><tbody>${['上午','下午','晚上'].map(t=>`<tr><th scope="row">${t}</th>${Array(5).fill('<td><span aria-label="暂无安排">—</span></td>').join('')}</tr>`).join('')}</tbody></table></div><p class="table-note">教学时间与地点将在课程确定后补充。</p></section><section class="spaced-section">${sectionHead('03','课程资料','MATERIALS')}<div class="materials-row">${['教学大纲','课程讲义','习题与参考资料'].map((t,i)=>`<div><span class="material-icon" aria-hidden="true">${['▤','▥','▧'][i]}</span><h3>${t}</h3><p>资料待补充</p></div>`).join('')}</div></section></div>`;}
function activities(){return `<div class="section-wrap page-body"><section>${sectionHead('01','活动记录','ACADEMIC EXCHANGE')}<div class="filter-bar"><div class="filter-group" role="group" aria-label="活动分类">${['全部活动','学术会议','交流访问','学术服务'].map((t,i)=>`<button class="filter${i===0?' active':''}" data-activity="${t}" aria-pressed="${i===0}">${t}</button>`).join('')}</div><span class="filter-caption">0 条记录</span></div><div id="activity-results" aria-live="polite">${emptyState('活动记录待补充','会议报告、学术访问与学术服务将在这里记录。')}</div></section><section class="spaced-section activity-preview">${sectionHead('02','活动剪影','MOMENTS')}<div class="moment-placeholder"><div class="moment-frame" aria-hidden="true"><span>＋</span></div><div><span class="mono">MOMENTS TO COME</span><h3>交流，让思想相遇。</h3><p>活动照片与相关记录待补充</p></div></div></section></div>`;}
function publications(){return `<div class="section-wrap page-body"><section>${sectionHead('01','发表列表','PUBLICATION LIST')}<div class="publication-toolbar"><div class="filter-group" role="group" aria-label="发表类型">${['全部','期刊论文','会议论文','预印本'].map((t,i)=>`<button class="filter${i===0?' active':''}" data-publication="${t}" aria-pressed="${i===0}">${t}</button>`).join('')}</div><label class="search-box"><span class="search-icon" aria-hidden="true"></span><input type="search" id="publication-search" placeholder="搜索标题、作者或关键词" aria-label="搜索学术发表"><kbd aria-hidden="true">/</kbd></label></div><div class="publication-meta"><span id="publication-count">全部发表 · 0 项</span><span>按年份排列 <span aria-hidden="true">↓</span></span></div><div id="publication-results" aria-live="polite">${emptyState('学术发表待补充','论文题目、作者、发表信息及相关链接将在这里展示。')}</div><div class="publication-legend"><span><i></i> 发表记录将包含</span><span>论文题目</span><span>作者信息</span><span>发表年份</span><span>期刊 / 会议</span><span>全文 / DOI</span></div></section></div>`;}
function projects(){return `<div class="section-wrap page-body projects-page"><div class="projects-intro"><p>书稿仍在编写；各卷标注当前 PDF 文件日期。</p><span class="mono">2 PROJECTS / 8 PDF FILES</span></div><div class="book-projects">${BOOK_PROJECTS.map((project,index)=>`<section class="book-project" aria-labelledby="project-${project.id}"><div class="book-project-cover cover-${project.id}"><span class="mono">WRITING PROJECT / 0${index+1}</span><div class="book-cover-lines" aria-hidden="true"><i></i><i></i><i></i></div><h2 id="project-${project.id}">${project.name}</h2><span class="book-project-en">${project.en}</span><div class="book-cover-bottom"><span><i></i> 编写中</span><span>${project.books.length} 卷 · PDF</span></div></div><div class="book-project-content"><div class="book-list-heading"><span>分卷阅读</span><span>PDF LIBRARY</span></div><ol class="book-list">${project.books.map(book=>`<li class="book-row"><span class="book-volume">第${['一','二','三','四','五'][book.volume-1]}卷</span><div class="book-info"><h3>${book.title}</h3><p>${book.pages} 页 <i>·</i> ${(book.bytes/1048576).toFixed(1)} MB <i>·</i> 文件日期 <time datetime="${book.date}">${book.date}</time></p></div><div class="book-actions"><a class="book-read" href="${book.url}" target="_blank" rel="noopener noreferrer" type="application/pdf" aria-label="在线阅读${project.name}第${book.volume}卷：${book.title} PDF，新标签页打开">阅读 PDF <span aria-hidden="true">↗</span></a><a class="book-download" href="${book.url}" download="${project.name}-第${book.volume}卷.pdf" type="application/pdf" aria-label="下载${project.name}第${book.volume}卷 PDF">下载 <span aria-hidden="true">↓</span></a></div></li>`).join('')}</ol></div></section>`).join('')}</div></div>`;}
const renderers = {home,about,research,teaching,activities,publications,projects};
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const indicators = new WeakMap();
const contentAnimations = new WeakMap();
const activeAnimations = new Set();
const pageOrder = ['home', ...pages.map(page=>page.key)];
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
  const route = location.hash.replace(/^#\/?/,'').split('?')[0];
  const previousPage = currentPage;
  currentPage = Object.hasOwn(renderers,route)?route:'home';
  const p = pages.find(p=>p.key===currentPage);
  main.innerHTML=(p?pageHeader(p):'')+renderers[currentPage]();
  document.title=p?`${p.title} · EverStarine`:'EverStarine · 个人学术主页';
  nav.querySelectorAll('a').forEach(a=>{const active=a.dataset.page===currentPage;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  nav.classList.remove('open');menu.setAttribute('aria-expanded','false');
  window.scrollTo({top:0,behavior:'instant'});
  refreshIndicators(!hasRendered);
  if(hasRendered&&previousPage!==currentPage)animateContent(main,Math.sign(pageOrder.indexOf(currentPage)-pageOrder.indexOf(previousPage)));
  hasRendered=true;
}
menu.addEventListener('click',()=>{const opened=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(opened));nav.classList.toggle('open',opened);if(opened)updateIndicator(nav,true);});
document.addEventListener('click',event=>{
  if(event.target.closest('.skip-link')){event.preventDefault();main.focus();main.scrollIntoView({behavior:'instant'});return;}
  const link=event.target.closest('[data-scroll]');
  if(link){event.preventDefault();document.getElementById(link.dataset.scroll)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});return;}
  const t=event.target.closest('[data-teaching]');if(t){const direction=setActive(t,'[data-teaching]');const results=document.querySelector('#course-results');results.innerHTML=t.dataset.teaching==='current'?emptyState('当前学期课程待补充','课程名称、授课时间与课程简介将在这里展示。'):emptyState('历年课程待补充','过去学期的课程与教学资料将在这里归档。');animateContent(results,direction,true);}
  const a=event.target.closest('[data-activity]');if(a){const direction=setActive(a,'[data-activity]');const results=document.querySelector('#activity-results');results.innerHTML=emptyState(a.dataset.activity==='全部活动'?'活动记录待补充':`${a.dataset.activity}待补充`,'暂无相关记录。');animateContent(results,direction,true);}
  const p=event.target.closest('[data-publication]');if(p){updatePublications(setActive(p,'[data-publication]'));}
});
function updatePublications(direction=0){const q=document.querySelector('#publication-search').value.trim();const type=document.querySelector('[data-publication].active').dataset.publication;document.querySelector('#publication-count').textContent=`${type==='全部'?'全部发表':type} · 0 项`;const results=document.querySelector('#publication-results');results.innerHTML=q?emptyState('暂无搜索结果','发表列表尚未填写，暂时没有可检索的条目。'):emptyState(type==='全部'?'学术发表待补充':`${type}待补充`,'论文题目、作者、发表信息及相关链接将在这里展示。');animateContent(results,direction,true);}
document.addEventListener('input',e=>{if(e.target.id==='publication-search')updatePublications();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const restoreFocus=nav.contains(document.activeElement);nav.classList.remove('open');menu.setAttribute('aria-expanded','false');if(restoreFocus)menu.focus();}if(e.key==='/'&&currentPage==='publications'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();document.querySelector('#publication-search').focus();}});
window.addEventListener('hashchange',()=>{render();main.focus({preventScroll:true});});
window.addEventListener('resize',()=>refreshIndicators());
document.fonts?.ready.then(()=>refreshIndicators());
motionPreference.addEventListener?.('change',()=>{if(motionPreference.matches)activeAnimations.forEach(animation=>animation.finish());refreshIndicators();});
render();
