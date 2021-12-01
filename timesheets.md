# Federated Timesheets

NGI Assure proposal, 1 Dec 2021

## Data to fill in on https://nlnet.nl/propose/
### Basics
* User Operated Internet Fund
* Contact information: Bänz Schenk et al.
* Project name: Federated Timesheets
* Website / wiki: https://gitter.im/federatedbookkeeping/timesheets
### Abstract: Can you explain the whole project and its expected outcome(s) (max 1200 chars)
This project is quite unique in that it brings together developers from 5 enthusiastic projects:
WikiSuite, m-ld.io, AgendaUren, Muze, and Ponder Source. This collaboration between multiple sovereign teams
is a deliberate part of this research experiment, studying how federated machine-readable data can work
between independent software projects on the user-operated internet.

The topic we chose is timesheet data. Each project has a timesheet system to track billable hours.
Workers often spend time manually filling in this data multiple times.

Instead, a worker's time tracker app (locally or on a self-hosted server) could expose machine-readable
timesheet data through a query endpoint (reader pull) or through a webhook (writer push).

Timesheet data is relatively simple in terms of data format, data replication only flows in one direction,
and there are not too many identities involved in the authentication / authorization of the data source connections.

This simplicity makes the "Federated Timesheets" project an ideal case study for Federated Bookkeeping in general.
We want to show case how our vision of Federated Bookkeeping can make internet users "connected but sovereign".

### Have you been involved with projects or organisations relevant to this project before? And if so, can you tell us a bit about your contributions? (max 10000 characters)
#### Team:

* Bänz Schenk (Switzerland) is a senior php developer at Ponder Source, focused on FOSS development
* George Svarovsky (UK) is an expert in data management, shared data types and linked data, and the lead developer of m-ld, for which he received NGI Assure funding
* Victor Emanouilov (Bulgaria) is a senior developer of WikiSuite, and most involved in WikiSuite's data federation roadmap
* Andrej Bagoutdinov (Germany) is a volunteer researcher at Ponder Source
* Yvo Brevoort (Netherlands) is a senior php developer and visionary at Muze, and has worked on NGI-funded projects like Solid-Nextcloud, Solid-Migrator, and ScienceMesh-Nextcloud
* Lambert Beekhuis (Netherlands) is the founder and developer of "AgendaUren", a hosted timekeeping application that integrates with Google Calendar

#### Advisors:
* Marc Laporte (Canada) is the long-term visionary behind "WikiSuite"
* Michiel de Jong (Netherlands) is the founder of "Ponder Source" and sparked the "Federated Bookkeeping" movement


