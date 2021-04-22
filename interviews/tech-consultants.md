# Interview Report
## Date: 22 April 2021, 11am
## From Ponder Source: Michiel
## Interviewee(s): Two technical consultants
* one had implemented and worked with Peoplesoft for 10 years at a software company
* the other had worked with Workday and at a large bank

peoplesoft (for companies with 100+ employees)
myob (smaller)
migrate data when switching "religions"

(Chart of Accounts)
- purchasing feeds into AP feeds into GL
- order management feeds into billing feeds into GL

data would come in through a frontend / web store / feeder systems.
Send Purchase Order to other company by email.

There are import tool. wysiwyg database view from csv. SQL. SQR. https://en.wikipedia.org/wiki/SQR

A technical consultant could implement for instance Peoplesoft system for a company and then stay to help operate it.
A company with a few hundred employees could have as many as 3 fulltime AP persons, talking and calling by phone to match invoices with PO's. Plus 3 fulltime in professional services billing (contracts feed to billing monthly) and 3 fulltime in order management billing. People in General Ledger do accounting. Staff accountants. Do reports, make sure the books are balancing. GL reporting feeds into higher level reporting. Budgets.

They review all orders and purchase to make sure. Sanity check.

A larger company could even have as many as 12 FTE in AP and 40 in Purchasing.
Checking.
Manual data entry.

At a big bank the enterprise architecture diagram could be multiple pages, with hundreds of systems, all related to various banking products.

You would always have anomalies.
Even a brand new erp needs to talk to legacy systems.
Overhead to verify
Paper involved
Email POs and approval.
Email invoice, manually copy numbers from pdf into some UI.
Even manual entry into GL.
Ariba promised to fix this in the dot com boom. Got bought by SAP.
A more modern company like Amazon probably sets a standard and gets 90% of invoices machine-readable.

Peoplesoft, SAP, Oracle started on-site based. You buy the software on CD's.
Workday is a cloud-based competitor to SAP etc and started cloud-based from scratch. They are ERP providers now, started with just HR, that's why they're called Workday.

Instead of buying software on CD's, you would get licensed for e.g. 5 years.

Between ERP universes exists a religious wall, e.g. you're either Christian or Muslim.
Each has their own channels of certified platinum partners.
Workday consultants come in and validate / do QA on partners (also because of shared tenancy). For SAP you would be more free in how you mess up your own system, Workday are more top-down and restrictive.

My Q: Would anybody buy an open source ERP system?
A: well, it would need to be secure and address privacy concerns.

Smaller companies will use cheaper SaaS like Xero, Intuit.
When you implementing a packaged software system there are 5 steps:
- write code.
- configure the system.
- (forgot the other steps but you get the point)
When implementing Workday, you are not allowed to upload custom code.

Small partners will only do 1 religion.
Pwc, Deloitte, will have be agnostic, have one practice for each.

Bespoke integrations is when you link your Workday instance with your other software (e.g. your custom web shop or inventory admin system).
Workday will integrate with ADP payroll system. https://www.adp.com/
But not to their major competitors!
To build these custom integrations you would need to be a Workday partner first.

informatica built a data warehouse solution, access to 3 ERP vendors. Built solution on top of it.
https://www.informatica.com/nl/about-us/webinars/reg/accelerating-smart-analytics-for-sap-integrating-sap-and-google-cloud_2830587.html

Automation software.

Standards for insurance claim information exist, but nobody uses them.
Idea for business model:
Use existing open source software, use it hosted as enterprise offering.
I should look at disciplines than just software development
E.g. MSc Accounting and Control https://vuweb.vu.nl/en/education/master/accounting-and-control
I should also talk to more bookkeepers that use smaller systems.
