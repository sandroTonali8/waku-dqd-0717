declare namespace API {
  type Template<T> = {
    code: number;
    data: T;
    msg: string;
  };

  type YellowCard = 'YELLOW';

  type RedCard = 'RED';

  type PlayerItem = {
    id: number;
    name: string;
    position: string;
    shirtNumber: number;
  };

  type TeamConfig = {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    coach: {
      id: number;
      name: string;
      nationality: string;
    };
    leagueRank: number;
    formation: string;
    lineup: PlayerItem[];
    bench: PlayerItem[];
    statistics?: {
      corner_kicks: number;
      free_kicks: number;
      goal_kicks: number;
      offsides: number;
      fouls: number;
      ball_possession: number;
      saves: number;
      throw_ins: number;
      shots: number;
      shots_on_goal: number;
      shots_off_goal: number;
      yellow_cards: number;
      yellow_red_cards: number;
      red_cards: number;
    };
  };

  type ScoreConfig = {
    winner: string;
    duration: string;
    fullTime: {
      home: number;
      away: number;
    };
    halfTime: {
      home: number;
      away: number;
    };
  };

  type GoalItem = {
    minute: number;
    injuryTime: number;
    type: string;
    team: {
      id: number;
      name: string;
    };
    scorer: {
      id: number;
      name: string;
    };
    assist: {
      id: number;
      name: string;
    };
    score: {
      home: number;
      away: number;
    };
  };

  type PenaltyItem = {
    player: {
      id: number;
      name: string;
    };
    team: {
      id: number;
      name: string;
    };
    scored: boolean;
  };

  type BookingItem = {
    minute: number;
    team: {
      id: number;
      name: string;
    };
    player: {
      id: number;
      name: string;
    };
    card: YellowCard | RedCard;
  };

  type SubstitutionItem = {
    minute: number;
    team: {
      id: number;
      name: string;
    };
    playerOut: {
      id: number;
      name: string;
    };
    playerIn: {
      id: number;
      name: string;
    };
  };

  type RefereeItem = {
    id: number;
    name: string;
    type: string;
    nationality: string | null;
  };

  type MatchItem = {
    area: {
      id: number;
      name: string;
      code: string;
      flag: string;
    };

    competition: {
      id: number;
      name: string;
      code: string;
      type: string;
      emblem: string;
    };

    season: {
      id: number;
      startDate: string;
      endDate: string;
      currentMatchDay: number;
      winner: string;
      stages: string[];
    };

    id: number;
    utcDate: string;
    status: string;
    minute: string;
    injuryTime: number;
    venue: string;
    matchday: number;
    stage: string;
    group: string;
    lastUpdated: string;
    homeTeam: TeamConfig;
    awayTeam: TeamConfig;
    score: ScoreConfig;
    goals: GoalItem[];
    penalties: PenaltyItem[];
    bookings: BookingItem[];
    substitutions: SubstitutionItem[];
    odds: {
      homeWin: number;
      draw: number;
      awayWin: number;
    };
    referees: RefereeItem[];
  };

  interface MatchData {
    filters: {
      dateFrom: string;
      dateTo: string;
      permission: string | null;
    };
    resultSet: {
      count: number;
      competition: string;
      first: string;
      last: string;
      played: number;
    };
    matches: MatchItem[];
  }
}