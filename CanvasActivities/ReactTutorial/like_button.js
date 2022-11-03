"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like"
    );
  }
}
const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
<script type="text/babel">
    const root = ReactDOM.createROOT(
        document.getElementById('mydiv')
    );
    const element = <h1>Hello, world</h1>
    root.render(element);
</script>