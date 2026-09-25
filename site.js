(()=>{
const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches, coarse=matchMedia('(pointer:coarse)').matches;

const nav={
 id:{dest:'Destinasi',exp:'Pengalaman',trips:'Perjalanan',news:'Berita',blog:'Blog',about:'Tentang',contact:'Kontak',plan:'Rencanakan Perjalanan'},
 en:{dest:'Destinations',exp:'Experiences',trips:'Trips',news:'News',blog:'Blog',about:'About',contact:'Contact',plan:'Plan Your Journey'}
};
const common={
 id:{cta:'Rencanakan perjalanan',more:'Baca selengkapnya',source:'Sumber',illustrative:'Contoh data ilustrasi',demo:'MODE DEMO - Ini hanya ilustrasi. Tidak ada transaksi nyata yang diproses.',copyright:'© Raihan Nur Adhani 2026'},
 en:{cta:'Plan your journey',more:'Read more',source:'Source',illustrative:'Illustrative data',demo:'DEMO MODE - This is illustrative only. No real transaction is processed.',copyright:'© Raihan Nur Adhani 2026'}
};
const copy={
 id:{'nav.cta':'Rencanakan Perjalanan','hero.dek':'Di ujung timur Nusantara, laut tidak pernah tidur. Karst, hutan, terumbu dan komunitas pesisir membentuk satu kepulauan yang hidup.','hero.cta':'Masuki Kepulauan','hero.film':'Tonton film','intro.title':'Sebuah kepulauan yang lebih terasa daripada dijelaskan.','intro.body':'Raja Ampat berada di Southwest Papua, Indonesia. Di sini, perjalanan bergerak dari teluk sunyi ke lorong karst, dari desa pesisir ke dunia bawah laut yang sangat beragam.','intro.link':'Baca panduan lapangan','dest.title':'Delapan nama. Satu laut yang terus berubah.','dest.link':'Jelajahi semua destinasi','marine.title':'Sebuah perpustakaan hidup di bawah permukaan.','marine.body':'Indonesia Travel mencatat sekitar 540 jenis karang dan sekitar 1.320 spesies ikan di Raja Ampat. Sumber yang sama mengutip The Nature Conservancy dan Conservation International untuk angka sekitar 75% spesies karang dunia.','marine.stat':'dari spesies karang dunia, seperti dikutip Indonesia Travel.','culture.title':'Laut juga punya waktu untuk beristirahat.','culture.body':'<span class="text-highlight">Sasi</span> adalah praktik adat yang dapat membatasi pengambilan sumber daya laut pada waktu atau wilayah tertentu. Di Raja Ampat, ia membantu membuka cara pandang bahwa menjaga laut dapat menjadi bagian dari kehidupan komunitas.','culture.link':'Baca tentang Sasi','film.title':'Dengarkan kepulauan ini.','gallery.title':'Tujuh fragmen perjalanan.','closing.title':'Datang dengan rasa ingin tahu. Pulang dengan perspektif baru.','closing.cta':'Rencanakan Perjalanan'},
 en:{'nav.cta':'Plan Your Journey','hero.dek':'At the eastern edge of the Indonesian archipelago, the sea never sleeps. Karst, forest, reefs and coastal communities shape one living archipelago.','hero.cta':'Enter the Archipelago','hero.film':'Watch the film','intro.title':'An archipelago better felt than explained.','intro.body':'Raja Ampat sits in Southwest Papua, Indonesia. Journeys move from quiet bays to karst passages, from coastal villages to an extraordinarily diverse underwater world.','intro.link':'Read the field guide','dest.title':'Eight names. One sea in constant change.','dest.link':'Explore all destinations','marine.title':'A living library beneath the surface.','marine.body':'Indonesia Travel records around 540 coral types and about 1,320 fish species in Raja Ampat. The same source cites The Nature Conservancy and Conservation International for the figure of around 75% of the world\u2019s coral species.','marine.stat':'of the world\u2019s coral species, as cited by Indonesia Travel.','culture.title':'The sea also has time to rest.','culture.body':'<span class="text-highlight">Sasi</span> is a customary practice that can restrict the taking of marine resources for a period or in a particular area. In Raja Ampat, it offers a way to see care for the sea as part of community life.','culture.link':'Read about Sasi','film.title':'Listen to the islands.','gallery.title':'Seven fragments of the journey.','closing.title':'Arrive curious. Leave with a different perspective.','closing.cta':'Plan Your Journey'}
};
const destCopy={
 id:{'hero.dek':'Delapan tempat untuk membaca Raja Ampat melalui bentuk karst, arus, desa pesisir dan dunia bawah laut.','hero.cta':'Jelajahi kepulauan','intro.title':'Bukan daftar tempat. Sebuah urutan lanskap.','intro.body':'Raja Ampat terasa berbeda dari satu teluk ke teluk berikutnya. Karst Wayag memberi skala, Misool membuka dunia batu kapur purba, sementara desa dan titik selam membawa perjalanan lebih dekat pada kehidupan pesisir.','index.title':'Delapan nama untuk memulai pembacaan.','wayag.body':'Gugusan pulau karst yang ikonik, dibaca dari air dan ketinggian. Bentuk pulau kecil, laguna dan horizon menciptakan lanskap yang terasa hampir abstrak.','wayag.cta':'Rencanakan perjalanan ke Wayag','misool.body':'Di selatan, karst bertemu teluk dan perairan yang lebih terlindung. Misool cocok dibaca perlahan, dengan ruang untuk menyelam, menjelajah laguna dan memperhatikan bentuk batu kapur.','grid.title':'Tempat-tempat kecil yang membuka cerita lebih besar.','closing.title':'Jangan mengejar semuanya. Biarkan satu lanskap tinggal lebih lama.','closing.body':'Perjalanan yang baik di Raja Ampat tidak hanya mengumpulkan titik. Ia memberi waktu untuk air, komunitas dan alam berbicara.','closing.cta':'Susun perjalanan Anda'},
 en:{'hero.dek':'Eight places for reading Raja Ampat through karst, currents, coastal villages and the underwater world.','hero.cta':'Explore the islands','intro.title':'Not a list of places. A sequence of landscapes.','intro.body':'Raja Ampat changes from one bay to the next. Wayag gives scale, Misool opens an older limestone world, while villages and dive sites bring the journey closer to coastal life.','index.title':'Eight names to begin the reading.','wayag.body':'An iconic karst island field, read from water and height. Small islands, lagoons and horizon create a landscape that feels almost abstract.','wayag.cta':'Plan a Wayag journey','misool.body':'In the south, karst meets sheltered bays and water. Misool rewards a slower pace, with room for diving, lagoon exploration and close attention to limestone forms.','grid.title':'Smaller places that open larger stories.','closing.title':'Do not chase everything. Let one landscape stay with you longer.','closing.body':'A good Raja Ampat journey does not only collect points. It leaves room for water, community and nature to speak.','closing.cta':'Build your journey'}
};

function applyLang(lang){
  lang=(lang==='en')?'en':'id';
  localStorage.setItem('rajaampat_lang',lang);
  document.documentElement.lang=lang;
  const dn=nav[lang], dc=common[lang], di=copy[lang], dd=destCopy[lang];
  $$('[data-lang-key]').forEach(el=>{const k=el.dataset.langKey;if(dn[k])el.textContent=dn[k]});
  $$('[data-common]').forEach(el=>{const k=el.dataset.common;if(dc[k])el.textContent=dc[k]});
  $$('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(di[k])el.textContent=di[k]});
  $$('[data-i18n-html]').forEach(el=>{const k=el.dataset.i18nHtml;if(di[k])el.innerHTML=di[k]});
  $$('[data-i18n-d]').forEach(el=>{const k=el.dataset.i18nD;if(dd[k])el.textContent=dd[k]});
  $$('[data-i18n-placeholder]').forEach(el=>{const k=el.dataset.i18nPlaceholder;if(dc[k])el.placeholder=dc[k]});
  const sel=$('#language'); if(sel) sel.value=lang;
}
function initLang(){
  const sel=$('#language');
  const saved=localStorage.getItem('rajaampat_lang')||'id';
  if(sel) sel.addEventListener('change',e=>applyLang(e.target.value));
  applyLang(saved);
}

function loader(){
  const el=$('.loader'); if(!el) return;
  const word=$('.loader-word')||$('[data-loader-word]');
  if(word){
    const text=word.textContent;
    word.innerHTML='';
    [...text].forEach((ch,i)=>{
      const s=document.createElement('span');
      s.textContent=ch===' '?'\u00a0':ch;
      s.style.cssText='display:inline-block;opacity:0;transform:translateY(18px);transition:opacity .45s var(--ease),transform .45s var(--ease);transition-delay:'+(i*0.055)+'s';
      word.appendChild(s);
      requestAnimationFrame(()=>{s.style.opacity='1';s.style.transform='translateY(0)'});
    });
  }
  setTimeout(()=>{$('.loader-line')?.animate([{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{duration:800,easing:'cubic-bezier(.22,1,.36,1)',fill:'forwards'})},500);
  setTimeout(()=>{
    el.animate([{opacity:1},{opacity:0}],{duration:reduce?0:450,easing:'ease',fill:'forwards'});
    setTimeout(()=>{ el.remove(); document.body.classList.add('loaded'); startPage(); },reduce?0:460);
  },reduce?0:1300);
}
function startPage(){
  const curtain=$('.page-curtain');
  if(curtain) curtain.animate([{transform:'scaleY(1)'},{transform:'scaleY(0)'}],{duration:reduce?0:900,easing:'cubic-bezier(.22,1,.36,1)',fill:'forwards'});
  const heroImg=$('.hero-image, .hero-media img');
  const heroBits=$$('.hero-eyebrow,.hero-title,.hero-dek,.hero-actions,.hero .eyebrow,.hero h1,.hero p.lead,.hero .actions');
  if(!reduce){
    heroImg?.animate([{transform:'scale(1.15)'},{transform:'scale(1)'}],{duration:2000,easing:'cubic-bezier(.22,1,.36,1)',fill:'forwards'});
    heroBits.forEach((el,i)=>el.animate([{opacity:0,transform:'translateY(32px)'},{opacity:1,transform:'translateY(0)'}],{duration:900,delay:300+i*160,easing:'cubic-bezier(.22,1,.36,1)',fill:'forwards'}));
  } else {
    heroBits.forEach(el=>{el.style.opacity='1'});
  }
}

function header(){
  const h=$('.site-header'); if(!h) return;
  const on=()=>{const s=scrollY>30;h.classList.toggle('scrolled',s);h.classList.toggle('is-scrolled',s)};
  addEventListener('scroll',on,{passive:true}); on();
}
function menu(){
  const b=$('.menu')||$('.menu-button'), m=$('.mobile-nav'); if(!b||!m) return;
  if(b.dataset.menuBound) return; b.dataset.menuBound='1';
  b.addEventListener('click',()=>{
    const open=m.classList.toggle('open'); m.classList.toggle('is-open',open);
    b.setAttribute('aria-expanded',String(open)); m.setAttribute('aria-hidden',String(!open));
    document.body.classList.toggle('no-scroll',open);
  });
  $$('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{
    m.classList.remove('open','is-open'); document.body.classList.remove('no-scroll');
  }));
}
function cursor(){
  if(coarse||reduce) return;
  const c=$('.cursor'); if(!c) return;
  let x=innerWidth/2,y=innerHeight/2,tx=x,ty=y;
  addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;c.style.opacity='1'});
  const loop=()=>{x+=(tx-x)*.18;y+=(ty-y)*.18;c.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%)`;requestAnimationFrame(loop)};
  loop();
  document.addEventListener('mouseover',e=>{
    if(e.target.closest?.('a,button,.magnetic')){c.classList.add('hover','is-hover')}
  });
  document.addEventListener('mouseout',e=>{
    if(e.target.closest?.('a,button,.magnetic')){c.classList.remove('hover','is-hover')}
  });
}
function magnetic(){
  if(coarse||reduce) return;
  $$('.magnetic').forEach(el=>{
    if(el.dataset.magneticBound) return; el.dataset.magneticBound='1';
    el.addEventListener('pointermove',e=>{
      const r=el.getBoundingClientRect();
      el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`;
    });
    el.addEventListener('pointerleave',()=>{el.style.transform='translate(0,0)'});
  });
}

