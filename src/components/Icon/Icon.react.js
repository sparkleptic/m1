// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +className?: string,
  /**
   * Should this icon be rendered within an <a> tag
   */
  +link?: boolean,
  +prefix?: "fa" | "fe" | "flag" | "payment",
  +name: string,
  +isAriaHidden?: boolean,
  +payment?: boolean,
|};

function Icon({
  prefix: prefixFromProps = "fe",
  name,
  className,
  link,
  isAriaHidden,
  payment,
}: Props): React.Node {
  const prefix = payment ? "payment" : prefixFromProps;
  const classes = cn(
    {
      [prefix]: true,
      [`${prefix}-${name}`]: true,
    },
    className
  );
  const extraProps = isAriaHidden
    ? {
        "aria-hidden": "true",
      }
    : null;

  return !link ? (
    <i className={classes} />
  ) : (
    <a className="icon" {...extraProps}>
      <i className={classes} />
    </a>
  );
}

Icon.displayName = "Icon";

/** @component */
export default Icon;
