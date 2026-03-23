export interface MediaItem {
  title: string;
  source: string;
  logoUrl: string;
  articleUrl: string;
  type: 'article' | 'podcast' | 'video';
}

export const articles: MediaItem[] = [
  {
    title: 'The true cost of daylight-saving time is a $672 million hit to the U.S. economy',
    source: 'MarketWatch',
    logoUrl: 'https://i.ibb.co/CKTdY91h/image.png',
    articleUrl: 'https://www.marketwatch.com/story/the-true-cost-of-daylight-saving-time-is-a-672-million-hit-to-the-u-s-economy-70953f73',
    type: 'article',
  },
  {
    title: "Bill Korman: You aren't 'too busy.' You're making a choice",
    source: 'The Spokesman Review',
    logoUrl: 'https://i.ibb.co/Jw5Kkc7t/image.png',
    articleUrl: 'https://www.spokesman.com/stories/2026/feb/21/bill-korman-you-arent-too-busy-youre-making-a-choi/',
    type: 'article',
  },
  {
    title: 'Why History Says the Stock Market Can Weather $100 Oil',
    source: "Barron's",
    logoUrl: 'https://i.ibb.co/WW5CBnSy/image.png',
    articleUrl: 'https://www.barrons.com/articles/stocks-weather-100-dollar-oil-prices-history-9298f6ec',
    type: 'article',
  },
  {
    title: "I'm the only man in America who wants to keep daylight saving time",
    source: 'Fox News',
    logoUrl: 'https://i.ibb.co/8DnTc3Z7/image.png',
    articleUrl: 'https://www.foxnews.com/opinion/im-only-man-america-who-wants-keep-daylight-saving-time',
    type: 'article',
  },
  {
    title: "Poor time management isn't just an inconvenience",
    source: 'Yahoo Lifestyle',
    logoUrl: 'https://i.ibb.co/r2FSQ6H4/image.png',
    articleUrl: 'https://www.yahoo.com/lifestyle/articles/poor-time-management-isn-t-183410029.html',
    type: 'article',
  },
  {
    title: "The Most Effective Executives Don't Manage Time, They Command It",
    source: 'Chief Executive',
    logoUrl: 'https://i.ibb.co/5HGJ0Stv/image.png',
    articleUrl: 'https://chiefexecutive.net/the-most-effective-executives-dont-manage-time-they-command-it/',
    type: 'article',
  },
  {
    title: "Poor time management isn't just an inconvenience",
    source: 'The Week',
    logoUrl: 'https://i.ibb.co/5HGJ0Stv/image.png',
    articleUrl: 'https://theweek.com/politics/instant-opinion-time-analog-crime-elections-voting',
    type: 'article',
  },
  {
    title: "I'm the only man in America who wants to keep daylight saving time",
    source: 'AOL',
    logoUrl: 'https://i.ibb.co/zWFzcf08/image.png',
    articleUrl: 'https://www.aol.com/articles/m-only-man-america-wants-110001315.html',
    type: 'article',
  },
  {
    title: 'Social Security payments could get a boost from higher oil prices, analyst says',
    source: 'MSN',
    logoUrl: 'https://i.ibb.co/v4NKGJsh/image.png',
    articleUrl: 'https://www.msn.com/en-us/money/markets/higher-oil-prices-could-boost-social-security-payments-analyst-says/ar-AA1Ym2o5',
    type: 'article',
  },
  {
    title: "Rising oil prices may lead to bigger Social Security checks — here's why",
    source: 'The Economic Times',
    logoUrl: 'https://i.ibb.co/qYgJ7w6w/image.png',
    articleUrl: 'https://economictimes.indiatimes.com/news/international/us/rising-oil-prices-may-lead-to-bigger-social-security-checks-heres-why/articleshow/129506766.cms',
    type: 'article',
  },
];

export const podcasts: MediaItem[] = [
  {
    title: 'Building Millions After Bankruptcy with Bill Korman',
    source: 'The Power Transformation Podcast',
    logoUrl: '',
    articleUrl: 'https://podcasts.apple.com/us/podcast/183-building-millions-after-bankruptcy-with-bill-korman/id1660835113?i=1000735596146',
    type: 'podcast',
  },
  {
    title: 'Bill Korman on Faith, Financial Strategies, and Overcoming Challenges',
    source: 'Wisdom on the Front Porch',
    logoUrl: '',
    articleUrl: 'https://podcasts.apple.com/us/podcast/bill-korman-on-faith-financial-strategies-and/id1771072110?i=1000686313838',
    type: 'podcast',
  },
  {
    title: 'The 168 Game Take Back Control Now – Bill Korman',
    source: "Connected Leaders' Academy",
    logoUrl: '',
    articleUrl: 'https://podcasts.apple.com/us/podcast/the-168-game-take-back-control-now-bill-korman/id1733127814?i=1000670589452',
    type: 'podcast',
  },
  {
    title: 'This Agent Turned A $7,500 Lead Order Into $141,000 In Income!',
    source: 'Cody Askins - The Power Players Podcast',
    logoUrl: '',
    articleUrl: 'https://podcasts.apple.com/us/podcast/this-agent-turned-a-%247-500-lead-order-into-%24141-000/id1587923876?i=1000670836505',
    type: 'podcast',
  },
  {
    title: '$7,500 to $141,000 - Cody Askins & Bill Korman',
    source: 'YouTube',
    logoUrl: '',
    articleUrl: 'https://youtu.be/5pNu-_z-p1A',
    type: 'video',
  },
  {
    title: 'Mission Transition - A Podcast for Veterans',
    source: 'Still Serving Veterans',
    logoUrl: '',
    articleUrl: 'https://podcasts.apple.com/us/podcast/mission-transition-a-podcast-for-veterans/id1731440936',
    type: 'podcast',
  },
  {
    title: 'Danny ZZZ Live with Bill Korman',
    source: 'YouTube Live',
    logoUrl: '',
    articleUrl: 'https://www.youtube.com/live/Yuab3JuIir8?si=hJbQiOW7mbxKKe-r',
    type: 'video',
  },
  {
    title: 'Heroes Rising - Sifu Rafael and Jose Escobar',
    source: 'YouTube',
    logoUrl: '',
    articleUrl: 'https://youtu.be/IgVHXGAT204?si=pf9pIisnJbzqGwbL',
    type: 'video',
  },
];
