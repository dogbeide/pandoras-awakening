'use client'

import { useState } from "react"

export default function BtnDownloadWrapper({ children } : {
  children: React.ReactNode
}) {
  const [downloading, setDownloading] = useState(false);

  const handleClick = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 5000)
  }

  return(
    <div onClick={handleClick}
        className={`${downloading ? 'cursor-not-allowed pointer-events-none' : ''}`}
        aria-disabled={downloading}
    >
      {children}
    </div>
  )
}