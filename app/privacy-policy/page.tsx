import { Metadata } from "next";

import Title from "../components/text/Title"
import Section from "../components/general/Section"
import { justAnotherHand } from "../lib/fonts"

export const metadata: Metadata = {
  title: "Privacy Policy - Pandora's Awakening",
  description: "Pandora's Awakening helps those with dysfunctional patterns and provides tools to live healthy mental and sex lives in the Nashville area.",
};

export default function Page() {

  return (
    <div className="bg-pandoras-purple py-6 px-6">
      <Title classNames="text-white">Privacy Policy</Title>
      <hr className="bg-pandoras-orange h-1 border-none mx-11" />

      <Section classNames="text-slate-200">
        <div className="text-left">
          <p className="font-bold mb-6">Last updated: May 28, 2021</p>
          <p className="mb-4">Pandora&apos;s Awakening operates <a className="underline text-pandoras-teal hover:text-pandoras-lime" href="https://pandorasawakening.com/">https://pandorasawakening.com/</a> (the “Service”).</p>
          <p className="mb-4">This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.</p>
          <p className="mb-4">We will not use or share your information with anyone except as described in this Privacy Policy.</p>
          <p className="mb-4">We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, 
            accessible at <a className="underline text-pandoras-teal hover:text-pandoras-lime" href="https://pandorasawakening.com/">https://pandorasawakening.com/</a>.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Information Collection And Use</h2>
          <p className="mb-4">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (“Personal Information”) may include, but is not limited to:</p>
          
          <div className="w-full flex flex-row justify-center">
            <ul className="mb-4 list-disc text-center">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
            </ul>
          </div>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Log Data</h2>
          <p className="mb-4">We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer&apos;s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Cookies</h2>
          <p className="mb-4">Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer&apos;s hard drive.</p>
          <p className="mb-4">We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Service Providers</h2>
          <p className="mb-4">We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
          <p className="mb-4">These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Security</h2>
          <p className="mb-4">The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Links To Other Sites</h2>
          <p className="mb-4">Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
          <p className="mb-4">We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Children&apos;s Privacy</h2>
          <p className="mb-4">Our Service does not address anyone under the age of 18 (“Children”).</p>
          <p className="mb-4">We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we discover that a child under 18 has provided us with Personal Information, we will delete such information from our servers immediately.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Compliance With Laws</h2>
          <p className="mb-4">We will disclose your Personal Information where required to do so by law or subpoena.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Changes To This Privacy Policy</h2>
          <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          <p className="mb-4">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please <a className="underline text-pandoras-teal hover:text-pandoras-lime" href="/contact">contact us</a>.</p>
        </div>
      </Section>
    </div>
  )
}