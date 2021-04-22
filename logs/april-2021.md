# 1

## Problem Worth Solving
Very broadly: trade coordination is not always efficient. Specifically, candidate problems to solve:
-> less automation
  -> extra manual work to achieve data sharing
    -> cost
  -> systemic delay in supply
    -> product quality
-> less data
  -> less trust
    -> higher interest payments on loans
      -> cost
  -> less business insight
    -> product quality
-> incorrect data
  -> incorrect business insight
    -> erratic delay in supply
      -> product quality

Read part 1 of "Running Lean".

# 2

Surveyed software and api's.

## Lunch walk with friend 1.
See ../interviews/startup-cto.md.

### exploration of existing invoicing-accounting integrations
I set up free trials with Invoiced and QuickBooks. I can now connect them together. But this is for me as a single user. 

There is also a [QuickBooks app store](https://quickbooks.intuit.com/app/apps/home/) so I can for instance [import my Amazon invoices](https://quickbooks.intuit.com/app/apps/appdetails/AmazonBusinessPurchases/en-us?cid=ipp_amazonbusiness_hp_Sep2020_herobanner_co-us).

Ah, found this through the QuickBooks app store: https://synderapp.com/

And Greenback: https://www.greenback.com/in/delta

I was able to set up an integration from PayPal to Greenback to QuickBooks.

So it looks like Greenback and Synder are offering building blocks of federated bookkeeping.

WaveApps.com integrates with PayPal, Shoeboxed, Etsy.

Multichannel selling tools https://www.goodfirms.co/resources/shopify-integrations

These are all one-to-one API integrations, couldn't we invent something more generic?
Maybe a completely standardized API?
Maybe multi-integration via Solid is not such a bad idea after all...

Plan for Monday: create a slide deck about Federate Bookkeeping (as a network data architecture, so compared to web and blockchain), to use for my Surf Research Week presentation. Related to https://michielbdejong.com/blog/25.html and CRDTs, but with a focus not only on authority and data copies / syncing, but also on access control.

# 5

Discovered https://nextcloud.com/blog/cospend-another-bit-in-the-nextcloud-ecosystem/ and especially this quote:

> I’d like to learn more about how federation between Nextcloud instances work to make it happen in Cospend. It would be great to be able to share a project across NC instances.

Will try out Cospend. Reached out to https://github.com/eneiluj to find out how we can maybe work together to build a federated Cospend.

So then we would have two prototypes with early adopters:
* Federated Cospend, hopefully adopted by current Cospend users
* Billing API integrations in a bookkeeping system

For the billing API integrations I could target an open source bookkeeping system, or maybe develop one or more [QuickBooks apps](https://quickbooks.intuit.com/app/apps/home/). But I'm not sure what we would be testing if we simply create a product that is equivalent to the existing Synder and Greenback apps there.

Now first need to create our slide deck for Surf Research Week.

# 6

Like every Tuesday, spent today at the LCU Accelerator. Super interesting session about Radically Open Security and their business model in the morning, plus a session about goal setting and focus vs daydreaming in the afternoon that was also very refreshing.

Have finished part 1 of "Running Lean" and haven't started "The Mom Test" yet, but do think that early traction is a good measure of viability. We could build a connection between GitHub Billing API and Jortt Bookkeeping Software. We should find out if Jortt would be willing to pay us for that.

# 7

Meeting today about Nextcloud-CS3 project which is maybe slightly off-topic but could act as a flywheel to get some paid work flowing. This afternoon is LCU Accelerator again, with a Hot Seat session.

# 8 april

Reading "The Mom Test" before approaching potential paying customers.
Other than just generic software developing consulting where we hope to get
some generic R&D about federation or about bookkeeping into the work package,
we really need to sell something.

I have a hard time believing bookkeeping platforms (QuickBooks, Jortt, etc) will pay us to put apps into their app stores. Even if those may be the most promising accelerators on the tech side. We may have to look for how we can sell optimized open source components to companies that run SAP or Oracle.

Still thinking about the FFI construct from https://nlnet.nl/press/20190613-ROS-donation.html. 

Questions for bookkeeping software as well as for big corporations:
* what kinds of software development are you currently paying for (related to bookkeeping)?
* do you want it in-house or out-sourced?
* what is the volume of your dev outsourcing?
* would you mind if that would be open source?
* are you actually looking for any bookkeeping building blocks?
* what problem(s) could bookkeeping building blocks solve for you?
* how are you currently manage those problems? Talk me through it
* What else have you tried (have you even bothered looking for a solution?)

I'm looking for any open source bookkeeping software development work -
by virtue of making building blocks open source, we would be working towards
federation.

That reminds me, i should really try out existing open source software!
Especially Cospend (meeting with them today)
As well as the free trials i signed up for (and don't forget to cancel them):
- QuickBooks
- FreshBooks
- Bunni
- Jortt
- Greenback
- Synderapp

Ideas about the Vitalek factor (question: "How can we make people as fascinated by Federated Bookkeeping as about Ethereum?"):
Fascination with Federated Bookkeeping is mysteriously low. I'm comparing it to the fascination people had with Personal Data Store, ToS review, and payment projects I worked on in the past, and I'm trying to find out what the difference is. I always assumed it was a combination of "your approach will never work" with "I prefer other topics" or "I prefer my own approach to that topic". But I don't think it's that. All three could equally well apply to Unhosted. I think what's missing is what we might call "dangling the car keys". You don't just show your car, you offer the other person a test drive. For techies that often means, present it as an app platform where they can build their own stall; promise they can have fun building something on top of your thing, and promise they will be able to plant a flag.

Had a good conversation with Julien from Cospend and with Ian from Understory.
Looking into disco.coop - post-growth organizations that recognize care as work.
Very much related to Federated Bookkeeping as a means to degrowth!

# 9

Downloaded and tried out GnuCash
Thinking about the FFI construction for Ponder Source
Finding a business address for Ponder Source

# 11

Googled KLM Suppliers and found out there's a whole bunch of information
for people who want to sell to KLM. Including that they use Tradeshift
for e-invoicing.

https://tradeshift.com/

SAP Ariba

Tradeshift has an app store https://go.tradeshift.com/#/Tradeshift.AppStore/apps

Kissflow https://kissflow.com/procurement/pricing/

Looking into open source e-procurement now https://timreview.ca/article/129

Should find out how existing Nextcloud customers do their bookkeeping.

# 12
Worked on how Ponder Source (an FFI specialised in Federated Bookkeeping) can start scaling.

# 13
Pitch:
Bookkeeping systems are a big industry (tens of billions). Mostly closed source.
E-invoicing is often just pdf over email, not connected.
We will provide open source  building blocks that connect existing bookkeeping systems.
Reducing manual work. Improving real-time insight and b2b credit.
FFI donating to a Federated Bookkeeping fund
Now talking to first customer and first employee

# 14

Successful sales meeting with Ponder Source launching customer, moving forward with hiring.

# 15

Talk about Federated Bookkeeping at Surf Research Week.

Brainstorm for panel discussion:

- the institution holding the data to start with (for instance CBS) is assumed to have full consent from
the data subjects.
- the general public is assumed to not have any consent.
- somewhere inbetween are scientists that analyze the aggregated data to gain new insights.
- downsides when data about you leaks:
  1. denial of access
  2. people you meet confront you
  3. you get talked about negatively (sometimes prefer anonymity over attribution!)
  4. reused without payment (company secrets, inventions)
- getting paid for your data is weird if it's not something you built (case 4).
- it's unethical if it leads to 1 & 2, and at least questionable for 3.
- bringing the algorithm to the data should not be necessary if parties trust each other. I trust the first institution already, then why not the second? (plausible for concern 4).

Found out that [Duopact](https://www.duopact.nl/nl/yuki-koppelingen/uitleg/) develop most of the [connectors for Yuki](https://www.yuki.nl/nl/koppelingen/). Interestingly, they bill the bookkeeper company:

* end-user pays bookkeeper 
* bookkeeper pays Yuki
* bookkeeper pays Duopact

Should find out how much money is involved in this, and also whether Duopact run a hosted api-to-api translator (I think they do, since Yuki has an API which I think is passive, and invoicing suppliers have a billing API which probably supports pro-active REST requests but not webhooks. Maybe ifttt can solve this, too?

Webhooks are important. Maybe a generic trigger / pubsub platform like ifttt is needed. Or maybe you could even set it up with a messaging platform like Scuttlebutt? This is when both systems are passive. Maybe Understory Gnomes would work well, too.

Nextcloud would also work. Or just 'deploy to heroku'. Any platform that can run simple generic jobs would do. We should support a list of them.

There will also be cases where this can be included in the bookkeeping system, of course, but even if they don't have an app store then we don't want to rely on their release cycle, so a good first step would probably be to use (one or more) generic little job daemon(s) for it.

We should also look for some generic paid consulting work around open source bookkeeping systems, that will help us get into the game.

# 19

Interviewed two candidates, realised that maybe most our development work will be in Java (see ./software.md).
Talked with Melanie Rieback from ROS about FFI construct. Turns out FFI is not a legal entity type, but a tax cut for a B.V. that can apply if you have more volunteers than employees (ROS has some volunteers and mainly lots of freelancers). We will probably do a B.V. for Ponder Source (with statutes, to be determined), or a B.V. owned by a Stichting.

# 20

Presentation from HeadCandy at Startup Accelerator

Ponder Source Statutes brainstorm:
* No stack, upstream everything
* No IP
* Teach how to fish
* Vision: Bookkeeping makes the world go round
* Approach: Specialists in Federated Bookkeeping
* Activity: We build open source connectors for bookkeeping systems
"We help your company's bookkeeping system to become more connected, using open source connectors. The profit we make on consultancy work is reinvested towards our vision of a global open network of bookkeeping systems."

Presentation about branding. This is useful.

Maybe through multi-hop transparency we can promise to enable fair trade through federated bookkeeping
Contradiction that makes the Ponder Source brand stand out: "Connected but Sovereign"

Apple product is creative, high-end.
Associating yourself with that makes you as a person feel creative and valuable.

Maybe Ponder Source association should be fair trade. It should make people feel connected.

Ponder Source slogan: "You'll be in touch!"

It's fun to buy at CoolBlue.

Brand personality:
- Kolibri: swift
- ant: collaborative
- squirrel: hyperactive, saving for winter
- (fortress)

Brand associations: why is our brand more like X than like Y?
Ponder Source is:
* Innovative: Tesla, not Volvo
* Fun: Tony's Chocolonely, not Verkade
* Decentralized: Nextcloud, not GAFA
* Ethical: Lush, not Shell
* Off-beat: Fairphone, not Apple

Maybe to reach an interesting demographic we should be a bookkeeping service brand rather than a bookkeeping software brand?

# 21

StoreCove is a Dutch company, a bit like TradeShift it seems.
They are an access point to the global e-invoicing network called Peppol.
Should go through the whole list of https://peppol.eu/who-is-who/peppol-certified-aps/ and find out who's who.

# 22
Odoo (CE), Dolibarr, and ERPNext are the three largest open source ERP systems.
Developed in PHP (Dolibarr) / Python (the other two). The Java-based ones (Compiere family) are less popular now than they were 10 years ago.
We should talk to partners that offer hosting for one of these systems, and see if there is a business model there.

Should also focus research on e-procurement now, and see how that could plug into the three big OS ERP systems. That could be a focus for an NGI Assure grant proposal.

# Other related software
* [jPOS](http://jpos.org/)
  - java
  - gateway for https://en.wikipedia.org/wiki/ISO_8583
  - not a bookkeeping or ERP system

  # Kissflow
  https://kissflow.com/rad/low-code/
  Interestingly, calls itself a cheaper and more versatile alternative to Tradeshift,
  and also an automation platform (like the ones we're exploring in https://github.com/federatedbookkeeping/research/issues/2).