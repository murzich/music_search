import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SongsItem from '../songs_item/songs_item';
import 'animate.css';
import './songs_list.css';

class SongsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedItem: -1
        };
    }

    render() {
        const listItems = this.props.songsList.map((item, i) => {
            return (
                <SongsItem 
                    key={item.trackId.toString()} 
                    item={item} 
                    id={i} 
                    callback={this.handleClick} 
                    expanded={ this.state.expandedItem === i }
                />
            )
        });

        return (
            <main className="list" >
                <ListTitle listLength={listItems.length} />

                <ReactCSSTransitionGroup
                    component="ul"
                    className="list__songs"
                    transitionName={{
                        appear: 'animated',
                        appearActive: 'fadeInDown',
                        leave: 'animated',
                        leaveActive: 'pulse',
                        enter: 'animated',
                        enterActive: 'fadeIn'
                    }}
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>

                    {listItems}
                </ReactCSSTransitionGroup>
            </main>
        )
    }

    handleClick = (id) => {
        this.setState( (prevState) => {
            if (prevState.expandedItem === id) {
                return {expandedItem: -1};
            } else {
                return {expandedItem: id};
            }
        });
    }
}

const ListTitle = ( {listLength} ) => {
    
    return !listLength ? (
        <h2 className="list__dummy" >
            Please, input your request!
        </h2>
    ) : (
        <header className="list__header" >
            <div className="list__title">
                Artist
            </div>
            <div className="list__title">
                Track
            </div>
            <div className="list__title">
                Collection
            </div>
            <div className="list__title">
                Genre
            </div>
        </header>
    )
}

export default SongsList;