import React, {Component} from 'react';//curly braces mean import react and pull off Component as a property called component
//give the class SearchBar all the functionality of React.Component

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }; //this.set = an obj.
  }
  render() {
    //return <input onChange={this.onInputChange} />;//create input element and pass it a prop. on change with value of this.onInputChange
    //} always manipulate state with this.setState->it lets react know state is changing and object with term lets it know.
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
        Value of the input: {this.state.term}
      </div>
    );      //Value of the input: {this.state.term}
            //the only time you change state is with this.setState .  input
    //return <input onChange={event => console.log(event.target.value)} />; this does what's below with chnage event handler using es6.
  //this is the event handler onInputChange(). eventObject is this.onInputChange-describes what happened on event.
  //the event will give the info of the change.  console.log(event.target.value);
  //onInputChange(event) {

  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
// new SearchBar -> this would create an instance of the Class searchbar.
//need to import React to all components that have jsx
//const SearchBar = () => {
//return <input />;this generates html input for user to type into cause it turns into a call react.createElement
//};this is functional component cause takes in data and puts out
export default SearchBar; //this way when searched for only searchbar gets called.
