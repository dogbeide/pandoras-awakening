import Title from "../components/text/Title"
import Section from "../components/general/Section"
import { justAnotherHand } from "../lib/fonts"

export default function Page() {

  return (
    <div className="bg-pandoras-purple py-6 px-6">
      <Title classNames="text-white">Terms of Service</Title>
      <hr className="bg-pandoras-orange h-1 border-none mx-11" />

      <Section classNames="text-slate-200">
        <div className="text-left">
          <p className="font-bold mb-6">Last updated: May 28, 2021</p>
          <p className="mb-4">Please read these Terms of Use (“Terms”, “Terms of Use”) carefully before using the <a className="underline text-pandoras-teal hover:text-pandoras-lime" href="https://pandorasawakening.com/">https://pandorasawakening.com/</a>  website (the “Service”) operated by Pandora&apos;s Awakening.</p>
          <p className="mb-4">Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
          <p className="mb-4">By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Links To Other Web Sites</h2>
          <p className="mb-4">Our Service may contain links to third-party web sites or services that are not owned or controlled by Pandora&apos;s Awakening.</p>
          <p className="mb-4">Pandora&apos;s Awakening has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Pandora&apos;s Awakening shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
          <p className="mb-4">We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Termination</h2>
          <p className="mb-4">We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          <p className="mb-4">All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Disclaimer</h2>
          <p className="mb-4">Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Governing Law</h2>
          <p className="mb-4">These Terms shall be governed and construed in accordance with the laws of United States without regard to its conflict of law provisions.</p>
          <p className="mb-4">Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Changes</h2>
          <p className="mb-4">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
          <p className="mb-4">By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

          <h2 className={`${justAnotherHand.className} text-4xl mb-3 mt-2 tracking-wide`}>Contact Us</h2>
          <p className="mb-4">If you have any questions about these Terms, please <a className="underline text-pandoras-teal hover:text-pandoras-lime" href="/contact">contact us</a>.</p>
        </div>
      </Section>
    </div>
  )
}