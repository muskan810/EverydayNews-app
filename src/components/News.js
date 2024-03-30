import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizedFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        // console.log("constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizedFirstLetter(this.props.category)} - EverydayNews`;
    }

    // async updateNews(){
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=feb69c4c4a5447558e2d54daa2c12a9a&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    //     this.setState({loading: true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({
    //         articles: parsedData.articles, 
    //         totalResults: parsedData.totalResults, 
    //         loading: false
    //     })
    // }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=feb69c4c4a5447558e2d54daa2c12a9a&page=1&pagesize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults, 
            loading: false
        })
    }

    handlePrevClick = async()=>{
        // console.log("prev");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=feb69c4c4a5447558e2d54daa2c12a9a&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
        // this.updateNews();
    }

    handleNextClick = async()=>{
        // console.log("next");
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=feb69c4c4a5447558e2d54daa2c12a9a&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({loading: true})
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
            // this.updateNews();
        }
    }

    render() {
        return (
        <div className="container my-3">
            <h1 className="text-center" style={{margin: '35px'}}>EverydayNews - Top {this.capitalizedFirstLetter(this.props.category)} Headlines</h1>
            {this.state.loading && <Spinner/>}
            <div className="row">
                {!(this.state.loading) && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <Newsitem tittle = {element.title?element.title.slice(0, 45):""} description ={element.description?element.description.slice(0, 88):""} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
                    </div>
                })}  
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
        )
    }
}

export default News
