import React, { Component } from 'react';
import NewsItem from './NewsItem'; 

export class News extends Component {
  articles
  constructor(){
    super();
    console.log("I am a constructor");
    this.state = {

    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" imageUrl="https://assets2.cbsnewsstatic.com/hub/i/r/2022/11/22/e74fda11-90e7-40bf-a197-eda981eb60ff/thumbnail/1200x630/7a70cb523f3c27c591e3bc0f42283967/ap22320158405104.jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription"/>
          </div>
        </div>
       
      
      </div>
    )
  }
}

export default News
