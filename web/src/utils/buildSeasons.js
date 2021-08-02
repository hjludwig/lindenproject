import getSeason from "./getSeason";

const buildSeasons = events => {
  const assignSeason = event => {
    if (event.performances.length !== 0) {
      const firstPerformance = new Date(event.performances[0].dateTime);
      const newEvent = { ...event };
      newEvent.season = getSeason(firstPerformance);
      return newEvent;
    }
  };

  //  Create a new array of events with a season property and assign the appropriate season
  const eventsWithSeasons = events.map(event => assignSeason(event));

  // Group the new events array into an object by season
  const seasons = eventsWithSeasons.reduce((r, a) => {
    r[a.season] = [...(r[a.season] || []), a];
    return r;
  }, {});

  return seasons;
};

export default buildSeasons;
