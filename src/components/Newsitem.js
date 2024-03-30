import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {tittle, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card"><span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex: '1'}}>{source}</span>
            <img src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{tittle}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href= {newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
