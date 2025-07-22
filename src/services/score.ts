import { request } from './http-client'
import { PLMatches } from './mock/premierLeague'

export async function getScore() {
  const s = request<API.Template<API.MatchData>>(
    '/api/football/matches',
    {
      method: 'GET',
    }
  )
  const dynamicRes = await s
  console.log(dynamicRes)
  if(!dynamicRes.data) return undefined

  const matchList = dynamicRes.data.matches
  const newRes = {
    homeTeam: matchList.map((match) => match.homeTeam),
    awayTeam: matchList.map((match) => match.awayTeam),
    homeScore: matchList.map((match) => match.score.fullTime.home),
    awayScore: matchList.map((match) => match.score.fullTime.away),
  }

  console.log(newRes)
  return newRes
}