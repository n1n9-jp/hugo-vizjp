+++
author = "Yuichi Yazaki"
title = "One Quality Issue, One Block: The GM and WellStar LEGO Board"
slug = "gm-lego-quality-board"
date = "2026-11-01"
description = "A board built by GM and WellStar that turns each quality issue into one LEGO block: color shows the part of the vehicle, size shows severity, and position on the board shows the stage from root cause to solution."
categories = [
    "consume"
]
tags = [
    "data physicalization"
]
image = "images/board-dataphys.jpg"
+++

General Motors' (GM) LEGO board turns each quality issue into one LEGO block. The color of the block shows the part of the vehicle, its size shows the severity of the problem, and its position on the board shows the stage the issue has reached, from root cause to solution to outcome. Each block carries an identification number and a date of discovery. GM and WellStar Health System, a hospital group in Georgia, built it together and announced it on March 26, 2012. The two companies call the method "3-D Visualization."

The main source is GM's press release (March 26, 2012). The original page is now gone, so I read the text from the full reprint in the Naylor Network, an industry association newsletter. ThoughtWorks' P2 Magazine (2013) describes the same board in a way that differs from the release, so I treat the release's account and P2's account in separate sections. I could not check the text of the Fast Company article that the catalog dataphys.org cites as its source.

<!--more-->

## March 2012: a car maker and a hospital announce the same tool

According to the release, the collaboration between the two organizations began in a hospital emergency department. GM's crossover vehicle team, as part of leadership development, invited WellStar to talk about triage in the emergency department. GM then donated a mock assembly line to WellStar's training center so that doctors and nurses could learn lean methods.

WellStar is a nonprofit health system of five hospitals, headquartered in Marietta, Georgia. The board came out of a brainstorm between GM chief engineer Tim Herrick and Dennis Pastor, who leads process improvement at WellStar. Pastor used to work at GM, where he was a production superintendent for assembly at the Lordstown plant in Ohio. The release says the prototype took one week.

![A man in glasses places a block on a black LEGO baseplate set in a wooden frame. In the foreground, yellow and orange blocks with white labels are stacked in many layers.](images/board-dataphys.jpg)

Probably a GM/WellStar press photo (photographer unknown). From: List of Physical Visualizations (dataphys.org)

The release lists these uses.

| Organization | Uses (as described in the release) |
|---|---|
| GM | Tracking problems that lead to warranty repairs. Also being rolled out worldwide for tracking design changes and budgets. A digital version has also been developed |
| WellStar | On-time starts at clinics, the foundation's five-year fundraising plan, healthcare quality metrics, and improving the process for enrolling physicians with insurers (expected to save $1 million a year from this one board) |

The release says the effect on the GM side is that the time to implement changes that prevent future warranty repairs "could" be cut by 33%. The original wording is "could reduce," so this is an expectation, not a measurement.

## One issue, one block, with color, size, and position assigned

The release explains how the board works in a single paragraph.

> "3-D Visualization builds on GM's Problem Resolution Tracking System. If a transmission case breaks on a durability test vehicle, a problem resolution report documents the problem, and its corresponding LEGO block goes on a LEGO board. The block color identifies the area on the vehicle and the block size denotes severity; the bigger the block, the bigger the problem. Each block has an identification number and date of discovery, and the board shows its progress from root cause to solution to outcome. 3-D Visualization is applicable to any process that has volume and aging."

The foundation is GM's problem resolution tracking system. If the transmission case of a durability test vehicle breaks, one report is written and one corresponding block is placed on the board. Color is the part of the vehicle and size is severity: the bigger the block, the bigger the problem. Each block carries an identification number and a date of discovery, and the board shows progress from cause to solution to outcome. The paragraph closes by saying the method applies to any process that has volume and aging.

| Data | How the board shows it | Data type |
|---|---|---|
| One issue (one report) | One LEGO block | Unit (one issue = one block) |
| Part of the vehicle where the problem occurred | Block color | Categorical |
| Severity of the problem | Block size | Ordinal |
| Identity of the problem | Identification number on the block | Nominal (text) |
| Date of discovery | Date on the block | Time (text) |
| Stage: cause → solution → outcome | Position on the board | Ordinal (process stage) |
| Resolved | Block removed from the board | State (based on the remark in the next section) |

