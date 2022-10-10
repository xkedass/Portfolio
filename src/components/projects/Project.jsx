import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Project extends Component {
    state ={
        showInfo: false,
        message : 'name',
    }
    handleInfo = () => {
      this.setState({
        showInfo:!this.state.showInfo
      })
    }
    handleMessage = () => {
      this.setState({
        message:this.state.message
      })
    }

  render() {
    let {name, languagesIcons, source, info, picture, status} =this.props.item;



    return (
      <div className="project container-fluid">
        <NavLink activeclassname = 'visible' className="banner"> 
          <div>
            {this.state.message && <h3 className='message'> {this.state.message}</h3>}
          </div>
          <p> cliquez pour découvrir </p>
          <img
            src={picture}
            alt="presentation du projet"
            onClick={this.handleInfo}
          />
        </NavLink>
        

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="button"
                    target="blank"
                  >
                    Source
                  </a>
                </div>
              </div>

              <p className="text">{info}</p>
              <div className="button return" onClick={this.handleInfo}>
                Retourner sur la page
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}