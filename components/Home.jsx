import React from 'react'
import { withRouter } from 'react-router-dom';

const Home = props => console.log('home props: ', props) || (
    <h3>Home Page</h3>
);

export default withRouter(Home);
