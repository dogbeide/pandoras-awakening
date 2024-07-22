export default function SubFooter() {

  return (
    <div className="bg-gradient-to-br from-white via-pandoras-teal to-white py-3 text-center text-sm max-sm:text-xs">
      <span>© 2021 Pandora&apos;s Awakening</span>
      <span>&nbsp;|&nbsp;</span>
      <a href='/privacy-policy' className="underline hover:text-pandoras-orange">Privacy Policy</a>
      <span>&nbsp;|&nbsp;</span>
      <a href='/terms-of-service' className="underline hover:text-pandoras-orange">Terms of Service</a>
    </div>
  )
}