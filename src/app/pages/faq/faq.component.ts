import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { BookingModalService } from '../../services/booking-modal.service';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq', standalone: true, imports: [CommonModule, FooterComponent], templateUrl: './faq.component.html', styleUrl: './faq.component.scss', changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {
  readonly activeFaq = signal<number | null>(0);

  readonly quickFacts = [
    'Corporate Tax: 9% above AED 375,000', 'VAT standard rate: 5% on most goods & services', 'Late VAT filing penalty: From AED 1,000 per period', 'PEPPOL e-invoicing: Mandatory 2026 rollout', 'VAT registration threshold: AED 375,000 annual turnover'
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'What is UAE Corporate Tax (9%) and who must pay it?', answer: 'UAE Corporate Tax is a 9% federal tax on business net taxable income exceeding AED 375,000 per year, under Federal Decree-Law No. 47 of 2022. Businesses earning below AED 375,000 are taxed at 0%. It applies to all UAE mainland companies and partnerships. Free zone companies may qualify for 0% as Qualifying Free Zone Persons (QFZP) subject to FTA substance requirements. BookLean manages complete CT registration on EmaraTax, annual return filing, and ongoing tax planning so you always pay exactly what is right, and not a dirham more.'
    }, {
      question: 'What are the UAE FTA penalties for late VAT or Corporate Tax filing?', answer: 'Late VAT filing penalties start at AED 1,000 per period for the first offence and rise to AED 2,000 for repeat violations. Late VAT payment triggers an immediate 2% penalty plus 4% per month on the unpaid amount. Late Corporate Tax return filing attracts AED 500 per month for the first year, then AED 1,000 per month thereafter. Late VAT registration carries penalties from AED 10,000 to AED 20,000. BookLean guarantees zero FTA penalties across all client accounts because one missed deadline costs more than a full year of our fees.'
    }, {
      question: 'Do free zone companies pay UAE Corporate Tax? What is QFZP status?', answer: 'Free zone companies can qualify as Qualifying Free Zone Persons (QFZP) and enjoy 0% Corporate Tax on qualifying income. This requires meeting FTA economic substance requirements, earning income only from qualifying activities, and maintaining arm\'s-length transactions with mainland entities. Non-qualifying income, such as revenue from UAE mainland clients, is still taxed at 9%. BookLean assesses your IFZA, DMCC, Meydan, or other free zone structure, confirms your QFZP eligibility, and maximises every legal exemption while keeping you fully FTA-compliant.'
    }, {
      question: 'What is PEPPOL e-invoicing in UAE and when is it mandatory?', answer: 'PEPPOL e-invoicing is the UAE FTA\'s mandatory digital invoicing standard requiring VAT-registered businesses to issue and receive tax invoices in structured XML format through a certified PEPPOL Access Point, replacing paper and PDF invoices for B2B transactions. The FTA is rolling out the mandate in phases from 2026. Non-compliance will attract FTA penalties. BookLean delivers end-to-end PEPPOL implementation: Access Point selection, ERP integration for Zoho Books, QuickBooks, Xero, and SAP, XML configuration, and ongoing FTA compliance monitoring so you meet every phase deadline.'
    }, {
      question: 'What is the UAE VAT registration threshold and who needs to register?', answer: 'Any UAE business with taxable supplies or imports exceeding AED 375,000 in the previous 12 months, or expected to exceed this in the next 30 days, must register for VAT with the FTA. Voluntary registration is available from AED 187,500. Registration is done through the FTA EmaraTax portal. Once registered, you must charge 5% VAT on standard-rated supplies, file quarterly or monthly VAT returns, and maintain FTA-compliant tax invoices. BookLean handles the full registration process, TRN issuance, and ongoing compliance so your business is protected from day one.'
    }, {
      question: 'Mainland vs Freezone UAE: which is better, and how long does company setup take?', answer: 'The right choice depends on your business model and customers. Mainland companies can trade freely across the UAE and government contracts with 100% foreign ownership now permitted in most sectors, and setup typically takes 5 to 10 working days. Free zone companies offer 0% Corporate Tax on qualifying income, 100% repatriation of profits, and faster setup of 3 to 7 days, but have restrictions on direct mainland trading. Key decision factors include where your clients are, whether you need a physical UAE presence, and whether you qualify for QFZP status. BookLean provides a free structure assessment to identify the most tax-efficient and commercially practical option for your specific business.'
    }, {
      question: 'What is ESR filing in UAE and who needs to file?', answer: 'Economic Substance Regulations require UAE businesses in certain sectors, including banking, insurance, investment fund management, intellectual property, shipping, holding companies, headquarters, and distribution, to demonstrate genuine economic activity in the UAE. All in-scope entities must file an annual ESR Notification and, if conducting a Relevant Activity, submit an ESR Report within 12 months of the financial year-end. Penalties for non-filing start at AED 50,000. BookLean assesses your ESR obligations, prepares and submits both filings on time, and maintains the substance documentation needed to pass any FTA review.'
    }, {
      question: 'Does BookLean provide Virtual CFO services in UAE? What does a vCFO do?', answer: 'Yes. BookLean\'s Virtual CFO service gives your business Big 4-level financial leadership at a fraction of the cost of a full-time hire. Your dedicated vCFO delivers monthly management accounts, KPI dashboards, 12-month cash flow forecasting, budgeting, scenario planning, and board-ready investor presentations. They also oversee FTA compliance, banking relationships, and cost optimisation. This service is ideal for SMEs, startups, and fast-growing businesses in Dubai and across the UAE that need strategic financial direction without a AED 40,000+ monthly salary commitment.'
    }, {
      question: 'How does UAE WPS payroll work and what does BookLean handle?', answer: 'The UAE Wages Protection System is a mandatory government payroll scheme requiring all private-sector employers to pay salaries electronically through an approved financial institution and submit payroll data to the Ministry of Human Resources each month. Non-compliance results in immediate business licence suspension and fines from AED 5,000 per employee. BookLean manages your complete WPS cycle: payroll processing, SIF file generation and submission, MOHRE compliance, end-of-service gratuity calculations, and payslip distribution, ensuring your team is paid on time and your licence is never at risk.'
    }, {
      question: 'Is my financial data safe with BookLean? Are you UAE PDPL compliant?', answer: 'Yes. BookLean is fully compliant with the UAE Personal Data Protection Law and uses AES-256 encryption for all data at rest and in transit. Your financial data is stored exclusively on UAE-hosted Microsoft Azure cloud servers with multi-factor authentication, role-based access controls, and complete audit trails for every access event. We operate strict data minimisation and retention policies. Your data is never sold or shared with any third party and can be exported or permanently deleted at your written request at any time.'
    }, {
      question: 'How much do accounting and VAT services cost in Dubai?', answer: 'BookLean operates on transparent fixed monthly fees with no surprise invoices and no hidden extras. Our Clarity Starter package for startups and SMEs up to AED 10M revenue covers AI-powered bookkeeping, quarterly VAT filing, Corporate Tax compliance, monthly P&L, and dedicated CA support. Our Growth Partner package for AED 10M to 100M revenue adds payroll WPS management, Virtual CFO advisory, board-ready MIS reports, ESR compliance, and full FTA audit representation. Book a free 30-minute strategy call and receive a written, itemised fixed-fee proposal within 24 hours.'
    }, {
      question: 'What is UBO filing in UAE and which businesses must comply?', answer: 'Ultimate Beneficial Owner filing is a mandatory UAE regulatory requirement under Cabinet Resolution No. 58 of 2020. All UAE mainland and free zone companies, except those listed on a recognised stock exchange, must maintain a UBO Register disclosing all natural persons who ultimately own or control 25% or more of the company and file this with their respective licensing authority. Penalties for non-compliance include fines up to AED 100,000. BookLean prepares and submits your UBO Register, keeps it updated with any ownership changes, and ensures you remain compliant with all annual renewal requirements.'
    }, {
      question: 'Does BookLean use AI for bookkeeping? How does AI accounting work in UAE?', answer: 'Yes. BookLean\'s AI engine connects directly to your bank feeds, payment gateways, and cloud accounting platforms such as Zoho Books, QuickBooks, and Xero to automatically categorise transactions, reconcile accounts, flag anomalies, and generate real-time management reports, reducing manual bookkeeping effort by up to 80%. Every AI-generated entry is reviewed and approved by a qualified Chartered Accountant before finalisation, ensuring both speed and accuracy. The result is clean books, real-time financial visibility, and FTA-compliant records without the cost of a full-time in-house accounts team.'
    }, {
      question: 'What accounting services do restaurants and F&B businesses in UAE need?', answer: 'UAE restaurants and F&B businesses face specific compliance requirements including 5% VAT on dine-in sales, correct VAT treatment for takeaway versus dine-in, food cost and gross margin tracking, daily cash reconciliation, multi-outlet consolidation, WPS payroll for large teams, and DTCM or DED licensing compliance. BookLean specialises in F&B accounting and integrates directly with POS systems to automate daily reconciliations and generate outlet-level P&L reports. Our restaurant clients typically cut food cost variance by 3 to 5% within 90 days.'
    }, {
      question: 'What are the UAE Corporate Tax filing deadlines and how do I register on EmaraTax?', answer: 'All UAE businesses must register for Corporate Tax on the FTA EmaraTax portal. The Corporate Tax return must be filed within 9 months of the end of your financial year. For example, for a 31 December 2024 year-end, the deadline is 30 September 2025. Corporate Tax payment is due on the same date as the return. Businesses must also maintain financial records for at least 7 years. Registration must be completed before the first filing deadline, and late registration attracts penalties from AED 10,000. BookLean handles EmaraTax registration, prepares your full CT return, and manages all payment submissions so you never miss a deadline.'
    }, {
      question: 'Can BookLean help ecommerce businesses with UAE VAT and accounting?', answer: 'Yes. Ecommerce businesses in the UAE face unique VAT complexities: correct VAT treatment for cross-border sales, import VAT on goods under reverse charge, marketplace VAT obligations for Amazon.ae and Noon, multi-currency reconciliation, and FTA e-invoicing compliance. BookLean integrates directly with Shopify, WooCommerce, Amazon, and Noon Seller Central to automate transaction import, calculate VAT correctly per order type, and generate audit-ready VAT returns. We also handle Corporate Tax filing and help ecommerce businesses structure efficiently for maximum tax savings while staying fully FTA compliant.'
    }
  ];

  constructor(private readonly bookingService: BookingModalService) {}

  toggleFaq(index: number): void {
    this.activeFaq.set(this.activeFaq() === index ? null : index);
  }

  openBookingModal(event: Event): void {
    event.preventDefault();
    this.bookingService.open();
  }
}
