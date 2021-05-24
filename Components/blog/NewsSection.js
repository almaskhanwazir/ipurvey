import React, { useState } from "react";

const NewsSection = () => {
  const [topNewsItems, setTopNewsItems] = useState([
    {
      value: 1,
      src: "https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    },
    { value: 2, src: "https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" },
    {
      value: 1,
      src: "https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    },

    { value: 3, src: "https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" },
    {
      value: 1,
      src: "https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    },

    { value: 1, src: "https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" },
    {
      value: 1,
      src: "https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    },

    { value: 2, src: "https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" },
    {
      value: 1,
      src: "https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    },
  ]);

  const [socialFeeds, setsSocialFeed] = useState([

    { value: 3, src: "../../static/png/aeroplane1.png" },
    {
      value: 1,
      src: "../../static/png/aeroplane1.png",
    },

    { value: 1, src: "../../static/png/aeroplane1.png" },
    {
      value: 1,
      src: "../../static/png/aeroplane1.png",
    },

    { value: 2, src: "../../static/png/aeroplane1.png" },
    {
      value: 1,
      src: "../../static/png/aeroplane1.png",
    },
  ]);
  const topNews = () => {
    return topNewsItems.map((item, index) => {
      return (
        <div className="card col-md-4" key={index}>
          
          <div className="card-body">
          <img src={item.src} className="card-img-top" alt="..." />
            <h5 className="card-title">Lorem ipsum dolor sir</h5>
            <p className="card-text">
              <small className="text-muted-custom">
                January 2021 | 5:00 pm
              </small>
            </p>
            <p>
              <a href="#" className="link-primary ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do adipiscing elit, sed do
              </a>
            </p>
            <a href="#" className="link-primary right">
              Learn more &#8594;
            </a>
          </div>
        </div>
      );
    });
  };

  const socialFeed = () => {
    return socialFeeds.map((item, index) => {
      return (
        <div className="card col-md-4" key={index}>
          <img src={item.src} className="card-img-top" alt="..." />
          
        </div>
      );
    });
  };

  return (
    <div className="container news-section col-md-8 offset-md-2">
      <div className="row">
        <div className="col-md-7 topnews">
          <h1>Top News</h1>
          <div className="row">{topNews()}</div>
        </div>
        <div className="col-md-5 socialFeeds">
          <h3>facebook Feeds</h3>
          <div className="row fb">
              {socialFeed()}
              <button type="button" class="btn">
              <span class="fbIcon"></span>
                  Follow us on facebook
                  </button>
          </div>
          <h3>Instagram Feeds</h3>
          <div className="row insta">
              {socialFeed()}
              <button type="button" class="btn">
                <span class="instaIcon"></span>
              Follow us on instagram
              </button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
