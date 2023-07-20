import React from "react";

declare module "number-multiplier" {
  interface NumberMultiplierProps {
    // Add any specific props your component might use
    // For this example, we don't need any additional props.
  }

  const NumberMultiplier: React.FC<NumberMultiplierProps>;
  export default NumberMultiplier;
}
