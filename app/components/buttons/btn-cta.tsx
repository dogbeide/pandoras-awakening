import { justAnotherHand } from '@/app/lib/fonts';

import './btn-cta.css'

type btnCTATypes = {
  classNames?: string,
}

export default function BtnCTA({
  classNames,
  href,
  name,
  target="_self",
  fontSize='18px',
  type='button',
  ariaLabel,
  ariaDisabled,
  download,
  children
} : {
  classNames?: string,
  href?: string,
  name?: string,
  target?: string,
  fontSize?: string,
  type?: "button" | "submit" | "reset" | undefined,
  ariaLabel?: string,
  ariaDisabled?: boolean,
  download?: boolean,
  children: React.ReactNode
}) {
  return (
    <a aria-label={ariaLabel} href={href} target={target} rel='noopener' download={download}>
      <button 
        className={`btn-cta px-2 text-nowrap ${justAnotherHand.className} ${classNames}`}
        style={{fontSize: fontSize}}
        type={type}
        aria-disabled={ariaDisabled || false}
        name={name || "_name"}
      >
        {children}
      </button>
    </a>
  )
}