import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?category=business&apiKey=6ff394712a7640d9a7ba102fda8e9c43";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles});
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top HeadLines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,100):" "} imgurl={element.urlToImage?element.urlToImage:"https://wallup.net/wp-content/uploads/2016/01/3038-Roronoa_Zoro-Nico_Robin-One_Piece-seagulls.jpg"} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
export default News