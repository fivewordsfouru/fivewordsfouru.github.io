// Project titles and media sources carried over from the supplied 5W4U portfolio.
const WORKS = [
  {
    "id": "A01",
    "title": "Green Space",
    "category": "Layout",
    "kind": "still",
    "src": "assets/green-space.webp",
    "group": "design"
  },
  {
    "id": "A02",
    "title": "Loud Geometry",
    "category": "Poster / Design",
    "kind": "still",
    "src": "https://iili.io/Kikrl3X.md.png",
    "group": "art"
  },
  {
    "id": "A03",
    "title": "Burger Special",
    "category": "Advertising",
    "kind": "still",
    "src": "https://iili.io/Kie3SjV.md.png",
    "group": "design"
  },
  {
    "id": "A04",
    "title": "Monogram",
    "category": "Identity",
    "kind": "still",
    "src": "https://iili.io/KivAg3J.png",
    "group": "design"
  },
  {
    "id": "A05",
    "title": "Magic",
    "category": "Poster / Illustration",
    "kind": "still",
    "src": "https://iili.io/KivTnvp.md.png",
    "group": "art"
  },
  {
    "id": "A06",
    "title": "Signal Loop",
    "category": "Motion",
    "kind": "motion",
    "src": "https://raw.githubusercontent.com/fivewordsfouru/fivewordsfouru.github.io/main/Comp%20%281%29.gif",
    "group": "motion"
  },
  {
    "id": "A07",
    "title": "TFC Loop",
    "category": "Motion",
    "kind": "motion",
    "src": "https://raw.githubusercontent.com/fivewordsfouru/fivewordsfouru.github.io/main/TFC.gif",
    "group": "motion"
  },
  {
    "id": "A08",
    "title": "Pink Static",
    "category": "Visual",
    "kind": "still",
    "src": "https://raw.githubusercontent.com/fivewordsfouru/fivewordsfouru.github.io/main/bass.png",
    "group": "art"
  },
  {
    "id": "A09",
    "title": "Black Ops",
    "category": "Poster / Art",
    "kind": "still",
    "src": "https://raw.githubusercontent.com/fivewordsfouru/fivewordsfouru.github.io/main/bo2.png",
    "group": "art"
  },
  {
    "id": "A10",
    "title": "Heat Check",
    "category": "Visual",
    "kind": "still",
    "src": "https://raw.githubusercontent.com/fivewordsfouru/fivewordsfouru.github.io/main/bossthinksitlookscool.png",
    "group": "art"
  },
  {
    "id": "A11",
    "title": "Mikany",
    "category": "Poster / Illustration",
    "kind": "still",
    "src": "https://raw.githubusercontent.com/fivewordsfouru/fivewordsfouru.github.io/main/idek.png",
    "group": "art"
  },
  {
    "id": "A12",
    "title": "Crimson",
    "category": "Visual",
    "kind": "still",
    "src": "https://raw.githubusercontent.com/fivewordsfouru/fivewordsfouru.github.io/main/red2.png",
    "group": "art"
  },
  {
    "id": "A13",
    "title": "Violet Haze",
    "category": "Visual",
    "kind": "still",
    "src": "https://raw.githubusercontent.com/fivewordsfouru/fivewordsfouru.github.io/main/smokedude3.png",
    "group": "art"
  },
  {
    "id": "A14",
    "title": "Still Waiting",
    "category": "Photo / Art",
    "kind": "still",
    "src": "https://raw.githubusercontent.com/fivewordsfouru/fivewordsfouru.github.io/main/train.png",
    "group": "art"
  },
  {
    "id": "A15",
    "title": "Fly",
    "category": "Portrait / Poster",
    "kind": "still",
    "src": "https://raw.githubusercontent.com/fivewordsfouru/fivewordsfouru.github.io/main/jalenhurts2.png",
    "group": "art"
  },
  { "id":"A16", "title":"Neon Rupture", "category":"Digital Collage / Portrait", "kind":"still", "src":"assets/neon-rupture.png", "group":"art" },
  { "id":"A17", "title":"Midnight Velocity", "category":"Automotive / Digital Art", "kind":"still", "src":"assets/midnight-velocity.jpg", "group":"art" }
];
const VIDEOS = [
  {
    "id": "V01",
    "title": "Comp 1",
    "category": "Motion / Edit",
    "kind": "local",
    "src": "Comp%201.mp4"
  },
  {
    "id": "V02",
    "title": "Music Video",
    "category": "Video Production",
    "kind": "youtube",
    "src": "https://www.youtube.com/embed/8WcStvUz9wU"
  },
  {
    "id": "V03",
    "title": "Apple Ad Concept",
    "category": "Motion Graphics",
    "kind": "youtube",
    "src": "https://www.youtube.com/embed/Akcp6IzgnQo"
  },
  {
    "id": "V04",
    "title": "Video Project 03",
    "category": "Editing",
    "kind": "youtube",
    "src": "https://www.youtube.com/embed/JloWNZAzWF0"
  },
  {
    "id": "V05",
    "title": "Video Project 04",
    "category": "Editing",
    "kind": "youtube",
    "src": "https://www.youtube.com/embed/ml2N6OHfmZQ"
  },
  {
    "id": "V06",
    "title": "Video Project 05",
    "category": "Editing",
    "kind": "youtube",
    "src": "https://www.youtube.com/embed/18iRxq6-Caw"
  },
  {
    "id": "V07",
    "title": "Video Project 06",
    "category": "Editing",
    "kind": "youtube",
    "src": "https://www.youtube.com/embed/lgyT7ZuO4n0"
  },
  {
    "id": "V08",
    "title": "Video Project 07",
    "category": "Editing",
    "kind": "youtube",
    "src": "https://www.youtube.com/embed/27_acp7ebK4"
  },
  { "id":"V09", "title":"Afterimage", "category":"Video / Motion Study", "kind":"hls", "src":"https://customer-k6bj905t57lcimuc.cloudflarestream.com/eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI5ZTg2MTE4NWEzMDg5MGU5NzgxNGRlMzA5M2IwNmYxNSIsImlzcyI6ImFwcC5qb2luaGFuZHNoYWtlLmNvbSIsImV4cCI6MTc5MjYwNDQzNCwiaWF0IjoxNzkyNTE4MDM0LCJuYmYiOjE3OTI1MTc5NzQsImtpZCI6ImFkMzY5ODY2MDIwYWJhYTgzMzlhMmZhZmRhNmZiYjdjIn0.3d8kJz4J9VRW6mKL-IL_6ct8e5hxG5x3rxPJj3uIw5MW7MdJsrw9OUck2MN1x7ajaGpWucaZlcCPJRg1p-Fck7SpJunEJPg0p7bXXDatNHZFktk1sabEIYxNzvKxo4xiBtdpcS6BWZ7JuWaRBjXexPrxUdTT5hJJzCJ0FpLKSV7TfYxxlH-Fv6a2djsQUeJD5lbOo2ZODwfcNTcwawkhxW75VJJddZF7tb7g71k6H4mqnvN6Gp7ecmHhq6QafbTutNPWDMroEe-PwhaOzdPra6kuFa5vgVM8WKs3R2VWNJDRGSWAZq7VPMYABFsfCPj3uGtzUIeT5dEKbJh4V6ea6g/manifest/video.m3u8" }
];


