import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// utils
import {request} from '../utils/request';

const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
        request('article').then(articles => this.setState({articles: articles})).catch(err => console.log(err));
    }

    render() {
        const {classes} = this.props;
        const {articles} = this.state;

        return (
            <Paper className={classes.card}>
                    <List component="nav">
                        {articles.map((item, index) => {
                            return (
                                <ListItem key={`article-item-${index}`}>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                                )
                        })}
                        {/*<Divider />*/}
                    </List>
            </Paper>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);