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
      'Standard VAT rate – 5%\nUAE VAT Law (Federal Decree Law No. 8 of 2017) sets a standard VAT rate of 5% on most supplies of goods and services, including restaurant food and beverage.',
      'Mandatory VAT registration – AED 375,000\nRestaurants must register for VAT when taxable supplies in the last 12 months exceed AED 375,000, as per FTA guidance and Cabinet Decision No. 52 of 2017 (Executive Regulations).',
      'VAT filing – VAT201 returns (usually quarterly)\nMost F&B businesses file VAT201 returns every quarter via the FTA portal; wrong or late returns can trigger administrative penalties under the Tax Procedures Law and updated FTA fine schedule.',
      'Staff meals and hospitality – deemed supplies rules\nFree or discounted staff meals and hospitality can be treated as “deemed supplies” if they go beyond normal business needs, and may require output VAT at 5% under VAT Law Articles on deemed supply and the Executive Regulations.',
      'Promotional free meals & discounts\nPromotional meals given free or at deep discount to customers must follow specific VAT rules; some are taxable deemed supplies, others can be treated as normal taxable supplies with discounted value.',
      'Input VAT recovery on costs\nRestaurants can usually recover input VAT on ingredients, rent, utilities, and equipment that are used for taxable supplies, following the input tax recovery conditions in the VAT Executive Regulations.',
      'Excise tax – energy & carbonated drinks\nExcise tax is 100% on energy drinks and 50% on carbonated drinks, with an additional sugar based excise from 1 January 2026 that charges up to AED 1.09 per litre on high sugar beverages.',
      'Sugar based excise – 2026 bands\nNew 2026 model:\no 8g or more sugar per 100 ml → AED 1.09 per litre.\no 5g to less than 8g per 100 ml → AED 0.79 per litre.\no Less than 5g sugar or only artificial sweeteners → 0 AED per litre.',
      'Tourist VAT Refund Scheme – Planet Tax Free\nOverseas tourists (18+) can reclaim VAT on eligible retail purchases through the Planet Tax Free system; restaurant meals and most F&B services are generally excluded from refunds.',
      'Tourism Dirham & hotel fees\nTourism Dirham and hotel tourism fees apply to accommodation under DET resolutions, but food and beverage sold by the restaurant is still subject to 5% VAT unless specifically exempt or zero rated.',
      'FTA penalties – updated schedule\nThe FTA penalty framework (including Cabinet Decisions and 2026 updates) sets fines for late registration, late filing, late payment and incorrect VAT returns; staying compliant avoids cumulative % penalties on unpaid tax.',
      'E invoicing mandate – Peppol 2026–2027\nUAE has announced Peppol based e invoicing legislation (Ministerial Decisions 243 & 244 of 2025); phases start from July 2026 with full mandatory B2B/B2G e invoicing for larger businesses from January 2027.',
    ],
    storyTitle: 'How BookLean Helped This Restaurant Owner — Real Story',
    story:
      'When Rajan opened his second outlet in JBR, his accountant could not keep up with multi-location reconciliation. VAT returns were based on bank deposits, staff meals were not accounted for under the deemed supply rule, and he had no idea which outlet was profitable. Three months after joining BookLean, he had a real-time cost dashboard, correct VAT filings for both locations, and discovered that his Marina outlet was cross-subsidising JBR by AED 18,000 per month. He renegotiated his JBR supplier contracts and restructured the menu. Both outlets were cash-positive within 60 days. Clarity does that. BookLean does not just file your returns — we become the financial partner your restaurant actually needs to grow.',
    cta: 'Book a Free Restaurant Finance Review →',
  },
  retail: {
    tag: 'Retail & Consumer Brands Accounting UAE · Verified UAE Tax Laws 2026',
    title: 'Retail & Consumer Brands — Inventory Accounting, VAT on Promotions & TRF Compliance',
    sub: 'UAE retail means managing VAT across in-store, online, and marketplace channels simultaneously. Promotional discounts, gift cards, stock write-offs, and the Tourist Tax Refund scheme all carry specific VAT rules under UAE law that most retailers handle incorrectly. BookLean has handled retail accounting from single-store boutiques to multi-emirate chains.',
    pain: [
      {
        title: 'VAT on discounts – paying tax on money not collected',
        description:
          'UAE VAT rules say VAT is charged on the taxable amount after valid discounts funded by the retailer, but many outlets still pay VAT on the full list price even when coupons or promo codes reduce what the customer actually pays.',
      },
      {
        title: 'Gift cards – VAT deferred to redemption, not sale',
        description:
          'Under UAE VAT rules on vouchers, VAT is normally due when the card is redeemed for goods or services, not when the card is sold, yet many retailers treat gift card sales as fully taxable and mis time their VAT.',
      },
      {
        title: 'Stock write offs – VAT adjustment ignored',
        description:
          'Damaged, expired or obsolete stock is often written off in the accounts with no review of VAT; retailers either reverse too much input VAT or keep claiming VAT on stock that is no longer usable, creating inconsistent positions if the FTA reviews their inventory records.',
      },
      {
        title: 'Tourist VAT refund – not set up for eligible retailers',
        description:
          'Many fashion, electronics and jewellery stores qualify for the UAE Tourist Refund Scheme but are not registered with Planet Tax Free or do not issue compliant tax invoices, meaning tourists cannot reclaim VAT and retailers lose a key competitive advantage.',
      },
    ],
    sol: [
      {
        title: 'Correct VAT on every promotion type',
        description:
          'We configure your billing systems so percentage discounts, coupons, “VAT on us” offers and loyalty points follow Article 28 of the Executive Regulations – VAT on net price when you fund the discount, VAT on the full pre discount price when a brand or third party funds it.',
      },
      {
        title: 'Gift card revenue recognition & VAT',
        description:
          'We set clear rules for gift card sales and redemptions: VAT recognised when goods or services are supplied, breakage handled correctly, and POS reports linked to your accounting system so gift card liability and VAT are always aligned.',
      },
      {
        title: 'Stock write off VAT adjustments',
        description:
          'We design a documented process for stock write offs, separating normal shrinkage and damage from non business use, so you only adjust input VAT when required and can show the FTA why your VAT recovery on written off stock is still valid.',
      },
      {
        title: 'Tourist refund scheme registration',
        description:
          'We register your store with Planet Tax Free, configure POS tax invoices to TRR standards, and train your staff so eligible tourists can reclaim VAT smoothly while you keep full, compliant records for each tax free sale.',
      },
    ],
    lawTitle: 'UAE Laws — Retail & Consumer Brands (Verified)',
    laws: [
      'Standard VAT rate – 5% on most retail sales\nRetail goods in the UAE are generally standard rated at 5% VAT at the point of sale, except specific exempt or zero rated items.',
      'VAT on discounts – Executive Regulations Article 28\nThe value of supply can be reduced for discounts only when the customer benefits and the supplier funds the discount; otherwise VAT applies on the pre discount price.',
      'Third party funded promotions (brands, issuers)\nWhere a brand or card issuer reimburses part of the price, that reimbursement is still consideration for the supply, so VAT is due on the full price before discount, not just what the shopper pays.',
      'Gift cards and vouchers – VAT at redemption\nSingle purpose vouchers and gift cards follow special rules – VAT is generally recognised when the goods/services are supplied, and retailers must track redemptions carefully for correct VAT timing.',
      '“VAT free” or “VAT on us” offers – VATP020\nFTA Public Clarification VATP020 confirms that “VAT free” offers are not truly VAT free; businesses must still charge 5% VAT and treat the offer as a discount that reduces the taxable value.',
      'Stock write offs – documentation and VAT recovery\nUAE VAT law does not automatically treat damaged or expired stock write offs as deemed supplies, but businesses must keep strong records to show that input VAT was originally incurred for taxable supplies and remains recoverable.',
      'Returns and refunds – credit notes\nWhen customers return goods, retailers must issue tax credit notes and adjust output VAT to match the reduced consideration, following invoice rules in the Executive Regulations.',
      'Tourist VAT Refund Scheme – Planet Tax Free\nVAT registered retailers selling eligible goods (such as clothing, electronics, jewellery) can offer tax free shopping by integrating with the Planet Tax Free system and meeting TRR invoice and process requirements.',
      'TRR scope – goods only, not services or food\nThe tourist refund scheme applies to qualifying goods that tourists export with them; services and most food & beverage are excluded, so retail invoices must clearly show what is eligible.',
      'Tax invoice format – Article 59 requirements\nRetail tax invoices must include the supplier’s TRN, date, a unique invoice number, VAT inclusive price, VAT amount and “Tax Invoice” wording to meet Article 59 of the Executive Regulations and TRR conditions.',
      'Registration thresholds – AED 375,000 / 187,500\nVAT registration is mandatory when taxable supplies exceed AED 375,000 in 12 months; voluntary registration is allowed above AED 187,500, which many growing retailers choose to access input VAT recovery.',
      'FTA penalties and audit risk\nIncorrect discounts, mis timed VAT on vouchers and poor documentation for stock write offs can attract FTA assessments and penalties under the updated penalty schedule for VAT compliance.',
    ],
    storyTitle: 'How BookLean Helped This Retailer — Real Story',
    story:
      'A fashion retailer with four locations in Dubai and Abu Dhabi noticed that VAT on discounts and gift cards never matched POS reports. Their accountant was unsure when to recognise VAT on vouchers and whether stock write offs required input tax reversal.\nBookLean reviewed three years of promotion data, mapped discounts to Article 28, fixed gift card revenue recognition, and introduced a proper stock write off approval workflow.\nWithin one quarter, their VAT returns matched POS data, tourist refund sales increased, and their next FTA review closed without penalties or additional assessments.',
    cta: 'Book a Free Retail Finance Review →',
  },
  ecommerce: {
    tag: 'Ecommerce & Amazon Sellers UAE · Verified UAE Tax Laws 2026',
    title: 'Ecommerce & Amazon Sellers — UAE VAT, FBA Obligations & Marketplace Accounting',
    sub: 'UAE ecommerce is one of the fastest-growing sectors in the region — but the VAT obligations are complex and widely misunderstood. Amazon FBA UAE, Noon, Shopify, and cross-border digital services each carry distinct UAE VAT treatment. Most UAE sellers are non-compliant without knowing it. BookLean specialises in marketplace accounting and UAE ecommerce tax compliance.',
    pain: [
      {
        title: 'Marketplace payouts never match bank deposits',
        description:
          'Amazon, Noon and other marketplaces pay out after deducting commissions, storage fees, shipping and sometimes import VAT charged to customers, so seller statements rarely match bank deposits or VAT returns.',
      },
      {
        title: 'VAT on electronic services – widely misunderstood',
        description:
          'Many overseas SaaS, app and digital content providers sell to UAE consumers without realising that 5% UAE VAT can apply where the service is used or enjoyed in the UAE, and non resident suppliers may need UAE VAT registration.',
      },
      {
        title: 'Import VAT paid at customs – never reclaimed',
        description:
          'E commerce sellers often pay 5% import VAT and customs duty on inbound shipments but do not record it properly, so they miss out on recovering eligible input VAT on goods they later sell.',
      },
      {
        title: 'No true inventory costing = no true margin',
        description:
          'Without landed cost accounting (purchase price, freight, customs duty, import VAT and marketplace fees per SKU), sellers guess their margins and pricing decisions, and VAT returns do not clearly tie back to stock movements.',
      },
    ],
    sol: [
      {
        title: 'Marketplace payout reconciliation',
        description:
          'We reconcile Amazon Seller Central, Noon, and other marketplace reports to your UAE bank account and accounting system every month, mapping fees, commissions, refunds and VAT so your sales and VAT201 return line up.',
      },
      {
        title: 'Correct VAT treatment by supply type',
        description:
          'We classify each transaction correctly – goods in the UAE, cross border imports, B2B vs B2C, and digital services – so your invoices and marketplace settings apply 5% VAT, zero rate or “outside scope” exactly as the UAE VAT law requires.',
      },
      {
        title: 'Import VAT reclaim – every quarter',
        description:
          'We capture import VAT from customs and courier statements, match it to TRN registered businesses, and document each shipment so eligible import VAT can be reclaimed in your VAT201 return instead of becoming a permanent cost.',
      },
      {
        title: 'Landed cost & COGS accounting',
        description:
          'We build landed cost per unit (purchase price, freight, duty, import VAT, marketplace fees) and link it to your SKUs, giving you real margins by product and clean audit trails for inventory and VAT.',
      },
    ],
    lawTitle: 'UAE laws — Ecommerce & Amazon sellers (verified)',
    laws: [
      'Supply of goods via ecommerce – 5% VAT\nMost online sales of goods to UAE customers are standard rated at 5% VAT under Federal Decree Law No. 8 of 2017 and its Executive Regulations.',
      'Domestic sellers – registration thresholds\nUAE resident sellers must register for VAT once taxable supplies and imports exceed AED 375,000 (mandatory) or AED 187,500 (voluntary), thresholds that apply equally to ecommerce and offline businesses.',
      'Non resident sellers – nil threshold\nNon resident sellers shipping goods located in the UAE to UAE customers must register for VAT from the first taxable supply – there is no registration threshold for non residents.',
      'Marketplace vs seller VAT responsibility\nIn most Amazon and Noon marketplace models the seller, not the platform, is responsible for charging 5% VAT, issuing UAE tax invoices and reporting VAT, unless the platform is acting as principal reseller.',
      'Prices must be VAT inclusive on marketplace listings\nMarketplace pricing policies require listed prices to be inclusive of any VAT, customs duty or other taxes, so VAT must be built into consumer prices and then correctly split in your accounts.',
      'Import VAT and customs duty – input tax recovery\nImport VAT paid on goods brought into the UAE can generally be recovered by VAT registered sellers when those goods are used for taxable supplies, provided customs and courier documents are properly retained.',
      'Digital services to UAE customers\nDigital services (apps, SaaS, streaming, downloads) supplied to UAE customers can be taxable in the UAE when the place of use/enjoyment is the UAE, and non resident digital suppliers may need UAE VAT registration.',
      'B2B vs B2C – invoicing and VAT place of supply\nPlace of supply and invoicing rules differ for B2B (business) and B2C (consumer) transactions; correct classification is important for cross border ecommerce and digital services compliance.',
      'Tax invoices and records – Executive Regulations\nOnline sellers must issue UAE compliant tax invoices (TRN, date, unique number, VAT inclusive price and VAT amount) and keep VAT records for at least 5–7 years under the VAT Executive Regulations and Tax Procedures Law.',
      'E invoicing (Peppol) – 2026–2027 rollout\nMinisterial Decisions 243 and 244 of 2025 introduce a Peppol based electronic invoicing system: voluntary pilot from 1 July 2026, mandatory for large taxpayers (≥ AED 50m revenue) from 1 January 2027, and for remaining B2B/B2G taxpayers from 1 July 2027.',
      'Penalties for non compliance\nFailure to register, issue proper invoices, or comply with e invoicing can lead to administrative penalties under the updated Tax Procedures Law and Cabinet penalty decisions, making accurate ecommerce records essential.',
      'Tourist VAT refund – goods taken out of UAE\nThe Tourist Refund Scheme via Planet Tax Free applies to eligible goods physically taken out of the UAE; pure digital services and many courier shipped items do not qualify unless they meet scheme conditions.',
    ],
    storyTitle: 'How BookLean Helped This Ecommerce Seller — Real Story',
    story:
      'An Amazon/Noon seller shipping cosmetics into the UAE struggled to match marketplace payouts with bank deposits and VAT returns. Import VAT paid at customs was left as a cost, and digital add on services were not treated correctly for VAT.\nBookLean cleaned three years of marketplace data, built SKU level landed costs, registered the seller for UAE VAT, and set up quarterly import VAT recovery with full documentation.\nWithin one year, the seller’s VAT returns matched platform reports, margins by SKU were clear, and they were ready for the Peppol e invoicing pilot without penalties or surprise assessments.',
    cta: 'Book a Free Ecommerce Finance Review →',
  },
  hospitality: {
    tag: 'Hospitality & Tourism Accounting UAE · Verified UAE Tax Laws 2026',
    title: 'Hospitality & Tourism — Revenue VAT, Tourism Dirham & OTA Compliance',
    sub: 'Hotels, holiday homes, and tour operators in UAE face a unique combination of tax obligations — VAT on room revenue calculated on the gross amount, Tourism Dirham and municipality fees that are specifically not VATable, OTA commissions with their own input VAT treatment, and short-term versus long-term rental rules that change everything. BookLean understands the full hospitality accounting stack from PMS to FTA return.',
    pain: [
      {
        title: 'OTA commissions – VAT on net payout is wrong',
        description:
          'Booking.com and other OTAs deduct commissions, card fees and sometimes Tourism Dirham before the hotel receives the net amount, but UAE VAT is due on the full room rate that the guest pays, not the net payout to the hotel.',
      },
      {
        title: 'Tourism Dirham included in VATable revenue',
        description:
          'Some hotels treat Tourism Dirham as part of taxable room revenue, but Tourism Dirham is a separate nightly fee collected for DET and should not be subject to 5% VAT.',
      },
      {
        title: 'Holiday home operators – VAT registration ignored',
        description:
          'Many Dubai holiday home hosts exceed the VAT threshold on short term stays but stay unregistered, mixing Tourism Dirham and income in one line and risking FTA penalties for undeclared 5% VAT on accommodation.',
      },
      {
        title: 'Short term vs long term rental – VAT changes not understood',
        description:
          'Hotels and serviced apartment operators often apply 5% VAT to long term residential leases, or fail to charge VAT on short term, hospitality style stays, because they do not clearly separate exempt residential rent from taxable short term accommodation.',
      },
    ],
    sol: [
      {
        title: 'Cross revenue VAT reporting',
        description:
          'We configure hotel accounting so OTA gross room revenue, net payouts, Tourism Dirham, service charges and municipality fees are clearly separated, and VAT201 reflects the correct taxable base.',
      },
      {
        title: 'Tourism Dirham & municipality fee segregation',
        description:
          'We design invoice and PMS reports so Tourism Dirham, city tax, municipality and service charges are booked as fees, not VATable revenue, keeping them separate from 5% VAT on accommodation.',
      },
      {
        title: 'Holiday home VAT compliance',
        description:
          'We review your holiday home turnover against AED 375,000 / 187,500 thresholds, help obtain VAT registration when required, and set up processes to charge 5% VAT on short term stays, issue tax invoices and file returns on time.',
      },
      {
        title: 'PMS to accounts reconciliation',
        description:
          'We reconcile PMS revenue reports and OTA statements to bank deposits and the general ledger every month, so room revenue, Tourism Dirham, municipality fees and VAT all tie out before filing returns.',
      },
    ],
    lawTitle: 'UAE laws — Hospitality & tourism (verified)',
    laws: [
      'Hotel accommodation – 5% VAT on short term stays\nShort term hotel, serviced apartment and holiday home stays supplied on a hospitality basis are taxable at 5% under UAE VAT real estate guidance.',
      'Long term residential rent – VAT exempt\nStandard long term residential leases are exempt from VAT, so no 5% VAT should be charged on typical annual apartment or staff accommodation rentals.',
      'Tourism Dirham – nightly fee, not VAT\nDubai Tourism Dirham is a per room nightly fee (generally AED 7–20 for hotels, AED 10–15 per occupied bedroom for holiday homes) collected and remitted to DET and shown separately from VAT on guest invoices.',
      'Hotel taxes – service & municipality charges\nHotels may charge service charge, municipality fee and city/tourism fee on top of room rates; 5% VAT usually applies to the total, but Tourism Dirham itself is treated as a fee, not an additional VAT tax.',
      'Holiday home permits & Tourism Dirham\nDubai holiday homes must be registered with DET, display a permit number, and remit Tourism Dirham each month (up to the first 30 consecutive nights per stay).',
      'VAT registration thresholds for operators\nHospitality operators must register for VAT when taxable turnover (including short term accommodation and certain hotel fees) exceeds AED 375,000 in 12 months; voluntary registration is allowed from AED 187,500.',
      'Real estate VAT: short term vs long term\nUAE real estate VAT guides confirm that long term residential rent is exempt, while short term, serviced or hotel style accommodation is taxed at 5%.',
      'OTA/platform fees & VAT\nOTA and platform service fees (e.g., Booking.com, Airbnb fees) may themselves attract 5% VAT when charged to UAE registered hotels or hosts and should be treated as separate taxable expenses.',
      'Tourist taxes differ by emirate\nAbu Dhabi, Ras Al Khaimah and other emirates have their own tourism fees (often 4–6% plus AED per night charges) which sit alongside 5% VAT on short term stays.',
      'Corporate tax – 9% on hotel profits\nHospitality profits above AED 375,000 earned by UAE hotel and tourism businesses may be subject to the new 9% UAE corporate tax, separate from VAT and tourism fees.',
    ],
    storyTitle: 'How BookLean Helped This Hotel Group — Real Story',
    story:
      'A boutique hotel group in Dubai Marina found that declared output VAT did not match OTA statements because commissions and Tourism Dirham were mixed into room revenue.\nBookLean rebuilt their PMS to GL mapping, separated Tourism Dirham and municipality fees from VATable revenue, assessed short term vs long term leases, and aligned VAT201 with OTA and DET reports.\nAfter one filing cycle, their FTA review closed without adjustments, and management finally had a clear view of net room margin after VAT and tourism taxes.',
    cta: 'Book a Free Hospitality Finance Review →',
  },
  realestate: {
    tag: 'Real Estate & Construction Accounting UAE · Verified UAE Tax Laws 2026',
    title: 'Real Estate & Construction — Property VAT, DLD Fees & Project Accounting',
    sub: 'UAE real estate and construction carry some of the most complex VAT rules in the region. First supply, subsequent supply, commercial versus residential, bare land — each category has a completely different VAT treatment. Getting it wrong creates liability or permanently blocks input tax recovery. BookLean has handled VAT for UAE developers, main contractors, and subcontractors since 2018.',
    pain: [
      {
        title: 'First vs subsequent supply – developers get this wrong',
        description:
          'Many developers treat the first sale or lease of new residential units as exempt instead of zero rated, or miss the three year window from completion, losing the right to recover construction VAT and misclassifying later sales.',
      },
      {
        title: 'DLD fee included in VAT – a direct error',
        description:
          'Dubai Land Department transfer fees are often incorrectly added into the taxable base when calculating 5% VAT on commercial property sales, even though the buyer pays the DLD fee separately to the authority.',
      },
      {
        title: 'Retention payments – VAT timing errors are common',
        description:
          'Construction contracts frequently treat retention amounts as non VAT or recognise output VAT only on release; under UAE VAT rules, VAT is due when consideration is received or invoice is issued, not when retention is later paid.',
      },
      {
        title: 'Project cost tracking without proper coding',
        description:
          'Inputs for mixed use projects (residential + commercial), infrastructure and common areas are booked without flags for taxable vs exempt use, making input VAT apportionment impossible and exposing developers to clawback under the Capital Assets Scheme.',
      },
    ],
    sol: [
      {
        title: 'Property VAT structuring from day one',
        description:
          'We map each project’s units to the correct VAT treatment – commercial, first supply residential (zero rated), subsequent residential (exempt), and bare land – and design invoicing so developers maximise lawful VAT recovery on construction while staying compliant.',
      },
      {
        title: 'Correct retention VAT timing',
        description:
          'We configure contracts and billing so retention amounts follow VAT date of supply rules, ensuring output VAT is recognised at the right time and VAT201 returns always reflect the legal position, not cash basis approximations.',
      },
      {
        title: 'Project level cost accounting',
        description:
          'We build cost centres for each tower, phase and asset class, tagging invoices to commercial, first supply residential or exempt use so you can clearly separate recoverable from blocked input VAT and support FTA reviews.',
      },
      {
        title: 'Input VAT apportionment calculation',
        description:
          'For mixed use developments, we design FTA acceptable partial exemption and Capital Assets Scheme calculations using area or revenue based methods, helping you recover the maximum allowable VAT on shared costs such as infrastructure and professional fees.',
      },
    ],
    lawTitle: 'UAE laws — Real estate & construction (verified)',
    laws: [
      'First supply of new residential buildings – zero rated\nThe first sale or lease of a new residential building within three years of completion is zero rated for VAT, allowing developers to recover input VAT on construction.',
      'Subsequent supplies of residential property – exempt\nAny later sale or lease of the same residential building is exempt from VAT, and related input VAT is generally not recoverable.',
      'Commercial real estate – standard rated 5%\nSales and leases of offices, shops, warehouses and commercial parts of mixed use projects are taxable at the 5% standard VAT rate.',
      'Construction services – standard rated 5%\nMost construction, fit out and contracting services are taxable at 5% VAT; developers and contractors must register once taxable supplies exceed AED 375,000.',
      'Retention payments – VAT on consideration, not cash only\nVAT applies to retention amounts as part of contract consideration; timing is determined by invoice and payment dates under VAT date of supply rules, not just final release.',
      'Mixed use developments – partial exemption required\nFor projects with both commercial and residential units, input VAT must be apportioned between taxable and exempt activities using an approved method (area or revenue based).',
      'Bare land – exempt supply\nSupplies of bare land are generally exempt from VAT, meaning input VAT directly related to bare land transactions is not recoverable.',
      'Capital Assets Scheme – 10 year adjustment\nBuildings and major real estate assets fall under the Capital Assets Scheme; if use changes from taxable to exempt (or vice versa), input VAT recovered may need to be adjusted over a period of up to ten years.',
      'VAT registration thresholds\nReal estate businesses must register for VAT when taxable supplies (including commercial rent and zero rated first supplies) exceed AED 375,000; voluntary registration is available from AED 187,500.',
      'UAE corporate tax on real estate profits\nReal estate developers and landlords with business profits above AED 375,000 are generally subject to 9% UAE corporate tax, in addition to VAT obligations.',
      'Capital Assets Scheme – AED 5m+ buildings: High value real estate projects (buildings and major improvements costing AED 5 million or more, excluding VAT) fall under the Capital Assets Scheme; input VAT is recovered upfront but must be monitored and adjusted over 10 years to reflect actual taxable vs exempt use.',
      'Transfer of business as a going concern (TOGC):When a full real estate business (or an independent part of it) is transferred as a going concern to a VAT registered buyer who continues the same activity, the transfer can be treated as outside the scope of VAT under Article 7 — but a simple sale of a single property alone remains a normal Vatable/exempt supply.',
    ],
    storyTitle: 'How BookLean Helped This Real Estate Developer — Real Story',
    story:
      'A UAE developer with a mixed use project in Dubai Marina was treating all unit sales as exempt, so construction VAT on residential towers was never recovered and commercial units were mis invoiced.\nBookLean reviewed the project, identified first supply residential units still within the three year window, recoded commercial leases, applied partial exemption and Capital Assets Scheme calculations, and corrected VAT returns before FTA review.\nThe developer recovered significant construction VAT legally and avoided clawback on mixed use assets, turning VAT from a cost into part of the project’s financing strategy.',
    cta: 'Book a Free Property Finance Review →',
  },
  tech: {
    tag: 'Technology & SaaS Startup Accounting UAE · 2026',
    title: 'Technology & SaaS Startups — Investor-Ready Financials & UAE Tax Structuring',
    sub: 'UAE tech startups need more than bookkeeping. They need IFRS-compliant financials, correct SaaS revenue recognition, a correctly structured entity, and a clear UAE Corporate Tax position before a due diligence team arrives. BookLean has helped UAE startups close angel rounds and Series A raises with financial statements that pass investor scrutiny.',
    pain: [
      {
        title: 'Investor due diligence fails – messy books kill deals',
        description:
          'Many UAE tech startups run on product and growth but neglect clean accounting, so when investors request IFRS style financials and tax compliance, they discover missing revenue schedules, unreconciled bank statements and unrecorded reverse charge VAT on overseas SaaS tools.',
      },
      {
        title: 'Free zone 0% CT – most startups do not actually qualify',
        description:
          'Founders assume their free zone licence automatically gives 0% corporate tax; in reality, only “Qualifying Free Zone Persons” get 0% on qualifying income and must meet substance, audited accounts and de minimis tests, otherwise 9% CT applies on all profits.',
      },
      {
        title: 'SaaS revenue recognition is complex',
        description:
          'Subscription and usage based models need IFRS 15 treatment, recognising revenue over the contract term and separating one off setup fees, variable consideration and cancellation rights; many startups still book SaaS revenue on simple cash or invoice dates.',
      },
      {
        title: 'ESOP accounting ignored until due diligence',
        description:
          'Employee stock option plans (ESOPs) and RSUs are often promised informally without IFRS 2 valuations or expense recognition, leading to unrecorded share based payment costs and cap table confusion when investors examine financial statements.',
      },
    ],
    sol: [
      {
        title: 'Investor ready financials from month one',
        description:
          'We set up your chart of accounts, revenue recognition policies and tax processes so every month produces clean, investor grade management accounts and annual IFRS financials ready for due diligence.',
      },
      {
        title: 'QFZP eligibility assessment & CT structuring',
        description:
          'We test your free zone entity against QFZP conditions (substance, qualifying income, de minimis limits, audited IFRS statements) and design a structure that either preserves 0% CT or prepares you for standard 9% CT with Small Business Relief where allowed.',
      },
      {
        title: 'IFRS 15 revenue recognition for SaaS',
        description:
          'We build policies that correctly recognise subscription revenue over time, separate implementation and one off services, and handle upgrades, downgrades and churn so your ARR/MRR metrics align with IFRS.',
      },
      {
        title: 'Virtual CFO for fundraising',
        description:
          'We support your board packs, investor data room, cap table modelling and ESOP accounting, and make sure tax (CT and VAT) is clean before you go into a fundraise.',
      },
    ],
    lawTitle: 'UAE laws — Technology & SaaS startups (verified)',
    laws: [
      'Standard VAT on tech services – 5%\nDigital services, SaaS subscriptions, app licences and other tech services supplied to UAE customers are generally taxable at the 5% standard VAT rate.',
      'VAT registration thresholds & non resident rules\nUAE businesses must register for VAT at AED 375,000 mandatory / AED 187,500 voluntary, while non resident B2C digital suppliers have no threshold and must register from the first taxable sale.',
      'Reverse charge on overseas SaaS & cloud tools\nVAT registered UAE startups must self account 5% reverse charge VAT on imported services like AWS, Azure, Google Cloud and other overseas SaaS tools, reporting output and input VAT in the same return.',
      'Zero rating of exported digital services\nDigital services supplied to non resident customers outside the UAE can be zero rated when Article 31 conditions are met (customer outside UAE, not linked to UAE real estate or goods, proper evidence of location).',
      'UAE corporate tax – 9% above AED 375k profits\nUAE corporate tax applies at 0% on the first AED 375,000 of taxable profit and 9% above that for most startups, starting from financial years beginning on or after 1 June 2023.',
      'Qualifying Free Zone Person (QFZP) – 0% CT route\nFree zone entities can access 0% CT on qualifying income if they meet QFZP tests: adequate substance, qualifying income, de minimis limits on non qualifying revenue, TP documentation and audited IFRS financial statements.',
      'Small Business Relief for CT\nMainland or non QFZP startups with revenue below AED 3 million can elect Small Business Relief so CT is effectively 0%, while still registering and filing CT returns.',
      'IFRS 15 for SaaS revenue\nIFRS 15 requires SaaS entities to identify performance obligations and recognise subscription revenue over the period of service, not upfront, with careful treatment of variable consideration and termination rights.',
      'IFRS 2 for ESOPs and share based payments\nESOPs, RSUs and other employee equity plans must be measured at grant date fair value and expensed over vesting periods under IFRS 2, with proper valuation, disclosures and tax considerations.',
      'E commerce & digital VAT guidance (FTA guide)\nThe FTA’s e commerce VAT guide clarifies place of supply and invoicing rules for online platforms, SaaS providers and marketplaces, including when platforms act as principal or agent.',
      'Transfer pricing on related party tech transactions:\nIntercompany charges for development, management fees, IP royalties and group SaaS services must follow UAE corporate tax transfer pricing rules, using arm’s length pricing and maintaining TP documentation and disclosure forms.pwc+3',
      'E invoicing (Peppol) for tech & SaaS billing:\nFrom the UAE e invoicing mandate starting 2026–2027, tech and SaaS companies issuing B2B/B2G invoices must send structured Peppol format e invoices via accredited service providers, aligning subscription billing and usage charges with FTA digital invoicing requirements.',
    ],
    storyTitle: 'How BookLean Helped This UAE Startup — Real Story',
    story:
      'A UAE SaaS startup in a Dubai free zone approached BookLean after an investor requested IFRS compliant financials and tax analysis. Their ARR numbers were based on invoicing, reverse charge VAT on cloud costs had never been booked, and QFZP status was assumed but not tested.\nBookLean cleaned two years of accounts, implemented IFRS 15 revenue recognition, set up ESOP accounting under IFRS 2, and tested QFZP with substance and de minimis calculations.\nThe startup entered due diligence with investor ready financials, clear VAT and CT positions, and a structure that preserved 0% CT on qualifying free zone income.',
    cta: 'Book a Free Startup Finance Review →',
  },
  healthcare: {
    tag: 'Healthcare & Clinics Accounting UAE · Verified UAE Tax Laws 2026',
    title: 'Healthcare & Clinics — Zero-Rated Services, Cosmetic VAT & Insurance Billing',
    sub: 'UAE healthcare VAT has three categories — zero-rated, standard-rated (5%), and exempt — and the boundary between them is not always clear. Most clinics are either charging VAT on zero-rated services, claiming input VAT they are not entitled to, or both. BookLean specialises in UAE healthcare accounting for DHA, DOH, and MOH-licensed facilities across Dubai and Abu Dhabi.',
    pain: [
      {
        title: 'Charging 5% VAT on zero rated medical services',
        description:
          'Many clinics charge 5% VAT on preventive and curative healthcare services that should be zero rated (0%) under Cabinet Decision 56 of 2017, losing competitiveness and misclassifying VAT on invoices.',
      },
      {
        title: 'Employee health insurance – input VAT claimed incorrectly',
        description:
          'Clinics often recover VAT on staff health insurance where it is treated as a personal benefit; without proper policy wording and HR documentation, this input VAT can be blocked in an FTA audit.',
      },
      {
        title: 'Cosmetic vs medical – documentation is everything',
        description:
          'Cosmetic procedures and purely aesthetic treatments are standard rated at 5%, but many clinics either zero rate them or fail to separate cosmetic from medically necessary elements, creating exposure on under declared VAT.',
      },
      {
        title: 'Insurance billing reconciliation – revenue distorted',
        description:
          'Claim submissions, approvals, rejections and resubmissions often do not match accounting system postings, resulting in revenue that does not align with insurer remittances and VAT returns.',
      },
    ],
    sol: [
      {
        title: 'Service classification framework',
        description:
          'We build a documented VAT classification matrix for every service you offer – clearly separating zero rated preventive/curative healthcare, standard rated cosmetic services, exempt supplies and government funded services.',
      },
      {
        title: 'Partial exemption calculation',
        description:
          'For clinics providing both zero rated medical and standard rated cosmetic services, we perform partial exemption and Capital Assets Scheme calculations so you recover the maximum allowable input VAT on mixed use costs.',
      },
      {
        title: 'Insurance reconciliation – clean monthly close',
        description:
          'We reconcile claim submissions, approvals, rejections, resubmissions and cash receipts to your general ledger every month, so your VAT returns and management accounts always match insurer statements.',
      },
      {
        title: 'Medical equipment import VAT reclaim',
        description:
          'We review imports of medical equipment and protective items, ensure they meet Cabinet Decision 56 zero rating conditions where applicable, and document import VAT so eligible amounts are fully reclaimed.',
      },
    ],
    lawTitle: 'UAE laws — Healthcare & clinics (verified)',
    laws: [
      'Zero rated healthcare services – 0% VAT\nPreventive and curative healthcare services provided by licensed hospitals, clinics, dentists, nurses and pharmacies are zero rated at 0%, allowing providers to recover input VAT on related costs.',
      'Zero rated medicines & medical equipment\nMedicines and medical equipment registered and approved by the Ministry of Health and Prevention (MoHAP) are zero rated; unregistered medicines and non medical health products are standard rated at 5%.',
      'Cosmetic & non medical services – 5% VAT\nPurely cosmetic procedures (such as aesthetic surgery, botox, fillers and teeth whitening without medical indication), wellness services and non therapeutic treatments are standard rated at 5% VAT.',
      'Hospital accommodation – patients vs non patients\nRoom and meals for admitted patients form part of zero rated healthcare; accommodation and meals for accompanying relatives or visitors are standard rated at 5%.',
      'Administrative fees – incidental vs stand alone\nRegistration and administration fees that are incidental to zero rated treatment can be zero rated; stand alone admin or service charges not directly linked to treatment are standard rated at 5%.',
      'Telemedicine & digital health\nTeleconsultations and remote monitoring supplied by licensed healthcare professionals as preventive/curative care can qualify as zero rated; purely wellness apps or non clinical services are standard rated.',
      'Employee health insurance VAT\nInput VAT on staff health insurance is usually blocked when it is a personal benefit; recovery may be allowed only where it is required by law or forms part of taxable staff packages with proper documentation.',
      'Partial exemption for mixed healthcare providers\nClinics that supply both zero rated medical services and standard rated cosmetic services must apply partial exemption methods to determine recoverable input VAT on shared costs.',
      'Temporary zero rating of Covid 19 protective equipment (historic)\nCertain protective medical equipment (masks, gloves, disinfectants) were temporarily zero rated between 1 September 2020 and 31 December 2021; supplies outside that period are at 5% VAT.',
      'VAT exemptions – transport & other sectors (context)\nHealthcare businesses may interact with exempt supplies such as local passenger transport and residential property; input VAT linked to exempt activities is not recoverable.',
      'Corporate tax – 9% on healthcare profits\nUAE healthcare companies are subject to 9% corporate tax on taxable profits above AED 375,000, alongside their VAT obligations.',
    ],
    storyTitle: 'How BookLean Helped This Clinic — Real Story',
    story:
      'A multi specialty clinic in Dubai was charging 5% VAT on all services, mixing zero rated medical consultations with standard rated cosmetic treatments, and incorrectly reclaiming VAT on staff health insurance.\nBookLean re classified services, recalculated partial exemption, corrected import VAT on medical equipment, and rebuilt insurer billing reconciliations.\nWithin one year, the clinic’s VAT returns aligned with FTA rules, penalties were avoided, and margins improved as input VAT recovery matched the real mix of zero rated and standard rated services',
    cta: 'Book a Free Healthcare Finance Review →',
  },
  logistics: {
    tag: 'Logistics & Transportation Accounting UAE · Multi-Emirate · 2026',
    title: 'Logistics & Transportation — Multi-Emirate VAT, Customs & Multi-Currency',
    sub: 'Logistics and transportation businesses in the UAE operate across multiple emirates, manage import/export VAT, deal with customs duty, and handle multi-currency transactions — all of which create significant accounting complexity. Non-compliance with UAE VAT on cross-border freight and incorrect customs duty accounting are the most common triggers for FTA audit in this sector.',
    pain: [
      {
        title: 'Import VAT on goods – missed input VAT recovery',
        description:
          'When goods are imported into the UAE, 5% VAT is triggered at the border and posted to the importer’s TRN, but many logistics and trading businesses fail to reconcile customs data to VAT returns and lose eligible input VAT.',
      },
      {
        title: 'Multi emirate operations – incorrect place of supply',
        description:
          'Freight and transport services across Dubai, Abu Dhabi and other emirates are often treated as one generic supply; without correctly identifying where each leg starts, some services are wrongly zero rated or taxed, distorting VAT treatment.',
      },
      {
        title: 'Zero rating of international transport – applied incorrectly',
        description:
          'Businesses either zero rate purely domestic transport that does not qualify as international, or apply 5% VAT to freight that should be zero rated under Article 33, creating under  or over declared VAT.',
      },
      {
        title: 'Multi currency reconciliation – exchange rate errors',
        description:
          'Logistics companies bill in USD or EUR but report VAT in AED; mis using exchange rates or not matching FX to the FTA prescribed rates leads to mismatches between invoices, customs records and VAT returns.',
      },
    ],
    sol: [
      {
        title: 'Import VAT recovery – full documentation package',
        description:
          'We collect and reconcile customs declarations, import invoices and reverse charge entries so import VAT on goods is correctly booked and fully reclaimed for VAT registered businesses.',
      },
      {
        title: 'VAT zero rating review',
        description:
          'We review your service contracts and supporting documentation to correctly distinguish zero rated international transport and transport related services from standard rated domestic legs, reducing audit risk.',
      },
      {
        title: 'Multi currency bookkeeping',
        description:
          'We implement UAE Central Bank exchange rates in your bookkeeping system, reconcile FX gains/losses and ensure all foreign currency invoices and customs values translate to AED consistently for VAT and CT.',
      },
      {
        title: 'Supply chain cost accounting',
        description:
          'We build cost accounting for logistics operations – fuel, driver costs, warehouse fees, duty and VAT – so you can see true margins per route or customer and link them cleanly to tax returns.',
      },
    ],
    lawTitle: 'UAE laws — Logistics & transportation (verified)',
    laws: [
      'VAT on imports – 5% standard rate\nImports of goods into the UAE typically attract 5% VAT at the border, separate from customs duty; VAT registered businesses can self account and recover input VAT when goods are used for taxable supplies.',
      'Zero rating international transport of goods and passengers\nInternational transport of passengers or goods to or from the UAE, and certain transport related services, are zero rated under Article 33 of the VAT Executive Regulations.',
      'Domestic passenger transport – VAT exempt\nLocal passenger transport within the UAE by bus, metro, tram, taxi or ferry is exempt from VAT, so providers cannot recover input VAT on costs attributable to exempt services.',
      'Domestic freight – standard rated 5%\nPurely domestic movement of goods within the UAE that is not part of an international transport leg is standard rated at 5% VAT.',
      'Place of supply for transport services\nFor transport services, the place of supply is generally where the trip starts; mis identifying this across emirates or cross border journeys can cause incorrect VAT treatment.',
      'VAT on agents importing on behalf of owners\nWhen freight forwarders use their TRN to clear goods for customers, FTA guidance allows specific procedures so import VAT is posted to the correct entity and can be recovered by the beneficial owner.',
      'Reverse charge on imported services\nLogistics companies buying overseas freight, brokerage or consultancy services must apply 5% reverse charge VAT when registered in the UAE, reporting both output and input VAT in their return.',
      'Zero rated supplies of qualifying means of transport\nThe supply or import of qualifying commercial aircraft, vessels and public transport buses/trains used for transporting passengers or goods can be zero rated, subject to FTA conditions.',
      'Fuel and non qualifying vehicles – standard rated\nFuel and supplies for non qualifying or private vehicles (e.g., company buses for staff only, yachts) remain subject to the standard 5% VAT.',
      'Corporate tax – logistics profits at 9%\nLogistics companies are subject to 9% UAE corporate tax on taxable profits above AED 375,000, with specific guidance on exempt international shipping income and deductible expenses.',
    ],
    storyTitle: 'How BookLean Helped This Logistics Business — Real Story',
    story:
      'A UAE based freight forwarder was treating most cross border shipments as zero rated without checking Article 33 conditions and was not reconciling import VAT on behalf of customers.\nBookLean reviewed contracts and customs data, corrected zero rating, implemented import VAT recovery procedures for principal and agent arrangements, and aligned FX translations with Central Bank rates.\nThe business reduced VAT exposure, reclaimed significant import VAT for clients, and presented clean transport and tax data during its next FTA review.',
    cta: 'Book a Free Logistics Finance Review →',
  },
  banking: {
    tag: 'Banking & Financial Services Accounting UAE · AML & DFSA · 2026',
    title: 'Banking & Financial Services — AML Compliance, DFSA & ESR',
    sub: 'Financial services businesses in the UAE — including banks, exchange houses, investment managers, insurance companies, and DIFC/ADGM-licensed entities — operate under some of the most demanding compliance frameworks in the world. AML obligations, DFSA or FSRA licensing requirements, ESR for financial services Relevant Activities, and UAE Corporate Tax rules for financial institutions all interact in ways that require specialist expertise.',
    pain: [
      {
        title: 'AML compliance – gaps in customer due diligence (CDD)',
        description:
          'Many financial services firms have incomplete KYC files and weak ongoing monitoring, falling short of Federal Decree Law No. 20 of 2018 and its Executive Regulations, and risking fines or licence issues.',
      },
      {
        title: 'ESR for financial services – notification missed',
        description:
          'Banks, fund managers, leasing and financing businesses in the UAE often forget to file annual Economic Substance Regulation (ESR) notifications and reports for “relevant activities”, exposing themselves to penalties and information exchange.',
      },
      {
        title: 'VAT exemption on financial services – misapplied',
        description:
          'Under UAE VAT law, many margin based financial services are exempt, but explicit fee based services are taxable at 5%; misclassifying fees as exempt or treating all services as exempt leads to incorrect VAT recovery and FTA risk.',
      },
      {
        title: 'DFIC/ADGM accounting – different from UAE mainland',
        description:
          'DFSA and ADGM regimes require IFRS based financial reporting and specific prudential disclosures that differ from some mainland practices, and firms that do not align their accounting can struggle at regulatory reviews.',
      },
    ],
    sol: [
      {
        title: 'AML policy & CDD implementation',
        description:
          'We assess AML obligations under UAE law, design risk based CDD workflows, update policies and procedures, and make sure KYC files, monitoring and reporting all align with Central Bank and FIU guidance.',
      },
      {
        title: 'ESR assessment & filing',
        description:
          'We identify whether your entity conducts “banking”, “investment fund management”, “lease finance” or other ESR relevant activities, prepare notifications and reports, and help you evidence real UAE economic substance.',
      },
      {
        title: 'Financial services VAT advisory',
        description:
          'We map your fee types to taxable vs exempt categories, design systems to separate VAT able fees from exempt interest/margins, and optimise input VAT recovery while staying compliant.',
      },
      {
        title: 'DFIC/ADGM compliant accounts & CT filing',
        description:
          'We prepare IFRS financial statements for DFIC/ADGM entities, reconcile them to UAE corporate tax returns and VAT filings, and manage regulator and FTA interactions.',
      },
    ],
    lawTitle: 'UAE laws — Banking & financial services (verified)',
    laws: [
      'AML law – Federal Decree Law No. 20 of 2018\nUAE AML law requires financial institutions and DNFBPs to perform CDD, monitor transactions, retain records and report suspicious activity to the FIU.',
      'Economic Substance Regulations (ESR) – relevant activities\nBanking, insurance, investment fund management, lease finance, headquarters and holding company activities must file annual ESR notifications and reports and demonstrate real substance in the UAE.',
      'ESR penalties – up to AED 400k and licence risk\nFailure to submit notifications or reports, or to meet substance tests, can trigger penalties from AED 20,000 to AED 400,000 and potential licence suspension or non renewal.',
      'VAT on financial services – exempt vs standard rated\nMany financial services that earn margin or interest income (e.g., lending) are exempt from VAT, while explicit fees, advisory charges and some fund management services are standard rated at 5%.',
      'Input VAT recovery for partly exempt institutions\nBanks and financial firms must apply partial exemption rules to determine how much input VAT is recoverable, given their mix of exempt interest and taxable fees.',
      'UAE corporate tax – 9% on financial services profits\nFinancial services entities are subject to 9% UAE corporate tax on taxable profits above AED 375,000, with CT registration and annual CT return filing mandatory.',
      'ESR & CT interaction – FTA as assessing authority\nThe UAE Federal Tax Authority now acts as National Assessing Authority for ESR, evaluating substance tests and imposing penalties alongside CT obligations.',
      'DFSA / ADGM regulatory accounting\nFirms licensed in DFIC or ADGM must follow IFRS and specific regulatory reporting standards; misalignment between regulatory accounts and CT/VAT filings can cause issues.',
      'Cross border information exchange\nESR and AML non compliance can lead to information being shared with foreign tax and regulatory authorities about parent companies and beneficial owners.',
      'Corporate governance and record keeping obligations\nUAE AML and ESR frameworks require proper governance, documented policies, board oversight and robust record keeping across KYC, transaction monitoring and substance evidence.',
    ],
    storyTitle: 'How BookLean Helped This Financial Services Firm — Real Story',
    story:
      'A DFIC licensed investment advisory firm had strong front office performance but inconsistent AML documentation and assumed all services were VAT exempt, leading to over claimed input VAT and unclear ESR status.\nBookLean rebuilt AML policies and CDD files, classified fee income into taxable vs exempt categories, implemented partial exemption for input VAT, and prepared ESR notifications and reports aligned with substance.\nThe firm’s next regulatory review and FTA filing were completed without penalties, and investors gained confidence in the robustness of its UAE compliance.',
    cta: 'Book a Free Financial Services Compliance Review →',
  },
  manufacturing: {
    tag: 'Manufacturing & Trading Accounting UAE · Import VAT · 2026',
    title: 'Manufacturing & Trading — Import VAT, Cost Accounting & Transfer Pricing',
    sub: 'Manufacturing and trading businesses in the UAE face a unique set of compliance challenges — import VAT on raw materials and goods, complex cost accounting for production, transfer pricing on intercompany transactions with overseas group entities, and VAT treatment of free zone vs mainland sales. Getting these right from day one prevents cash flow damage and FTA audit exposure.',
    pain: [
      {
        title: 'Import VAT not recovered – monthly cash drain',
        description:
          'Manufacturers importing raw materials often pay 5% VAT at customs or via reverse charge but fail to reconcile import data to VAT returns, leaving large amounts of recoverable input VAT stuck as a cost.',
      },
      {
        title: 'Cost accounting – no visibility on unit costs',
        description:
          'Without proper cost accounting, businesses cannot see true unit costs (materials, direct labour, overhead and landed costs), leading to weak pricing decisions and margin surprises.',
      },
      {
        title: 'Free zone manufacturing – QFZP status at risk',
        description:
          'Free zone manufacturers assume they automatically qualify for 0% corporate tax, but QFZP status requires qualifying activities, substance and limits on non qualifying mainland revenue; poor monitoring can convert all profits to 9% CT.',
      },
      {
        title: 'Transfer pricing on intercompany sales – no documentation',
        description:
          'Groups shifting inventory or finished goods between related entities frequently lack arm’s length pricing analyses and Local Files, exposing them to CT transfer pricing adjustments and penalties.',
      },
    ],
    sol: [
      {
        title: 'Import VAT recovery system',
        description:
          'We set up a structured import documentation process, reconcile customs declarations and reverse charge entries, and prepare quarterly VAT workings so every eligible import VAT amount is reclaimed.',
      },
      {
        title: 'Manufacturing cost accounting',
        description:
          'We design cost accounting that allocates direct materials, labour, factory overhead and landed costs per SKU, giving you accurate COGS, unit margins and pricing insights.',
      },
      {
        title: 'QFZP monitoring & CT filing',
        description:
          'We track free zone manufacturing revenue by customer type, test it against qualifying income rules, and prepare CT returns so that where you qualify, 0% CT applies, and where not, 9% CT is correctly reported.',
      },
      {
        title: 'Transfer pricing documentation',
        description:
          'We document intercompany transactions with arm’s length pricing, benchmarking and Local File/TP disclosures, reducing CT audit risk on cross border and domestic group trading.',
      },
    ],
    lawTitle: 'UAE laws — Manufacturing & trading (verified)',
    laws: [
      'Import VAT on goods – 5% standard rate, recoverable\nImports of goods into the UAE are subject to 5% VAT, usually via reverse charge; VAT registered businesses can recover this input tax when goods are used for taxable supplies.',
      'Input tax recovery – conditions & blocked items\nInput VAT is recoverable only where costs relate to taxable (standard  or zero rated) supplies and proper documentation exists; VAT on exempt or personal expenses is blocked.',
      'Exports of goods – zero rated\nExports of goods from the UAE to outside the GCC are zero rated VAT, allowing full input VAT recovery on related production and logistics costs.',
      'UAE corporate tax – 9% on manufacturing profits\nManufacturing and trading companies are subject to 9% corporate tax on taxable profits above AED 375,000, with CT registration and annual CT returns required.',
      'Qualifying Free Zone Person (QFZP) – 0% CT route\nFree zone manufacturers can access 0% CT on qualifying income if they meet QFZP conditions under MD 265/2023 and related decisions: substance, qualifying activities, and de minimis thresholds on mainland/non qualifying revenue.',
      'Inventory and cost capitalisation rules\nManufacturing inventory and cost treatment must follow IFRS and UAE CT guidance, with proper capitalisation of production costs and clear COGS calculations.',
      'Transfer pricing – related party goods transactions\nIntercompany sales of goods must comply with UAE transfer pricing rules, using the arm’s length principle, approved methods and supporting TP documentation.',
      'VAT records for imports and exports – 5 year retention\nBusinesses must keep customs and VAT records for imports and exports for at least five years, supporting input tax and zero rating positions.',
      'Small Business Relief for CT (if not QFZP)\nSmaller mainland or non QFZP entities with revenue below AED 3 million may elect Small Business Relief, effectively paying 0% CT while still filing returns.',
      'Capital asset & partial exemption rules (machines & mixed use)\nVAT on high value machinery and mixed use assets must follow Capital Assets Scheme and partial exemption rules, with adjustments if use shifts between taxable and exempt activities.',
    ],
    storyTitle: 'How BookLean Helped This Manufacturer — Real Story',
    story:
      'A UAE free zone manufacturer importing metals and exporting finished goods was paying import VAT but not reclaiming it, and assumed all profits qualified for 0% CT without monitoring mainland sales.\nBookLean reconciled three years of customs data to VAT returns, recovered missed input VAT, assessed QFZP status against qualifying income rules, and built transfer pricing documentation for intercompany sales.\nThe business improved cash flow through VAT recovery, kept 0% CT on qualifying income, and avoided CT and VAT adjustments in its next FTA review.',
    cta: 'Book a Free Manufacturing Finance Review →',
  },
  oilgas: {
    tag: 'Oil, Gas & Energy Accounting UAE · Complex VAT · 2026',
    title: 'Oil, Gas & Energy — Complex VAT Structures, CT & Concession Accounting',
    sub: 'Oil, gas and energy businesses operating in the UAE — including upstream E&P concessionaires, midstream pipeline and storage operators, downstream refiners and distributors, and renewable energy project companies — face some of the most complex VAT and Corporate Tax structures in any UAE industry. Government-to-government concession arrangements, joint venture accounting, decommissioning provisions, and sovereign exemptions require specialist treatment.',
    pain: [
      {
        title: 'UAE CT – extractive business exemption misunderstood',
        description:
          'Many upstream and integrated energy companies assume all income is exempt from federal corporate tax; in reality, only extractive and qualifying non extractive natural resource activities taxed at Emirate level can be exempt, while downstream and service income is subject to 9% CT.',
      },
      {
        title: 'VAT on petroleum products – exempt vs standard rated',
        description:
          'Some entities treat all fuel and petroleum sales as exempt or “out of scope”; UAE VAT law generally taxes domestic supplies at 5% while certain international transport related fuel and exports may be zero rated, leading to frequent misclassification.',
      },
      {
        title: 'Joint venture accounting – no clear cost allocation',
        description:
          'Oil and gas JVs often mix operator and non operator costs, interest and overhead without clear allocation, making it hard to separate exempt upstream income from taxable downstream or service income for CT and VAT purposes.',
      },
      {
        title: 'Decommissioning provisions – not recognised or deductible',
        description:
          'Long term decommissioning obligations are sometimes booked inconsistently or not recognised at all; incorrect accounting and tax treatment of decommissioning provisions can materially distort CT and IFRS results.',
      },
    ],
    sol: [
      {
        title: 'CT scope assessment for energy businesses',
        description:
          'We analyse whether your UAE energy business qualifies as extractive or non extractive natural resource activity, separate Emirate taxed income from federal CT taxed income, and document exemption positions under Decree Law No. 47 of 2022.',
      },
      {
        title: 'Joint venture & working interest accounting',
        description:
          'We implement IFRS compliant working interest accounting that allocates revenues, costs and capital expenditure correctly between JVs and operators, supporting accurate CT and VAT treatment.',
      },
      {
        title: 'Petroleum VAT classification',
        description:
          'We review each product and service supply – fuel, lubricants, pipeline transport, bunkering, storage – and map them to standard rated, zero rated or exempt VAT categories with clear documentation.',
      },
      {
        title: 'Decommissioning provisions & CT deductibility',
        description:
          'We build decommissioning provision models under IFRS and align them with CT guidance, so provisions and actual spend are deductible in the right periods and supported for FTA review.',
      },
    ],
    lawTitle: 'UAE laws — Oil, gas & energy (verified)',
    laws: [
      'Extractive business – Emirate level tax, CT exemption\nBusinesses engaged in exploring and extracting natural resources may be exempt from federal CT if they hold a concession/right, are taxed at Emirate level and notify the Ministry of Finance.',
      'Non extractive natural resource business – conditional exemption\nCertain refining, processing or distribution activities can be exempt from federal CT when taxed by Emirate decrees and meeting Article 8 conditions; other downstream and service income remains subject to 9% CT.',
      'Other business income – 9% corporate tax\nIncome from activities outside extractive/non extractive natural resource business (e.g. trading, transport services, consulting) is subject to standard 9% CT on profits above AED 375,000.',
      'Separate financial records for exempt and taxable activities\nIntegrated energy companies must maintain separate financial statements for Emirate taxed exempt activities and federal taxable activities, allocating common costs on a reasonable basis.',
      'VAT on fuel and petroleum products – generally 5%\nDomestic supplies of fuel and many petroleum products are standard rated at 5% VAT; only specific exports or international transport linked supplies can be zero rated.',
      'VAT on international transport & bunkering\nFuel and transport services directly linked to international journeys can qualify for zero rating when Article 33 conditions and documentation are met.',
      'Decommissioning and restoration costs – CT treatment\nDecommissioning provisions and actual abandonment costs must follow CT guidance; deductibility depends on timing, documentation and whether they relate to exempt extractive or taxable other business income.',
      'Transfer pricing for intra group energy services\nIntercompany charges for drilling services, pipeline use, storage, trading and management must comply with CT transfer pricing rules and be supported by arm’s length documentation.',
      'Record retention for energy tax records\nCorporate tax and Emirate level tax rules generally require energy companies to retain contracts, concession agreements and tax records for at least 5–7 years.',
      'Pillar Two / global minimum tax for large groups\nMultinational energy groups with global revenue above EUR 750 million must consider 15% minimum effective tax rules; Emirate level taxes often cover this, but separate CT analysis is required.',
    ],
    storyTitle: 'How BookLean Helped This Energy Business — Real Story',
    story:
      'An Abu Dhabi based energy services company treated all revenues as exempt “oil and gas” income and did not separate Emirate taxed extraction concessions from taxable downstream services.\nBookLean reviewed concessions and service contracts, split extractive and non extractive income, corrected CT filings, and implemented proper VAT classification for fuel and service supplies.\nThe client avoided federal CT exposure on upstream operations, reported downstream profits correctly at 9%, and entered its next FTA and Emirate level review with clear, defensible tax positions.',
    cta: 'Book a Free Energy Sector Finance Review →',
  },
  freelancer: {
    tag: 'Freelancer & Sole Establishment Accounting UAE · 2026',
    title: 'Freelancers & Sole Establishments — UAE Corporate Tax, VAT & Structure',
    sub: 'Freelancing in UAE is growing rapidly — but most freelancers do not realise they are operating as a business under UAE law, and the compliance obligations are real, immediate, and penalised without warning. UAE Corporate Tax registration is mandatory regardless of profit level. VAT registration is mandatory above AED 375,000 annual taxable turnover. Penalties begin on day one of non-compliance.',
    pain: [
      {
        title: 'Corporate tax registration – missed, then penalised',
        description:
          'Many UAE freelancers and sole establishments assume CT is “only for companies” and do not register with the FTA, discovering CT obligations only when penalty letters arrive.',
      },
      {
        title: 'VAT registration threshold crossed unknowingly',
        description:
          'Solo consultants and small service businesses often exceed the AED 375,000 VAT threshold without tracking revenue, missing the 30 day registration window and facing AED 10,000+ penalties plus back dated VAT.',
      },
      {
        title: 'Personal & business expenses mixed – CT deductibility at risk',
        description:
          'Many sole owners use one bank account for both business and personal spending, making it hard to separate deductible business expenses from non deductible personal costs under CT rules.',
      },
      {
        title: 'Freelance permit vs sole establishment – wrong structure chosen',
        description:
          'Some individuals hold multiple licences (freelance permit, sole establishment, LLC shareholdings) but do not understand when income is taxed as a natural person vs separate entity, leading to confusion about CT registration and Small Business Relief.',
      },
    ],
    sol: [
      {
        title: 'CT registration – done immediately',
        description:
          'We register you for UAE Corporate Tax through EmaraTax, assess Small Business Relief eligibility and set up a simple CT reporting framework matched to your actual revenue and structure.',
      },
      {
        title: 'VAT monitoring & registration',
        description:
          'We track your rolling 12 month revenue, alert you as you approach AED 187,500 (voluntary registration) and AED 375,000 (mandatory), and manage VAT registration and returns so you avoid penalties.',
      },
      {
        title: 'Clean monthly bookkeeping',
        description:
          'We separate business income and expenses from personal transactions, implement monthly P&L and cash flow, and prepare defensible records for CT and VAT.',
      },
      {
        title: 'Structure advisory',
        description:
          'We advise on the right legal form for your work – freelance permits, sole establishments or LLCs – and explain how CT applies to each, including when Small Business Relief and tax grouping may make sense.',
      },
    ],
    lawTitle: 'UAE laws — Freelancers & sole establishments (verified)',
    laws: [
      'CT registration mandatory for all UAE businesses\nUnder Federal Decree Law No. 47 of 2022, all UAE businesses – including licensed freelancers and sole establishments – must register for Corporate Tax.',
      'CT rates – 0% / 9% with Small Business Relief\nCT applies at 0% on the first AED 375,000 of taxable income and 9% on income above that; resident persons with revenue ≤ AED 3 million may elect Small Business Relief so taxable income is deemed nil for eligible years.',
      'CT for natural persons (sole establishments)\nNatural persons conducting business via sole establishments become CT taxable once business income exceeds AED 1 million per year; LLCs are separate taxable persons.',
      'Small Business Relief – conditions & traps\nSBR is available for resident persons (not QFZPs or large MNEs) with revenue ≤ AED 3 million per tax period up to 31 December 2026; exceeding the threshold in any period can permanently remove eligibility and anti abuse rules block artificial splitting.',
      'Non deductible personal and penalty expenses\nPersonal expenses of the owner, fines and government penalties are non deductible for CT; entertainment is only partly deductible.',
      'VAT registration thresholds for freelancers\nVAT registration is mandatory once taxable supplies exceed AED 375,000 in 12 months; voluntary registration is available from AED 187,500.',
      'VAT applies regardless of “size”\nFreelance activities are treated as business income; crossing the threshold triggers VAT registration even for one person operations.',
      'Record keeping and invoicing requirements\nVAT registered freelancers must issue compliant tax invoices with TRN, keep records for at least five years and file returns through EmaraTax.',
      'CT & VAT interaction\nFreelancers who are both CT registered and VAT registered must align revenue and expense records across both taxes, with SBR elections affecting CT but not VAT obligations.',
      'WPS for employees – labour compliance\nSole establishments employing staff must comply with UAE labour rules, including Wage Protection System for salary payments.',
    ],
    storyTitle: 'How BookLean Helped This Freelancer — Real Story',
    story:
      'A TECOM licensed freelancer earning around AED 480,000 per year assumed CT and VAT did not apply to her and received penalty notices for missing CT registration and late VAT registration.\nBookLean reconstructed her accounts, registered her for CT, elected Small Business Relief, registered for VAT with back dated filings, and separated personal from business expenses.\nShe cleared outstanding penalties, moved to clean monthly reporting, and kept full compliance without losing future SBR eligibility.',
    cta: 'Book a Free Freelancer Finance Review →',
  },
};
