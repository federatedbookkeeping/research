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
Explored various topics and potential entry points, including trying to build a pilot for a big company. Then identified a painpoint this friend had in their own small company: they have 20 suppliers, and each of them send a pdf invoice which is an annoying chore to import into their bookkeeping system. Would be great if the bookkeeping system could do an API integration with those suppliers.

LedgerLoops is nice in theory but in practice it's unlikely that a loop would be found since for individual humans money often just flows from salary to shop, and then only loop back to salary via long routes and/or big enterprise bank accounts.

If a company offers a money-related platform it's often not so useful to federate.

There is a risk that I think too much about a single small product and lose sight of the bigger vision and its potential. But supplier invoice -> consumer bookkeeping software integration is on-topic enough, I think.

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