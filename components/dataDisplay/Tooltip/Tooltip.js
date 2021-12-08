import React from "react";
import PropTypes from "prop-types";
import { Tooltip as BaseTooltip } from "@material-ui/core";

const Tooltip = ({ children, title, arrow, interactive, leaveDelay, open, placement }) => {
  return (
    <BaseTooltip title={title} arrow={arrow} interactive={interactive} leaveDelay={leaveDelay} open={open} placement={placement}>
      <span>{children}</span>
    </BaseTooltip>
  );
};

Tooltip.defaultProps = {
  arrow: false,
  interactive: false,
  leaveDelay: 0,
  placement: 'bottom'
}

Tooltip.propTypes = {
  /** The component(s) wrapped */
  children: PropTypes.node,
  /** Tooltip title. Zero-length titles string are never displayed.*/
  title: PropTypes.node,
  /** If true, adds an arrow to the tooltip.*/
  arrow: PropTypes.bool,
  /** Makes a tooltip interactive, i.e. will not close when the user hovers over the tooltip before the leaveDelay is expired.*/
  interactive: PropTypes.bool,
  /** The number of milliseconds to wait before hiding the tooltip. This prop won't impact the leave touch delay (leaveTouchDelay).*/
  leaveDelay: PropTypes.number,
  /** If true, the tooltip is shown.*/
  open: PropTypes.bool,
  /** Tooltip placement.*/
  placement: PropTypes.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top'])
};

export default Tooltip;