Some things are not stated in the public sources. I could not find the table mapping colors to parts, the number of size levels, the dimensions of the board, or the total number of blocks.

![On a wooden-framed board, yellow, orange, blue, and green blocks with white labels stand in columns of different heights. A man in the background handles a block.](images/board-torquenews.jpg)

Probably a GM/WellStar press photo (photographer unknown). From: Torque News

In the press photos, you can see white labels on the blocks with printed numbers. This can be read as the identification numbers the release mentions. Many of the blocks are stacked vertically into columns of different heights. The release does not say whether its "size" means the footprint on the plane or the height of the stack.

The volume and aging in the last sentence can be read as a hint for how to read this table. The number of blocks tells you how many problems there are. Position and date of discovery tell you which problem is at which stage and since when it has been stuck there. It is an assignment designed to show volume and stagnation on one board.

## One block on a board, not one line in a spreadsheet

Jamie Pickett, a GM senior manager in charge of the quality of current vehicles, says this in the release.

> "3-D Visualization allows us to look at issues more holistically. By visually representing a problem it is easier to see the whole scope of it and where the opportunities lie. And, unlike a line of data in a spread sheet, seeing a problem as a block on a board is a strong motivator for finding a solution to get it off the board."

In essence: it lets people see issues as a whole, makes the scope and the places to act easier to see, and, unlike a line in a spreadsheet, a block on a board is a strong motivation to solve the problem and take it off.

The comparison is with a line in a spreadsheet. Unlike a table row, a block stays on the board until it is removed. From Pickett's words, **taking the block off the board can be read as the very goal of resolution**. It can be read as an encoding that values surveying the volume and getting people to act over reading precise values.

Pastor is also reported to have told Fast Company that the process was three-dimensional while the reports were two-dimensional. However, this is secondhand, quoted by SmartData Collective from Fast Company, and I could not check the original. Nor did the board replace screens: GM also built a digital version.

The catalog's description needs a correction. dataphys.org introduces this board as "LEGOs help business executives log and explore data." But the release does not use the word "executives," and the users it names are a chief engineer and a quality manager. It is closer to the release to read it as a tool for engineering and quality teams.

## ThoughtWorks' article reads it by rows, columns, and height

The article "3D Card Walls" in ThoughtWorks' P2 Magazine Issue 4 (October 2013), by Nick Thorpe and Paige Mulholland, describes the board differently from the release.

> "On the General Motors LEGO board, each block represents a car which needed repairs under warranty. The rows represent the faulty area of the vehicle, and there is a separate section of the board for issues which have been contained or solved on the assembly line. The height of the block itself represents the severity of the problem, and the board also uses columns to denote the time it took for the fault to appear, and colours and labels to further define each block."

One block is one car that needed warranty repair. Rows are the faulty part, the height of the block is severity, and columns are the time until the fault appeared. There is a separate section for problems contained on the assembly line, and colors and labels are used to distinguish blocks further.

| Item | GM release (2012) | P2 Magazine (2013) |
|---|---|---|
| Unit of one block | One issue (one report) | One car that needed warranty repair |
| Part of the vehicle | Block color | Board rows (color is auxiliary) |
| Severity | Block size | Block height |
| Time | Date of discovery on the block | Board columns (time until the fault appeared) |
| State | Position moving from cause to solution to outcome | Separate section for contained or solved problems |

The P2 article does not give the basis for this reading. It is unclear whether it was taken from photos or from interviews. It may also be looking at a board from a different period or for a different use. It is possible that the release's "size" was actually the height of the stack, but there is no source to check this. In this article I take the release, the account of the people who built it, as the main axis, and treat P2 as one third-party reading.

## How third parties saw this board

Assessments differ depending on what they use as a clue.

- Seeing it as an extension of kanban. The P2 article opens by saying that even with card size, color, position, and shape, there are cases where a card wall cannot express all the variables. Thorpe says of the GM board, "The problem they're solving here is 'how do we decide what should we start next?'" The reading is that it is a board for deciding what to take up next.
- Moved to another setting, it did not work well. In a paper at EIAH 2015, Daniel K. Schneider of the University of Geneva writes that, inspired by the Fast Company article, he built a structured LEGO board showing the progress and seriousness of doctoral theses. The result: "Cette première variante n'a eu que peu de succès puisque, par définition, le LEGO appelle à « jouer »." In other words, the first version had little success because LEGO invites people to play.
- Valuing the three-dimensionality itself. Erica Driver of SmartData Collective writes "Humans think in 3D." and extends it to making software BI three-dimensional and physical.