### Explain what the requested budget will be used for?
#### 3 Additional Publishers (5kEUR  each):
We already have 2 publishers of Federated Timesheet data working ([uren.muze.nl](https://uren.muze.nl) and [AgendaUren](https://agenda-uren.nl)).
Both are (still) closed-source and this development was financed by Ponder Source and Muze.
We aim to add 3 more:

##### Add an API to [Nextcloud/TimeTracker](https://apps.nextcloud.com/apps/timetracker) (Bänz Schenk)
Nextcloud's open source TimeTracker app has a csv/json export function, but it doesn't have a query API where the user can give out an API token for access to the hours worked on one specific project. This is what we will add, and we will send a pull request to the maintainer of this Nextcloud app.

##### Add an API to [WikiSuite](https://wikisuite.org/) (Victor Emanouilov)
WikiSuite is a widely used open source web server stack, and a lot of timesheet data is stored in Tiki Trackers on WikiSuite installations. As part of the core WikiSuite team, Victor will add an API that allows reading out this data as machine-readable JSON, as a new feature of WikiSuite. The code developed for this feature will be merged into the main open source and freely licensed WikiSuite code repository. 

##### Develop a simple example time tracker app using [m-ld](https://m-ld.org/), which can push its data to a configurable webhook (George Svarovsky)
To demonstrate how m-ld could be used, George will create a simple open source and freely licensed time tracker demo app, and include a feature that allows the user to push out all change events to a remote webhook.

#### 1 Superset spec (3kEUR):
* Aggregate the 5 publisher formats into one superset spec (Andrej Bagoutdinov)
* Submit this standard to the IETF as an Internet Draft
* Help the 3 subscribers understand how to consume data from the 5 publishers.

#### 3 Subscribers (5kEUR each):
##### Newly developed Nextcloud invoice generator that can read from 5 data source types (Bänz Schenk)
Integrating with the Nextcloud app that Michiel de Jong is developing for the "Peppol for the Masses" grant, Bänz will develop a simple invoice generator in PHP, that can compose invoices aggregating data about billable hours, which it receives from any of the 5 data source types. The code for this feature will be open source and freely licensed.

#### Make the app based on m-ld read from the other 4 data source types (George Svarovsky)

Apart from being able to subscribe to a data source from another instance of the same app, George's simple time tracker app will also be able to subscribe to timesheet data from any of the other 4 data source types. The code for this feature will be open source and freely licensed.

#### Make WikiSuite's [Tiki Trackers](https://doc.tiki.org/Trackers) read from the other 4 data source types (Victor Emanouilov)

Apart from being able to subscribe to a data source from another WikiSuite instance, Victor will also enable WikiSuite to subscribe to timesheet data from any of the other 4 data source types. The code for this feature will be open source and freely licensed, and merged into the main WikiSuite code repository.

#### Overhead (remaining 7kEUR):
* Problem ownership, project management (Andrej Bagoutdinov)
* Documentation, promotion, user support (Andrej Bagoutdinov)
* Travel, hosting, other expenses

#### Other (10kEUR):
Apart from these milestones, which are the ones we agreed on with the team so far,
we would like to discuss some options for additional work with you, for the last 20% of the budget. Some options:

##### Spreadsheet plugins
Since many people keep their time tracking data in a spreadsheet, we could see if we can develop open source
plugins for LibreOffice Calc and MicroSoft Excel.

##### Open Source Time Trackers
We want to prepare pull requests that add either a query endpoint or a webhook client into existing
popular open source time tracking tools like Timetagger, Kimai, Pendulums, Titra, Cattr, etc
(see https://medevel.com/20-os-time-tracker-solutions-boost-productivity/).

##### Open Source API Improvements on uren.muze.nl and agenda-uren.nl
Another option would be to open source uren.muze.nl and/or (part of) agenda-uren.nl,
and work on improvements on the timesheet publisher APIs which we already developed using our own time and funds.


### Compare your own project with existing or historical efforts. (max 5000 characters)
We could not find much existing work specifically on federated timesheets.
We found one description of a project plan similar to ours, "P2P Time Ledger" (http://confocal-manawatu.pbworks.com/w/page/140705757/P2P%20Time%20Ledger), and we had a video call with the person behind it, Dmitry Solokov, but he confirmed that this project was never executed yet.

So as far as we know this is the first serious attempt to solve the problem
of manual timesheet data re-entry across multiple disconnected data storage systems. There is quite some prior art though, in spreadsheet technology and in federated data architectures with open protocols.

In spreadsheet technology there, for instance, is the concept of a "data source", which comes close to the machine-readable query endpoints we will be building, and especially George Svarovsky brings a lot of knowledge about this to the team.

Federated Data Architectures in general is a small but interesting field of technology - examples are the fediverse (Mastodon, ActivityPub, ...), its predecessor "Federated Social Web", the Indie Web (which is basically a successor of the blogosphere), Open Cloud Mesh (a standard for sharing documents between personal cloud servers), Linked Data / Solid, and PDS Interop, and especially Yvo Brevoort and Michiel de Jong have been involved in all of these communities in some way or another over the years.

Learning from past projects trying to reconcile different data formats and API interfaces from independent and unrelated code bases, the approach we will take in this project is the "superset spec" approach. This means that data subscribers are required to support more than one data publisher behavior. The data publisher can publish the data in a way that is closest to its own software architecture.

### What are significant technical challenges you expect to solve during the project, if any? (max. 8000 characters)

We will have to overcome differences in the data models. Since the data is relatively simple, we expect this to be doable.

We will implement both the "push" and the "pull" setup, since some time tracker systems are server-hosted, and others are client-side on the user's device.
In each interaction, at least one of the two systems involved (data publisher and data subscriber) needs to be addressable via https. We think the plan we have for this will work.

For authentication and authorization, we need to consider various options. We think https + http basic auth will be enough to guarantee optimal security.

We should not fall for the classic "one universal standard that covers everyone's use cases" pitfall (see https://xkcd.com/927/).

Regarding integration with existing spreadsheet software like LibreOffice Calc and MicroSoft Excel, we don't know exactly how their plugin
sandboxing works, so this might prove impossible.

Regarding contributing to existing open source time trackers, we don't know what each project's policy is for accepting external contributions,
so we could contact multiple projects and ask them, and then continue with the ones that respond positively.

### Describe the ecosystem of the project, and how you will engage with relevant actors and promote the outcomes? (max. 8000 characters)

The ecosystem of this projects expands at two levels. At the technological level, there is the Federated Bookkeeping community (https://federatedbookkeeping.org) which has only just started to grow this year, and we see this project as a pilot for years of research and development to come. If we can federate timesheet data, then we can also federate shopping cart data, inventory data, production scheduling data, and any other kind of business and project planning data.

We already received NGI Assure funding for two projects in Federated Bookkeeping: "Peppol for the Masses" (NGI Assure grant to Michiel de Jong, ongoing) and "Collaborative Invoice Composition" (one of two use-cases of NGI Assure grant to George Svarovsky). We hold a community call every Thursday morning, with usually about 6 participants, and there are 30 community members in our Gitter channel. This third grant would give us a great demo to show when pitching the vision of Federated Bookkeeping to innovation departments of big corporations, for which we already made some first connections.

At the end-user level of user-operated internet, we would benefit from Federated Timesheets in the way our open source projects collaborate.

In fact, Federated Timesheets are already in use between Muze (data publisher) and Ponder Source (data subscriber), and between AgendaUren (data publisher) and Ponder Source (data subscriber).

In the short term, the main impact would be for projects and organizations that use WikiSuite Tiki Trackers for their timesheets. There, contributors would benefit from entering timesheet data only into their own self-hosted WikiSuite instance, instead of having to take extra steps to also manually upload this same data to the project's or client's WikiSuite instance.

Also, depending on which spreadsheet plugins and open source time tracker integrations we would decide to build as part of the 'Other' milestone,
our work would help the users of those software tools to join the user-operated internet of federated timesheets using their own favorite tool
which they are already using.

In the longer term, once this federated network of timesheet servers exists, with five different compatible implementations of a well-documented superset standard, more open source  and SmallTech timesheet apps will join the federation, and the standard will grow in use, until also closed-source and BigTech will adopt this standard, in the same way they already adopt standards like VCard or iCalendar.