let motionDone=false;
function motion(){
  if(window.Lenis && !reduce && !motionDone){
    const lenis=new Lenis({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true,smoothTouch:false});
    const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};
    requestAnimationFrame(raf);
  }
  motionDone=true;
  reveal();
}
function reveal(){
  if(!window.gsap||!window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.getAll().forEach(t=>t.kill());
  const items=$$('.reveal, [data-reveal]');
  if(!reduce){
    items.forEach((el,i)=>gsap.to(el,{opacity:1,y:0,duration:.9,delay:(i%4)*.05,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 84%',once:true}}));
    gsap.utils.toArray('[data-parallax]').forEach(el=>gsap.to(el,{yPercent:Number(el.dataset.parallax)*100,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:true}}));
    if($('.tide-line')) gsap.to('.tide-line',{scaleX:1,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:'.marine',start:'top 70%',once:true}});
    if($('.gallery-track')) gsap.from('.gallery-track',{x:innerWidth>768?-120:0,scrollTrigger:{trigger:'.gallery',start:'top 80%',end:'bottom 20%',scrub:1}});
    gsap.utils.toArray('.feathers span').forEach((el,i)=>gsap.to(el,{y:30+i*8,rotation:55,duration:7+i*2,ease:'sine.inOut',repeat:-1,yoyo:true}));
    if($('.counter')) gsap.to('.counter',{innerText:75,duration:1.6,ease:'power2.out',snap:{innerText:1},scrollTrigger:{trigger:'.marine-stat',start:'top 75%',once:true}});
    gsap.utils.toArray('.text-highlight').forEach(el=>gsap.to(el,{backgroundSize:'100% 3px',duration:1,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 85%',once:true}}));
  } else {
    items.forEach(el=>{el.style.opacity='1';el.style.transform='none'});
  }
  ScrollTrigger.refresh();
}

function video(){
  const players=$$('[data-video-player]');
  players.forEach(player=>{
    if(player.dataset.videoBound) return; player.dataset.videoBound='1';
    const vid=player.querySelector('[data-video]'); if(!vid) return;
    const seek=player.querySelector('[data-video-seek]');
    const timeEl=player.querySelector('[data-video-time]');
    const toggleBtns=$$('[data-video-toggle]',player);
    const muteBtn=player.querySelector('[data-video-mute]');
    const fsBtn=player.querySelector('[data-video-fullscreen]');
    const fmt=s=>{s=Math.max(0,Math.floor(s||0));return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`};
    const renderTime=()=>{const d=vid.duration||0;if(timeEl)timeEl.textContent=`${fmt(vid.currentTime)} / ${fmt(d)}`;if(seek&&d){const pct=(vid.currentTime/d)*100;seek.value=pct;seek.style.setProperty('--fill',pct+'%')}};
    const play=()=>{vid.muted=false;player.classList.remove('is-muted');vid.play().catch(()=>{})};
    const pause=()=>vid.pause();
    toggleBtns.forEach(b=>b.addEventListener('click',()=>vid.paused?play():pause()));
    vid.addEventListener('play',()=>player.classList.add('is-playing'));
    vid.addEventListener('pause',()=>player.classList.remove('is-playing'));
    vid.addEventListener('timeupdate',renderTime);
    vid.addEventListener('loadedmetadata',renderTime);
    seek?.addEventListener('input',()=>{if(vid.duration)vid.currentTime=(seek.value/100)*vid.duration});
    muteBtn?.addEventListener('click',()=>{vid.muted=!vid.muted;player.classList.toggle('is-muted',vid.muted)});
    fsBtn?.addEventListener('click',()=>{if(player.requestFullscreen)player.requestFullscreen();else if(vid.webkitEnterFullscreen)vid.webkitEnterFullscreen()});
  });
  $$('[data-film]').forEach(b=>{
    if(b.dataset.filmBound) return; b.dataset.filmBound='1';
    b.addEventListener('click',()=>{
      const player=$('[data-video-player]'); if(!player) return;
      player.scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'});
      const vid=player.querySelector('[data-video]');
      vid.muted=false; player.classList.remove('is-muted'); vid.play().catch(()=>{});
    });
  });
}

function cookie(){
  const c=$('.cookie'); if(!c||localStorage.getItem('rajaampat_cookie')) return;
  c.classList.add('show');
  c.querySelector('[data-cookie]')?.addEventListener('click',()=>{localStorage.setItem('rajaampat_cookie','1');c.classList.remove('show')});
}
function toast(msg){const t=$('.toast');if(!t)return;t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400)}
function forms(){
  $$('form[data-demo-form]').forEach(f=>{
    if(f.dataset.bound) return; f.dataset.bound='1';
    f.addEventListener('submit',e=>{
      e.preventDefault();
      const out=f.querySelector('.form-status');
      if(out) out.textContent = (document.documentElement.lang==='en') ? 'Thank you. Your demo request was recorded on this device.' : 'Terima kasih. Permintaan demo Anda telah dicatat di perangkat ini.';
      f.reset();
      toast((document.documentElement.lang==='en') ? 'Form submitted as a demo.' : 'Form berhasil dikirim sebagai demo.');
    });
  });
}
function faqAccordion(){
  $$('.faq-q').forEach(b=>{
    if(b.dataset.bound) return; b.dataset.bound='1';
    b.addEventListener('click',()=>{const item=b.parentElement;item.classList.toggle('open');b.setAttribute('aria-expanded',item.classList.contains('open'))});
  });
}
function wishlist(){
  $$('.wishlist').forEach(b=>{
    if(b.dataset.bound) return; b.dataset.bound='1';
    const id=b.dataset.id;
    let a=JSON.parse(localStorage.getItem('rajaampat_wishlist')||'[]');
    if(a.includes(id)) b.classList.add('active');
    b.setAttribute('aria-pressed', a.includes(id) ? 'true':'false');
    b.addEventListener('click',()=>{
      a=JSON.parse(localStorage.getItem('rajaampat_wishlist')||'[]');
      const on=a.includes(id);
      a=on?a.filter(x=>x!==id):[...a,id];
      localStorage.setItem('rajaampat_wishlist',JSON.stringify(a));
      b.classList.toggle('active',!on); b.setAttribute('aria-pressed', String(!on));
      toast(!on?((document.documentElement.lang==='en')?'Added to wishlist':'Ditambahkan ke wishlist'):((document.documentElement.lang==='en')?'Removed from wishlist':'Dihapus dari wishlist'));
    });
  });
}
function escapeHtml(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

const seedReviews=[
 {name:'Melati Sundari',location:'Jakarta',rating:5,date:'12 Agu 2026',text:'Air di Kabui Passage sejernih yang difoto orang. Kapal kami sempat berhenti hanya untuk melihat gerombolan ikan kecil di bawah lambung.'},
 {name:'Daniel Pattiasina',location:'Sorong',rating:5,date:'30 Jul 2026',text:'Snorkeling di dekat Arborek lebih tenang dari perkiraan saya. Pemandu lokal tahu persis titik arus yang aman untuk pemula.'},
 {name:'Farah Adzkia',location:'Bandung',rating:4,date:'18 Jun 2026',text:'Perjalanan kapal antar pulau cukup panjang, jadi siapkan obat anti-mabuk. Pemandangan karst dari geladak tetap sepadan.'},
 {name:'Yosef Rumbiak',location:'Manokwari',rating:5,date:'2 Mei 2026',text:'Menginap semalam di homestay Sawinggrai memberi gambaran hidup nelayan yang tidak saya dapat dari paket wisata biasa.'}
];
function reviews(){
  const form=$('#reviewForm'); const list=$('#reviewList'); if(!list) return;
  let stored=JSON.parse(localStorage.getItem('rajaampat_reviews')||'null');
  if(!stored){ stored=seedReviews; localStorage.setItem('rajaampat_reviews',JSON.stringify(stored)); }
  const render=()=>{
    list.innerHTML=stored.map(r=>`<article class="testimonial"><img class="avatar" src="https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=3FB8AF&color=0A2530&size=88" alt="Avatar ${escapeHtml(r.name)}" loading="lazy"><div class="stars">${'\u2605'.repeat(r.rating)}${'\u2606'.repeat(5-r.rating)}</div><h3>${escapeHtml(r.name)}</h3><small>${escapeHtml(r.location)} \u00b7 ${escapeHtml(r.date)}</small><p>${escapeHtml(r.text)}</p></article>`).join('');
  };
  render();
  if(!form) return;
  let rating=5;
  $$('.stars-input button').forEach(b=>b.addEventListener('click',()=>{rating=+b.dataset.rating;$$('.stars-input button').forEach(x=>x.style.opacity=+x.dataset.rating<=rating?'1':'.35')}));
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const fd=new FormData(form);
    stored.unshift({name:fd.get('name'),location:fd.get('location'),text:fd.get('text'),rating,date:new Intl.DateTimeFormat(document.documentElement.lang||'id',{dateStyle:'medium'}).format(new Date())});
    stored=stored.slice(0,16);
    localStorage.setItem('rajaampat_reviews',JSON.stringify(stored));
    render(); form.reset();
    toast((document.documentElement.lang==='en')?'Illustrative review saved on this device.':'Ulasan ilustrasi disimpan di perangkat ini.');
  });
}

function strip(s){const d=document.createElement('div');d.innerHTML=s||'';return d.textContent||''}
function relative(ds){const d=new Date(ds);const days=Math.max(0,Math.round((Date.now()-d)/86400000));return days===0?'Today':days===1?'1 day ago':`${days} days ago`}
async function news(){
  const root=$('#newsGrid'); if(!root||root.dataset.bound) return; root.dataset.bound='1';
  const feed='https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent('https://news.google.com/rss/search?q=Raja+Ampat&hl=en-US&gl=US&ceid=US:en');
  const cached=JSON.parse(localStorage.getItem('rajaampat_news_cache')||'null');
  const now=Date.now();
  let items=cached && now-cached.time<1800000 ? cached.items : null;
  const cardsHtml=(arr)=>arr.slice(0,12).map(x=>{
    const desc=strip(x.description).slice(0,150);
    return `<article class="news-card"><figure>${x.thumbnail?`<img src="${x.thumbnail}" alt="" loading="lazy" onerror="this.style.display='none'">`:'<div class="skeleton" style="height:100%"></div>'}</figure><div class="meta">${escapeHtml(x.author||x.source_id||'RSS')} \u00b7 ${relative(x.pubDate)}</div><h3>${escapeHtml(x.title)}</h3><p>${escapeHtml(desc)}</p><a class="button dark" target="_blank" rel="noopener" href="news-detail.html?url=${encodeURIComponent(x.link)}">Open article</a></article>`;
  }).join('');
  const render=(arr)=>{
    const q=($('#newsSearch')?.value||'').toLowerCase();
    const filtered=arr.filter(x=>(x.title+' '+x.description+' '+x.author).toLowerCase().includes(q));
    root.innerHTML=cardsHtml(filtered) || '<div class="empty" style="grid-column:1/-1">Berita sedang tidak dapat dimuat.</div>';
  };
  if(!items){
    root.innerHTML='<div class="news-grid">'+Array.from({length:6},()=>'<div class="skeleton skeleton-card"></div>').join('')+'</div>';
    let data=null;
    try{
      const c=new AbortController(); const id=setTimeout(()=>c.abort(),10000);
      const r=await fetch(feed,{signal:c.signal}); clearTimeout(id);
      if(r.ok){ const j=await r.json(); if(j.status==='ok' && Array.isArray(j.items) && j.items.length) data=j.items; }
    }catch(e){}
    if(!data){
      root.innerHTML='<div class="error-state" style="grid-column:1/-1">Berita sedang tidak dapat dimuat. <button class="button dark" id="retryNews" type="button">Coba lagi</button></div>';
      $('#retryNews')?.addEventListener('click',()=>{root.dataset.bound='';news()});
      return;
    }
    items=data;
    localStorage.setItem('rajaampat_news_cache',JSON.stringify({time:now,items}));
  }
  render(items);
  $('#newsSearch')?.addEventListener('input',()=>render(items));
}

function share(){
  const url=encodeURIComponent(location.href), title=encodeURIComponent(document.title);
  $$('[data-share]').forEach(a=>{
    const t=a.dataset.share;
    const map={wa:`https://wa.me/?text=${title}%20${url}`,x:`https://twitter.com/intent/tweet?text=${title}&url=${url}`,fb:`https://www.facebook.com/sharer/sharer.php?u=${url}`,pinterest:`https://www.pinterest.com/pin/create/button/?url=${url}`};
    a.href=map[t]||'#'; a.target='_blank'; a.rel='noopener';
  });
}

function prefetchOnHover(){
  const done=new Set();
  document.addEventListener('pointerover',e=>{
    const a=e.target.closest?.('a[href]'); if(!a) return;
    const url=a.getAttribute('href');
    if(!url||url.startsWith('#')||url.startsWith('http')||url.startsWith('mailto:')||a.target==='_blank'||done.has(url)) return;
    done.add(url);
    const link=document.createElement('link'); link.rel='prefetch'; link.href=url;
    document.head.appendChild(link);
  },{passive:true});
}

async function newsDetail(){
  const title=$('#detailTitle'); if(!title||title.dataset.bound) return; title.dataset.bound='1';
  const meta=$('#detailMeta'), body=$('#detailBody'), link=$('#detailSource');
  const u=new URLSearchParams(location.search).get('url');
  if(!u){ title.textContent='No article selected'; return; }
  try{
    const api='https://api.rss2json.com/v1/api.json?rss_url='+encodeURIComponent(u);
    const r=await fetch(api,{signal:AbortSignal.timeout(10000)});
    const j=await r.json();
    const x=j.items?.[0];
    if(!x) throw new Error('no item');
    title.textContent=x.title;
    if(meta) meta.textContent=(x.author||x.source_id||'RSS')+' \u00b7 '+new Intl.DateTimeFormat(document.documentElement.lang||'id',{dateStyle:'long'}).format(new Date(x.pubDate));
    if(body) body.innerHTML='<p>'+((x.description||'').replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<iframe[\s\S]*?<\/iframe>/gi,''))+'</p>';
    if(link) link.href=x.link;
  }catch(e){
    title.textContent='Berita sedang tidak dapat dimuat.';
    if(body) body.innerHTML='<p>Gunakan tautan sumber dari halaman News untuk membuka artikel asli.</p>';
    if(link) link.style.display='none';
  }
}
function initPage(){
  applyLang(localStorage.getItem('rajaampat_lang')||document.documentElement.lang||'id');
  reveal();
  video(); cookie(); forms(); faqAccordion(); wishlist(); reviews(); news(); newsDetail(); share();
  menu(); magnetic();
}
function initOnce(){
  initLang();
  loader();
  header(); motion(); cursor();
  prefetchOnHover();
  setupSwup();
  if(!navigator.onLine){document.body.dataset.offline='true';toast(document.documentElement.lang==='en'?'You are offline.':'Anda sedang offline.')}
  addEventListener('online',()=>toast(document.documentElement.lang==='en'?'Connection restored.':'Koneksi kembali tersedia.'));
}

function setupSwup(){
  if(!window.Swup) return;
  let loaderEl=$('.page-transition-loader');
  if(!loaderEl){
    loaderEl=document.createElement('div');
    loaderEl.className='page-transition-loader';
    loaderEl.setAttribute('aria-hidden','true');
    loaderEl.innerHTML='<svg class="ra-loader" width="32" height="32" viewBox="0 0 32 32"><path class="ra-loader-line" d="M2 10c3-4 6-4 9 0s6 4 9 0 6-4 9 0" fill="none" stroke="#3FB8AF" stroke-width="2" stroke-linecap="round"/><path class="ra-loader-line ra-loader-line-2" d="M2 16c3-4 6-4 9 0s6 4 9 0 6-4 9 0" fill="none" stroke="#3FB8AF" stroke-width="2" stroke-linecap="round" opacity="0.7"/><path class="ra-loader-line ra-loader-line-3" d="M2 22c3-4 6-4 9 0s6 4 9 0 6-4 9 0" fill="none" stroke="#3FB8AF" stroke-width="2" stroke-linecap="round" opacity="0.45"/></svg>';
    document.body.appendChild(loaderEl);
  }
  try{
    const swup=new Swup({containers:['#main'],animateHistoryBrowsing:true});
    window.__swup=swup;
    const fadeOut=async()=>{
      loaderEl.classList.add('show');
      const el=$('#main');
      if(el && !reduce){ el.style.transition='opacity .25s ease'; el.style.opacity='0'; await new Promise(r=>setTimeout(r,250)); }
    };
    const fadeIn=async()=>{
      const el=$('#main');
      if(el && !reduce){ el.style.opacity='0'; requestAnimationFrame(()=>{el.style.transition='opacity .35s ease';el.style.opacity='1'}); await new Promise(r=>setTimeout(r,350)); if(el) el.style.opacity=''; }
      loaderEl.classList.remove('show');
    };
    if(swup.hooks && typeof swup.hooks.replace==='function'){
      try{ swup.hooks.replace('animation:out:await', fadeOut); }catch(e){}
      try{ swup.hooks.replace('animation:in:await', fadeIn); }catch(e){}
    }
    ['content:replace','page:view','visit:end'].forEach(h=>{
      try{ swup.hooks.on(h, ()=>initPage()); }catch(e){}
    });
  }catch(err){ /* Swup unavailable: normal navigation still works */ }
}

addEventListener('DOMContentLoaded',()=>{ initOnce(); initPage(); });
})();
