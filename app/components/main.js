// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./form");

// Requiring our helper for making API calls
var helpers = require("../utils/helper");

// Create the Parent Component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // getInitialState: function() {
  //   return {
  //     clicks: 0,
  //     clickID: "Main"
  //   };
  // },

  //  On load display the number of clicks
  // componentDidMount: function() {
  //   console.log("COMPONENT MOUNTED");

  //   // The moment the page renders on page load, we will retrieve the previous click count.
  //   // We will then utilize that click count to change the value of the click state.
  //   helpers.getClicks()
  //     .then(function(response) {
  //       // Using a ternary operator we can set newClicks to the number of clicks in our response object
  //       // If we don't have any clicks in our database, set newClicks to 0
  //       var newClicks = response.data.length ? response.data[0].clicks : 0;
  //       this.setState({
  //         clicks: newClicks
  //       });
  //       console.log("RESULTS", response);
  //       console.log("Saved clicks", newClicks);
  //     }.bind(this));
  // },
  // Whenever our component updates, the code inside componentDidUpdate is run
  // componentDidUpdate: function(prevState) {
  //   console.log("COMPONENT UPDATED");

  //   // We will check if the click count has changed...
  //   if (prevState.clicks !== this.state.clicks) {

  //     // If it does, then update the clickcount in MongoDB
  //     helpers.saveClicks({ clickID: this.state.clickID, clicks: this.state.clicks })
  //       .then(function() {
  //         console.log("Posted to MongoDB");
  //       });
  //   }
  // },
  // // Whenever the button is clicked we'll use setState to add to the clickCounter
  // // Note the syntax for setting the state
  // handleClick: function() {
  //   this.setState({ clicks: this.state.clicks + 1 });
  // },

  // // Whenever the button is clicked we'll use setState to reset the clickCounter
  // // This will reset the clicks -- and it will be passed ALL children
  // resetClick: function() {
  //   this.setState({ clicks: 0 });
  // },

  // Here we render the function
  render: function() {
    return (
      <div className="container">

        <div className="row">
          <div className="col">
            <div className="jumbotron">
              <h2>NYT Search</h2>
              <hr />
              <p>
                <em>Search & Save your favorite NYT Articles!</em>
              </p>
                {/*
                  Here we create a button click.
                  Note how we have an onClick event associate with our handleClick function.
                */}
            </div>
          </div>
        </div>

                  {/*                        SECOND PANEL                           */}

        <div className="row">
              <div className="col">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title text-center">Form</h3>
                  </div>
                  <div className="panel-body text-center">
                    <form>
                      <div className="form-group">
                        <h4 className="">
                          <strong>Topic</strong>
                        </h4>
                        {/*
                          Note how each of the form elements has an id that matches the state.
                          This is not necessary but it is convenient.
                          Also note how each has an onChange event associated with our handleChange event.
                        */}
                        <input
                          type="text"
                          className="form-control"
                          id="topic"
                          // onChange={this.handleChange}
                          required
                        />

                        <h4>
                          <strong>Start Year</strong>
                        </h4>
                        <input
                          type="text"
                          className="form-control"
                          id="start"
                          // onChange={this.handleChange}
                          required
                        />

                        <h4>
                          <strong>End Year</strong>
                        </h4>
                        <input
                          type="text"
                          className="form-control"
                          id="end"
                          // onChange={this.handleChange}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
        </div>

      {/*                        Third Panel                           */}


      
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
