import Link from 'next/link'
import React from 'react'

const Logo = props => {
  return <Link href="/" passHref>
    <div className="flex flex-col justify-center items-center cursor-pointer space-y-3 font-sans font-semibold">
      <div>$ cd /home/</div>
    </div>
  </Link>
}
export default Logo
