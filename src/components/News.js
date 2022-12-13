import React, { Component } from 'react';
import NewsItem from './NewsItem'; 

export class News extends Component {
  articles = [
    {
      "source": { "id": "cbs-news", "name": "CBS News" },
      "author": "Melissa Quinn",
      "title": "Trump tax returns: Supreme Court declines to block release to Congress - CBS News",
      "description": "The order clears the way for Democrats to obtain Trump's tax records weeks before Republicans take control of the House in January.",
      "url": "https://www.cbsnews.com/news/supreme-court-trump-tax-returns-house-ways-and-means-committee-democrats/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2022/11/22/e74fda11-90e7-40bf-a197-eda981eb60ff/thumbnail/1200x630/7a70cb523f3c27c591e3bc0f42283967/ap22320158405104.jpg",
      "publishedAt": "2022-11-22T23:42:00Z",
      "content": "Washington — The Supreme Court on Tuesday declined to block the Treasury Department from turning over several years of former President Donald Trump's tax returns to the House Ways and Means Committe… [+5740 chars]"
    },
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Holly Bailey, Matthew Brown",
      "title": "Lindsey Graham testifies before Georgia grand jury in election probe - The Washington Post",
      "description": "After months of failed legal challenges, Sen. Lindsey O. Graham appeared before a special grand jury investigating efforts by former President Donald Trump.",
      "url": "https://www.washingtonpost.com/nation/2022/11/22/lindsey-graham-georgia-grand-jury/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/T64NEQC6WEI6ZMPPZN4L44L7BY.jpg&w=1440",
      "publishedAt": "2022-11-22T22:47:00Z",
      "content": "Comment on this story\r\nATLANTA After months of failed legal challenges, Sen. Lindsey O. Graham (R-S.C.) appeared Tuesday before a special grand jury investigating efforts by former president Donald T… [+4716 chars]"
    },
    {
      "source": { "id": null, "name": "Gizmodo.com" },
      "author": "Isaac Schultz",
      "title": "Webb Telescope Reveals Noxious Atmosphere of a Planet 700 Light-Years Away - Gizmodo",
      "description": "WASP-39b is a hot Saturn with some nasty chemicals in its skies.",
      "url": "https://gizmodo.com/webb-exoplanet-atmosphere-wasp-39b-1849813296",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/01527ee2a49f816eaa2c5e8a19db96ef.jpg",
      "publishedAt": "2022-11-22T21:42:00Z",
      "content": "Astrophysicists on Earth are no strangers to WASP-39b, an exoplanet orbiting a star about 700 light-years from Earth, though theyve never actually seen it directly. Now, the Webb Space Telescope has … [+3006 chars]"
    },
    {
      "source": { "id": "fox-sports", "name": "Fox Sports" },
      "author": null,
      "title": "World Cup 2022 highlights: Mexico-Poland battle to draw - FOX Sports",
      "description": "Mexico goalkeeper Guillermo Ochoa made an incredible save against Poland, as the teams ended in a scoreless draw. Here are the top plays!",
      "url": "https://www.foxsports.com/stories/soccer/world-cup-2022-highlights-mexico-poland-battle-to-draw",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/11/1408/814/11.21.22_WC-Top-Plays-Mexico-Poland_16x9.jpg?ve=1&tl=1",
      "publishedAt": "2022-11-22T21:29:27Z",
      "content": "The 2022 FIFA World Cup\r\n continued Tuesday with Mexico\r\n-Poland\r\n battling to a 0-0 draw, earning each squad a point in its Group C opening match. \r\nWhile Tuesday's match was scoreless, there was a … [+2077 chars]"
    },
    {
      "source": { "id": null, "name": "Page Six" },
      "author": "Kristin Contino",
      "title": "Kate Middleton looks regal in Princess Diana's favorite tiara at state banquet - Page Six",
      "description": "The Princess of Wales put on a crown for the first time in three years, opting for the iconic Lover’s Knot tiara.",
      "url": "https://pagesix.com/2022/11/22/kate-middleton-wears-princess-dianas-tiara-at-state-banquet/",
      "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/11/princess-kate-middleton-wears-pearl-tiara-princess-diana-south-african-state-banquet.jpg?quality=75&strip=all&w=1200",
      "publishedAt": "2022-11-22T21:28:00Z",
      "content": "It’s Kate Middleton’s time to shine.\r\nThe new Princess of Wales dazzled at the South African state banquet on Tuesday night, wearing the Lover’s Knot tiara, which was a favorite of the late Princess … [+3139 chars]"
    },
    {
      "source": { "id": "fox-news", "name": "Fox News" },
      "author": "Adam Shaw, Bill Melugin",
      "title": "McCarthy calls on Mayorkas to resign or potentially face impeachment inquiry: 'Enough is enough' - Fox News",
      "description": "House GOP Leader Kevin McCarthy says Republicans plan will move to impeach Secretary Alejandro Mayorkas if he does not resign when Republicans take the House next year.",
      "url": "https://www.foxnews.com/politics/mccarthy-pledges-hold-house-hearings-southern-border-when-republicans-take-majority",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/GettyImages-1411639795.jpg",
      "publishedAt": "2022-11-22T21:02:14Z",
      "content": "House Republican Leader Kevin McCarthy on Tuesday called for Homeland Security Secretary Alejandro Mayorkas to resign over his handling of the migrant crisis at the southern border or potentially fac… [+4919 chars]"
    },
    {
      "source": { "id": null, "name": "Neurosciencenews.com" },
      "author": "Neuroscience News",
      "title": "Antioxidant Flavonols Linked to Slower Memory Decline - Neuroscience News",
      "description": "Increasing consumption of food and drinks high in antioxidant flavonols helps slow memory and cognitive decline, a new study reports.",
      "url": "https://neurosciencenews.com/flavonols-memory-decline-21922/",
      "urlToImage": "https://neurosciencenews.com/files/2022/11/flavanols-cognition-neurosince-spublic.jpg",
      "publishedAt": "2022-11-22T20:58:11Z",
      "content": "Summary: Increasing consumption of food and drinks high in antioxidant flavonols helps slow memory and cognitive decline, a new study reports.\r\nSource: AAN\r\nPeople who eat or drink more foods with an… [+4331 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Guardian staff reporter",
      "title": "Fauci urges Americans to get Covid shot, as study finds new booster is best yet - The Guardian",
      "description": "The latest booster shots provide better protection than original vaccines, CDC data shows ahead of health official’s retirement",
      "url": "https://www.theguardian.com/society/2022/nov/22/fauci-covid-boosters-most-effective",
      "urlToImage": "https://i.guim.co.uk/img/media/370f03944076862265b4e1504b64028a4fb80d23/0_0_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=aa9c45f3976969ca508abb25ed90f1b9",
      "publishedAt": "2022-11-22T20:54:00Z",
      "content": "In his last appearance at the White House podium, Anthony Fauci urged Americans to get the latest Covid shot as a new study showed that the latest boosters offer better protection against new variant… [+3534 chars]"
    },
    {
      "source": { "id": null, "name": "SciTechDaily" },
      "author": null,
      "title": "Heart Disease: “Good” Cholesterol May Not Be Good for Everyone - SciTechDaily",
      "description": "Study challenges “good” cholesterol’s role in universally predicting heart disease risk. Lower levels of HDL cholesterol were associated with increased risks for heart attacks in white but not black adults, and higher levels were not protective for either gro…",
      "url": "https://scitechdaily.com/heart-disease-good-cholesterol-may-not-be-good-for-everyone/",
      "urlToImage": "https://scitechdaily.com/images/Clogged-Arteries-Cardiovascular-Disease-Heart-Attack.jpg",
      "publishedAt": "2022-11-22T20:47:36Z",
      "content": "According to a new study, which was supported by the National Institutes of Health (NIH), good cholesterol may not be as effective as scientists once believed in uniformly predicting cardiovascular d… [+5974 chars]"
    }
  ]
  constructor(){
    super();
    console.log("I am a constructor");
    this.state = {
      articles : this.articles,
      loading : false
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
             <NewsItem newsUrl={element.url} title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage}/>
           </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
