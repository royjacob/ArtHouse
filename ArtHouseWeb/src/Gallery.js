import React, { Component } from 'react';

export class Gallery extends Component {

    constructor(props) {
        super(props);
        console.info(props);
      }

    renderImage(image) {
        console.info(image)
        return (
            <div class="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
                <a href="https://www.flickr.com/photos/leshaines123/9199788659/in/photolist-f1XjDR-oqUsF4-eGN3fd-uLvGyn-nsUXqP-6tKPeq-h2Bwtz-6oVtec-3vzcD-nhKUBn-eGN7RY-atDkE4-6qpKgh-5qhbkM-eXSJSR-8YGjfD-eXSK7n-c3hvqo-ddvqc2-h1FgsH-4W6bip-dcnDYJ-ejny6W-bEnete-qoSUSt-nyApt1-cs1Paf-oanrNv-dmE5c9-c4Sgiq-nLYPa4-eHQbYp-fn8csk-uq4gKy-fp186j-7ZcaSx-6wMKEA-kERNCe-veHJHy-eGNaj5-4VddEM-rXUqrU-9X8YXf-87nMXX-tKCh7h-u88G4h-nHuLus-9WPUyn-8fjvkU-nKyT33">
                    <img src="https://c2.staticflickr.com/6/5515/9199788659_818383d0b8_k.jpg"
                        alt="Meadow"/>
                </a>

                <aside class="photo-box-caption">
                    <span>
                        by <a href="https://www.flickr.com/photos/leshaines123/9199788659/in/photolist-f1XjDR-oqUsF4-eGN3fd-uLvGyn-nsUXqP-6tKPeq-h2Bwtz-6oVtec-3vzcD-nhKUBn-eGN7RY-atDkE4-6qpKgh-5qhbkM-eXSJSR-8YGjfD-eXSK7n-c3hvqo-ddvqc2-h1FgsH-4W6bip-dcnDYJ-ejny6W-bEnete-qoSUSt-nyApt1-cs1Paf-oanrNv-dmE5c9-c4Sgiq-nLYPa4-eHQbYp-fn8csk-uq4gKy-fp186j-7ZcaSx-6wMKEA-kERNCe-veHJHy-eGNaj5-4VddEM-rXUqrU-9X8YXf-87nMXX-tKCh7h-u88G4h-nHuLus-9WPUyn-8fjvkU-nKyT33">Les Haines</a>
                    </span>
                </aside>
            </div>
        );
    }

    render() {
      return (
        <div className="pure-g">
            <div className="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
                <a href="https://www.flickr.com/photos/127412116@N03">
                    <img src="https://farm5.staticflickr.com/4861/31095868427_aea53b7437_b.jpg" width="1024" height="753" alt="PukekoGroup"/>
                </a>
                <aside className="photo-box-caption">
                    <span>by <a href="/">Pukeko</a></span>
                </aside>
            </div>
            <div className="text-box pure-u-1 pure-u-md-1-2 pure-u-lg-2-3">
                <div className="l-box">
                    <h1 className="text-box-head">Iconic Kiwi Flora and Fauna</h1>
                    <p className="text-box-subhead">Rendered using Oil Pencils</p>
                    <button class="pure-button">
                        <i className=".ico"></i>
                    </button>
                </div>
            </div>
            { this.props.library.map(image => this.renderImage(image)) }
        </div>
      );
    }
  }
