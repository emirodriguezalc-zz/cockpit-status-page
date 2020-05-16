import React, { Component } from 'react';
import testData from '../../data/testData.json';
import ContentBox from '../contentBox';
import './styles.css';

class DataBox extends Component {
  render() {
    return (
      <div>
        {testData.map((item) => {
          return (
            <div>
              <div className="data-box-title">{item.name}</div>
              <div className="data-box-content">
                <ContentBox
                  firstTitle={item.status ? 'Status' : 'Link Status'}
                  firstValue={item.status ? item.status : item.link_status}
                  secondTitle={item.volt ? 'Volt' : 'Bps'}
                  secondValue={item.volt ? item.volt : item.bps} />
              </div>
            </div>
          )
        }
        )}
      </div>

    );
  }
}

export default DataBox;
