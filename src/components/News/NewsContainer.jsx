import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getNews, resetIsLoading} from "../../redux/news-reducer";
import News from "./News";
import Preloader from "../common/Preloader/Preloader";

class NewsContainer extends React.Component {

  componentDidMount() {
    this.props.getNews();
    this.props.resetIsLoading();
  }

  render() {
    return <>
      {this.props.isLoading
        ? <Preloader/>
        : <News news={this.props.news}/>
      }
    </>
  }
}

let mapStateToProps = (state) => {
  return ({
    news: state.newsPage.news,
    isLoading: state.newsPage.isLoading
  })
}

export default compose(
  connect(mapStateToProps, {getNews, resetIsLoading}),
  withRouter
)(NewsContainer);




