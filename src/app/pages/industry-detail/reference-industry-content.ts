export interface ReferenceIndustryCard {
  title: string;
  description: string;
}

export interface ReferenceIndustryContent {
  tag: string;
  title: string;
  sub: string;
  pain: ReferenceIndustryCard[];
  sol: ReferenceIndustryCard[];
  lawTitle: string;
  laws: string[];
  storyTitle: string;
  story: string;
  cta: string;
}

export const referenceIndustryContent: Record<string, ReferenceIndustryContent> = {
  restaurant: {
    tag: 'Restaurant & F&B Accounting UAE · Verified UAE Tax Laws 2026',
    title: 'Restaurants & F&B — VAT, POS Reconciliation & Cost Control',
    sub: 'Running a restaurant in UAE means managing VAT across dine-in, takeaway, delivery platforms, and staff meals — each with distinct rules under UAE VAT Law. One wrong classification and you have an FTA liability building quietly every quarter. BookLean has handled VAT and accounting for 80+ UAE restaurants and cafés since VAT was introduced in 2018.',
    pain: [
      {
        title: 'POS Data Never Matches the Books',
        description:
          'alabat, Careem, Deliveroo, Zomato — every platform has different settlement cycles, commission structures, and VAT treatment on their fees. Most restaurants carry an unexplained monthly gap between POS revenue and accounting records. This is exactly what FTA auditors look for first.',
      },
      {
        title: 'Staff Meals — Deemed Supply Rule Ignored',
        description:
          'Under UAE VAT Law and FTA Public Clarification VATP005, providing meals free of charge to employees is a "deemed supply." Output VAT must be accounted for on the cost of those meals. Most F&B businesses apply no VAT here and quietly accumulate a liability that compounds every quarter.',
      },
      {
        title: 'Food Cost & Margin Blind Spots',
        description:
          'Most restaurant owners do not know their true food cost percentage until month-end — and by then it is too late to act. Without real-time cost tracking per outlet, you are making pricing and purchasing decisions on assumptions rather than facts.',
      },
      {
        title: 'Multi-Outlet VAT Returns Filed Incorrectly',
        description:
          'A single VAT registration covers all outlets — but returns aggregated across locations without outlet-level reconciliation contain errors the FTA can identify. Inter-outlet transfers and recharges also carry their own VAT treatment that most multi-location groups get wrong.',
      },
    ],
    sol: [
      {
        title: 'POS-to-Accounts Reconciliation Monthly',
        description:
          'We reconcile every delivery platform — Talabat, Noon, Zomato, Deliveroo, Careem — against your bank statement and accounting records. One clean, FTA-ready set of books. Zero unexplained gaps.',
      },
      {
        title: 'Correct VAT on Every Transaction',
        description:
          'We apply the right UAE VAT treatment to dine-in (5%), takeaway (5%), delivery commissions (input VAT), staff meals (deemed supply treatment), wastage adjustments, and alcoholic beverages (5% VAT; note energy drinks 100% excise + 5% VAT, carbonated drinks 50% excise + 5% VAT) — every transaction, every quarter.',
      },
      {
        title: 'Weekly Food Cost Dashboard',
        description:
          'We set up real-time dashboards showing food cost %, gross margin, and labour cost % by outlet — updated weekly so you can make corrective decisions before the month is over.',
      },
      {
        title: 'Multi-Outlet VAT Filing — Done Right',
        description:
          'We file your consolidated VAT return with correct outlet-level reconciliation, correct treatment of inter-outlet transfers, and full supporting schedules that stand up to an FTA desk review.',
      },
    ],
    lawTitle: '📋 UAE Laws & FTA Rules — Restaurants & F&B (Verified)',
    laws: [
      '1. Standard VAT rate – 5%:UAE VAT Law (Federal Decree Law No. 8 of 2017) sets a standard VAT rate of 5% on most supplies of goods and services, including restaurant food and beverage.',
      '2. Mandatory VAT registration – AED 375,000:Restaurants must register for VAT when taxable supplies in the last 12 months exceed AED 375,000, as per FTA guidance and Cabinet Decision No. 52 of 2017 (Executive Regulations).',
      '3. VAT filing – VAT201 returns (usually quarterly):Most F&B businesses file VAT201 returns every quarter via the FTA portal; wrong or late returns can trigger administrative penalties under the Tax Procedures Law and updated FTA fine schedule.',
      '4. Staff meals and hospitality – deemed supplies rules\nFree or discounted staff meals and hospitality can be treated as “deemed supplies” if they go beyond normal business needs, and may require output VAT at 5% under VAT Law Articles on deemed supply and the Executive Regulations.',
      '5. Promotional free meals & discounts\nPromotional meals given free or at deep discount to customers must follow specific VAT rules; some are taxable deemed supplies, others can be treated as normal taxable supplies with discounted value.',
      '6. Input VAT recovery on costs\nRestaurants can usually recover input VAT on ingredients, rent, utilities, and equipment that are used for taxable supplies, following the input tax recovery conditions in the VAT Executive Regulations.',
      '7. Excise tax – energy & carbonated drinks\nExcise tax is 100% on energy drinks and 50% on carbonated drinks, with an additional sugar based excise from 1 January 2026 that charges up to AED 1.09 per litre on high sugar beverages.',
      '8. Sugar based excise – 2026 bands\nNew 2026 model:\no 8g or more sugar per 100 ml → AED 1.09 per litre.\no 5g to less than 8g per 100 ml → AED 0.79 per litre.\no Less than 5g sugar or only artificial sweeteners → 0 AED per litre.',
      '9. Tourist VAT Refund Scheme – Planet Tax Free\nOverseas tourists (18+) can reclaim VAT on eligible retail purchases through the Planet Tax Free system; restaurant meals and most F&B services are generally excluded from refunds.',
      '10. Tourism Dirham & hotel fees\nTourism Dirham and hotel tourism fees apply to accommodation under DET resolutions, but food and beverage sold by the restaurant is still subject to 5% VAT unless specifically exempt or zero rated.',
      '11. FTA penalties – updated schedule\nThe FTA penalty framework (including Cabinet Decisions and 2026 updates) sets fines for late registration, late filing, late payment and incorrect VAT returns; staying compliant avoids cumulative % penalties on unpaid tax.',
      '12. E invoicing mandate – Peppol 2026–2027\nUAE has announced Peppol based e invoicing legislation (Ministerial Decisions 243 & 244 of 2025); phases start from July 2026 with full mandatory B2B/B2G e invoicing for larger businesses from January 2027.',
    ],
    storyTitle: 'How BookLean Helped This Restaurant Owner — Real Story',
    story:
      'When Rajan opened his second outlet in JBR, his accountant could not keep up with multi-location reconciliation. VAT returns were based on bank deposits, staff meals were not accounted for under the deemed supply rule, and he had no idea which outlet was profitable. Three months after joining BookLean, he had a real-time cost dashboard, correct VAT filings for both locations, and discovered that his Marina outlet was cross-subsidising JBR by AED 18,000 per month. He renegotiated his JBR supplier contracts and restructured the menu. Both outlets were cash-positive within 60 days. Clarity does that. BookLean does not just file your returns — we become the financial partner your restaurant actually needs to grow.',
    cta: 'Book a Free Restaurant Finance Review →',
  },
  ecommerce: {
    tag: 'Ecommerce & Amazon Sellers UAE · Verified UAE Tax Laws 2026',
    title: 'Ecommerce & Amazon Sellers — UAE VAT, FBA Obligations & Marketplace Accounting',
    sub: 'UAE ecommerce is one of the fastest-growing sectors in the region — but the VAT obligations are complex and widely misunderstood. Amazon FBA UAE, Noon, Shopify, and cross-border digital services each carry distinct UAE VAT treatment. Most UAE sellers are non-compliant without knowing it. BookLean specialises in marketplace accounting and UAE ecommerce tax compliance.',
    pain: [
      {
        title: 'Marketplace Payouts Never Match Bank Deposits',
        description:
          'Platform fees, FBA storage charges, return reversals, and currency conversion mean your bank deposits never match your Seller Central dashboard. Even a small monthly mismatch undetected across four VAT periods creates a material return error — and the FTA can cross-reference your data.',
      },
      {
        title: 'VAT on Electronic Services — Widely Misunderstood',
        description:
          'Under UAE VAT Law Article 49, electronic services supplied to UAE consumers by overseas businesses are subject to UAE VAT — and the overseas supplier must register with the FTA. Many UAE-based ecommerce businesses also misclassify their supply type between goods, services, and digital supplies — applying the wrong rate as a result.',
      },
      {
        title: 'Import VAT Paid at Customs — Never Reclaimed',
        description:
          'VAT paid at UAE customs on imported goods is reclaimable as input VAT — but only if your TRN is referenced on the customs declaration. Most ecommerce sellers pay import VAT every shipment and never reclaim it. This is real cash left with the FTA every single quarter.',
      },
      {
        title: 'No True Inventory Costing = No True Margin',
        description:
          'Most online sellers track sales revenue but not true landed cost — purchase price, freight, customs duty, FBA storage, and return rate. Without proper COGS accounting, your stated margin is not your real margin, and pricing and sourcing decisions are made without accurate data.',
      },
    ],
    sol: [
      {
        title: 'Marketplace Payout Reconciliation',
        description:
          'We reconcile Amazon Seller Central, Noon, and Shopify payouts to your UAE bank statement monthly — every fee, return, storage charge, and FX difference accounted for correctly in your books and VAT return.',
      },
      {
        title: 'Correct UAE VAT Treatment by Supply Type',
        description:
          'We determine the correct VAT treatment for your specific supply — B2B goods, B2C goods, digital services, exports — and ensure your quarterly VAT returns reflect the right output VAT liability and input VAT recovery position.',
      },
      {
        title: 'Import VAT Reclaim — Every Quarter',
        description:
          'We ensure your import declarations carry your TRN and reclaim every dirham of eligible input VAT on imported stock — with FTA-compliant customs documentation for every claim, every quarter.',
      },
      {
        title: 'Landed Cost COGS Accounting',
        description:
          'We set up inventory accounting with true landed cost per unit — purchase price, freight, customs duty, import VAT — so your P&L shows your real margin per SKU, not just gross revenue minus supplier invoices.',
      },
    ],
    lawTitle: '📋 UAE Laws — Ecommerce & Amazon Sellers (Verified)',
    laws: [
      'Supply of goods to UAE consumers: Standard rated — 5% VAT (UAE VAT Law Art. 3)',
      'Mandatory VAT registration: Taxable supplies exceeding AED 375,000 in any 12-month period',
      'Voluntary VAT registration: Available above AED 187,500 — recommended for input VAT recovery',
      'Electronic services to UAE consumers (B2C): 5% UAE VAT — overseas supplier must register (Art. 49)',
      'B2B digital services to UAE VAT-registered businesses: Reverse charge applies — buyer accounts for VAT',
      'Export of goods outside UAE: Zero-rated — documentary proof of export required (Art. 30)',
      'Import VAT (5%) at UAE customs: Fully reclaimable — TRN must be referenced on import declaration',
      'Amazon FBA storage in UAE: Creates a fixed establishment — UAE VAT registration required',
      'Customs duty on non-GCC imports: Standard rate 5% (alcohol, tobacco significantly higher)',
      'UAE Corporate Tax at 9% on net business profit above AED 375,000 (Decree-Law 47/2022)',
      'PEPPOL e-invoicing: Mandatory for B2B tax invoices — phased rollout from 2026',
    ],
    storyTitle: 'How BookLean Helped This Ecommerce Seller — Real Story',
    story:
      'Mia was selling AED 2.1M per year across Amazon UAE and Noon but had no clear picture of her actual profitability after platform fees, returns, and import costs. Her VAT returns were based on bank deposits — not gross marketplace revenue. Her import VAT had never been reclaimed across 18 months of shipments. BookLean set up automated marketplace reconciliation, corrected her VAT filing methodology, recovered AED 28,000 in import VAT she had been leaving with the FTA each quarter, and built a real-time COGS dashboard by SKU. She discontinued three unprofitable product lines within one quarter and reinvested in her top performers. Her net margin improved from 6% to 14% in four months. That is what proper ecommerce accounting looks like.',
    cta: 'Book a Free Ecommerce Finance Review →',
  },
  realestate: {
    tag: 'Real Estate & Construction Accounting UAE · Verified UAE Tax Laws 2026',
    title: 'Real Estate & Construction — Property VAT, DLD Fees & Project Accounting',
    sub: 'UAE real estate and construction carry some of the most complex VAT rules in the region. First supply, subsequent supply, commercial versus residential, bare land — each category has a completely different VAT treatment. Getting it wrong creates liability or permanently blocks input tax recovery. BookLean has handled VAT for UAE developers, main contractors, and subcontractors since 2018.',
    pain: [
      {
        title: 'First vs Subsequent Supply — Developers Get This Wrong',
        description:
          'The first supply of a newly built commercial building: 5% VAT. First supply of a new residential building: zero-rated. Any subsequent supply of residential property: exempt — meaning no VAT charged AND no input VAT recovery on any related costs. Most developers do not plan their portfolio VAT position upfront and lose significant recoverable input tax on mixed-use projects.',
      },
      {
        title: 'Retention Payments — VAT Timing Errors Are Common',
        description:
          'Under UAE VAT Executive Regulations, VAT on construction retention payments becomes due at the earlier of the date of invoice or the date of payment. This is not at project completion or defects liability period end. Most contractors defer retention VAT to when cash is actually received — creating a systematic under-declaration of output VAT each period.',
      },
      {
        title: 'DLD Fee Included in VAT — A Direct Error',
        description:
          'The Dubai Land Department transfer fee (4%) is a government fee under Dubai Law No. 4 of 2014. It is NOT a taxable supply and must NOT appear in your VAT return. Many transactions are incorrectly processed with VAT applied to the DLD fee — an error that is difficult to correct retroactively.',
      },
      {
        title: 'Project Cost Tracking Without Proper Costing',
        description:
          'Construction projects span years, involve dozens of subcontractors, variation orders, and retention releases. Without project-level cost accounting, you cannot track real profitability, correctly allocate input VAT between taxable and exempt use, or provide the audit trail the FTA expects during a review.',
      },
    ],
    sol: [
      {
        title: 'Property VAT Structuring from Day One',
        description:
          'Before a development project starts, we map the VAT treatment of every supply type — commercial units, residential units, mixed-use floors — and build the input VAT apportionment model that maximises legitimate recovery from the outset.',
      },
      {
        title: 'Correct Retention VAT Timing',
        description:
          'We track retention invoices and payments and declare VAT at the correct tax point — the earlier of invoice date or payment date — so your VAT returns always reflect the legally correct position, not a cash-basis approximation.',
      },
      {
        title: 'Project-Level Cost Accounting',
        description:
          'We set up project accounting with cost codes for every contractor, variation, and material category — giving you real-time profitability per project and the correct VAT input allocation between taxable and exempt use for partial exemption purposes.',
      },
      {
        title: 'Input VAT Apportionment Calculation',
        description:
          'For mixed-use developments, we calculate and apply the FTA-accepted partial exemption method each quarter — ensuring you recover the maximum allowable input VAT on shared costs such as design, infrastructure, and professional fees.',
      },
    ],
    lawTitle: '📋 UAE Laws — Real Estate & Construction (Verified)',
    laws: [
      'First supply of new commercial building: Standard rated — 5% VAT (UAE VAT Law Art. 45)',
      'First supply of new residential building (within 3 years of completion): Zero-rated — input VAT fully recoverable (Cabinet Decision 52/2017, Sch. 3)',
      'Subsequent supply of residential property: Exempt — NO VAT charged, NO input VAT recovery (Art. 46)',
      'Bare undeveloped land: Exempt from VAT — not a taxable supply',
      'Commercial real estate rental: Standard rated — 5% VAT',
      'Residential property long-term rental: Exempt from VAT (Cabinet Decision 52/2017)',
      'Construction services: Standard rated — 5% VAT (Art. 3)',
      'DLD transfer fee (4% in Dubai): NOT subject to VAT — government fee (Dubai Law No. 4/2014)',
      'Retention payment VAT tax point: Earlier of invoice date or payment date (Art. 25, Exec. Reg.)',
      'Off-plan sales instalments: VAT due at each instalment payment — not at handover',
      'Mixed-use development: Partial exemption required — apportion input VAT by taxable vs exempt use',
      'UAE Corporate Tax at 9% on trading profits above AED 375,000 (Decree-Law 47/2022)',
    ],
    storyTitle: 'How BookLean Helped This Real Estate Developer — Real Story',
    story:
      'A UAE property developer approached BookLean mid-project having applied 5% VAT on all units in a mixed residential-commercial development. The residential units on first supply should have been zero-rated — not standard rated. BookLean identified AED 340,000 in incorrectly charged output VAT, filed voluntary disclosures with the FTA, issued corrected tax invoices to buyers, and rebuilt the input VAT apportionment model — recovering AED 180,000 in input tax that had never been claimed on shared infrastructure costs. The FTA accepted the voluntary disclosures without penalties. The lesson: VAT planning before a development begins is not optional — it determines your actual project margin. Once units are sold at the wrong VAT rate, the correction is costly and time-consuming.',
    cta: 'Book a Free Property Finance Review →',
  },
  healthcare: {
    tag: 'Healthcare & Clinics Accounting UAE · Verified UAE Tax Laws 2026',
    title: 'Healthcare & Clinics — Zero-Rated Services, Cosmetic VAT & Insurance Billing',
    sub: 'UAE healthcare VAT has three categories — zero-rated, standard-rated (5%), and exempt — and the boundary between them is not always clear. Most clinics are either charging VAT on zero-rated services, claiming input VAT they are not entitled to, or both. BookLean specialises in UAE healthcare accounting for DHA, DOH, and MOH-licensed facilities across Dubai and Abu Dhabi.',
    pain: [
      {
        title: 'Charging 5% VAT on Zero-Rated Medical Services',
        description:
          'Under Cabinet Decision No. 52 of 2017 (Schedule 3), preventive and curative healthcare services supplied by a licensed healthcare provider are zero-rated — not 5%. Many clinics apply 5% across all consultations and procedures, overcharging patients and overstating output VAT on their returns. Both need to be corrected — and the patient correction is the harder one.',
      },
      {
        title: 'Cosmetic vs Medical — Documentation Is Everything',
        description:
          'A cosmetic rhinoplasty: 5% VAT. The same procedure to correct a deviated septum with documented breathing impairment: zero-rated as a curative supply. The law does not draw a bright line — clinical documentation supporting medical necessity is what determines the VAT treatment. Most clinics do not have this documentation framework in place.',
      },
      {
        title: 'Employee Health Insurance — Input VAT Claimed Incorrectly',
        description:
          'Under Article 53 of the UAE VAT Executive Regulations, input VAT on employee health insurance premiums is specifically blocked from recovery. This is one of the most commonly misunderstood blocked input VAT categories — many clinics and businesses claim it routinely, creating a liability discovered only at audit.',
      },
      {
        title: 'Insurance Billing Reconciliation — Revenue Distorted',
        description:
          'Insurance claim submissions, partial approvals, co-payment splits, rejections, and resubmissions create a reconciliation challenge that most clinic accounting systems cannot handle without specialist configuration. Without clean reconciliation, VAT returns are based on incorrect revenue figures — an automatic FTA audit risk.',
      },
    ],
    sol: [
      {
        title: 'Service Classification Framework',
        description:
          'We build a documented VAT classification matrix for every service your clinic provides — zero-rated preventive/curative, standard-rated cosmetic/elective, out-of-scope government fees — with clinical criteria and FTA guidance references for each. Audit-ready from day one.',
      },
      {
        title: 'Insurance Reconciliation — Clean Monthly',
        description:
          'We reconcile insurance claims, approvals, co-pays, rejections, and resubmissions against your PMS and accounting system every month. Your VAT return is always based on actual collected revenue — not billed amounts or bank receipts alone.',
      },
      {
        title: 'Partial Exemption Calculation',
        description:
          'For clinics providing both zero-rated medical and standard-rated cosmetic services, we calculate the correct input VAT recovery ratio every quarter and perform the required annual adjustment — so you recover exactly what you are entitled to, and nothing more.',
      },
      {
        title: 'Medical Equipment Import VAT Reclaim',
        description:
          'Approved medical equipment and pharmaceuticals imported from overseas attract import VAT at customs — and it is reclaimable. We ensure every import declaration references your TRN and that all eligible input VAT claims are captured in your quarterly return.',
      },
    ],
    lawTitle: '📋 UAE Laws — Healthcare & Clinics (Verified)',
    laws: [
      'Preventive & curative healthcare by licensed facility: Zero-rated — 0% VAT (Cabinet Dec. 52/2017, Sch. 3)',
      'Cosmetic & elective procedures (not medically necessary): Standard rated — 5% VAT',
      'Approved human medicines: Zero-rated (FTA Taxable Goods and Services Guide)',
      'Approved medical equipment: Zero-rated (FTA Taxable Goods and Services Guide)',
      'Non-approved supplements, general wellness products: Standard rated — 5% VAT',
      'Patient co-payment: Same VAT rate as the underlying medical service supplied',
      'Employee health insurance premiums: Input VAT BLOCKED — NOT reclaimable (Art. 53, Exec. Reg.)',
      'DHA, DOH, MOH licence and regulatory fees: Outside scope of VAT — government fees',
      'Services by unlicensed provider: Standard rated — zero-rating requires valid licence',
      'Mixed services clinic (medical + cosmetic): Partial exemption — input VAT apportionment required',
      'UAE Corporate Tax at 9% on clinic net profit above AED 375,000 (Decree-Law 47/2022)',
    ],
    storyTitle: 'How BookLean Helped This Clinic — Real Story',
    story:
      "A multi-specialty clinic in Dubai Healthcare City had been applying 5% VAT to all services for 14 months — including zero-rated GP consultations, diagnostic tests, and physiotherapy sessions. BookLean's review identified AED 164,000 in incorrectly collected output VAT and AED 38,000 in input VAT incorrectly claimed on employee health insurance premiums. We filed voluntary disclosures with the FTA, issued corrected tax invoices to patients as credit notes, rebuilt the billing system with correct VAT codes per service, and restructured the insurance reconciliation process. The FTA accepted all disclosures. No penalties were issued. Getting healthcare VAT right from the start matters — the cost of corrections is high, and the reputational risk with patients even higher.",
    cta: 'Book a Free Healthcare Finance Review →',
  },
  tech: {
    tag: 'Technology & SaaS Startup Accounting UAE · 2026',
    title: 'Technology & SaaS Startups — Investor-Ready Financials & UAE Tax Structuring',
    sub: 'UAE tech startups need more than bookkeeping. They need IFRS-compliant financials, correct SaaS revenue recognition, a correctly structured entity, and a clear UAE Corporate Tax position before a due diligence team arrives. BookLean has helped UAE startups close angel rounds and Series A raises with financial statements that pass investor scrutiny.',
    pain: [
      {
        title: 'Investor Due Diligence Fails — Messy Books Kill Deals',
        description:
          'Most UAE startup founders focus on product and growth and discover — when an investor requests financial statements — that they have 18 months of unreconciled bank transactions, no revenue recognition policy, and a spreadsheet. Clean books close rounds. Messy books lose them. We have seen both outcomes.',
      },
      {
        title: 'SaaS Revenue Recognition Is Complex',
        description:
          'Under IFRS 15, SaaS subscription revenue must be recognised over the service period — not on receipt of cash. Annual subscriptions collected upfront create deferred revenue. Multi-element arrangements (software + implementation + support) require revenue allocation. Standard bookkeeping software without specialist configuration gets this wrong consistently.',
      },
      {
        title: 'Free Zone 0% CT — Most Startups Do Not Actually Qualify',
        description:
          'Free zone companies qualify for 0% Corporate Tax as a Qualifying Free Zone Person (QFZP) only if they earn qualifying income exclusively and maintain genuine economic substance. A UAE startup with paying UAE mainland customers almost certainly earns non-qualifying income. If this exceeds 5% of total revenue or AED 5 million, the entire entity is taxed at 9% on all income for that year.',
      },
      {
        title: 'ESOP Accounting Ignored Until Due Diligence',
        description:
          'Employee share options and phantom equity create share-based payment expenses under IFRS 2 that must be recognised in the P&L. Most UAE startups issue options with no accounting entries at all — creating a restatement risk that surfaces exactly when an investor runs due diligence. Not the right moment to discover a material accounting adjustment.',
      },
    ],
    sol: [
      {
        title: 'Investor-Ready Financials from Month One',
        description:
          'We set up your chart of accounts, revenue recognition policy, and monthly close process from day one — so when an investor requests 18 months of financials, you send them in 48 hours, not six weeks.',
      },
      {
        title: 'IFRS 15 Revenue Recognition for SaaS',
        description:
          'We configure your accounting system to correctly recognise subscription revenue over the service period, defer upfront annual payments as deferred revenue, and allocate multi-element arrangements correctly — IFRS 15 compliant from the start.',
      },
      {
        title: 'QFZP Eligibility Assessment & CT Structuring',
        description:
          'We assess your actual qualifying income percentage based on your specific revenue streams, advise on the most tax-efficient UAE entity structure for your business model, and handle Corporate Tax registration and annual filing.',
      },
      {
        title: 'Virtual CFO for Fundraising',
        description:
          'We prepare investor data rooms, financial models, board reports, and cap table analysis — acting as your outsourced CFO through the fundraising process without the cost of a full-time senior hire.',
      },
    ],
    lawTitle: '📋 UAE Laws — Technology & SaaS Startups (Verified)',
    laws: [
      'B2B SaaS to UAE-registered businesses: Standard rated — 5% VAT (UAE VAT Law Art. 3)',
      'B2C electronic/digital services to UAE consumers: 5% VAT — overseas supplier must register (Art. 49)',
      'Free zone company: 0% CT only if QFZP — qualifying income only, genuine substance required',
      'Non-qualifying income exceeding 5% of revenue OR AED 5M: Entire entity taxed at 9% on all income',
      'UAE CT Small Business Relief: Revenue below AED 3M — elect 0% CT (valid to 31 Dec 2026)',
      'Tax Group formation: Available under UAE CT for commonly-owned UAE entities (Art. 40)',
      "Transfer pricing: Related party transactions must be at arm's length — documentation required",
      'R&D expenditure: Expensed or capitalised — affects taxable income; R&D tax credits available',
      'ESOP/VSOP: Share-based payment expense — IFRS 2 accounting required',
      'DIFC/ADGM entities: Separate regulatory regime under DFSA/FSRA — different CT treatment',
      'PEPPOL e-invoicing: Mandatory for B2B tax invoices — phased rollout from 2026',
    ],
    storyTitle: 'How BookLean Helped This UAE Startup — Real Story',
    story:
      "Ahmed's SaaS company was 18 months old and closing a Series A when his lead investor requested IFRS-compliant financial statements for the prior two years. He had a spreadsheet. BookLean reconstructed 20 months of records from bank statements and payment processor exports, implemented IFRS 15 revenue recognition with correct deferred revenue accounting, produced two-year comparative financial statements, and prepared the complete investor data room — in five weeks. Ahmed closed the round. That is what being investor-ready actually means — and it starts on month one, not month 18.",
    cta: 'Book a Free Startup Finance Review →',
  },
  retail: {
    tag: 'Retail & Consumer Brands Accounting UAE · Verified UAE Tax Laws 2026',
    title: 'Retail & Consumer Brands — Inventory Accounting, VAT on Promotions & TRF Compliance',
    sub: 'UAE retail means managing VAT across in-store, online, and marketplace channels simultaneously. Promotional discounts, gift cards, stock write-offs, and the Tourist Tax Refund scheme all carry specific VAT rules under UAE law that most retailers handle incorrectly. BookLean has handled retail accounting from single-store boutiques to multi-emirate chains.',
    pain: [
      {
        title: 'VAT on Discounts — Paying Tax on Money Not Collected',
        description:
          'Under UAE VAT Executive Regulations Article 28, VAT applies to the discounted amount actually charged to the customer — not the original list price. Many retailers issue invoices at full price and apply discounts in the POS without reflecting them on the tax invoice — meaning they declare and pay VAT on revenue they never actually collected.',
      },
      {
        title: 'Gift Cards — VAT Deferred to Redemption, Not Sale',
        description:
          'Under the FTA Vouchers Guide, VAT on gift cards and vouchers is due at the point of redemption — not when the card is sold. Most retailers account for gift card VAT at point of sale, creating a systematic overpayment that accumulates every quarter.',
      },
      {
        title: 'Stock Write-Offs — VAT Adjustment Ignored',
        description:
          'When goods are written off as damage or wastage, the input VAT originally claimed on purchasing those goods must be adjusted. When goods are stolen, the input VAT clawback is NOT required — but the theft must be properly documented. Most retailers write off stock with no VAT adjustment of any kind, creating a liability that builds over time.',
      },
      {
        title: 'Tourist Tax Refund — Not Set Up for Eligible Retailers',
        description:
          'The UAE TRF scheme allows tourists to reclaim VAT on retail purchases of goods — clothing, electronics, jewellery, and similar — at qualifying UAE retailers registered with Planet Payment. Many eligible UAE retailers are not registered and their international customers are asking for TRF receipts that cannot be issued.',
      },
    ],
    sol: [
      {
        title: 'Correct VAT on Every Promotion Type',
        description:
          'We configure your billing system to apply UAE VAT correctly on every promotion — discounts, buy-one-get-one, free gifts with purchase, loyalty point redemptions, and gift cards — with correct tax invoice formats for each scenario.',
      },
      {
        title: 'Gift Card Revenue Recognition & VAT',
        description:
          'We set up deferred revenue accounting for gift card sales and apply VAT correctly at redemption — not at sale — so your VAT return, revenue recognition, and financial statements are all correct and consistent.',
      },
      {
        title: 'Stock Write-Off VAT Adjustments',
        description:
          'We process monthly write-offs with the correct VAT treatment — input VAT adjustment for wastage and damage, documentation protocol for theft (where input VAT clawback is not required) — so your VAT return reflects your actual stock position correctly.',
      },
      {
        title: 'Tourist Refund Scheme Registration',
        description:
          'We register your retail outlets with Planet Payment for the UAE TRF scheme and configure your POS to issue compliant TRF tax invoices — opening your business to international tourist VAT refund claims on eligible retail purchases.',
      },
    ],
    lawTitle: '📋 UAE Laws — Retail & Consumer Brands (Verified)',
    laws: [
      'Standard retail goods supplied in UAE: Standard rated — 5% VAT (UAE VAT Law Art. 3)',
      'Promotional discounts: VAT applies to actual discounted amount charged — not list price (Art. 28, Exec. Reg.)',
      'Gift cards & vouchers: VAT due at redemption — not at point of sale (FTA Vouchers Public Clarification)',
      'Stock written off as wastage/damage: Input VAT adjustment required — clawback applies',
      'Stock written off as theft: Input VAT clawback NOT required — must be evidenced as theft',
      'Tourist Tax Refund (TRF): Available on retail goods (clothing, electronics, jewellery) — minimum AED 250',
      'TRF: NOT applicable to food & beverage, services, or consumables',
      'TRF: Planet Payment registration required — specific POS invoice format mandatory',
      'Import duty on non-GCC goods: 5% standard rate (alcohol/tobacco significantly higher)',
      'Import VAT (5%) at UAE customs: Fully reclaimable — TRN must appear on customs declaration',
      'Input VAT on store fit-out, fixtures, signage: Fully reclaimable as business expenses',
      'UAE Corporate Tax at 9% on net profit above AED 375,000 (Decree-Law 47/2022)',
    ],
    storyTitle: 'How BookLean Helped This Retailer — Real Story',
    story:
      'A fashion retailer with four locations across Dubai and Abu Dhabi came to BookLean after the FTA issued a desk review notice querying their input VAT claims. Their previous accountant had been applying input VAT clawback to stock stolen from stores — which is not required under UAE VAT law when theft is properly documented. They had also been issuing full-price VAT invoices for discounted sales and paying VAT on the original list price rather than the discounted amount actually charged. BookLean corrected both positions through voluntary disclosures, recovered AED 22,000 in legitimately structured input VAT that had been missed, reconfigured the POS to generate correct UAE VAT invoices for every transaction type, and registered them for the Tourist Tax Refund scheme. The FTA desk review closed without penalties or additional assessments.',
    cta: 'Book a Free Retail Finance Review →',
  },
  hospitality: {
    tag: 'Hospitality & Tourism Accounting UAE · Verified UAE Tax Laws 2026',
    title: 'Hospitality & Tourism — Revenue VAT, Tourism Dirham & OTA Compliance',
    sub: 'Hotels, holiday homes, and tour operators in UAE face a unique combination of tax obligations — VAT on room revenue calculated on the gross amount, Tourism Dirham and municipality fees that are specifically not VATable, OTA commissions with their own input VAT treatment, and short-term versus long-term rental rules that change everything. BookLean understands the full hospitality accounting stack from PMS to FTA return.',
    pain: [
      {
        title: 'OTA Commissions — VAT on Net Payout Is Wrong',
        description:
          'When Booking.com or Expedia deducts its commission before paying out, your bank receives the net amount. But UAE VAT is due on the full room rate charged to the guest — the gross amount — not on the net payout after OTA commission. Hotels that declare output VAT based on bank receipts systematically understate their VAT liability every quarter.',
      },
      {
        title: 'Tourism Dirham Included in VATable Revenue',
        description:
          "The Dubai Tourism Dirham (AED 7–20 per room per night by hotel category) is collected by hotels on behalf of DTCM. It is not the hotel's income. It is NOT subject to VAT and must NOT be included in the VAT return as taxable turnover. Many hotels include it — overpaying VAT consistently with no easy mechanism to recover the overpayment.",
      },
      {
        title: 'Holiday Home Operators — VAT Registration Ignored',
        description:
          'Short-term rental operators providing accommodation for periods under 30 days are making taxable supplies at 5% VAT. If their annual taxable supplies exceed AED 375,000, VAT registration is mandatory. Many Dubai holiday home operators cross this threshold in their first year and do not register — accumulating backdated VAT liability and facing a fixed AED 20,000 late registration penalty.',
      },
      {
        title: 'Short-Term vs Long-Term Rental — VAT Changes',
        description:
          'Short-term accommodation (under 30 consecutive days): 5% VAT standard rated. Residential accommodation under a long-term contract (30 days or more, residential purpose): Exempt from VAT. When hotels convert rooms to long-term leases, the VAT treatment changes completely — and so does the input VAT recovery position on costs relating to those rooms.',
      },
    ],
    sol: [
      {
        title: 'Gross Revenue VAT Reporting',
        description:
          'We configure your revenue accounting to declare output VAT on gross room revenue — including the portion paid by OTAs as commission — and separately claim OTA commission as input VAT. Your return correctly reflects both sides of the transaction.',
      },
      {
        title: 'Tourism Dirham & Municipality Fee Segregation',
        description:
          'We correctly classify Tourism Dirham and municipality fee collections as pass-through liabilities — outside your VATable turnover — and ensure they are reported separately and never included in output VAT calculations.',
      },
      {
        title: 'Holiday Home VAT Compliance',
        description:
          'We register holiday home operators for VAT, set up correct invoice templates, and ensure monthly VAT accounting matches your property management system — whether you manage one unit or a portfolio of fifty.',
      },
      {
        title: 'PMS-to-Accounts Reconciliation',
        description:
          'We reconcile your Property Management System revenue reports against bank statements and accounting records monthly — with full explanation of every OTA settlement, Tourism Dirham collection, municipality fee, and long-term vs short-term booking split.',
      },
    ],
    lawTitle: '📋 UAE Laws — Hospitality & Tourism (Verified)',
    laws: [
      'Short-term accommodation (under 30 consecutive days): Standard rated — 5% VAT (UAE VAT Law Art. 3)',
      'Long-term residential rental (30+ days, residential purpose): Exempt from VAT (Cabinet Dec. 52/2017)',
      'Output VAT on room revenue: Based on GROSS amount charged to guest — not net after OTA commission',
      'OTA commissions (Booking.com, Expedia, Airbnb): 5% input VAT charged to hotel — fully reclaimable',
      'Dubai Tourism Dirham (DTCM fee): NOT subject to VAT — collected as agent (AED 7–20/room/night)',
      'Municipality fee (10% in Dubai): NOT subject to VAT — government levy, pass-through only',
      'Food & beverage within hotel: Standard rated — 5% VAT',
      'Holiday home short-term rental: Same VAT treatment as hotel — 5% on gross booking amount',
      'Mandatory VAT registration: Taxable supplies above AED 375,000/year — AED 20,000 late penalty',
      'Tourist Tax Refund (TRF): NOT applicable to accommodation or F&B — retail goods only',
      'UAE Corporate Tax at 9% on hospitality profits above AED 375,000 (Decree-Law 47/2022)',
    ],
    storyTitle: 'How BookLean Helped This Hotel Group — Real Story',
    story:
      'A boutique hotel group with three properties in Dubai Marina came to BookLean after an internal review found a AED 95,000 discrepancy between declared output VAT and PMS revenue. The cause: output VAT had been declared on net OTA payouts instead of gross room rates, and Tourism Dirham collections had been incorrectly included in taxable turnover. Both errors had been compounding each quarter. BookLean filed corrected VAT returns with full PMS reconciliation schedules, claimed input VAT on OTA commissions that had never been recovered, excluded Tourism Dirham from taxable turnover in all corrected periods, and restructured the monthly accounting process to prevent recurrence. The FTA accepted all corrections. The hotel group recovered a net AED 42,000 in VAT overpayments. These are not edge cases — they are the standard errors we find in UAE hospitality accounting.',
    cta: 'Book a Free Hospitality Finance Review →',
  },
  freelancer: {
    tag: 'Freelancer & Sole Establishment Accounting UAE · 2026',
    title: 'Freelancers & Sole Establishments — UAE Corporate Tax, VAT & Structure',
    sub: 'Freelancing in UAE is growing rapidly — but most freelancers do not realise they are operating as a business under UAE law, and the compliance obligations are real, immediate, and penalised without warning. UAE Corporate Tax registration is mandatory regardless of profit level. VAT registration is mandatory above AED 375,000 annual taxable turnover. Penalties begin on day one of non-compliance.',
    pain: [
      {
        title: 'Corporate Tax Registration — Missed, Then Penalised',
        description:
          'Under Federal Decree-Law No. 47 of 2022, every UAE business — including freelancers, sole establishments, and individual licence holders — must register for Corporate Tax with the FTA regardless of income level. The penalty for failing to register by the required deadline is AED 10,000. Most freelancers discover this obligation only when the penalty notice arrives.',
      },
      {
        title: 'Personal & Business Expenses Mixed — CT Deductibility at Risk',
        description:
          'Under Article 28 of the UAE CT Law, expenses are only deductible if they are incurred wholly and exclusively for the purposes of the business. When personal expenses go through the same bank account as business income — which is the default for most UAE freelancers — every personal transaction becomes a CT audit risk, and your real deductible expenses are buried inside mixed transactions.',
      },
      {
        title: 'VAT Registration Threshold Crossed Unknowingly',
        description:
          'Many UAE freelancers cross the AED 375,000 mandatory VAT registration threshold in year two or three of their business without realising it. The obligation arises at the end of any 12-month rolling period in which taxable turnover exceeded AED 375,000. The penalty for late registration is a fixed AED 20,000. The FTA has the data to identify unregistered businesses operating above threshold.',
      },
      {
        title: 'Freelance Permit vs Sole Establishment — Wrong Structure Chosen',
        description:
          'A freelance permit allows an individual to work in specified activities under their own name — it is personal, activity-restricted, and different from a trade licence. A sole establishment is a separate legal entity under DED with its own trade licence. The two have different banking implications, different VAT registration pathways, and different CT filing obligations. Many freelancers operate under the wrong structure for their actual activity and client base.',
      },
    ],
    sol: [
      {
        title: 'CT Registration — Done Immediately',
        description:
          'We register you for UAE Corporate Tax with the FTA, assess your eligibility for Small Business Relief (0% CT on revenue below AED 3M for periods to 31 Dec 2026), and file your annual CT return — so you are always compliant and never exposed to the AED 10,000 late registration penalty.',
      },
      {
        title: 'Clean Monthly Bookkeeping',
        description:
          'We set up a dedicated business account structure, implement monthly bookkeeping that separates business and personal expenses cleanly, and produce monthly P&L statements — so your deductible expenses are clear, documented, and defensible.',
      },
      {
        title: 'VAT Monitoring & Registration',
        description:
          'We track your rolling 12-month taxable turnover every quarter. When you approach the AED 375,000 mandatory threshold — or the AED 187,500 voluntary threshold where registration is beneficial for input VAT recovery — we advise you in time and register you before the deadline.',
      },
      {
        title: 'Structure Advisory',
        description:
          'We advise on the correct legal structure for your specific freelance activity, client base, and growth plans — freelance permit, sole establishment, or LLC — and handle the registration, bank account opening, and all compliance filings from day one.',
      },
    ],
    lawTitle: '📋 UAE Laws — Freelancers & Sole Establishments (Verified)',
    laws: [
      'CT registration: Mandatory for ALL UAE businesses including freelancers — penalty AED 10,000 (Art. 51, CT Law)',
      'CT rate: 9% on taxable income above AED 375,000 (Federal Decree-Law No. 47 of 2022)',
      'Small Business Relief: Revenue below AED 3M — elect 0% CT — valid for tax periods to 31 Dec 2026',
      'Mandatory VAT registration: Taxable turnover exceeding AED 375,000 in any 12-month period',
      'Late VAT registration penalty: Fixed AED 20,000 (UAE VAT Law Administrative Penalties Schedule)',
      'Voluntary VAT registration: Available above AED 187,500 taxable turnover — recommended for input VAT recovery',
      'Deductible expenses: Must be wholly and exclusively incurred for business purposes (Art. 28, CT Law)',
      'Entertainment expenses: Capped at 50% deductibility (Art. 32, CT Law)',
      'Fines & penalties: NOT deductible under UAE CT Law',
      'Freelance permit vs sole establishment: Different legal status, banking, and CT registration pathway',
      'WPS (Wage Protection System): Required for employees on UAE work visas — NOT required for sole owners',
      'Employee gratuity: 21 days basic salary per year for first 5 years, 30 days per year thereafter — capped at 2 years basic salary (Federal Decree-Law No. 33/2021, Art. 51). Must be paid within 14 days of contract end.',
    ],
    storyTitle: 'How BookLean Helped This Freelancer — Real Story',
    story:
      'Amira is a UX designer with a TECOM freelance permit. In her second year she earned AED 480,000 — and like many UAE freelancers, she assumed there was no tax in UAE. In month 16, two FTA penalty notices arrived: AED 10,000 for failing to register for Corporate Tax, and AED 20,000 for failing to register for VAT after crossing the AED 375,000 mandatory threshold. Total penalties before any tax: AED 30,000. BookLean registered her for both immediately, elected Small Business Relief on the CT return (zero tax owed on her income level), filed a backdated VAT return for the period since the threshold was crossed, and submitted penalty reconsideration applications for both notices with supporting documentation. Both penalties were reduced. Total saved: AED 18,000. The cost of compliance is always lower than the cost of non-compliance — and it starts on day one, not when the penalty arrives.',
    cta: 'Book a Free Freelancer Finance Review →',
  },
  logistics: {
    tag: 'Logistics & Transportation Accounting UAE · Multi-Emirate · 2026',
    title: 'Logistics & Transportation — Multi-Emirate VAT, Customs & Multi-Currency',
    sub: 'Logistics and transportation businesses in the UAE operate across multiple emirates, manage import/export VAT, deal with customs duty, and handle multi-currency transactions — all of which create significant accounting complexity. Non-compliance with UAE VAT on cross-border freight and incorrect customs duty accounting are the most common triggers for FTA audit in this sector.',
    pain: [
      {
        title: 'Import VAT on Goods — Missed Input VAT Recovery',
        description:
          'When goods are imported into the UAE, import VAT at 5% is levied at the UAE border. VAT-registered businesses can recover this as input VAT in their VAT return — but only if the customs declaration and commercial invoice are correctly linked. Many logistics operators fail to recover legitimate import VAT because their documentation does not satisfy FTA requirements, leading to unnecessary cash flow pressure.',
      },
      {
        title: 'Zero-Rating of International Transport — Applied Incorrectly',
        description:
          'Under UAE VAT law, the international transportation of goods and the supply of related services may be zero-rated. However, this zero-rating applies only to specific legs of the journey and specific service types. UAE-to-UAE domestic freight is standard-rated at 5%. Many logistics businesses apply zero-rating to domestic legs of multi-segment shipments — creating a VAT exposure that the FTA will recover on audit.',
      },
      {
        title: 'Multi-Emirate Operations — Incorrect Place of Supply',
        description:
          'Logistics businesses operating across Dubai, Abu Dhabi, Sharjah and other emirates must correctly apply UAE VAT place of supply rules. Where goods are delivered to a UAE customer from UAE stock, the supply is made in the UAE and VAT must be charged regardless of which emirate the warehouse is in. Businesses applying emirate-specific VAT treatment are non-compliant.',
      },
      {
        title: 'Multi-Currency Reconciliation — Exchange Rate Errors',
        description:
          'Logistics businesses with international clients invoice and receive payment in USD, EUR, GBP, and other currencies. UAE VAT returns must report in AED — so all foreign currency transactions must be converted at the AED exchange rate published by the UAE Central Bank on the date of supply. Using incorrect exchange rates in VAT returns is a technical violation that creates penalties on FTA review.',
      },
    ],
    sol: [
      {
        title: 'Import VAT Recovery — Full Documentation Package',
        description:
          'We maintain your customs declaration registry, link import declarations to purchase invoices, and prepare complete input VAT schedules — so you recover every dirham of import VAT you are entitled to, every quarter.',
      },
      {
        title: 'VAT Zero-Rating Review',
        description:
          'We review your supply contracts and shipment documentation to correctly identify zero-rated international transport legs vs standard-rated UAE domestic freight — protecting you from a VAT misclassification finding on FTA audit.',
      },
      {
        title: 'Multi-Currency Bookkeeping',
        description:
          'We implement UAE Central Bank exchange rate conversion in your bookkeeping system, reconcile all multi-currency transactions monthly, and prepare FX-compliant VAT returns — eliminating exchange rate errors from your compliance.',
      },
      {
        title: 'Supply Chain Cost Accounting',
        description:
          'We provide full cost accounting for logistics operations — fuel, driver costs, customs duties, warehousing — so you see your true margin per route and per client, and can identify unprofitable contracts before they compound.',
      },
    ],
    lawTitle: '📋 UAE Laws — Logistics & Transportation (Verified)',
    laws: [
      'International transport zero-rating: Applicable to international legs only — UAE domestic freight 5% VAT (UAE VAT Executive Regulations, Art. 33)',
      'Import VAT: Levied at UAE customs entry point — recoverable as input VAT by VAT-registered importers (UAE VAT Law, Art. 48)',
      'Place of supply for goods: UAE if goods are located in UAE at time of supply (UAE VAT Law, Art. 26)',
      'Currency conversion: Must use UAE Central Bank published rate on date of supply (UAE VAT Law, Art. 69)',
      'CT registration: Mandatory for all UAE businesses — penalty AED 10,000 for late registration',
      'VAT registration: Mandatory above AED 375,000 annual taxable turnover — AED 20,000 penalty for late registration',
      'Employee gratuity: 21 days basic salary per year for first 5 years, 30 days thereafter (Federal Decree-Law No. 33/2021)',
      'WPS compliance: Mandatory for all UAE private sector employers on visa sponsorship',
      "Transfer pricing: Related-party transactions at arm's length — documentation required above AED 40M threshold",
    ],
    storyTitle: 'How BookLean Helped This Logistics Business — Real Story',
    story:
      'A Dubai-based freight forwarder with operations across three emirates came to BookLean after an FTA correspondence letter. They had been applying zero-rating to a significant portion of their UAE domestic delivery charges — treating them as part of international consignments — which is technically incorrect under UAE VAT law. BookLean conducted a full VAT review of their supply chain, reclassified the affected supplies, filed a voluntary disclosure with supporting documentation, and implemented a new VAT classification matrix in their invoicing system. The voluntary disclosure significantly reduced the penalty exposure. BookLean now handles their monthly VAT and CT compliance, multi-currency reconciliation, and quarterly import VAT recovery.',
    cta: 'Book a Free Logistics Finance Review →',
  },
  banking: {
    tag: 'Banking & Financial Services Accounting UAE · AML & DFSA · 2026',
    title: 'Banking & Financial Services — AML Compliance, DFSA & ESR',
    sub: 'Financial services businesses in the UAE — including banks, exchange houses, investment managers, insurance companies, and DIFC/ADGM-licensed entities — operate under some of the most demanding compliance frameworks in the world. AML obligations, DFSA or FSRA licensing requirements, ESR for financial services Relevant Activities, and UAE Corporate Tax rules for financial institutions all interact in ways that require specialist expertise.',
    pain: [
      {
        title: 'AML Compliance — Gaps in Customer Due Diligence',
        description:
          'Under Federal Decree-Law No. 20 of 2018 (UAE AML Law), all Designated Non-Financial Businesses and Professions (DNFBPs) must implement Customer Due Diligence (CDD), Enhanced Due Diligence (EDD) for high-risk customers, and maintain transaction records for a minimum of five years. Many SME-level financial services firms have CDD policies on paper but not in practice — creating significant regulatory exposure.',
      },
      {
        title: 'ESR for Financial Services — Notification Missed',
        description:
          'Financial services businesses conducting Relevant Activities under UAE ESR (banking, insurance, investment fund management, lease-finance, holding company) must file annual ESR Notifications regardless of whether they have substance to report. The penalty for failing to file an ESR Notification is AED 50,000 for the first offence. Many smaller financial services businesses in free zones assume ESR does not apply to them — it does.',
      },
      {
        title: 'VAT Exemption on Financial Services — Misapplied',
        description:
          'Under UAE VAT law, most financial services supplied for an explicit fee are standard-rated at 5%. Implicit margin-based financial services (such as loan interest and foreign exchange margin) are exempt — meaning no VAT is charged and input VAT directly attributable to those supplies cannot be recovered. Many financial services firms either charge VAT where they should not, or attempt to recover input VAT on exempt supplies — both create FTA audit exposure.',
      },
      {
        title: 'DIFC/ADGM Accounting — Different from UAE Mainland',
        description:
          'Entities licensed by the DFSA in DIFC, or by the FSRA in ADGM, are required to maintain financial statements prepared in accordance with IFRS as adopted in the respective free zone. The interaction between DIFC/ADGM accounting and UAE mainland CT obligations is a specialist area that generalist accountants frequently handle incorrectly.',
      },
    ],
    sol: [
      {
        title: 'AML Policy & CDD Implementation',
        description:
          'We assess your AML obligations under UAE law, implement a compliant Customer Due Diligence framework, prepare your AML policy documentation, and register your business with the UAE goAML system — ensuring you meet all mandatory AML reporting requirements.',
      },
      {
        title: 'ESR Assessment & Filing',
        description:
          'We assess whether your activities constitute a Relevant Activity under UAE ESR, prepare and submit annual ESR Notifications and Reports on time, and maintain the substance documentation you need to evidence genuine UAE economic activity if the FTA reviews your filing.',
      },
      {
        title: 'Financial Services VAT Advisory',
        description:
          'We analyse your supply portfolio to correctly identify standard-rated, zero-rated, and exempt financial services — calculate your partial exemption input VAT recovery position — and prepare technically accurate VAT returns that reflect your actual liability.',
      },
      {
        title: 'DIFC/ADGM Compliant Accounts & CT Filing',
        description:
          'We prepare IFRS-compliant financial statements for DIFC and ADGM entities, handle UAE Corporate Tax registration and annual CT return, and manage the interface between your free zone regulatory obligations and your UAE mainland tax position.',
      },
    ],
    lawTitle: '📋 UAE Laws — Banking & Financial Services (Verified)',
    laws: [
      'AML Law: Federal Decree-Law No. 20 of 2018 — CDD, EDD, goAML reporting mandatory for DNFBPs',
      'UBO registration: Mandatory for all UAE companies — AED 100,000 penalty for first offence (Cabinet Decision No. 109/2023)',
      'ESR Notification: Mandatory for all in-scope entities — AED 50,000 penalty for non-filing first offence',
      'ESR Report: Required within 12 months of financial year-end for entities conducting Relevant Activities',
      'VAT on financial services: Explicit fee = 5% standard-rated; implicit margin = exempt (UAE VAT Executive Regulations, Art. 42)',
      'DIFC entities: DFSA regulated — IFRS financial statements required; UAE CT applies at entity level',
      'ADGM entities: FSRA regulated — IFRS financial statements required; UAE CT applies at entity level',
      'CT rate: 9% on taxable income above AED 375,000 (Federal Decree-Law No. 47 of 2022)',
      "Transfer pricing: All related-party transactions at arm's length; documentation required above AED 40M threshold",
    ],
    storyTitle: 'How BookLean Helped This Financial Services Firm — Real Story',
    story:
      'A DIFC-licensed investment advisory firm came to BookLean when their previous accountant filed a UAE Corporate Tax return without accounting for the interaction between their DIFC profit and UAE CT obligations. They had also never filed an ESR Notification — incorrectly assuming DIFC entities were outside UAE ESR scope. BookLean assessed their CT position, filed a corrected CT return, submitted both missed ESR Notifications with penalty mitigation documentation, implemented a partial VAT exemption calculation for their mixed standard-rated and exempt supplies, and registered them with goAML. The firm is now fully compliant across CT, VAT, ESR, and AML — with no outstanding exposure.',
    cta: 'Book a Free Financial Services Compliance Review →',
  },
  manufacturing: {
    tag: 'Manufacturing & Trading Accounting UAE · Import VAT · 2026',
    title: 'Manufacturing & Trading — Import VAT, Cost Accounting & Transfer Pricing',
    sub: 'Manufacturing and trading businesses in the UAE face a unique set of compliance challenges — import VAT on raw materials and goods, complex cost accounting for production, transfer pricing on intercompany transactions with overseas group entities, and VAT treatment of free zone vs mainland sales. Getting these right from day one prevents cash flow damage and FTA audit exposure.',
    pain: [
      {
        title: 'Import VAT Not Recovered — Monthly Cash Drain',
        description:
          'Manufacturers importing raw materials and traders importing finished goods pay 5% import VAT at UAE customs. This is fully recoverable as input VAT — but only if the customs entry documents are properly reconciled to purchase invoices and recorded in the VAT return in the correct period. Many manufacturing businesses lose months of import VAT recovery simply through documentation mismatches and reconciliation failures.',
      },
      {
        title: 'Free Zone Manufacturing — QFZP Status at Risk',
        description:
          'A UAE free zone manufacturer may qualify as a Qualifying Free Zone Person (QFZP) with 0% Corporate Tax — but only if it earns Qualifying Income, maintains genuine economic substance in the free zone, and its mainland UAE revenue does not exceed 5% of total revenue. Manufacturing businesses selling directly to UAE mainland customers without understanding this threshold lose QFZP status for the entire tax year and pay 9% CT on all income.',
      },
      {
        title: 'Cost Accounting — No Visibility on Unit Costs',
        description:
          'Manufacturing businesses without proper cost accounting cannot accurately calculate cost of goods sold, production overhead absorption, or unit profitability. This creates pricing errors, undetected loss-making product lines, and CT returns that overstate or understate taxable profit. Many UAE manufacturers track revenue and supplier invoices but have no visibility on true production cost per unit.',
      },
      {
        title: 'Transfer Pricing on Intercompany Sales — No Documentation',
        description:
          "Manufacturing groups with a UAE entity buying from or selling to overseas related parties must price those transactions at arm's length under UAE CT Transfer Pricing rules. Where total related-party transactions exceed AED 40M, or any single category exceeds AED 4M, a Local File is mandatory. Most UAE manufacturing businesses with international group structures do not have this documentation.",
      },
    ],
    sol: [
      {
        title: 'Import VAT Recovery System',
        description:
          'We set up a structured import documentation process — matching customs declarations to purchase invoices — and prepare quarterly import VAT recovery schedules that ensure you claim every recoverable dirham on time.',
      },
      {
        title: 'QFZP Monitoring & CT Filing',
        description:
          'We monitor your mainland UAE revenue as a percentage of total revenue on a rolling basis, alert you before you approach the 5% QFZP threshold, and file your annual CT return claiming the correct QFZP rate — 0% where you qualify, 9% where you do not.',
      },
      {
        title: 'Manufacturing Cost Accounting',
        description:
          'We implement a cost accounting structure that allocates direct materials, direct labour, and manufacturing overhead to individual product lines — giving you accurate COGS, unit cost, and true gross margin per product so you price and plan correctly.',
      },
      {
        title: 'Transfer Pricing Documentation',
        description:
          "We assess your intercompany transactions, prepare Local File documentation where required, and benchmark your transfer prices against UAE and OECD arm's length standards — protecting you from the most common CT audit trigger for manufacturing groups.",
      },
    ],
    lawTitle: '📋 UAE Laws — Manufacturing & Trading (Verified)',
    laws: [
      'Import VAT: 5% levied at UAE customs — recoverable by VAT-registered importers in same period (UAE VAT Law, Art. 48)',
      'QFZP 0% CT: Free zone manufacturers qualifying only if mainland revenue &le;5% of total or AED 5M (Federal Decree-Law No. 47 of 2022, Art. 18)',
      'QFZP threshold breach: Entire year taxed at 9% on all income — not just mainland revenue (Art. 20, CT Law)',
      "Transfer pricing: Arm's length required for all related-party transactions (Art. 34-36, CT Law)",
      'Local File: Required when related-party transactions exceed AED 40M total or AED 4M per category (Ministerial Decision No. 97/2023)',
      'CT registration: Mandatory for ALL UAE businesses — penalty AED 10,000 for late registration',
      'VAT registration: Mandatory above AED 375,000 annual taxable turnover',
      'Employee gratuity: 21 days basic salary per year for first 5 years, 30 days thereafter (Federal Decree-Law No. 33/2021)',
    ],
    storyTitle: 'How BookLean Helped This Manufacturer — Real Story',
    story:
      'A Jebel Ali free zone manufacturer producing industrial components came to BookLean after their CT registration was flagged by the FTA as overdue. Their previous accountant had filed nil VAT returns despite the business having significant import VAT to recover — meaning they had left over AED 180,000 of recoverable input VAT unclaimed across two years. BookLean conducted a full VAT return review, filed corrected returns to reclaim the missed input VAT, registered them for CT with Small Business Relief assessment, set up a cost accounting structure in their ERP, and prepared their first Local File for transfer pricing documentation — all within 8 weeks of engagement.',
    cta: 'Book a Free Manufacturing Finance Review →',
  },
  oilgas: {
    tag: 'Oil, Gas & Energy Accounting UAE · Complex VAT · 2026',
    title: 'Oil, Gas & Energy — Complex VAT Structures, CT & Concession Accounting',
    sub: 'Oil, gas and energy businesses operating in the UAE — including upstream E&P concessionaires, midstream pipeline and storage operators, downstream refiners and distributors, and renewable energy project companies — face some of the most complex VAT and Corporate Tax structures in any UAE industry. Government-to-government concession arrangements, joint venture accounting, decommissioning provisions, and sovereign exemptions require specialist treatment.',
    pain: [
      {
        title: 'UAE CT — Extractive Business Exemption & Sovereign Entities',
        description:
          'The UAE Corporate Tax Law provides specific rules for extractive businesses — businesses engaged in the exploitation of UAE natural resources are generally subject to emirate-level taxation under existing concession agreements rather than federal CT. However, ancillary service companies, contractors, and oilfield service providers are subject to UAE federal CT at 9%. Many service companies incorrectly assume they benefit from the extractive exemption when they do not.',
      },
      {
        title: 'VAT on Petroleum Products — Exempt vs Standard-Rated',
        description:
          'Crude oil and natural gas extracted from UAE fields are generally outside the scope of UAE VAT when supplied domestically. However, processed petroleum products, refined fuels, lubricants, and LPG supplied to UAE commercial customers are standard-rated at 5% VAT. The line between upstream exempt supplies and downstream standard-rated supplies is frequently misapplied — particularly for vertically integrated businesses.',
      },
      {
        title: 'Joint Venture Accounting — No Clear Cost Allocation',
        description:
          'Many UAE oil and gas projects operate under joint operating agreements (JOAs) with multiple participants. Each party must account for its working interest share of revenues, costs, and production — and must prepare its own VAT and CT returns reflecting only its proportionate share. Joint venture accounting failures — misallocated costs, incorrect operator fee treatment, and absent lifting accounting — are a persistent audit risk.',
      },
      {
        title: 'Decommissioning Provisions — Not Recognised or Deductible',
        description:
          'Under IFRS, oil and gas businesses must recognise a decommissioning provision at the present value of the expected cost of dismantling and abandoning assets at the end of their useful life. Under UAE CT law, the deductibility of decommissioning provisions is subject to specific conditions — and the timing of deductibility affects taxable profit significantly.',
      },
    ],
    sol: [
      {
        title: 'CT Scope Assessment for Energy Businesses',
        description:
          'We assess whether your UAE energy business falls within the extractive exemption or is subject to federal CT, review any existing concession agreement provisions, and structure your CT position correctly — ensuring you pay what is legally owed and no more.',
      },
      {
        title: 'Petroleum VAT Classification',
        description:
          'We review your supply chain to correctly classify each product and service supply — upstream out-of-scope, downstream standard-rated, or zero-rated export — and prepare technically accurate VAT returns that reflect the complex mixed-supply position of energy businesses.',
      },
      {
        title: 'Joint Venture & Working Interest Accounting',
        description:
          'We implement JOA-compliant accounting that allocates revenues, costs, and production correctly to each working interest participant — with operator fee treatment, cash call accounting, and lifting imbalance recognition done to IFRS standards.',
      },
      {
        title: 'Decommissioning Provision & CT Deductibility',
        description:
          'We prepare or review your decommissioning provision calculation under IFRS, advise on the CT deductibility position under UAE CT law, and ensure your CT return correctly reflects the timing difference between provision recognition and future expenditure.',
      },
    ],
    lawTitle: '📋 UAE Laws — Oil, Gas & Energy (Verified)',
    laws: [
      'CT extractive exemption: Businesses extracting UAE natural resources under emirate concessions — subject to emirate-level tax, not federal CT (Art. 7, Federal Decree-Law No. 47/2022)',
      'Oilfield service contractors: Subject to federal UAE CT at 9% — extractive exemption does NOT apply',
      'CT registration: Mandatory for ALL UAE businesses including energy service contractors — AED 10,000 penalty for late registration',
      'VAT on crude oil/gas: Generally outside scope of UAE VAT for direct upstream domestic supplies',
      'VAT on petroleum products: Refined fuels, lubricants, LPG supplied commercially — 5% standard-rated',
      'Decommissioning provisions: IFRS recognition required; CT deductibility timing rules apply (Art. 28, CT Law)',
      "Transfer pricing: Arm's length for all related-party transactions — Local File required above AED 40M threshold",
      'ESR: Energy businesses may have ESR Relevant Activity obligations — annual Notification mandatory',
    ],
    storyTitle: 'How BookLean Helped This Energy Business — Real Story',
    story:
      'An Abu Dhabi-based oilfield services contractor came to BookLean after receiving a UAE CT assessment from the FTA. Their previous advisors had incorrectly classified them as an extractive business exempt from federal CT — based on the fact that their primary client was ADNOC. BookLean reviewed the concession agreement structure, confirmed the contractor was not itself the concessionaire and was therefore fully subject to UAE federal CT, and filed a corrected CT return for the first year. BookLean simultaneously reviewed their VAT position on downstream petroleum product supplies, identified a partial exemption issue on mixed supplies, and implemented a new VAT classification matrix. The contractor now has a clean CT and VAT position with no outstanding exposure.',
    cta: 'Book a Free Energy Sector Finance Review →',
  },
};
