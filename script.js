

```javascript
// Loader
window.onload=()=>{
  document.getElementById('loader').style.display='none';
}

// Scroll reveal
const reveals=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add('active');
    }
  });
});

// Theme toggle
const toggle=document.getElementById('themeToggle');
toggle.onclick=()=>{
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
  toggle.textContent=document.body.classList.contains('dark')?'🌙':'☀️';
};

// Apple-style scroll effects
const fades=document.querySelectorAll('.apple-fade');
const parallax=document.querySelectorAll('.apple-parallax');
const scrubs=document.querySelectorAll('.scrub');

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('active');}
  });
},{threshold:0.3});

fades.forEach(el=>observer.observe(el));

window.addEventListener('scroll',()=>{
  const scrollY=window.scrollY;

  // Parallax
  parallax.forEach(el=>{
    const speed=el.dataset.speed;
    el.style.transform=`translateY(${scrollY*speed}px)`;
  });

  // Scroll scrub effect
  scrubs.forEach(el=>{
    const rect=el.getBoundingClientRect();
    const progress=1 - Math.min(Math.max(rect.top/window.innerHeight,0),1);
    el.style.transform=`translateY(${40*(1-progress)}px) scale(${0.95+progress*0.05})`;
    el.style.opacity=progress;
  });
});
