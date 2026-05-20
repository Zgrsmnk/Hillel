import { Component } from "react";

class EmojiList extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="emoji">
                {this.props.emojis.map((emoji, index) => (
                    <div key={index} onClick={() => this.props.addCount(index)}>
                        <h1>{emoji}</h1>
                        <p className="counts">{this.props.counts[index]}</p>
                    </div>
                ))}
            </div>
        );
    };
};

export default EmojiList;