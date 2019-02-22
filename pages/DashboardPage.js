import React from 'react';


class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    return(<div><h3> Welcome!</h3></div>);
  }
}
export default DashboardPage;
