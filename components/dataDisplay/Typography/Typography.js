import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography as BaseTypography } from "@material-ui/core";
import Tooltip from "@totalsoft_oss/rocket-ui.components.data-display.tooltip";
import typographyStyle, { emphasisType } from "./typographyStyle";
import * as R from "ramda";

const useStyles = makeStyles(typographyStyle);
const multipleValueCssProp = ["textDecoration"];

const checkCssProp = R.flip(R.contains)(multipleValueCssProp);
const getEmphasis = R.flip(R.prop)(emphasisType);
const mergeStyles = (k, l, r) => (checkCssProp(k) ? `${l} ${r}` : r);
const reduceEmphasis = R.reduce(
  (acc, elem) => R.mergeWithKey(mergeStyles, acc, getEmphasis(elem)),
  {}
);
const transformEmphasisToStyle = R.cond([
  [R.is(Array), reduceEmphasis],
  [R.is(String), getEmphasis],
  [R.T, _ => { }]
]);
const checkStyle = R.anyPass([R.isNil, R.isEmpty]);
const defaultToEmpty = R.defaultTo({});

const Typography = ({ tooltip, emphasis, style, ...res }) => {
  const classes = useStyles();
  const emphasisStyle = transformEmphasisToStyle(emphasis);
  const mergedStyle = R.mergeWithKey(
    mergeStyles,
    emphasisStyle,
    defaultToEmpty(style)
  );
  const cleanStyle = R.when(checkStyle, R.always(undefined), mergedStyle);
  const base = (
    <BaseTypography
      className={classes.defaultFont}
      style={cleanStyle}
      {...res}
    />
  );
  return tooltip ? <Tooltip title={tooltip}>{base}</Tooltip> : base;
};

Typography.defaultProps = {
  variant: "inherit"
};

Typography.propTypes = {
  /** If provided, a text will appear on hover. */
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Applies the theme typography styles. */
  variant: PropTypes.oneOf([
    "inherit",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline"
  ]),
  /** The color of the component. */
  color: PropTypes.oneOf([
    "initial",
    "inherit",
    "primary",
    "secondary",
    "textPrimary",
    "textSecondary",
    "error"
  ]),
  /** Set the text-align on the component. */
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  /** Control the text emphasis. */
  emphasis: PropTypes.oneOfType([
    PropTypes.oneOf([
      "bold",
      "italic",
      "underline",
      "line-through",
      "overline"
    ]),
    PropTypes.arrayOf(
      PropTypes.oneOf([
        "bold",
        "italic",
        "underline",
        "line-through",
        "overline"
      ])
    )
  ])
};

export default Typography;
