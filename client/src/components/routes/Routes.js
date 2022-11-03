import React, { Component } from 'react';
import Bio from '../bio/Bio';
import Bios from '../bios/Bios';
import { Route, Switch, Redirect } from 'react-router-dom';

class Routes extends Component {
  render() {
      const getBio = props => {
      const name = props.match.params.bioName;
      const bioData = this.props.bios.find(
        d => d.name.toLowerCase() === name.toLowerCase()
      );
      if (!bioData) {
        return <Redirect to='/contacts' />;
      }
      return <Bio {...bioData} {...props} />;
    };
    return (
      <Switch>
        <Route
          exact
          path='/contacts'
          render={routerProps => (
            <Bios bios={this.props.bios} {...routerProps} />
          )}
        />
        <Route exact path='/contacts/:bioName' render={getBio} />
        <Redirect to='/contacts' />
      </Switch>
    );
  }
}

export default Routes;