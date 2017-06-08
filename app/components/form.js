// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Form = React.createClass({
  render: function() {
    return (
      <div className="container">
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

      </div>     
    );
  }
});

module.exports = Form;
