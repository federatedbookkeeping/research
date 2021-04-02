# 29

I have a few websites that are relevant:
* https://federatedbookkeeping.org - a holding page that I want to expand, about Federated Bookkeeping
* https://ledgerloops.com a website I created a few years ago about LedgerLoops, a hashlock-based protocol I invented for credit networks, similar to Interledger and Bitcoin Lightning.
* https://michielbdejong.com/blog/20.html and https://michielbdejong.com/blog/21.html - blog posts I wrote about SNAP and Network Ledger Technology.
* https://groups.google.com/g/network-money a mailing list I set up about credit networks
* https://pondersource.com is the name of my company, but there is no information there 

work plan:

* personal budget with hours admin and equity trend
* participate in the LCU blockchain accelerator


# 30

First day of the LCU startup accelerator.

Me: independent developer, open source, crowdfunding / donations / grants
digital nomad, now house owner and father
worked at mozilla, ripple, sir tim berners-lee's company

## Morning session: lean startup methodology
### pitch v1
You have bookkeeping software
open source
pds enabled
now, federate!
IOUs
business reporting
live invoicing
sales tracking

### notes from session
click dummy instead of stickies-on-whiteboard concept
no-code duck-tape mvp instead of jira overview
first real revenue instead of 10Y Excel Business Plan
business plan can be faked
mom test is people around you that say they like your product but
don't put their money where their mouth is
crowdfunding is pre-sales but not as convincing as real sales
getting real data through customer interaction

Get out of the Building
Fail fast, fail cheap
Pivot or die
Customer insights versus gut feeling
Building something your customers want versus building something you want
If you're not ashamed of your MVP then you've been working on it too long

Build - Measure - Learn

list facts and assumptions using stickies
brainstorm method to test each assumption
don't work on the same assumption for more a full week!
if you're not updating your business plan each week, that's too slow

first, use an excel sheet instead of a blockchain

problem - solution fit > product - market fit > scaling

freelancer, what problems do you run into related to bookkeeping?
-> you notice when the cesspit opens! that's where you should look for a "problem worth solving"

book: running lean https://www.amazon.com/Running-Lean-Iterate-Plan-Works/dp/1449305172
book: the mom test http://momtestbook.com/

## Growth plan
Stay solo at least until I know what the plan will be.
Stay in R&D mode but apply it to both problem-solution fit as well as tech prototype


## Afternoon session: pitching
### Pitch v2
* bookkeeping software, federate!
* IOUs
* business reporting (tax, reg)
* live invoicing
* sales tracking

### Guy Kawasaki Template slides
Federated Bookkeeping
--------
Michiel de Jong


Invoices are slow
--------
Even so-called "e-Invoicing"
(sending PDF's be e-mail)
costs work on both sides.


Federate your books!
--------
Instant track-and-trace insight
as a supplier builds up your invoice
after you invoice your customers


Network Ledger Technology
--------
Currency is not the only way to coordinate trade.
Read more at https://michielbdejong.com/blog/21.html


Business Model
---------
Open protocols!
Open source reference implementation!
But with enterprise licensing.


Go-to-market plan
----------
Iterate on requirements and get pilot / alpha testers early


Competitive Analysis
----------
IOUs: splitwise, wiebetaaltwat
protocols: xbrl, sie/bas, ...
bookkeeping: SAP, GnuCash, ...

Management Team
----------
Just me so far :(
Good in R&D
Less skilled in enterprise-compliant software development

Financial Projections and Key Metrics
--------
Grow from pilot projects?
I don't know yet how fast/soon I want to grow the team.


Current Status
---------
Prototypes almost ready for demo
Now looking into problem-solution and product-market first

### know your audience
what kinds of needs exist in the audience?
assume all 4 types are present, and weave it together:
listeners:
- analyze
  - include: bullet list, numbers, statistics, explain projections and reasoning, facts
  - style: to the point, no broad terms and bla bla
- strategize
  - look at it from a helicopter
  - will check for consistency of your mission statement, etc.
  - in a job interview, they will ask "what's your vision on ..."
  - include: context, competitive landscape, your startup in a bigger field, concepts, the big idea, your vision
  - style: start with 'why'
- structure
  - get annoyed if it's not chronological
  - include: beginning / middle / end structure, start at the beginning, go step-by-step. details (could be numbers).
  - style: numbered slides, stick to your order, don't skip or jump one and go back.
  - want past, present, future, and details and draw their conclusions from that but they get distracted if it's too messy
- humanize
  - explain how it affects humans
  - explain how it affects the listener themselves
  - use a persona
  - tell an anecdote, story telling 
  - what does your product mean to an individual
  - style: audience-centered ("do you need a break? let's wait a few more minutes because someone may be stuck in traffic")

don't just pitch for investors, could also be stakeholders, people you want to work together with, prospective customers, maybe for innovation departments?

# 31

## Related search terms
Federated Enterprise Resource Planning Systems
XBRL, SIE, BAS, SAF-T, UN/CEFACT, ANSI ASC X12, EDIFACT, UNTDI
SAP / ABAP / IDoc
https://blogs.sap.com/2012/12/31/idoc-basics-for-functional-consultants/
https://www.quora.com/Which-companies-are-working-toward-disrupting-the-ERP-space-that-Oracle-and-SAP-are-in-Is-the-market-moving-toward-different-offerings-for-different-applications-Is-revolution-expected-in-this-space-Can-Web-2-0-make-Oracle-or-SAP-better

## Learn
* talk to a wholesale company
  - prepare questions for friend 2
  - friend 2
  - friend 1
* read 2 books i bought (the mom test, running lean: from plan a to plan works)
* learn about CRDT
* try out gnucash etc

# SURF presentation:
## Sharing data safely and efficiently is difficult.
## Different researchers collaborate together, but also contribute independently.

Sharing data between computer systems.
Connected but Sovereign.
Resharing, remixing
Non-disclosure
Temporary read access, right to be forgotten
Consent; read for which purpose?
Can we control read access in a network of trust? -> research question

Writing: What is the authoritative copy?
On the web, web pages link to each other as endorsement but that's no hard science.
Federated without consensus.
We need a way to connect computer systems without losing track of read and write access.
RWW never really took off, became Solid.
personal data stores: multiple apps act on the same data, user is sovereign over the data
Blockchain can be used to implement a single global consensus. share everything globally, get global consensus.
XCAT can link two blockchains together. federated multiple blockchains
second layer: peer-to-peer + go-to-ledger
crdt: convergent conversations, multi-master

There are often rules/constraints that define who can write which part of the global knowledge graph.

SNAP: each party writes their half-ledger. Checkpoints connect the two logical clocks via the wall clock, and check for balance limits.

Federated Bookkeeping:
* each system of record is fundamentally sovereign
* authority, disputes, and consensus are tracked explicitly
* no transitive read access and consent unless tracked inside the data
* share along lines of trust
* nodes have 'write' access for the raw logs of their own outgoing transactions.
* for aggregate data (including about own raw logs), every node only has 'propose' access.
