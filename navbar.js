// KilnCraft — Handcrafted Ceramic Dinnerware Studio Navbar
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<nav class="fixed top-2 md:top-4 left-0 w-full z-[100] px-4 md:px-8 pointer-events-none transition-all duration-500">
  <div class="nav-container relative z-[70] bg-[#F5F4F2]/95 backdrop-blur-md border border-[#C8C4BE] rounded-full pointer-events-auto shadow-md transition-colors duration-300">
    <div class="max-w-[1440px] mx-auto px-4 lg:px-6">
      <div class="flex items-center justify-between h-16 md:h-20 gap-4">

        <a href="index.html" class="relative z-[60] flex items-center gap-3 group shrink-0">
          <div class="logo-bg w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#2C2C2C] flex items-center justify-center shadow-inner transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="12" cy="17" rx="9" ry="4" stroke="currentColor" stroke-width="1.5" class="text-[#F5F4F2]"/>
              <path d="M3 17V9C3 6.5 7 4 12 4s9 2.5 9 5v8" stroke="currentColor" stroke-width="1.5" class="text-[#F5F4F2]"/>
              <path d="M3 9c0 2.5 4 4.5 9 4.5s9-2 9-4.5" stroke="currentColor" stroke-width="1.5" class="text-[#F5F4F2]"/>
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="logo-text text-lg md:text-xl font-black tracking-tight text-[#1A1A1A] transition-colors duration-300">
              Klin<span class="text-[#8A8278]">Craft</span>
            </span>
          </div>
        </a>

        <div id="desktopNav" class="hidden xl:flex items-center justify-center gap-1 text-[13.5px] font-semibold flex-1 tracking-wide">
          
          <div class="relative group/collections">
            <button id="collectionsBtn" class="nav-link flex items-center space-x-1 xl:px-3 px-4 py-2 rounded-full transition-all duration-300 text-[#3A3A3A] hover:bg-[#E5E2DC]">
              <span>Home</span>
              <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300 group-hover/collections:rotate-180 text-[#9E9790]"></i>
            </button>
            <div id="collectionsMenu" class="dropdown-menu hidden absolute left-0 mt-3 w-52 bg-[#F5F4F2] shadow-xl rounded-2xl border border-[#C8C4BE] p-2 z-50 transition-colors duration-300">
              <a href="index.html" class="dropdown-link block px-4 py-2.5 rounded-xl text-sm text-[#3A3A3A] hover:bg-[#E5E2DC] transition-colors">Home 1</a>
              <a href="home2.html" class="dropdown-link block px-4 py-2.5 rounded-xl text-sm text-[#3A3A3A] hover:bg-[#E5E2DC] transition-colors">Home 2</a>
            </div>
          </div>

          <a href="about.html" class="nav-link xl:px-3 px-4 py-2 rounded-full text-[#3A3A3A] hover:bg-[#E5E2DC] transition-colors">About</a>
          <a href="collections.html" class="nav-link xl:px-3 px-4 py-2 rounded-full text-[#3A3A3A] hover:bg-[#E5E2DC] transition-colors">Collections</a>
          <a href="gallery.html" class="nav-link xl:px-3 px-4 py-2 rounded-full text-[#3A3A3A] hover:bg-[#E5E2DC] transition-colors">Gallery</a>
          <a href="craft.html" class="nav-link xl:px-3 px-4 py-2 rounded-full text-[#3A3A3A] hover:bg-[#E5E2DC] transition-colors">Our Craft</a>
          <a href="shop.html" class="nav-link xl:px-3 px-4 py-2 rounded-full text-[#3A3A3A] hover:bg-[#E5E2DC] transition-colors">Shop</a>
          <a href="workshop.html" class="nav-link xl:px-3 px-4 py-2 rounded-full text-[#3A3A3A] hover:bg-[#E5E2DC] transition-colors">Workshop</a>

          <a href="contact.html" class="nav-link xl:px-3 px-4 py-2 rounded-full text-[#3A3A3A] hover:bg-[#E5E2DC] transition-colors">Contact</a>
        </div>

        <div class="relative z-[60] hidden xl:flex items-center xl:gap-2 gap-3 shrink-0">
     
          
          <button id="exchangeToggle" class="icon-btn w-9 h-9 flex items-center justify-center border border-[#C8C4BE] rounded-full text-[#6B6560] hover:bg-[#E5E2DC] hover:border-[#2C2C2C] hover:text-[#1A1A1A] transition-all" title="Toggle RTL">
            <i class="fa-solid fa-right-left text-sm"></i>
          </button>
          
          <button id="themeToggle" class="icon-btn w-9 h-9 flex items-center justify-center border border-[#C8C4BE] rounded-full text-[#6B6560] hover:bg-[#E5E2DC] hover:border-[#2C2C2C] hover:text-[#1A1A1A] transition-all" title="Toggle Dark Mode">
            <i class="fa-solid fa-moon text-sm"></i>
          </button>

          <a href="login.html" class="cta-btn flex items-center justify-center xl:px-4 px-5 py-2.5 rounded-full bg-[#2C2C2C] text-white font-bold text-sm tracking-widest uppercase text-[11px] hover:bg-[#1A1A1A] hover:shadow-lg transition-all duration-300 gap-2">
             Login
          </a>
         <a href="signup.html" id="desktopSignupBtn" class="cta-btn flex items-center justify-center xl:px-4 px-5 py-2.5 rounded-full bg-transparent border border-black text-black font-bold text-sm tracking-widest uppercase text-[11px] hover:bg-[#1A1A1A] hover:text-white hover:shadow-lg transition-all duration-300 gap-2">
  Signup
</a>
        </div>

        <div class="relative z-[60] xl:hidden flex items-center gap-2 h-full">
        
          <button id="mobileBtn" class="w-10 h-10 flex items-center justify-center rounded-full bg-[#2C2C2C] text-white focus:outline-none transition-all">
            <i id="mobileIcon" class="fa-solid fa-bars text-lg"></i>
          </button>
        </div>

      </div>
    </div>
  </div>

  <div id="searchBar" class="hidden absolute top-[110%] left-4 right-4 md:left-8 md:right-8 bg-[#F5F4F2] border border-[#C8C4BE] rounded-full shadow-lg z-[60] pointer-events-auto transition-colors duration-300">
    <div class="px-6 py-3 flex items-center gap-4">
      <i class="fa-solid fa-magnifying-glass text-[#9E9790]"></i>
      <input id="searchInput" type="text" placeholder="Search ceramics, collections..." class="flex-1 bg-transparent text-[#1A1A1A] placeholder-[#B0ABA5] text-sm outline-none font-medium tracking-wide" />
      <button id="searchClose" class="text-[#9E9790] hover:text-[#1A1A1A] transition-colors p-1">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>
  </div>
</nav>

<div id="mobileMenu" class="fixed top-0 left-0 w-full h-[100dvh] bg-[#F5F4F2] z-[50] flex-col px-6 pt-32 pb-8 xl:hidden hidden overflow-y-auto transition-colors duration-300">
  <div class="flex flex-col gap-2 text-sm font-bold">
    
    
    <div class="mobile-dropdown-bg w-full bg-[#E5E2DC] rounded-2xl overflow-hidden mb-2 transition-colors">
    <button id="mobileCollectionsBtn" class="flex items-center justify-between w-full px-6 py-4 text-black tracking-wider uppercase text-xs">
  <span>Home</span>
  <i id="mobileCollectionsIcon" class="fa-solid fa-chevron-down text-sm text-black transition-transform duration-300"></i>
</button>
      <div id="mobileCollectionsMenu" class="hidden flex-col px-4 pb-4">
        <a href="index.html" class="mobile-sublink block px-4 py-3 rounded-xl text-sm text-[#4A4A4A] hover:bg-[#D6D2CC] transition-colors">Home 1</a>
        <a href="home2.html" class="mobile-sublink block px-4 py-3 rounded-xl text-sm text-[#4A4A4A] hover:bg-[#D6D2CC] transition-colors">Home 2</a>
      </div>
    </div>

    <a href="about.html" class="mobile-link px-6 py-4 rounded-2xl bg-white text-[#1A1A1A] tracking-wider uppercase text-xs shadow-sm transition-colors">About</a>
    <a href="collections.html" class="mobile-link px-6 py-4 rounded-2xl bg-white text-[#1A1A1A] tracking-wider uppercase text-xs shadow-sm transition-colors">Collections</a>
    <a href="gallery.html" class="mobile-link px-6 py-4 rounded-2xl bg-white text-[#1A1A1A] tracking-wider uppercase text-xs shadow-sm transition-colors">Gallery</a>
    <a href="shop.html" class="mobile-link px-6 py-4 rounded-2xl bg-white text-[#1A1A1A] tracking-wider uppercase text-xs shadow-sm transition-colors">Shop</a>
    <a href="craft.html" class="mobile-link px-6 py-4 rounded-2xl bg-white text-[#1A1A1A] tracking-wider uppercase text-xs shadow-sm transition-colors">Our Craft</a>

    <a href="workshop.html" class="mobile-link px-6 py-4 rounded-2xl bg-white text-[#1A1A1A] tracking-wider uppercase text-xs shadow-sm transition-colors">Workshop</a>

    <a href="contact.html" class="mobile-link px-6 py-4 rounded-2xl bg-white text-[#1A1A1A] tracking-wider uppercase text-xs shadow-sm transition-colors">Contact</a>

    <div class="mt-2 flex gap-2">
      <a href="login.html" class="mobile-cta-btn flex-1 px-6 py-4 rounded-2xl bg-[#2C2C2C] text-white tracking-wider uppercase text-xs shadow-sm text-center hover:bg-[#1A1A1A] transition-colors">Login</a>
      <a href="signup.html" id="mobileSignupBtn" class="mobile-cta-btn flex-1 px-6 py-4 rounded-2xl bg-transparent border border-black text-black tracking-wider uppercase text-xs shadow-sm text-center hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-colors">Signup</a>
    </div>
  </div>

  <div class="mt-auto pt-8 flex gap-3">
    <button id="mobileRtlToggle" class="mobile-theme-btn flex-1 flex items-center justify-center gap-2 rounded-2xl border border-[#C8C4BE] px-6 py-4 text-[#3A3A3A] hover:bg-[#E5E2DC] transition-all" title="Toggle RTL">
      <i class="fa-solid fa-right-left text-lg"></i>
      <span class="text-xs font-bold uppercase tracking-wider">RTL</span>
    </button>
    <button id="mobileThemeToggle" class="mobile-theme-btn flex-1 flex items-center justify-center gap-2 rounded-2xl border border-[#C8C4BE] px-6 py-4 text-[#3A3A3A] hover:bg-[#E5E2DC] transition-all">
      <i class="fa-solid fa-moon text-lg"></i>
      <span class="text-xs font-bold uppercase tracking-wider">Theme</span>
    </button>
  </div>
</div>
`;

  /* CSS STYLES */
  const style = document.createElement('style');
  style.textContent = `
    /* Active Link Styles */
    .nav-link {
      position: relative;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 3px;
      background: #8A8278;
      border-radius: 3px;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }
    .nav-link:hover::after {
      width: 70%;
    }
    .nav-link.active::after {
      width: 70%;
    }
    .nav-link.active {
      color: #1A1A1A !important;
    }
    .dropdown-link.active,
    .mobile-link.active,
    .mobile-sublink.active {
      background-color: #2C2C2C !important;
      color: #FFFFFF !important;
    }

    /* Menu Visibility */
    #mobileMenu.hidden { display: none !important; }
    #mobileMenu:not(.hidden) { display: flex !important; }
    #mobileCollectionsMenu.hidden { display: none !important; }
    #mobileCollectionsMenu:not(.hidden) { display: flex !important; }
    #searchBar.hidden { 
      opacity: 0; 
      pointer-events: none; 
      transform: translateY(-10px);
    }
    #searchBar:not(.hidden) { 
      opacity: 1; 
      pointer-events: auto; 
      transform: translateY(0);
      transition: all 0.3s ease;
    }
    body.menu-open { overflow: hidden !important; }

    /* =========================================
       DARK MODE OVERRIDES
       ========================================= */
    body.dark-mode {
      background-color: #121212;
      color: #F5F4F2;
    }
    
    /* Desktop Nav Elements */
    body.dark-mode .nav-container { background-color: rgba(26, 26, 26, 0.95) !important; border-color: #3A3A3A !important; }
    body.dark-mode .logo-bg { background-color: #F5F4F2 !important; }
    body.dark-mode .logo-bg svg * { stroke: #2C2C2C !important; }
    body.dark-mode .logo-text { color: #F5F4F2 !important; }
    body.dark-mode .nav-link { color: #D6D2CC !important; }
    body.dark-mode .nav-link::after { background: #9E9790 !important; }
    body.dark-mode .nav-link.active { color: #F5F4F2 !important; }
    body.dark-mode .nav-link:hover { background-color: #3A3A3A !important; color: #FFFFFF !important; }
    body.dark-mode .dropdown-menu { background-color: #1A1A1A !important; border-color: #3A3A3A !important; }
    body.dark-mode .dropdown-link { color: #D6D2CC !important; }
    body.dark-mode .dropdown-link:hover { background-color: #3A3A3A !important; }
    body.dark-mode .icon-btn { border-color: #4A4A4A !important; color: #D6D2CC !important; }
    body.dark-mode .icon-btn:hover { background-color: #3A3A3A !important; border-color: #F5F4F2 !important; color: #FFFFFF !important; }
    body.dark-mode .cta-btn { background-color: #F5F4F2 !important; color: #1A1A1A !important; }
    body.dark-mode .cta-btn:hover { background-color: #FFFFFF !important; }
    body.dark-mode #desktopSignupBtn { background-color: transparent !important; border-color: #F5F4F2 !important; color: #F5F4F2 !important; }
    body.dark-mode #desktopSignupBtn:hover { background-color: #3A3A3A !important; color: #F5F4F2 !important; border-color: #F5F4F2 !important; }
    body.dark-mode .mobile-cta-btn { background-color: #F5F4F2 !important; color: #1A1A1A !important; }
    body.dark-mode .mobile-cta-btn:hover { background-color: #FFFFFF !important; }
    body.dark-mode #mobileSignupBtn { background-color: transparent !important; border-color: #F5F4F2 !important; color: #F5F4F2 !important; }
    body.dark-mode #mobileSignupBtn:hover { background-color: #F5F4F2 !important; color: #1A1A1A !important; border-color: #F5F4F2 !important; }
    
    /* Search Bar */
    body.dark-mode #searchBar { background-color: #1A1A1A !important; border-color: #3A3A3A !important; }
    body.dark-mode #searchInput { color: #F5F4F2 !important; }
    body.dark-mode #searchInput::placeholder { color: #6B6560 !important; }

    /* Mobile Nav Elements */
    body.dark-mode #mobileMenu { background-color: #121212 !important; }
    body.dark-mode .mobile-dropdown-bg { background-color: #1A1A1A !important; }
    body.dark-mode #mobileCollectionsBtn { color: #F5F4F2 !important; }
    body.dark-mode #mobileCollectionsBtn i { color: #F5F4F2 !important; }
    body.dark-mode #mobileCollectionsIcon { color: #F5F4F2 !important; }
    body.dark-mode .mobile-sublink { color: #D6D2CC !important; }
    body.dark-mode .mobile-sublink:hover { background-color: #3A3A3A !important; }
    body.dark-mode .mobile-link { background-color: #1A1A1A !important; color: #F5F4F2 !important; border: 1px solid #3A3A3A; }
    body.dark-mode .cart-btn { background-color: #3A3A3A !important; color: #F5F4F2 !important; }
    body.dark-mode #mobileBtn { background-color: #F5F4F2 !important; color: #1A1A1A !important; }
    body.dark-mode .wishlist-btn, 
    body.dark-mode .mobile-theme-btn { border-color: #4A4A4A !important; color: #D6D2CC !important; }
    body.dark-mode .wishlist-btn:hover, 
    body.dark-mode .mobile-theme-btn:hover { background-color: #3A3A3A !important; color: #FFFFFF !important; }
    
    /* Keep active buttons high contrast in dark mode */
    body.dark-mode .nav-link.active,
    body.dark-mode .dropdown-link.active,
    body.dark-mode .mobile-link.active,
    body.dark-mode .mobile-sublink.active {
      background-color: #F5F4F2 !important;
      color: #1A1A1A !important;
    }
  `;
  document.head.appendChild(style);

  /* ELEMENT REFS */
  const collectionsBtn  = document.getElementById("collectionsBtn");
  const collectionsMenu = document.getElementById("collectionsMenu");

  const mobileBtn              = document.getElementById("mobileBtn");
  const mobileMenu             = document.getElementById("mobileMenu");
  const mobileIcon             = document.getElementById("mobileIcon");

  const mobileCollectionsBtn   = document.getElementById("mobileCollectionsBtn");
  const mobileCollectionsMenu  = document.getElementById("mobileCollectionsMenu");
  const mobileCollectionsIcon  = document.getElementById("mobileCollectionsIcon");

  const searchToggle   = document.getElementById("searchToggle");
  const exchangeToggle = document.getElementById("exchangeToggle");
  const mobileRtlToggle = document.getElementById("mobileRtlToggle");
  const searchBar      = document.getElementById("searchBar");
  const searchClose    = document.getElementById("searchClose");
  const searchInput    = document.getElementById("searchInput");
  
  const themeToggles   = document.querySelectorAll("#themeToggle, #mobileThemeToggle");

  /* ACTIVE PAGE HIGHLIGHT (Robust Matching) */
  let currentPath = window.location.pathname.split("/").pop();
  currentPath = currentPath.split("?")[0].split("#")[0]; // Clean up URL parameters

  if (!currentPath || currentPath === "" || currentPath === "/") {
    currentPath = "index.html"; 
  }

  // Highlight Home button when on index page
  if (currentPath === "index.html") {
    collectionsBtn?.classList.add('active');
  }

  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-link, .dropdown-link, .mobile-sublink');

  allNavLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    
    // Strip .html to avoid false matches (e.g. "workshop" matching "shop")
    const currentStem = currentPath.replace('.html', '');
    const linkStem = linkHref ? linkHref.replace('.html', '') : '';
    if (linkHref && currentStem === linkStem) {
      link.classList.add('active');
      
      // Handles desktop dropdown parent highlight
      if (link.classList.contains('dropdown-link') && collectionsMenu && collectionsMenu.contains(link)) {
        collectionsBtn?.classList.add('active');
      }
      
      // Handles mobile submenu parent highlight
      if (link.classList.contains('mobile-sublink') && mobileCollectionsMenu && mobileCollectionsMenu.contains(link)) {
        if (mobileCollectionsBtn) {
            mobileCollectionsBtn.parentElement.classList.add('bg-[#2C2C2C]', 'text-black');
            mobileCollectionsBtn.classList.remove('text-[#1A1A1A]');
            mobileCollectionsBtn.classList.add('text-black');
        }
        if (mobileCollectionsMenu) mobileCollectionsMenu.classList.remove('hidden');
        if (mobileCollectionsIcon) mobileCollectionsIcon.className = "fa-solid fa-chevron-up text-sm text-black transition-transform duration-300";
      }
    }
  });


  /* DESKTOP DROPDOWN */
  collectionsBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    collectionsMenu?.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {
    collectionsMenu?.classList.add("hidden");
  });

  /* MOBILE SUBMENU */
  mobileCollectionsBtn?.addEventListener("click", () => {
    const isHidden = mobileCollectionsMenu.classList.toggle("hidden");
    mobileCollectionsIcon.className = isHidden 
      ? "fa-solid fa-chevron-down text-sm transition-transform duration-300" 
      : "fa-solid fa-chevron-up text-sm transition-transform duration-300";
  });

  /* MOBILE MENU TOGGLE */
  mobileBtn.onclick = () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("menu-open");
    
    // Switch icon between bars and xmark
    mobileIcon.className = isHidden ? "fa-solid fa-bars text-lg" : "fa-solid fa-xmark text-lg";
    
    // Update button colors based on theme and state
    const isDark = document.body.classList.contains("dark-mode");
    if(isHidden) {
      mobileBtn.style.backgroundColor = isDark ? "#F5F4F2" : "#2C2C2C";
      mobileBtn.style.color = isDark ? "#1A1A1A" : "white";
    } else {
      mobileBtn.style.backgroundColor = isDark ? "#2C2C2C" : "white";
      mobileBtn.style.color = isDark ? "white" : "#1A1A1A";
    }
  };

  /* SEARCH TOGGLE */
  searchToggle?.addEventListener("click", (e) => {
    e.stopPropagation();
    searchBar?.classList.toggle("hidden");
    if (!searchBar?.classList.contains("hidden")) {
      searchInput?.focus();
    }
  });

  searchClose?.addEventListener("click", () => {
    searchBar?.classList.add("hidden");
    if (searchInput) searchInput.value = "";
  });

  searchBar?.addEventListener("click", (e) => e.stopPropagation());
  document.addEventListener("click", () => {
    searchBar?.classList.add("hidden");
  });

  /* EXCHANGE (RTL) TOGGLE LOGIC */
  const toggleRtl = () => {
    const htmlDoc = document.documentElement;
    const currentDir = htmlDoc.getAttribute("dir") || "ltr";
    htmlDoc.setAttribute("dir", currentDir === "ltr" ? "rtl" : "ltr");
  };

  exchangeToggle?.addEventListener("click", toggleRtl);
  mobileRtlToggle?.addEventListener("click", toggleRtl);
  
  /* LOGO — scroll to top when already on home */
  document.querySelector('a[href="index.html"]')?.addEventListener('click', function(e) {
    const path = window.location.pathname.replace(/\/$/, '');
    if (path.endsWith('index.html') || path === '' || path === '/' || path.endsWith('/')) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  /* THEME TOGGLE */
  const syncThemeIcons = () => {
    const isDark = document.body.classList.contains('dark-mode');
    themeToggles.forEach(toggle => {
      const icon = toggle.querySelector('i, svg');
      if (!icon) return;
      if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    });
  };

  // Restore saved theme on load
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    syncThemeIcons();
  }

  themeToggles.forEach(btn => {
      btn.addEventListener("click", () => {
          document.body.classList.toggle('dark-mode');
          syncThemeIcons();
          localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
      });
  });
});