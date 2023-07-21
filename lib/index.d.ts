import * as React from "react";

declare interface NumberMultiplierProps {
  multiplier?: number;
}

declare class NumberMultiplier extends React.Component<NumberMultiplierProps> {
  constructor(props: NumberMultiplierProps);

  state: {
    number: number;
    result: number;
  };

  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  render(): React.ReactNode;
}

//===================================================
declare interface NumberDividerProps {
  divider?: number;
}

declare class NumberDivider extends React.Component<NumberDividerProps> {
  constructor(props: NumberDividerProps);

  state: {
    number: number;
    result: number;
  };

  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  render(): React.ReactNode;
}

export { NumberMultiplier, NumberDivider };
