import { useEffect, useState } from 'react'
import Typed from 'typed.js'
import BLOG from '@/blog.config'
import CONFIG_HEXO from '../config_hexo'
import SocialButton from './SocialButton'

let wrapperTop = 0
let windowTop = 0
let autoScroll = false

/**
 *
 * @returns 头图
 */
const Header = props => {
  const [typed, changeType] = useState()
  const { siteInfo } = props
  useEffect(() => {
    scrollTrigger()
    updateHeaderHeight()
    if (!typed && window && document.getElementById('typed')) {
      changeType(
        new Typed('#typed', {
          strings: CONFIG_HEXO.HOME_BANNER_GREETINGS,
          typeSpeed: 200,
          backSpeed: 100,
          backDelay: 400,
          showCursor: true,
          smartBackspace: true
        })
      )
    }
    window.addEventListener('scroll', scrollTrigger)
    window.addEventListener('resize', updateHeaderHeight)
    return () => {
      window.removeEventListener('scroll', scrollTrigger)
      window.removeEventListener('resize', updateHeaderHeight)
    }
  })

  const autoScrollEnd = () => {
    if (autoScroll) {
      windowTop = window.scrollY
      autoScroll = false
    }
  }

  const scrollTrigger = () => {
    const scrollS = window.scrollY

    // 自动滚动
    if ((scrollS > windowTop) & (scrollS < window.innerHeight) && !autoScroll
    ) {
      autoScroll = true
      window.scrollTo({ top: wrapperTop, behavior: 'smooth' })
      setTimeout(autoScrollEnd, 500)
    }
    if ((scrollS < windowTop) && (scrollS < window.innerHeight) && !autoScroll) {
      autoScroll = true
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setTimeout(autoScrollEnd, 500)
    }
    windowTop = scrollS
  }

  function updateHeaderHeight () {
    setTimeout(() => {
      const wrapperElement = document.getElementById('wrapper')
      wrapperTop = wrapperElement?.offsetTop
    }, 500)
  }

  return (
    <header
      id="header"
      className="duration-500 md:bg-fixed w-full bg-cover bg-center h-screen bg-black text-white"
      style={{
        backgroundImage:
          `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0,0,0,0.2), rgba(0,0,0,0.2), rgba(0,0,0,0.2), rgba(0, 0, 0, 0.8) ),url("${siteInfo?.pageCover}")`
      }}
    >
      <div className="absolute flex flex-col h-full items-center justify-center w-full font-sans">
        {/* <div className='text-4xl md:text-5xl text-white shadow-text'>{siteInfo?.title}</div>
        <div className='mt-2 h-12 items-center text-center shadow-text text-white text-lg'>
          <span id='typed'/>
        </div> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={siteInfo?.icon}
          className="rounded-full transform hover:rotate-180"
          width={120}
          style={{
            boxShadow: 'inset 0 0 10px #000',
            padding: '5px',
            transition: 'all ease 1s'
          }}
        />
        <div
          className="text-white rounded-xl"
          style={{
            width: '36%',
            maxWidth: '500px',
            marginTop: '20px',
            background: 'rgba(0,0,0,.5)',
            padding: '17px'
          }}
        >
          <h1 className='text-center text-2xl font-bold'>{BLOG.AUTHOR}</h1>
          <p className='text-center text-lg mt-4 font-light'>{BLOG.BIO}</p>
        </div>
        <SocialButton />
      </div>
      <div
        onClick={() => {
          window.scrollTo({ top: wrapperTop, behavior: 'smooth' })
        }}
        className="cursor-pointer w-full text-center py-4 text-3xl absolute bottom-0 text-white"
      >
        <i className='animate-bounce fas fa-angle-down' style={{ animationDuration: '2s' }}/>
      </div>
    </header>
  )
}

export default Header
