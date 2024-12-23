import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgurl, newsUrl}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" src={imgurl} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
      </div>
    </div>
    </div>
    )
  }
}

export default NewsItem