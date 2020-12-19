import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const Events = () => {
    const data = useStaticQuery(graphql`
        query  {
   allSanityEvent {
    nodes {
      title
      tagline
      id
    }
  }
}
    `)
    console.log(data)
    const events = data.allSanityEvent.nodes;
    
    return ( 
        <div>
            {events.map(event => (
                <div key={event.id}>
                    <h1>{event.title}</h1>
                    <p>{event.tagline}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Events;