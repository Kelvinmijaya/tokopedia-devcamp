import React, { Component } from "react";
import { number, bool, func } from "prop-types";

// Assets
import { VariantBubble } from "./style";

class VariantCard extends Component {
  handleChangeVariant = () => {
    const { changeVariant, id } = this.props;
    changeVariant(id);
  };

  render() {
    const { color, activeID, id } = this.props;

    return (
      <VariantBubble
        active={activeID === id}
        color={color}
        onClick={this.handleChangeVariant}
      />
    );
  }
}

VariantCard.propTypes = {
  active: bool.isRequired,
  activeID: number,
  changeVariant: func,
  id: number.isRequired,
};

VariantCard.defaultProps = {
  activeID: 0,
  changeVariant: () => {}
};

export default VariantCard;
