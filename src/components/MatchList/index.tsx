'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import styles from './index.module.scss'
import { useState, useEffect } from 'react'
import { getScore } from '../../services/score'
import { useLiveScore } from '../../hooks/use-livescore'

export default function MatchList() {
  const [score, setScore] = useState<{ 
    competition: {
      id: number;
      name: string;
      code: string;
      type: string;
      emblem: string | null;
    }[];
    status: string[];
    homeTeam: API.TeamConfig[]; 
    awayTeam: API.TeamConfig[]; 
    homeScore: (number | null)[]; 
    awayScore: (number | null)[];
  }>()
  
  useEffect(() => {
    getScore()
      .then(res => {
        console.log('拿到的分数：', res)
        setScore(res)
      })
      .catch(err => {
        console.error('获取分数失败', err)
      })
  }, [])

  return (
    <Swiper
      slidesPerView={5}
      className='cursor-grab'
    >
      {score?.homeTeam.map((home, idx) => (
        <SwiperSlide key={home.id /* 或 idx */}>
          <div className={styles.matchList}>
            <p className={styles.swiHeader}>
              <span className={styles.matchTit}>{score.competition[idx]?.name}</span>
              <span>{score.status[idx]}</span>
            </p>
            <div className={styles.matchDetail}>
              <span className={styles.team}>
                <img src={home.crest ?? undefined} alt={home.name} />
                {home.name}
              </span>
              <span className={styles.score}>{score.homeScore[idx]}</span>
            </div>
            <div className={styles.matchDetail}>
              <span className={styles.team}>
                <img
                  src={score.awayTeam[idx]?.crest ?? undefined}
                  alt={score.awayTeam[idx]?.name}
                />
                {score.awayTeam[idx]?.name}
              </span>
              <span className={styles.score}>{score.awayScore[idx]}</span>
            </div>
            <div className={styles.footerBtn}>
              <span className={styles.footerPlay}>
                <span>集锦</span>
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <span slot="container-start"></span>
      <span slot="container-end"></span>
      <span slot="wrapper-start"></span>
      <span slot="wrapper-end"></span>
    </Swiper>
  )
}