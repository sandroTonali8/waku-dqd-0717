'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import styles from './index.module.scss'
import { useState, useEffect } from 'react'
import { getScore } from '../../services/score'

export default function MatchList() {
  const [score, setScore] = useState<{ homeTeam: API.TeamConfig[]; awayTeam: API.TeamConfig[]; homeScore: number[]; awayScore: number[] } | undefined>(undefined)
  
  useEffect(() => {
    getScore().then(setScore)
  }, [])

  return (
    <Swiper
      slidesPerView={5}
      className='cursor-grab'
    >
      <SwiperSlide>
        <div className={styles.matchList}>
          <p className={styles.swiHeader}>
            <span className={styles.matchTit}>NBA夏季联赛</span>
            <span>已结束</span>
          </p>
          <div className={styles.matchDetail}>
            <span className={styles.team}>
              <img src="https://sd.qunliao.info/fastdfs6/M00/88/4E/rBUCgGNqIp2ASCaBAABEu-Ty66Y308.png"/>
              休斯敦火箭
            </span>
            <span className={styles.score}>108</span>
          </div>
          <div className={styles.matchDetail}>
            <span className={styles.team}>
              <img src="https://sd.qunliao.info/fastdfs5/M00/39/14/rB8BO19GNTGANc-WAABLvHo7bkw391.png"/>
              亚特兰大老鹰
            </span>
            <span className={styles.score}>111</span>
          </div>
          <div className={styles.footerBtn}>
            <span className={styles.footerPlay}>
              <span>集锦</span>
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.matchList}>
          <p className={styles.swiHeader}>
            <span className={styles.matchTit}>NBA夏季联赛</span>
            <span>已结束</span>
          </p>
          <div className={styles.matchDetail}>
            <span className={styles.team}></span>
            <span className={styles.score}></span>
          </div>
        </div>
      </SwiperSlide>
      <span slot="container-start"></span>
      <span slot="container-end"></span>
      <span slot="wrapper-start"></span>
      <span slot="wrapper-end"></span>
    </Swiper>
  )
}