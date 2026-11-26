import Layout from "@/components/layout/Layout";

const Privacy = () => (
  <Layout>
    <section className="bg-gradient-hero py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-orange">
            ProjectConsultantsUSA – Expert CRM Implementation
          </p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Anti-Spam Policy
          </h1>
          <p className="mt-4 text-xl font-semibold text-brand-orange">
            Zero Tolerance and Strict Compliance
          </p>
          <p className="mt-4 text-gray-300">
            Website:{" "}
            <a
              href="https://projectconsultantsusa.com/"
              className="underline underline-offset-4 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              projectconsultantsusa.com
            </a>
          </p>
        </div>
      </div>
    </section>

    <article className="container mx-auto max-w-4xl space-y-10 px-4 py-12 md:py-16">
      <section>
        <h2 className="mb-3 text-2xl font-bold text-brand-navy">1. Policy Overview</h2>
        <p className="text-muted-foreground">
          Project Consultants USA is committed to protecting its online identity and
          maintaining responsible communication practices. We strictly oppose spam,
          unsolicited promotions, and unauthorized advertising involving our website
          or business name.
        </p>
        <p className="mt-4 text-muted-foreground">
          No individual, company, marketing organization, affiliate, or third-party
          representative is permitted to distribute promotional material or advertise
          our website through unsolicited communication without prior written approval.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-brand-navy">
          2. Prohibited Communication and Marketing Practices
        </h2>
        <p className="mb-4 text-muted-foreground">
          The following activities are not permitted under this policy:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>
            Sending unsolicited emails that include links to, promote, or reference
            projectconsultantsusa.com.
          </li>
          <li>
            Distributing advertisements through unwanted SMS, WhatsApp messages, social
            networking platforms, or other electronic channels.
          </li>
          <li>
            Utilizing purchased, scraped, harvested, or improperly obtained email
            addresses and contact databases for promotional campaigns.
          </li>
          <li>
            Using bulk messaging applications, automated scripts, or bots to circulate
            unauthorized advertisements.
          </li>
          <li>
            Falsifying sender information, impersonating our company, or making
            misleading claims about an official relationship with Project Consultants
            USA.
          </li>
          <li>
            Outsourcing or arranging promotional campaigns through third parties that
            involve unsolicited communications about our website.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-brand-navy">
          3. No Permission for Unsolicited Promotion
        </h2>
        <p className="text-muted-foreground">
          Project Consultants USA does not authorize unsolicited advertising or
          promotional campaigns conducted independently by external individuals or
          organizations.
        </p>
        <p className="mt-4 text-muted-foreground">
          Any party that uses our website, business name, or related information in
          unauthorized marketing activities shall be responsible for its own conduct
          and any consequences arising under applicable laws.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-brand-navy">
          4. Violation Response and Legal Action
        </h2>
        <p className="mb-4 text-muted-foreground">
          We reserve the right to investigate suspected violations and take appropriate
          action against parties responsible for unauthorized promotional activities.
        </p>
        <p className="mb-4 text-muted-foreground">
          Depending on the nature and severity of the violation, available actions may
          include:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Taking civil or criminal legal action where applicable.</li>
          <li>
            Submitting reports to appropriate law enforcement agencies and regulatory
            authorities.
          </li>
          <li>
            Seeking recovery of financial losses, reputational damages, and other
            legally recognized claims.
          </li>
          <li>
            Discontinuing business relationships, affiliate partnerships, or
            contractual arrangements with parties involved.
          </li>
          <li>
            Reporting abusive conduct to email service providers, internet service
            providers, website hosting companies, and domain registration authorities.
          </li>
        </ul>
        <p className="mt-4 text-muted-foreground">
          Project Consultants USA will take violations seriously and pursue available
          remedies in accordance with applicable laws.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-brand-navy">
          5. Procedure for Reporting Spam
        </h2>
        <p className="text-muted-foreground">
          If you encounter an unsolicited message that promotes, mentions, or contains
          a link to projectconsultantsusa.com, please notify us through the official
          communication channels provided on our website.
        </p>
        <p className="mt-4 text-muted-foreground">
          For effective review, we recommend including the original message, sender
          details, complete email headers, screenshots, and any additional information
          that may assist in identifying the source.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-brand-navy">6. Our Commitment</h2>
        <p className="text-muted-foreground">
          Project Consultants USA remains committed to ethical business practices,
          responsible digital communication, and the prevention of unauthorized
          advertising.
        </p>
        <p className="mt-4 text-muted-foreground">
          We do not tolerate the misuse of our website or business identity for spam
          distribution. Appropriate measures may be taken against individuals or
          organizations found engaging in prohibited activities, subject to applicable
          legal requirements.
        </p>
      </section>

      <section className="rounded-lg bg-muted p-6 text-center md:p-8">
        <p className="text-xl font-bold text-brand-orange">
          ZERO TOLERANCE FOR SPAM. NO UNAUTHORIZED PROMOTIONS.
        </p>
        <p className="mt-4 font-semibold text-brand-navy">
          ProjectConsultantsUSA – Expert CRM Implementation
        </p>
        <p className="mt-2 text-muted-foreground">
          Professional CRM implementation and sales process optimization services in
          Phoenix, Arizona.
        </p>
      </section>
    </article>
  </Layout>
);

export default Privacy;
