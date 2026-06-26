document.addEventListener("DOMContentLoaded",()=> {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  if(menuToggle){
    menuToggle.addEventListener("click",()=>{
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      nav.style.display = expanded ? "" : "block";
    });
  }

  // Module expand/collapse
  document.querySelectorAll(".toggle").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      const body = btn.closest(".module").querySelector(".module-body");
      if(body) body.hidden = expanded;
    });
  });

  // Lightbox for samples
  const lightbox = document.getElementById("lightbox");
  const lbImage = document.getElementById("lbImage");
  const lbClose = document.getElementById("lbClose");
  document.querySelectorAll(".thumb").forEach(a=>{
    a.addEventListener("click", (e)=>{
      e.preventDefault();
      const href = a.getAttribute("href");
      lbImage.src = href;
      lbImage.alt = a.querySelector("img")?.alt || "";
      lightbox.setAttribute("aria-hidden","false");
    });
  });
  lbClose.addEventListener("click", ()=> lightbox.setAttribute("aria-hidden","true"));
  lightbox.addEventListener("click", (e)=> { if(e.target === lightbox) lightbox.setAttribute("aria-hidden","true"); });

  // Simple keyboard close
  document.addEventListener("keydown", (e)=> {
    if(e.key === "Escape") lightbox.setAttribute("aria-hidden","true");
  });
});
