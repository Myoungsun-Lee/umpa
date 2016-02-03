var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var MoreVert = React.createClass({
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </SvgIcon>
    );
  }

});

module.exports = MoreVert;



/** WEBPACK FOOTER **
 ** ../src/svg-icons/navigation/more-vert.jsx
 **/
