// KilnCraft — Handcrafted Ceramic Dinnerware Studio Footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="w-full transition-colors duration-500 bg-[#F5F4F2] border-t border-[#C8C4BE] footer-container">
  
  <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 grid gap-12 grid-cols-1 md:grid-cols-12">

    <div class="md:col-span-12 lg:col-span-4 pr-0 lg:pr-8">
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
        <br>
      <p class="muted-text text-sm font-medium text-[#6B6560] leading-relaxed mb-6 transition-colors duration-300">
        Artisan dinnerware and functional pottery crafted with slow, intentional techniques. Bring organic elegance to your everyday rituals.
      </p>
      
      <div class="flex gap-3">
        <a href="#" class="social-icon w-10 h-10 flex items-center justify-center rounded-full border border-[#C8C4BE] text-[#6B6560] transition-all duration-300 hover:bg-[#E5E2DC] hover:border-[#2C2C2C] hover:text-[#1A1A1A]">
          <i class="fa-brands fa-instagram text-lg"></i>
        </a>
        <a href="#" class="social-icon w-10 h-10 flex items-center justify-center rounded-full border border-[#C8C4BE] text-[#6B6560] transition-all duration-300 hover:bg-[#E5E2DC] hover:border-[#2C2C2C] hover:text-[#1A1A1A]">
          <i class="fa-brands fa-pinterest-p text-lg"></i>
        </a>
        <a href="#" class="social-icon w-10 h-10 flex items-center justify-center rounded-full border border-[#C8C4BE] text-[#6B6560] transition-all duration-300 hover:bg-[#E5E2DC] hover:border-[#2C2C2C] hover:text-[#1A1A1A]">
          <i class="fa-brands fa-tiktok text-lg"></i>
        </a>
      </div>
    </div>

    <div class="md:col-span-4 lg:col-span-2">
      <h3 class="heading-text text-sm font-black mb-6 uppercase tracking-widest text-[#1A1A1A] transition-colors duration-300">Shop</h3>
      <ul class="space-y-4 text-sm font-semibold">
        <li><a href="dinnerware.html" class="footer-link block text-[#6B6560] transition-all duration-300">Dinnerware</a></li>
        <li><a href="drinkware.html" class="footer-link block text-[#6B6560] transition-all duration-300">Drinkware</a></li>
        <li><a href="serveware.html" class="footer-link block text-[#6B6560] transition-all duration-300">Serveware</a></li>
        <li><a href="limited.html" class="footer-link block text-[#6B6560] transition-all duration-300">Limited Edition</a></li>
        <li><a href="giftcards.html" class="footer-link block text-[#6B6560] transition-all duration-300">Gift Cards</a></li>
      </ul>
    </div>

    <div class="md:col-span-4 lg:col-span-2">
      <h3 class="heading-text text-sm font-black mb-6 uppercase tracking-widest text-[#1A1A1A] transition-colors duration-300">Studio</h3>
      <ul class="space-y-4 text-sm font-semibold">
        <li><a href="about.html" class="footer-link block text-[#6B6560] transition-all duration-300">Our Story</a></li>
        <li><a href="process.html" class="footer-link block text-[#6B6560] transition-all duration-300">The Process</a></li>
        <li><a href="care.html" class="footer-link block text-[#6B6560] transition-all duration-300">Care Guide</a></li>
        <li><a href="wholesale.html" class="footer-link block text-[#6B6560] transition-all duration-300">Wholesale</a></li>
        <li><a href="contact.html" class="footer-link block text-[#6B6560] transition-all duration-300">Contact Us</a></li>
      </ul>
    </div>

    <div class="md:col-span-4 lg:col-span-4">
      <h3 class="heading-text text-sm font-black mb-6 uppercase tracking-widest text-[#1A1A1A] transition-colors duration-300">Join the Kiln</h3>
      <p class="muted-text text-sm font-medium text-[#6B6560] mb-6 leading-relaxed transition-colors duration-300">
        Subscribe for early access to new kiln releases, studio updates, and exclusive subscriber pieces.
      </p>

      <form class="flex flex-col gap-3" id="newsletterForm">
        <div class="relative">
          <input type="email" required placeholder="Enter your email address..." class="footer-input w-full px-5 py-3.5 rounded-full bg-transparent text-[#1A1A1A] border border-[#C8C4BE] focus:outline-none focus:border-[#2C2C2C] transition-all font-medium text-sm">
        </div>
        <button type="submit" class="submit-btn w-full py-3.5 rounded-full font-bold text-xs tracking-widest uppercase bg-[#2C2C2C] text-white transition-all duration-300 hover:bg-[#1A1A1A] hover:shadow-lg flex items-center justify-center gap-2">
          <span>Subscribe</span>
          <i class="fa-solid fa-arrow-right text-sm"></i>
        </button>
      </form>
    </div>
  </div>

  <div class="bottom-bar border-t border-[#C8C4BE] transition-colors duration-500">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] uppercase tracking-[0.15em] font-bold text-[#9E9790] transition-colors duration-300">
      
      <p>© ${new Date().getFullYear()} KilnCraft Studio. All rights reserved.</p>

      <div class="flex gap-6">
        <a href="privacy.html" class="hover:text-[#1A1A1A] bottom-link transition-colors duration-300">Privacy Policy</a>
        <a href="terms.html" class="hover:text-[#1A1A1A] bottom-link transition-colors duration-300">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;

  /* ===============================
     INJECT STYLES (Including Dark Mode)
  =============================== */
  const footerStyles = document.createElement('style');
  footerStyles.textContent = `
    /* Hover Animations */
    .footer-link:hover {
      color: #1A1A1A !important;
      transform: translateX(4px);
    }
    
    [dir="rtl"] .footer-link:hover {
      transform: translateX(-4px);
    }

    .footer-input::placeholder {
      color: #B0ABA5;
    }

    /* =========================================
       DARK MODE OVERRIDES (Syncs with Navbar)
       ========================================= */
    body.dark-mode .footer-container { background-color: #121212 !important; border-color: #3A3A3A !important; }
    body.dark-mode .logo-bg { background-color: #F5F4F2 !important; }
    body.dark-mode .icon-svg { stroke: #2C2C2C !important; }
    body.dark-mode .logo-text, 
    body.dark-mode .heading-text { color: #F5F4F2 !important; }
    body.dark-mode .muted-text,
    body.dark-mode .footer-link { color: #B0ABA5 !important; }
    
    body.dark-mode .footer-link:hover { color: #FFFFFF !important; }
    
    body.dark-mode .social-icon { border-color: #4A4A4A !important; color: #D6D2CC !important; }
    body.dark-mode .social-icon:hover { background-color: #3A3A3A !important; border-color: #F5F4F2 !important; color: #FFFFFF !important; }
    
    body.dark-mode .footer-input { border-color: #4A4A4A !important; color: #F5F4F2 !important; }
    body.dark-mode .footer-input:focus { border-color: #F5F4F2 !important; }
    
    body.dark-mode .submit-btn { background-color: #F5F4F2 !important; color: #1A1A1A !important; }
    body.dark-mode .submit-btn:hover { background-color: #FFFFFF !important; box-shadow: 0 10px 15px -3px rgba(255, 255, 255, 0.1); }
    
    body.dark-mode .bottom-bar { border-color: #3A3A3A !important; }
    body.dark-mode .bottom-link:hover { color: #FFFFFF !important; }
  `;
  document.head.appendChild(footerStyles);

  /* Form Logic */
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Welcome to the Kiln! You are now subscribed to our newsletter.');
      form.reset();
    });
  }
});