import getSeason from "./getSeason";

const buildSeasons = events => {
  // Function to assign season to events
  const assignSeason = event => {
    if (event.performances.length !== 0) {
      const firstPerformance = new Date(event.performances[0].dateTime);
      const newEvent = { ...event };
      newEvent.season = getSeason(firstPerformance);
      return newEvent;
    } else {
      console.log("No dates to work with");
    }
  };
  //  Create a new array of events with a season property and assign the appropriate season
  const newEvents = [];
  events.forEach(event => {
    const newEvent = assignSeason(event);
    newEvents.push(newEvent);
  });

  // Group the new events array into an object by season
  const seasons = newEvents.reduce((r, a) => {
    r[a.season] = [...(r[a.season] || []), a];
    return r;
  }, {});

  return seasons;
};

export default buildSeasons;
