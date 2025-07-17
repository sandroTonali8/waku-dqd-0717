'use client'

import { Anchor } from 'antd'
import './index.css'

export default function Navigator() {
  return (
    <div className="flex-nowrap flex items-baseline justify-center h-15">
    {/* <div className="flex h-15"> */}
      <div className="flex-1 mt-2 mr-10 mb-0 ml-0 max-w-1/4">
        <img src="/images/dqd-logo.webp" className="h-10"/>
      </div>
      <Anchor 
        className="flex-1 mt-2 mr-10 mb-0 ml-0"
        direction='horizontal'
        items={[
          {
            key: 'homepage',
            href: '/',
            title: '首页',
          },
          {
            key: 'forecast',
            href: '#forecast',
            title: '专家预测',
          },
          {
            key: 'news',
            href: '#news',
            title: '动态',
          },
          {
            key: 'video',
            href: '#video',
            title: '视频',
          },
          {
            key: 'match',
            href: '#match',
            title: '比赛',
          },
          {
            key: 'data',
            href: '#data',
            title: '数据',
          },
          {
            key: 'download',
            href: '#download',
            title: '下载',
          },
        ]}>
        <a id='homepage'>
        </a>
        <a id='forecast'>
        </a>
        <a id='news'>
        </a>
        <a id='video'>
        </a>
        <a id='match'>
        </a>
        <a id='data'>
        </a>
        <a id='download'>
        </a>
      </Anchor>
    </div>
  )
}