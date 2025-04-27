import React from 'react';
import './WisdomWell.css';

// Import LinkedIn images
import one from '../assets/linkedin/one.png';
import two from '../assets/linkedin/two.png';
import three from '../assets/linkedin/three.png';
import four from '../assets/linkedin/four.png';
import five from '../assets/linkedin/five.png';
import six from '../assets/linkedin/six.png';
import seven from '../assets/linkedin/seven.png';
import eight from '../assets/linkedin/eight.png';
import nine from '../assets/linkedin/nine.png';
import ten from '../assets/linkedin/ten.png';
import eleven from '../assets/linkedin/eleven.png';
import twelve from '../assets/linkedin/twelve.png';

const linkedInProfiles = [
  {
    image: one,
    url: "https://www.linkedin.com/pulse/winning-battles-aptitude-attitude-introduction-lt-col-ankur-3jjlf/"
  },
  {
    image: two,
    url: "https://www.linkedin.com/pulse/corporate-vs-entrepreneurship-skill-divide-how-stay-lt-col-ankur-rvjtf/"
  },
  {
    image: three,
    url: "https://www.linkedin.com/pulse/mindset-first-hidden-key-success-sabharwal-military-veteran--loocf/"
  },
  {
    image: four,
    url: "https://www.linkedin.com/pulse/dont-listen-elders-here-being-money-minded-good-lt-col-ankur-9mz6f/"
  },
  {
    image: five,
    url: "https://www.linkedin.com/pulse/we-all-ice-cream-vendors-lt-col-ankur-sabharwal-military-veteran--qdlhf/"
  },
  {
    image: six,
    url: "https://www.linkedin.com/pulse/mehenga-roye-ek-baar-sasta-baar-baar-quality-costs-lt-col-ankur-udcwc/"
  },
  {
    image: seven,
    url: "https://www.linkedin.com/pulse/sathi-haath-batanatogether-we-get-done-sabharwal-military-veteran--sqrnf/"
  },
  {
    image: eight,
    url: "https://www.linkedin.com/pulse/heavy-head-wears-crown-navigating-fog-war-lt-col-ankur-dbhzf/"
  },
  {
    image: nine,
    url: "https://www.linkedin.com/pulse/sales-battlefield-where-every-leader-must-fight-lt-col-ankur-aes0f/"
  },
  {
    image: ten,
    url: "https://www.linkedin.com/pulse/leadership-without-rank-influence-isnt-stripes-suits-lt-col-ankur-8kvyf/"
  },
  {
    image: eleven,
    url: "https://www.linkedin.com/pulse/enemy-doesnt-send-calendar-invitespart-1-lt-col-ankur-f5ddf/"
  },
  {
    image: twelve,
    url: "https://www.linkedin.com/pulse/battlefield-doesnt-pause-consensus-neither-should-lt-col-ankur-b1zcf/"
  }
];

const WisdomWell: React.FC = () => {
  return (
    <>
      {linkedInProfiles.map((profile, index) => (
        <a 
          key={index}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
        >
          <div className="aspect-[16/9] overflow-hidden">
            <img 
              src={profile.image} 
              alt="Wisdom Well Article"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        </a>
      ))}
    </>
  );
};

export default WisdomWell; 