/* All interactions are new. No original portfolio layout/handlers are used. */
'use strict';
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const modal = $('#artDialog');
const stage = $('#dialogStage');
const filters = $$('.filter-sticker');
let selectedFilter = 'all';
let shownWorks = [...WORKS];
let activeArtwork = -1;
let viewingVideo = false;

const element = (tag, className, value) => {
  const n = document.createElement(tag);
  if (className) n.className = className;
  if (value !== undefined) n.textContent = value;
  return n;
};

function makeMediaImage(src, alt, eager=false) {
  const pic = new Image();
  pic.loading = eager ? 'eager' : 'lazy';
  pic.decoding = 'async';
  pic.src = src;
  pic.alt = alt;
  pic.addEventListener('error', () => pic.classList.add('broken'), {once: true});
  return pic;
}

function renderGallery() {
  shownWorks = selectedFilter === 'all' ? [...WORKS] : WORKS.filter(w => w.group === selectedFilter);
  const frag = document.createDocumentFragment();
  for (let i=0; i<shownWorks.length; i++) {
    const work = shownWorks[i];
    const card = element('button', 'project-card');
    card.type = 'button';
    card.setAttribute('aria-label', `Open ${work.title} — ${work.category}`);
    const tape = element('span','tape card-tape'); tape.setAttribute('aria-hidden','true');
    const frame = element('div','card-image');
    const pic = makeMediaImage(work.src, `${work.title}: ${work.category} by William Schiesser`, i < 3);
    const placeholder = element('div','fallback-art');
    placeholder.append(element('small','', '5W4U / ORIGINAL ARTWORK'),element('strong','',work.title),element('small','',`FILE ${work.id}`));
    frame.append(pic,placeholder);
    const bottom = element('div','card-bottom');
    const number = element('span','card-number',`${work.id} / THE ARCHIVE`);
    const title = element('span','card-title');
    title.append(document.createTextNode(work.title),element('i','', '↗'));
    const cat = element('span','card-cat',work.category.toUpperCase());
    bottom.append(number,title,cat);
    card.append(tape,frame,bottom);
    card.addEventListener('click', () => openArtwork(shownWorks.indexOf(work)));
    frag.append(card);
  }
  $('#artGallery').replaceChildren(frag);
  $('#gallery-count').textContent = `${shownWorks.length} ${shownWorks.length===1?'WORK':'WORKS'} / ${WORKS.length} IN THE ARCHIVE`;
}