Automotive media treated it lightly. The Truth About Cars wrote, a little wryly, "Problem solving becomes child's play." Torque News cites being able to move it by hand as an advantage: "It can also be touched and felt and moved by hand."

## Takeaways

What you can take from this board lies less in whether you build it from physical objects than in how you decide the encoding.

First, make one issue one block. You can tell the volume just by counting, and the pile-up is visible as it is, without writing a total separately.

Second, assign process stages to position. If you divide the board into sections, you can see at which stage blocks are piling up, and together with the date of discovery you can follow how long they have been stuck.

Third, decide the exit in advance. "Remove from the board" is a design in which the end of the display coincides with the end of the work. Even on a screen dashboard, you can make a place where resolved items disappear.

Fourth, keep a legend. The color-to-part table is not public, and P2, looking from outside, wrote a different account from the release. The more a board is shared, the more its encoding conventions need to be written down and attached.

Schneider's report says that because LEGO invites play, the first version built with a fixed encoding did not go well. It can be read as an example of a fixed encoding colliding with free building. The GM board worked, it can be read, because it was built on top of an existing system, the report, and the one-issue-one-block convention was already settled on the business side.

## References

**Primary sources**

- General Motors, press release, 2012-03-26 (original URL; it now redirects to news.gm.com and the text no longer remains). http://media.gm.com/media/us/en/gm/news.detail.html/content/Pages/news/us/en/2012/Mar/0326_lego
- Full reprint of the same release: "GM, WellStar Develop LEGO-Based Visual Management Tool," Naylor Network. https://www.naylornetwork.com/naf-nwl/articles/print-v2.asp?aid=171511
- Pierre Dragicevic (information provided by Fanny Chevalier), "2012 – General Motors' 3D LEGO Visualizations," *List of Physical Visualizations* (dataphys.org). https://dataphys.org/list/general-motors-3d-lego-visualizations/
- Mark Wilson, "How GM Is Saving Cash Using Legos As A Data Viz Tool," *Fast Company / Co.Design*, 2012 (text not checked because of bot blocking). https://www.fastcompany.com/1669468/how-gm-is-saving-cash-using-legos-as-a-data-viz-tool
- The Daily Drive, "GM Plays with Legos (Video)," 2012 (not checked; the domain is gone). http://cgdailydrive.com/gm-plays-with-legos/

**Secondary sources**

- Nick Thorpe & Paige Mulholland, "3D Card Walls," *P2 Magazine* Issue 4, ThoughtWorks, 2013-10. https://thoughtworks.github.io/p2/issue04/3d-cardwall
- Daniel K. Schneider, "Visualisation de projets de thèse avec un dispositif physique et constructif," EIAH 2015. https://tecfa.unige.ch/tecfa/talks/schneide/eiah-2015/Schneider_EIAH2015-lego-final.pdf (related wiki: https://edutechwiki.unige.ch/en/Lego-compatible_thesis_project_board )
- Erica Driver, "Visualizing Data in 3D with Lego," *SmartData Collective*, 2012-05-09 (includes secondhand quotation of Pastor's remark). https://www.smartdatacollective.com/visualizing-data-3d-lego/
- Bertel Schmitt, "Latest GM Invention: Management By LEGO," *The Truth About Cars*, 2012-03-26. https://www.thetruthaboutcars.com/2012/03/latest-gm-invention-management-by-lego/
- John Goreham, "GM's adaptation of Legos could help protect your car from problems," *Torque News*, 2012-03-27. https://www.torquenews.com/1083/gms-adaptation-childs-toy-could-help-protect-your-car-problems
- Jason Siu, "General Motors Develops Lego Based Visual Management Tool," *AutoGuide*, 2012-03-26. https://www.autoguide.com/auto-news/2012/03/gm-and-wellstar-develop-lego-based-visual-management-tool.html
