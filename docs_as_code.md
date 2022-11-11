# Docs as Code :notebook:

Author: Tobias\
Created: Nov 11, 2022

Documentation as Code (Docs as Code) refers to the idea of creating and maintaining documentation the same way as code. This might sound like something only useful for software companies, and it is true that especially big tech companies started to embrace that idea. However, if one looks closely, it is not limited to software documentation alone but can be applied to technical documentation in general.

Let's quickly go over how this idea came about. One part of creating a product, whether it is a program or something else, is to document it. It's the first place users will search for help, and being able to quickly access a complete and up-to-date documentation is key for most users.

> :point_up:
> And before you start arguing that nowadays everyone just googles the answer instead of picking up a manual. Well, the stuff google points to is by definition the documentation of the product. And we better make sure that for our product it is the one we intend it to be and not some shady, probably outdated online forum. 

However, more and more products we use are not but receive updates or redesigns. The best example for that is my baking oven that prompted me for a firmware update the other day. Therefore, the job of a technical writer goes way beyond creating documentation from scratch. Nowadays, maintaining and adding new content is probably the bigger part. This is especially true for modern SaaS (Software as a Service) products that get new updates daily. The solution in a lot of software projects is to document their API directly in the code and auto-generate the resulting HTML pages.

“Docs as Code” goes a step further. Instead of only auto-generating the API part, it proposes two treat the documentation the same way as code. Meaning to use the same tools, processes, and infrastructure. The reason for that is simple. All challenges modern documentation needs to face, apply for modern software development in the same way. Whether it is versioning, ensuring stability, short release cycles or developed by a large group of people simultaneously.  So instead of reinventing the wheel, documentation can benefit from the existing solutions.

So, what does that mean in practice? Documentation should …

1. … be written in plain text with special symbols to structure and format the result.
2. … use distributed version control (e.g., git) to keep track and manage changes in their code.
3. … use issue tracking to plan and record their tasks.
4. … be integrated into the software team's and planing.
5. … implement tests for coverage, stability, wording, spelling and other rules.
6. … use code reviews to give and receive feedback for changes quickly.
7. … test, integrate its changes automatically (continuous integration).
8. … be automatically deployed (continuous delivery).

As a non-programmer, this list can be pretty intimating. It also raises the question whether it is expected that every contributor will become a software developer? But rest assured if done properly we think there are no prerequisites for being able to contribute.

> :heart_eyes:
> Contributing to documentation should be as easy as writing an email.

What cannot be denied is that technical writers and developers must work together to benefit from this idea. This includes developers to learn how to include documentation in their planing and how to write parts of it themselves. It also means technical writer need to learn how to use the tools and mechanisms mentioned above, but also participate in the overall planing process.


The benefit of “Docs as Code” do justify this more than enough. To mention a few:

* Every change can be reviewed, discussed and shared immediately through a merge request. This not only prevents email with different version, but also reduces the time to delivery.
* Everyone can contribute to the documentation in their own way. For programmers, no context switches are necessary to change the documentation. For outsiders, it is easy to change or point out a small section or spelling mistake. And technical writers have imitated feedback on how their changes look like.
* Thanks to the CI/CD processes, a new version will be released either automatically or by the click of a button. 
* Changes in the design are adapted automatically because Markup languages separate design and content.
* The documentation is no longer a 3rd wheel in the process, but rather part of the planing and teams. Changes can be reviewed by the technical writing team before they make it into the product.