for (const button of filters) {
  button.addEventListener('click', () => {
    selectedFilter = button.dataset.filter;
    for (const b of filters) {
      const active = b===button;
      b.classList.toggle('selected',active);
      b.setAttribute('aria-pressed',String(active));
    }
    renderGallery();
  });
}

function showArtwork(index) {
  activeArtwork = (index+shownWorks.length)%shownWorks.length;
  viewingVideo = false;
  const work = shownWorks[activeArtwork];
  $('#dialogKicker').textContent = `${work.id} / SELECTED WORK`;
  $('#dialogTitle').textContent = work.title;
  $('#dialogDescription').textContent = `${work.category.toUpperCase()} / ORIGINAL PROPORTIONS`;
  $('.dialog-controls').hidden = false;
  const pic = makeMediaImage(work.src, `${work.title} original artwork`, true);
  const fallback = element('div','dialog-fallback',work.title);
  pic.addEventListener('error', () => { pic.remove(); },{once:true});
  stage.replaceChildren(pic, fallback);
  pic.addEventListener('load',() => fallback.remove(),{once:true});
}
function openArtwork(index) {
  showArtwork(index);
  if (!modal.open) modal.showModal();
}
function youtubeThumb(embedUrl) {
  const match = embedUrl.match(/\/embed\/([a-zA-Z0-9_-]+)/);
  return match ? `https://i.ytimg.com/vi/${match[1]}/hqdefault.jpg` : '';
}
function renderVideos() {
  const frag = document.createDocumentFragment();
  for (const v of VIDEOS) {
    const card = element('button','video-card');
    card.type='button';card.setAttribute('aria-label',`Play ${v.title}`);
    const frame = element('span','video-frame');
    const thumb = v.kind==='youtube' ? youtubeThumb(v.src) : (v.kind==='hls' ? 'assets/neon-rupture.png' : WORKS.find(w=>w.id==='A06').src);
    frame.append(makeMediaImage(thumb,`${v.title} thumbnail`));
    frame.append(element('span','video-play','▶'));
    const meta = element('div','video-card-label');
    meta.append(element('span','video-card-title',v.title),element('span','video-card-code',v.id));
    card.append(frame,meta,element('div','video-card-cat',v.category.toUpperCase()));
    card.addEventListener('click',()=>openVideo(v));
    frag.append(card);
  }
  $('#videoGallery').replaceChildren(frag);
}
function openVideo(v) {
  activeArtwork=-1;
  viewingVideo=true;
  $('#dialogKicker').textContent=`${v.id} / MOVING IMAGE`;
  $('#dialogTitle').textContent=v.title;
  $('#dialogDescription').textContent=v.category.toUpperCase();
  $('.dialog-controls').hidden=true;
  stage.replaceChildren();
  if (v.kind==='youtube') {
    const frame=document.createElement('iframe');
    frame.src=v.src+'?autoplay=1&rel=0';
    frame.title=v.title;
    frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen=true;
    stage.append(frame);
  } else {
    const video=document.createElement('video');
    video.controls=true;video.autoplay=true;video.playsInline=true;
    if (v.kind === 'hls') {
      // Safari supports HLS natively; other browsers use hls.js when available.
      const source = v.src;
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
      } else if (window.Hls?.isSupported()) {
        const player = new Hls({enableWorker:true});
        player.loadSource(source); player.attachMedia(video);
        player.on(Hls.Events.ERROR, (_event, info) => {
          if(info.fatal) { player.destroy(); stage.replaceChildren(element('div','dialog-missing','This video link may have expired or cannot be played. Please replace it with a fresh public video link.')); }
        });
        modal.addEventListener('close',()=>player.destroy(),{once:true});
      } else {
        stage.replaceChildren(element('div','dialog-missing','This browser cannot play HLS video right now. Try Safari, or check your internet connection.'));
        if (!modal.open) modal.showModal();
        return;
      }
      video.addEventListener('error',()=>stage.replaceChildren(element('div','dialog-missing','This video could not load. The signed streaming link may have expired.')),{once:true});
      stage.append(video);
      video.play().catch(()=>{});
      if (!modal.open) modal.showModal();
      return;
    }
    video.src=decodeURIComponent(v.src);
    const errorMsg=element('div','dialog-missing');
    errorMsg.innerHTML='<strong>Comp 1.mp4 has not been included yet.</strong><br>Place the original video file next to index.html in the portfolio folder. The rest of your videos open normally.';
    video.addEventListener('error',()=>stage.replaceChildren(errorMsg),{once:true});
    stage.append(video);
  }
  if (!modal.open) modal.showModal();
}
function closeModal() { if (modal.open) modal.close(); }
$('#dialogClose').addEventListener('click',closeModal);
$('#dialogPrev').addEventListener('click',()=>{if(activeArtwork!==-1)showArtwork(activeArtwork-1)});
$('#dialogNext').addEventListener('click',()=>{if(activeArtwork!==-1)showArtwork(activeArtwork+1)});
modal.addEventListener('click',e=>{if(e.target===modal) closeModal()});
modal.addEventListener('close',()=>{stage.replaceChildren();activeArtwork=-1;viewingVideo=false});
document.addEventListener('keydown',e=>{
 if (!modal.open||viewingVideo||activeArtwork<0)return;
 if(e.key==='ArrowLeft'){e.preventDefault();showArtwork(activeArtwork-1)}
 if(e.key==='ArrowRight'){e.preventDefault();showArtwork(activeArtwork+1)}
});
renderGallery();
renderVideos();

// Image on the about page is part of the original archive; gracefully handle an offline preview.
const aboutImg=$('.portrait-photo img');
aboutImg?.addEventListener('error',()=>{aboutImg.style.display='none';const f=element('span','portrait-offline','5W4U / DESIGN ARCHIVE');aboutImg.parentElement.append(f)},{once:true});
