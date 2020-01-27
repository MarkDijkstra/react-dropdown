import React from 'react';
import {NavLink} from "react-router-dom";
import propTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';

export class Dropdown extends React.Component {

    constructor(props){
      super(props)
      this.state = {
          menuOpen: false,
      }

      this.toggleMenu         = this.toggleMenu.bind(this);
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    toggleMenu() {
      if (!this.state.menuOpen) {
        document.addEventListener('click', this.handleOutsideClick, false);
      } else {
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
  
      this.setState(prevState => ({
        menuOpen: !prevState.menuOpen
      }));
    }

    handleOutsideClick(e) {
      if (this.options === 'undefined' || this.props.options[0].allowClickOutside != true) {

          if (this.node.contains(e.target)) {
              return;
          }

          this.toggleMenu();
      }      
    }

    render() {

      const{menuOpen} = this.state;
      const{buttonLabel, items, className, options} = this.props;
    
      let iconOpen;
      let iconClose    = null;
      let targetClass  = '';
      let wrapperClass = '';
      let triggerClass = '';
      let contentClass = '';
      let stateClass   = menuOpen ? 'open' : 'closed';

      if(className){
         targetClass = wrapperClass +' '+ stateClass + ' ' + className;
      }else{
         targetClass = wrapperClass +' '+ stateClass;
      }

      if(options !== undefined){
          wrapperClass = options[0].wrapperClass ? options[0].wrapperClass : '';
          triggerClass = options[0].triggerClass ? options[0].triggerClass : '';
          contentClass = options[0].contentClass ? options[0].contentClass : '';
          iconOpen     = options[0].openIcon  ? options[0].openIcon  : null;
          iconClose    = options[0].closeIcon ? options[0].closeIcon : iconOpen;
      }

      return (
        <div className={targetClass} onClick={() => this.toggleMenu()}>

            <div className={triggerClass}>
                  <span>{buttonLabel}</span>                
                  {!menuOpen && iconOpen &&
                    <FeatherIcon icon={iconOpen} size="15"/> 
                  }
                  {menuOpen && iconClose &&
                    <FeatherIcon icon={iconClose} size="15"/> 
                  }
            </div>
            {menuOpen && items &&
              <div className={contentClass} ref={node => { this.node = node; }}>           
                  {items.map((item, index) => {
                    if(item.divider){
                        return <hr key={`dd-divider-${index}`}/>
                    }else{
                      return <NavLink activeClassName='active' exact to={item.route} key={`dd-menu-${index}`}>
                                 {item.label}
                             </NavLink>
                    }
                  })}             
              </div>
            }
        </div>
      )
    }
}

const PropTypes = {
  items: propTypes.arrayOf(
      propTypes.shape({
        route: propTypes.string,
        label: propTypes.string,
      })
  ).isRequired
};

Dropdown.propTypes = PropTypes;