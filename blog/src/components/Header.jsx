import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
// React Icons
import IoSocialFacebook from 'react-icons/lib/io/social-facebook';
import IoSocialTwitter from 'react-icons/lib/io/social-twitter';
import IoSocialInstagramOutline from 'react-icons/lib/io/social-instagram-outline';
import IoSocialYoutube from 'react-icons/lib/io/social-youtube';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginBottom: 10,
    },
    social: {
        fontSize: 17,
    },
    flex: {
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
});

export const Header = ({classes}) =>
    <div className={classes.root}>
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton color="inherit" className={classes.social}>
                    <IoSocialTwitter/>
                </IconButton>
                <IconButton color="inherit" className={classes.social}>
                    <IoSocialFacebook/>
                </IconButton>
                <IconButton color="inherit" className={classes.social}>
                    <IoSocialInstagramOutline/>
                </IconButton>
                <IconButton color="inherit" className={classes.social}>
                    <IoSocialYoutube/>
                </IconButton>

                <FormControl
                    className={classNames(classes.margin, classes.withoutLabel, classes.textField, classes.flex)}
                    aria-describedby="weight-helper-text"
                >
                    <Input
                        id="search"
                        endAdornment={<InputAdornment position="end">Search</InputAdornment>}
                        inputProps={{
                            'aria-label': 'Weight',
                        }}
                    />
                </FormControl>
            </Toolbar>
        </AppBar>
    </div>
;

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);