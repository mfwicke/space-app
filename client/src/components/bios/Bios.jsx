import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./bios.css"

class Bios extends Component {
  render() {
    return (
      <div className='Bios'>
        <h1 className='display-1 text-center my-3'>Here you can read some more info!</h1>
        <div className='row'>
          {this.props.bios.map((d, idx) => {
            const pushingUrl = `/contacts/${d.name.toLowerCase()}`;
            return (
              <div
                className='Bio col-md-6 col-lg-4 text-center'
                key={`${idx}${d.name}`}
              >
                <img
                  src={d.src}
                  alt={d.name}
                  onClick={() => this.props.history.push(pushingUrl)}
                />
                <h3 className='mt-3'>
                  <Link
                    className='underline'
                    to={`/contacts/${d.name.toLowerCase()}`}
                  >
                    {d.name}
                  </Link>
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Bios;