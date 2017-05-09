import React from 'react';

import Button from './components/Button';
import Header from './components/Header';
import TextInput from './components/TextInput';
import Settings from './components/Settings';
import Dropdown from './components/Dropdown';
import RangeSlider from './components/RangeSlider';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import Discovery from './components/Discovery';
import MatchesListGroup from './components/ListGroup/MatchesListGroup';
import Matches from './components/Matches';

const pages = [
  {
    title: 'Discovery',
    component: Discovery,
  },
  {
    title: 'Matches',
    component: Matches,
  },
];

export default class MainView extends React.Component{
  constructor(props){
    super(props);
    this.switchTab = this.switchTab.bind(this);
    this.addProfiles=this.addProfiles.bind(this);
    this.state = {
      activeTab: 0,
      profiles: [],
    };

    this.addProfiles = this.addProfiles.bind(this, this.state.profiles);
  }

  addProfiles(user) {
    let pro = this.state.profiles;
    pro.push(user);
    this.setState({
      profiles: pro,
    });
  }

  switchTab(ev) {
    this.setState({
      activeTab: Number(ev.target.id),
    });
  }

  renderTabs() {
    const tabs = [];
    let  index, props;

    for(let page of pages){
      index = pages.indexOf(page);
      props = {
        key: page.title,
        className: this.state.activeTab === index
          ? 'active'
          : '',
      };

      tabs.push(
        <li {...props}>
          <a href="#" onClick={this.switchTab} id={index}>
            {page.title}
            {' '}
            {page.title == 'Matches' && this.state.profiles.length > 0 ? <span className="badge">{this.state.profiles.length}</span> : ''}
          </a>
        </li>
      );
    }
    return tabs;
  }

  renderPage() {
    return pages[this.state.activeTab].component;
  }

  render() {
    const Page = this.renderPage();
    return(
      <div>
        <Header/>
        <div className="container">
          <ul className="nav nav-tabs nav-justified tabs">
              {this.renderTabs()}
           </ul>
          <div className="tab-content">
            <Page addProfiles={this.addProfiles} profiles={this.state.profiles}/>

          </div>
        </div>
      </div>
    );
  }
}
