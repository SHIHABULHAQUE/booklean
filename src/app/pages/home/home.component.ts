import { Component, ChangeDetectionStrategy, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof window !== "undefined") {
      this.initScripts();
    }
  }

  toggleFAQ(arg: any) { (window as any).toggleFAQ(arg); }
  showSvc(arg: any) { (window as any).showSvc(arg); }
  pickCountry(e: any, arg: any, flag: any, name: any) { (window as any).pickCountry(e, arg, flag, name); }
  pickSide(arg: any, name: any, flag: any) { (window as any).pickSide(arg, name, flag); }
  toggleLean() { (window as any).toggleLean(); }
  qk(arg: any) { (window as any).qk(arg); }
  lm() { (window as any).lm(); }
  closeSO(e?: any) { (window as any).closeSO(e); }
  
  goSlide(n: any) { (window as any).goSlide(n); }
  closeSvc() { const el = document.getElementById('svc-detail'); if (el) el.style.display = 'none'; }
  initScripts() {
    // Sliders
    let curSlide = 0;

    const slideEls = document.querySelectorAll('.slide');
    const dotEls = document.querySelectorAll('.dot');
    
    const goSlide = (n: number) => {
      if (slideEls[curSlide]) slideEls[curSlide].classList.remove('active');
      if (dotEls[curSlide]) dotEls[curSlide].classList.remove('active');
      curSlide = n;
      if (slideEls[curSlide]) slideEls[curSlide].classList.add('active');
      if (dotEls[curSlide]) dotEls[curSlide].classList.add('active');
    };
    
    if (slideEls.length > 0) {
      setInterval(() => { goSlide((curSlide + 1) % slideEls.length); }, 5500);
    }
    
    // Services
    (window as any).showSvc = (key: string) => {
      const SD: any = {
        audit: { title:'🔍 Audit & Assurance', benefit:'Know your numbers are right. Investors, banks and regulators trust your financials.', items:['Statutory Audit','Financial Statement Audit','IFRS Advisory','Compliance Audit','Internal Control Review','Special Purpose Audit','Forensic Accounting','Risk Assurance','IT Audit','External Audit'] },
        tax: { title:'🧾 Tax & E-Invoicing', benefit:"Never miss a deadline. Pay what's right — not a dirham more.", items:['Corporate Tax Registration','Corporate Tax Filing (9%)','Tax Advisory & Planning','VAT Registration','VAT Filing & Returns','VAT Audit Support','Transfer Pricing Documentation','E-Invoicing / PEPPOL 2027','FTA Audit Defence','International Tax'] },
        advisory: { title:'📈 Advisory', benefit:'Make big decisions with confidence. Data-backed, expert-guided.', items:['M&A Advisory','Due Diligence','Business Valuation','Risk Assessment','Fraud Risk Management','Business Strategy','Feasibility Studies','ESG & Sustainability','Financial Modelling','IPO Preparation'] },
        bso: { title:'📚 Finance Outsourcing', benefit:'Get a full finance team without hiring one.', items:['Accounting & Bookkeeping','Payroll & WPS','Expense Management','Treasury Services','Virtual CFO Services','Finance Department Outsourcing','Management Reporting','Budgeting & Forecasting'] },
        digital: { title:'🤖 Digital & AI Solutions', benefit:'Cut admin time by 70%. AI built for UAE businesses.', items:['ERP Implementation','ERP Migration','AI Bookkeeping','AI Invoice Processing','AI Fraud Detection','VAT Validation Engine','Power BI Dashboards','Financial Analytics','OCR Processing','Workflow Automation'] },
        regulatory: { title:'🛡️ Regulatory & Compliance', benefit:"Stay on the right side of UAE law — before regulators come knocking.", items:['ICV Certification','AML Compliance','UBO Registry','ESR Compliance','GoAML Registration','PDPL Data Privacy','AML Policy Development','Regulatory Advisory'] },
        corporate: { title:'🚀 Business Setup & Growth', benefit:'Starting or scaling in UAE? We handle it all, end to end.', items:['Business Setup (Mainland)','Business Setup (Freezone)','Business Setup (Offshore)','Company Restructuring','IPO Readiness','Franchise Advisory','Golden Visa Support','Bank Account Opening','PRO Services','Family Business Advisory'] }
      };
      
      const d = SD[key];
      if (!d) return;
      const panel = document.getElementById('svc-detail');
      const title = document.getElementById('svc-dtitle');
      const body = document.getElementById('svc-dbody');
      if (!panel || !title || !body) return;
      
      title.textContent = d.title;
      let html = '';
      if (d.benefit) {
        html += '<div style="grid-column:1/-1;background:linear-gradient(135deg,#051C2A,#004FE1);color:#fff;border-radius:8px;padding:12px 16px;font-family:var(--fb);font-size:13px;font-weight:600;margin-bottom:4px;">✅ ' + d.benefit + '</div>';
      }
      d.items.forEach((item: string) => {
        html += '<div class="svc-detail-item"><span>✓</span>' + item + '</div>';
      });
      body.innerHTML = html;
      panel.style.display = 'block';
      setTimeout(() => { panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 50);
    };

    // FAQ
    (window as any).toggleFAQ = (btn: HTMLElement) => {
      const ans = btn.nextElementSibling as HTMLElement;
      const arrow = btn.querySelector('.faq-arrow') as HTMLElement;
      const isOpen = ans && ans.style.display === 'block';

      document.querySelectorAll('.faq-a').forEach((a: any) => { a.style.display = 'none'; });
      document.querySelectorAll('.faq-q').forEach((q: any) => { q.style.background = 'rgba(255,255,255,.80)'; q.style.color = '#0D1F42'; });
      document.querySelectorAll('.faq-arrow').forEach((a: any) => { a.textContent = '+'; a.style.transform = 'none'; a.style.color = 'var(--b1)'; });

      if (!isOpen && ans) {
        ans.style.display = 'block';
        btn.style.background = 'rgba(5,28,42,.92)';
        btn.style.color = '#08A1F7';
        if (arrow) { arrow.textContent = '−'; arrow.style.transform = 'rotate(180deg)'; }
      }
    };

    // Chat
    (window as any).toggleLean = () => {
      const p = document.getElementById('lean-panel');
      const o = document.getElementById('lean-ico');
      const cl = document.getElementById('lean-cls');
      if (!p) return;
      const open = p.style.display === 'block';
      p.style.display = open ? 'none' : 'block';
      if (o) o.style.display = open ? '' : 'none';
      if (cl) cl.style.display = open ? 'none' : '';
      if (!open) { const inp = document.getElementById('lean-in'); if (inp) inp.focus(); }
    };
    
    (window as any).addUserMsg = (t: string) => {
      const m = document.getElementById('lean-msgs');
      if (!m) return;
      m.innerHTML += '<div class="lean-user-bubble"><div>' + t + '</div></div>';
      m.scrollTop = m.scrollHeight;
    };
    
    (window as any).addBotMsg = (t: string) => {
      const m = document.getElementById('lean-msgs');
      if (!m) return;
      m.innerHTML += '<div class="lean-bot-msg-wrap"><div class="lean-bot-av">&#8734;</div><div class="lean-bot-bubble">' + t + '</div></div>';
      m.scrollTop = m.scrollHeight;
    };
    
    (window as any).botReply = (msg: string) => {
      const l = msg.toLowerCase();
      if (l.indexOf('tax') >= 0 || l.indexOf('vat') >= 0) return '&#9989; I can help with UAE tax — VAT, Corporate Tax (9%), FTA compliance. Our CA team follows up within 24h.';
      if (l.indexOf('cost') >= 0 || l.indexOf('price') >= 0) return '&#128176; Pricing is tailored to your business. Book a free call for a custom quote.';
      if (l.indexOf('upload') >= 0 || l.indexOf('invoice') >= 0) return '&#128206; Upload documents via your Client Portal. OCR extracts all data instantly — 99%+ accuracy.';
      return '&#128075; Great question! Book a free 30-min call and our experts will help: <a href="#bk-diff" onclick="toggleLean()" style="color:var(--b4);">Book Now &#8594;</a>';
    };
    
    (window as any).qk = (b: HTMLElement) => {
      (window as any).addUserMsg(b.innerText);
      const q = document.getElementById('lean-quick');
      if (q) q.style.display = 'none';
      setTimeout(() => { (window as any).addBotMsg((window as any).botReply(b.innerText)); }, 800);
    };
    
    (window as any).lm = () => {
      const i = document.getElementById('lean-in') as HTMLInputElement;
      const t = i ? i.value.trim() : '';
      if (!t) return;
      (window as any).addUserMsg(t); i.value = '';
      setTimeout(() => { (window as any).addBotMsg((window as any).botReply(t)); }, 800);
    };

    // Filters
    document.querySelectorAll('.filter-btn').forEach((b: any) => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach((x: any) => { x.classList.remove('active'); });
        b.classList.add('active');
      });
    });

    // Intersection Observer
    const revObs = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          revObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07 });

    document.querySelectorAll(
      '.glass-rect, .stat-card, .ind-card, .benefit-card, .founder-card, .g-wide-item, .bkd-card, .cap-card, .global-card, .lean-feat, .value-card, .wb-val-card, .faq-item'
    ).forEach((el: any) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity .55s ease, transform .55s ease';
      revObs.observe(el);
    });
  }
}
