import React from "react"

const ReturnMenu = () => (
  <a className="md:hidden w-1/5 float-right" href="#toc-menu">
    Menu
  </a>
);

export default () => {
  return (
    <div className="flex w-full md:w-4/5 md:overflow-y-scroll md:overflow-hidden px-4 leading-relaxed text-lg">
      <div className="w-full md:flex-row">
        <div className="my-4">
          <span className="anchor" id="2019-changes" />         
          <p>
            <b>2019 Changes</b>
          </p>
          <p>
            • Form 1040 has been redesigned.
          </p>
          <p>
            • Form 1040-SR, a new form, is
              available for use by taxpayers age 65
              and older.
          </p>
          <p>
            • These instructions cover both
              Forms 1040 and 1040-SR.
              For details on these and other
              changes, see What’s New in these
              instructions.
          </p>
          <br/>
          <p>
            <b>Future Developments</b>
          </p>
          <p>
            See IRS.gov and IRS.gov/Forms, and for the latest information about developments related to Forms 1040 and
            1040-SR and their instructions, such as legislation enacted after they were published, go to IRS.gov/Form1040.
          </p>
          <br/>

          <p>
            <span className="anchor" id="helpful-hints" />
            <h1 className="border-b mb-1 text-2xl">
              <a>Form 1040 and 1040-SR Helpful Hints</a>
              <ReturnMenu />
            </h1>
              For 2019, you will use Form 1040 or, if you were born before January 2, 1955, you have the option to use new
              Form 1040-SR.
              You may only need to file Form 1040 or 1040-SR and none of the numbered schedules, Schedules 1 through
              3. However, if your return is more complicated (for example, you claim certain deductions or credits or owe
              additional taxes), you will need to complete one or more of the numbered schedules. Below is a general guide
              to which schedule(s) you will need to file based on your circumstances. See the instructions for the schedules
              for more information.
              If you e-file your return, you generally won't notice much of a change and the software you use will generally
              determine which schedules you need.
          </p>
          <br/>
          <p>
            <b>Schedule 1, Part I</b>
          </p>
          <p>
            Have additional income, such as business or farm income or
            loss, unemployment compensation, prize or award money, or
            gambling winnings.
          </p><br/>

          <p>
            <b>Schedule 1, Part II</b>
          </p>
          <p>
            Have any deductions to claim, such as student loan interest
            deduction, self-employment tax, or educator expenses.
          </p><br/>
          
          <p>
            <b>Schedule 2, Part I</b>
          </p>
          <p>
            Owe AMT or need to make an excess advance premium tax
            credit repayment.
          </p><br/>
          
          <p>
            <b>Schedule 2, Part II</b>
          </p>
          <p>
            Owe other taxes, such as self-employment tax, household
            employment taxes, additional tax on IRAs or other qualified
            retirement plans and tax-favored accounts.
          </p><br/>
          
          <p>
            <b>Schedule 3, Part I</b>
          </p>
          <p>
            Can claim a nonrefundable credit other than the child tax credit
            or the credit for other dependents, such as the foreign tax credit,
            education credits, or general business credit.
          </p><br/>
          
          <p>
            <b>Schedule 3, Part II</b>
          </p>
          <p>
            Can claim a refundable credit other than the earned income
            credit, American opportunity credit, or additional child tax credit,
            such as the net premium tax credit or health coverage tax credit.
            Have other payments, such as an amount paid with a request for
            an extension to file or excess social security tax withheld. 
          </p><br/>
        </div>

        <div className="my-4">
          <span id="taxpayer-advocate-service" className="anchor" />
          <h1 className="border-b mb-1 text-2xl">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>Taxpayer Advocate Service</a>
            <ReturnMenu />
          </h1>
          <p>
            <b>What is the Taxpayer Advocate Service?</b>
          </p>
          <p>
            The Taxpayer Advocate Service (TAS) is an independent organization within the Internal Revenue Service (IRS) that helps
            taxpayers and protects taxpayer rights. Our job is to ensure that every taxpayer is treated fairly and that you know and
            understand your rights under the Taxpayer Bill of Rights.
          </p><br/>

          <p>
            <b>What can the Taxpayer Advocate Service do for you?</b>
          </p>
          <p>
            We can help you resolve problems that you can’t resolve with the IRS. And our service is free. If you qualify for our assistance,
            you will be assigned to one advocate who will work with you throughout the process and will do everything possible to resolve
            your issue.<br/>
            TAS can help you if:<br/>
            • Your problem is causing financial difficulty for you, your family, or your business.<br/>
            • You face (or your business is facing) an immediate threat of adverse action.<br/>
            • You’ve tried repeatedly to contact the IRS but no one has responded, or the IRS hasn’t responded by the date promised.
          </p><br/>

          <p>
            <b>How can you reach us?</b>
          </p>
          <p>
            We have offices in every state, the District of Columbia, and Puerto Rico. Your local advocate’s number is at
            www.TaxpayerAdvocate.IRS.gov and in your local directory. You can also call us at 877-777-4778.
          </p><br/>

          <p>
            <b>How can you learn about your taxpayer rights?</b>
          </p>
          <p>
            The Taxpayer Bill of Rights describes ten basic rights that all taxpayers have when dealing with the IRS. Our Tax Toolkit at
            www.TaxpayerAdvocate.IRS.gov can help you understand what these rights mean to you and how they apply. These are your
            rights. Know them. Use them.
          </p><br/>

          <p>
            <b>How else does the Taxpayer Advocate Service help taxpayers?</b>
          </p>
          <p>
            TAS works to resolve large-scale problems that affect many taxpayers. If you know of one of these broad issues, please report it
            to us at IRS.gov/SAMS. 
          </p><br/>

          <p>
            <b>Low Income Taxpayer Clinics Help Taxpayers</b>
          </p>
          <p>
            Low Income Taxpayer Clinics (LITCs) are independent from the IRS. Some serve individuals whose income is below a certain
            level and who need to resolve a tax problem. These clinics provide professional representation before the IRS or in court on
            audits, appeals, tax collection disputes, and other issues for free or for a small fee. Some clinics provide information about
            taxpayer rights and responsibilities in many different languages for individuals who speak English as a second language. For
            more information, and to find a clinic near you, read the LITC page on IRS.gov/LITC or IRS Publication 4134, Low Income
            Taxpayer Clinic List. You can also get this publication at your local IRS office or by calling 800-829-3676. 
          </p><br/>

          <p>
            <b>Taxpayer Advocacy Panel</b>
          </p>
          <p>
            Have a suggestion for improving the IRS and do not know who to contact? The Taxpayer Advocacy Panel (TAP) is a diverse
            group of citizen volunteers who listen to taxpayers, identify taxpayers’ issues, and make suggestions for improving IRS service
            and customer satisfaction. The panel is demographically and geographically diverse, with at least one member from each state,
            the District of Columbia, and Puerto Rico. Contact TAP at www.improveirs.org or 888-912-1227 (toll-free).
          </p><br/>

        </div>

        <div>
          <span id="affordable-care-act" className="anchor" />
          <h1 className="border-b mb-1 text-2xl">
            <a>Affordable Care Act</a>
            <ReturnMenu />
          </h1>

          <p>
            <b>Requirement To Reconcile Advance Payments of the Premium Tax Credit</b>
          </p>
          <p>
            The premium tax credit helps pay premiums for health insurance purchased from the Marketplace. Eligible
            individuals may have advance payments of the premium tax credit made on their behalf directly to the insurance
            company.<br/>
            If you or a family member enrolled in health insurance through the Marketplace and advance payments of the
            premium tax credit were made to your insurance company to reduce your monthly premium payment, you must attach
            Form 8962 to your return to reconcile (compare) the advance payments with your premium tax credit for the year.<br/>
            The Marketplace is required to send Form 1095-A by January 31, 2020, listing the advance payments and other
            information you need to complete Form 8962.<br/>
            1. You will need Form 1095-A from the Marketplace.<br/>
            2. Complete Form 8962 to claim the credit and to reconcile your advance credit payments.<br/>
            3. Include Form 8962 with your Form 1040, Form 1040-SR, or Form 1040-NR. (Don’t include Form 1095-A.)
          </p><br/>

          <p>
            <b>Health Coverage Reporting</b>
          </p>
          <p>
            If you or someone in your family was an employee in 2019, the employer may be required to send you Form
            1095-C. Part II of Form 1095-C shows whether your employer offered you health insurance coverage and, if
            so, information about the offer. You should receive Form 1095-C by early March 2020. This information may
            be relevant if you purchased health insurance coverage for 2019 through the Health Insurance Marketplace
            and wish to claim the premium tax credit on Schedule 3, line 9. However, you don’t need to wait to receive this
            form to file your return. You may rely on other information received from your employer. If you don’t wish to claim
            the premium tax credit for 2019, you don’t need the information in Part II of Form 1095-C. For more information
            on who is eligible for the premium tax credit, see the Instructions for Form 8962.
          </p><br/>
          <p>
            Reminder: Health care coverage. If you need health care coverage, go to www.HealthCare.gov to learn about
            health insurance options for you and your family, how to buy health insurance, and how you might qualify to get
            financial assistance to buy health insurance.
          </p><br/>
        </div>

        <div className="my-4">
          <span className="anchor" id="what-is-new" />
          <h1 className="border-b mb-1 text-2xl">
            <a>What's New</a>
            <ReturnMenu />
          </h1>
          <p>
            For information about any additional changes to the 2019 tax law or any other developments affecting Form 1040 or 1040-SR or the instructions, go to IRS.gov/
            Form1040.
          </p><br/>

          <p>
            <b>Form 1040-SR</b>
            <br />
              Form 1040-SR, U.S.
              Tax Return for Seniors, has been introduced for 2019. You can use this form if
              you were born before January 2, 1955.
              The form generally mirrors Form 1040.
              These instructions cover both Forms
              1040 and 1040-SR.
          </p><br/>

          <p>
            <b>Fewer numbered schedules</b>
            <br />
              This year,
              there are only 3 numbered schedules instead of 6. Schedules 2 and 4 were combined into Schedule 2 and it's where you
              will report any additional taxes you may
              owe. Schedules 3 and 5 were combined
              into Schedule 3 and it’s where you will
              report any credits that you didn't claim
              on Form 1040 or 1040-SR.
          </p><br/>

          <p>
            <b>IRA and pension reporting</b>
            <br />
              You will
              now report your IRA distributions and
              pensions and annuities on separate lines.
              Use lines 4a and 4b on Form 1040 or
              1040-SR to report IRA distributions and
              the taxable amount. Use new lines 4c
              and 4d to report pensions and annuities
              and the taxable amount. See the instructions for Lines 4a and 4b and Lines 4c
              and 4d, later.
          </p><br/>

          <p>
            <b>Capital gain or (loss) is now reported on line 6</b>
            <br />
              In 2018, capital gain or (loss)
              was reported on Schedule 1 (Form
              1040), line 13. In 2019, it will be reported on Form 1040 or 1040-SR, line 6.
          </p><br/>

          <p>
            <b>Health care coverage shared responsibility payment</b>
            <br />
              For 2019 you no longer
              need to either make a shared responsibility payment or file Form 8965 if you
              don't have minimum essential health
              care coverage for part or all of 2019.
              The “Full-year health care coverage or
              exempt” box has been removed from
              Form 1040.
          </p><br/>

          <p>
            <b>Standard deduction amount increased</b>
            <br />
              For 2019, the standard deduction amount has been increased for all
              filers. The amounts are:<br/>
              • Single or Married filing separately—$12,200.<br/>
              • Married filing jointly or Qualifying widow(er)—$24,400.<br/>
              • Head of household—$18,350.
          </p><br/>

          <p>
            <b>Qualified business income deduction.</b>
            <br />
              The simplified worksheet for figuring
              your qualified business income deduction is now Form 8995, Qualified Business Income Deduction Simplified Computation. If you don’t meet the
              requirements to file Form 8995, use
              Form 8995-A, Qualified Business Income Deduction. For more information,
              see each form’s instructions.
          </p><br/>

          <p>
            <b>Alternative minimum tax (AMT) exemption amount increased.</b>
            <br />
              The AMT
              exemption amount is increased to
              $71,700 ($111,700 if married filing
              jointly or qualifying widow(er); $55,850
              if married filing separately). The income
              levels at which the AMT exemption begins to phase out have increased to
              $510,300 ($1,020,600 if married filing
              jointly or qualifying widow(er)).
          </p><br/>

          <p>
            <b>Qualified opportunity investment.</b>
            <br />
              If
              you held a qualified investment in a
              qualified opportunity fund at any time
              during the year, you must attach Form
              8997, Initial and Annual Statement of
              Qualified Opportunity Fund (QOF) Investments, to your return. For more information, see Form 8997 and its instructions.
          </p><br/>

          <p>
            <b>Virtual currency.</b>
            <br />
              If, in 2019, you engaged in a transaction involving virtual
              currency you will need to file Schedule
              1. See the instructions for Schedule 1 for
              more information.
          </p><br/>

          <p>
            <b>Email address</b>
            <br />
              An optional field for
              your email address has been added to
              Forms 1040 and 1040-SR
          </p><br/>

          <p>
            <b>Medicaid waiver payments</b>
            <br />
              Changes
              have been made to how Medicaid waiver payments are treated for purposes of
              the earned income credit. See the instructions for line 18a.
          </p><br/>

          <p>
            <b>Extended tax provisions.</b>
            <br />
              Recent legislation extended certain tax benefits that
              had expired at the end of 2017. These
              tax benefits include the following.<br/>
              • Tuition and fees deduction.<br/>
              • Deduction for mortgage insurance
              premiums.<br/>
              • Nonbusiness energy property credit.<br/>
              • Alternative fuel vehicle refueling
              credit.<br/>
              • Indian employment credit.
              If you are eligible for one or more of
              these benefits in 2019, you can claim
              them on your 2019 return. If you are eligible for one or more of these benefits
              for tax year 2018, you will need to file
              an amended return, Form 1040-X, to
              claim them. See IRS.gov/Form1040X for
              more information about amending a tax
              return.
          </p><br/>

          <p>
            <b>Disaster tax relief.</b>
            <br />
              Disaster tax relief
              was enacted for those impacted by certain federally declared disasters. The tax
              benefits provided by this relief include
              the following.<br/>
              • An increased standard deduction
              based on your qualified disaster losses.
              See the instructions for line 9 and the Instructions for Schedule A for information on qualifying for and figuring the
              increased standard deduction.<br/>
              • Election to use your 2018 earned
              income to figure your 2019 earned income credit. See the instructions for
              line 18a for more information on this
              election.<br/>
              • Election to use your 2018 earned
              income to figure your 2019 additional
              child tax credit. See the instructions for
              line 18b and the Instructions for Schedule 8812 for more information on this
              election.
          </p><br/>

        </div>
        <div className="my-4">
          <span className="anchor" id="free-software-options" />
          <h1 className="text-2xl">
            <a>Free Software Options for Doing Your Taxes</a>
            <ReturnMenu />
          </h1>

          <p>
            <b>Why have 49 million Americans used Free File?</b>
            <br />
              • Security—Free File uses the latest encryption technology to safeguard your information.<br />
              • Flexible Payments—File early; pay by April 15, 2020 (for most people).<br />
              • Greater Accuracy—Fewer errors mean faster processing.<br />
              • Quick Receipt—Get an acknowledgment that your return was received and accepted.<br />
              • Go Green—Reduce the amount of paper used.<br />
              • It’s Free—through IRS.gov/FreeFile.<br />
              • Faster Refunds—Join the eight in 10 taxpayers who get their refunds faster by using
              direct deposit and e-file.
          </p><br/>

          <p>
            <b>Do Your Taxes for Free</b>
            <br />
              If your adjusted gross income was $69,000 or less in 2019, you can use free tax software to prepare and e-file your tax return.
              Earned more? Use Free File Fillable Forms.
              Free File. This public–private partnership, between the IRS and tax software providers, makes approximately a dozen brand
              name commercial software products and e-file available for free. Seventy percent of the nation’s taxpayers are eligible.
              Just visit IRS.gov/FreeFile for details. Free File combines all the benefits of e-file and easy-to-use software at no cost. Guided
              questions will help ensure you get all the tax credits and deductions you are due. It’s fast, safe, and free.
              You can review each software provider’s criteria for free usage or use an online tool to find which free software products match
              your situation. Some software providers offer state tax return preparation for free.
              Free File Fillable Forms. The IRS offers electronic versions of IRS paper forms that also can be e-filed for free. Free File
              Fillable Forms is best for people experienced in preparing their own tax returns. There are no income limitations. Free File
              Fillable Forms does basic math calculations. It supports only federal tax forms.
          </p><br/>

          <p>
            <b>Free Tax Help Available Nationwide</b>
            <br />
              Volunteers are available in communities nationwide providing free tax assistance to low-to-moderate income (generally under
              $56,000 in adjusted gross income) and elderly taxpayers (age 60 and older). At selected sites, taxpayers can input and
              electronically file their own tax return with the assistance of an IRS-certified volunteer.
              See How To Get Tax Help near the end of these instructions for additional information or visit IRS.gov (Keyword: VITA) for a
              VITA/TCE site near you!
          </p><br/>

          <p>
            <b>Make your tax payments electronically—it’s easy.</b>
            <br />
              You can make electronic payments online, by phone, or from a mobile device. Paying electronically is
              safe and secure. The IRS uses the latest encryption technology and doesn’t store the bank account
              number you use to submit your payment. When you use any of the IRS electronic payment options, it
              puts you in control of paying your tax bill and gives you peace of mind. You determine the payment
              date, and you will receive an immediate confirmation from the IRS. It’s easy, secure, and much quicker
              than mailing in a check or money order. Go to IRS.gov/Payments to see all your electronic payment
              options.
          </p><br/>
        </div>

        <div className="my-4">
          <span className="anchor" id="filling-requirements" />
          <h1 className="text-2xl">
            <a>Filling Requirements</a>
            <ReturnMenu />
          </h1>

          <p>
            <br/>
            <span className="anchor" id="do-you-have-to-file" />
            <b>
              <a>Do You Have To File?</a>
              <ReturnMenu />
            </b><br/>
            <br />
              Use Chart A, B, or C to see if you must
              file a return. U.S. citizens who lived in
              or had income from a U.S. possession
              should see Pub. 570. Residents of Puerto
              Rico can use Tax Topic 901 to see if
              they must file.<br/>

              TIP: Even if you do not otherwise
              have to file a return, you
              should file one to get a refund
              of any federal income tax withheld. You
              also should file if you are eligible for
              any of the following credits.<br/>
              • Earned income credit.<br/>
              • Additional child tax credit.<br/>
              • American opportunity credit.<br/>
              • Credit for federal tax on fuels.<br/>
              • Premium tax credit.<br/>
              • Health coverage tax credit.<br/>
              See Pub. 501 for details. Also see
              Pub. 501 if you do not have to file but
              received a Form 1099-B (or substitute
              statement).<br/>

              <b>Requirement to reconcile advance payments of the premium tax credit</b><br/>
              If you, your spouse with whom you are
              filing a joint return, or a dependent was
              enrolled in coverage through the Marketplace for 2019 and advance payments
              of the premium tax credit were made for
              this coverage, you must file a 2019 return and attach Form 8962. You (or
              whoever enrolled you) should have received Form 1095-A from the Marketplace with information about your coverage and any advance payments.
              You must attach Form 8962 even if
              someone else enrolled you, your spouse,
              or your dependent. If you are a dependent who is claimed on someone else's
              2019 return, you do not have to attach
              Form 8962.<br/>

              <b>Exception for certain children under age 19 or full-time students</b><br/>
              If certain
              conditions apply, you can elect to include on your return the income of a
              child who was under age 19 at the end
              of 2019 or was a full-time student under
              age 24 at the end of 2019. To do so, use
              Form 8814. If you make this election,
              your child doesn't have to file a return.
              For details, use Tax Topic 553 or see
              Form 8814.
              A child born on January 1, 1996, is
              considered to be age 24 at the end of
              2019. Do not use Form 8814 for such a
              child.<br/>

              <b>Resident aliens</b><br/>
              These rules also apply
              if you were a resident alien. Also, you
              may qualify for certain tax treaty benefits. See Pub. 519 for details.<br/>

              <b>Nonresident aliens and dual-status aliens</b><br/>
              These rules also apply if you were
              a nonresident alien or a dual-status alien
              and both of the following apply.<br/>
              • You were married to a U.S. citizen
              or resident alien at the end of 2019.<br/>
              • You elected to be taxed as a resident alien.
              See Pub. 519 for details.<br/>

              <b>CAUTION</b><br/>
              Specific rules apply to determine if you are a resident alien,
              nonresident alien, or dual-status alien. Most nonresident aliens and
              dual-status aliens have different filing
              requirements and may have to file Form
              1040-NR or Form 1040-NR-EZ. Pub.
              519 discusses these requirements and
              other information to help aliens comply
              with U.S. tax law.<br/>

              <br/>
              <span className="anchor" id="when-and-where-should-you-file" />
              <b>
                <a>When and Where Should You File?</a>
                <ReturnMenu />
              </b><br/>

              <br/>File Form 1040 or 1040-SR by April 15,
              2020. If you file after this date, you may
              have to pay interest and penalties. See
              Interest and Penalties, later<br/>

              If you were serving in, or in support
              of, the U.S. Armed Forces in a designated combat zone or contingency operation, you may be able to file later. See
              Pub. 3 for details.<br/>

              If you e-file your return, there is no
              need to mail it. However, if you choose
              to mail it, filing instructions and addresses are at the end of these instructions.<br/>

              <br/>
              <span className="anchor" id="what-if-you-cannot-file-on-time" />
              <b>
                <a>What if You Can't File on Time?</a>
                <ReturnMenu />
              </b><br/>

              <br />You can get an automatic 6-month extension if, no later than the date your return is due, you file Form 4868. For details, see Form 4868. Instead of filing
              Form 4868, you can apply for an automatic extension by making an electronic
              payment by the due date of your return.<br />
              <b>CAUTION</b><br />
              An automatic 6-month extension to file doesn't extend the
              time to pay your tax. If you
              don’t pay your tax by the original due
              date of your return, you will owe interest
              on the unpaid tax and may owe penalties. See Form 4868.<br/><br/>

              If you are a U.S. citizen or resident
              alien, you may qualify for an automatic
              extension of time to file without filing
              Form 4868. You qualify if, on the due
              date of your return, you meet one of the
              following conditions.<br/>
              • You live outside the United States
              and Puerto Rico and your main place of
              business or post of duty is outside the
              United States and Puerto Rico.<br/>
              • You are in military or naval service on duty outside the United States and
              Puerto Rico.<br/><br/>

              This extension gives you an extra 2
              months to file and pay the tax, but interest will be charged from the original due
              date of the return on any unpaid tax.
              You must include a statement showing
              that you meet the requirements. If you
              are still unable to file your return by the
              end of the 2-month period, you can get
              an additional 4 months if, no later than
              June 15, 2020, you file Form 4868. This
              4-month extension of time to file doesn't 
              extend the time to pay your tax. See
              Form 4868.<br/>

              <br/>
              <span className="anchor" id="private-delivery-services" />
              <b>
                <a>Private Delivery Services</a>
                <ReturnMenu />
              </b><br/>

              <br/>If you choose to mail your return, you
              can use certain private delivery services
              designated by the IRS to meet the "timely mailing treated as timely filing/
              paying" rule for tax returns and payments. These private delivery services
              include only the following.<br />
              • DHL Express 9:00, DHL Express
              10:30, DHL Express 12:00, DHL Ex
              press Worldwide, DHL Express Envelope, DHL Import Express 10:30, DHL
              Import Express 12:00, and DHL Import
              Express Worldwide.<br />
              • UPS Next Day Air Early A.M.,
              UPS Next Day Air, UPS Next Day Air
              Saver, UPS 2nd Day Air, UPS 2nd Day
              Air A.M., UPS Worldwide Express
              Plus, and UPS Worldwide Express.<br />
              • FedEx First Overnight, FedEx Priority Overnight, FedEx Standard Overnight, FedEx 2 Day, FedEx International
              Next Flight Out, FedEx International Priority, FedEx International First, and
              FedEx International Economy.<br /><br />

              To check for any updates to the list of
              designated private delivery services, go
              to IRS.gov/PDS. For the IRS mailing address to use if you’re using a private delivery service, go to IRS.gov/
              PDSStreetAddresses.<br />
              
              The private delivery service can tell
              you how to get written proof of the mailing date.<br />

          </p><br/>
        </div>
      </div>
    </div>
  )
}
