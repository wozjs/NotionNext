import BLOG from '@/blog.config'
import React from 'react'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return <div className='w-full justify-center flex-wrap flex mt-2'>
    <div className='space-x-5 text-2xl text-white dark:text-gray-300 '>
      {BLOG.CONTACT_GITHUB && <a target='_blank' rel='noreferrer' title={'github'} href={BLOG.CONTACT_GITHUB} className="bg-black bg-opacity-50 inline-flex justify-center items-center w-11 h-11 rounded-full">
        <i className='transform hover:scale-125 duration-150 fab fa-github dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_TWITTER && <a target='_blank' rel='noreferrer' title={'twitter'} href={BLOG.CONTACT_TWITTER} className="bg-black bg-opacity-50 inline-flex justify-center items-center w-11 h-11 rounded-full">
        <i className='transform hover:scale-125 duration-150 fab fa-twitter dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_TELEGRAM && <a target='_blank' rel='noreferrer' href={BLOG.CONTACT_TELEGRAM} title={'telegram'} className="bg-black bg-opacity-50 inline-flex justify-center items-center w-11 h-11 rounded-full">
        <i className='transform hover:scale-125 duration-150 fab fa-telegram dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_WEIBO && <a target='_blank' rel='noreferrer' title={'weibo'} href={BLOG.CONTACT_WEIBO} className="bg-black bg-opacity-50 inline-flex justify-center items-center w-11 h-11 rounded-full">
        <i className='transform hover:scale-125 duration-150 fab fa-weibo dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_EMAIL && <a target='_blank' rel='noreferrer' title={'email'} href={`mailto:${BLOG.CONTACT_EMAIL}`} className="bg-black bg-opacity-50 inline-flex justify-center items-center w-11 h-11 rounded-full">
        <i className='transform hover:scale-125 duration-150 fas fa-envelope dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      <a target='_blank' rel='noreferrer' title={'RSS'} href={'/feed'} className="bg-black bg-opacity-50 inline-flex justify-center items-center w-11 h-11 rounded-full">
        <i className='transform hover:scale-125 duration-150 fas fa-rss dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>
    </div>
  </div>
}
export default SocialButton
