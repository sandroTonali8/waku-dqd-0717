import { request } from './http-client'
import { currMatches } from './mock/currMatch'

export async function getScore() {
  // const s = request<API.Template<API.MatchData>>(
  //   '/api/football/matches',
  //   {
  //     method: 'GET',
  //   }
  // )
  // const dynamicRes = await s
  const dynamicRes = currMatches
  // console.log(dynamicRes)
  if(!dynamicRes) return undefined

  // const matchList = dynamicRes.matches
  const matchList = dynamicRes
  const newRes = {
    competition: matchList.map((match) => match.competition),
    status: matchList.map((match) => match.status),
    homeTeam: matchList.map((match) => match.homeTeam),
    awayTeam: matchList.map((match) => match.awayTeam),
    homeScore: matchList.map((match) => match.score.fullTime.home),
    awayScore: matchList.map((match) => match.score.fullTime.away),
  }

  console.log(newRes)
  return newRes
}