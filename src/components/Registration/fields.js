import React from 'react';
import { TextField } from './index';

export const fieldConnect = (WrappedField) => {
    const ConnectedField = props => (
        <WrappedField
          onChange={event =>
            props.fieldChanged({
              value: event.target.value,
              test: props.test,
              onKeyChangeValidation: props.onKeyChangeValidation
            })}
          onFocus={event =>
            props.fieldFocused({
              value: event.target.value,
              test: props.test
            })}
          onBlur={event =>
            props.fieldBlurd({
              value: event.target.value,
              test: props.test
            })}
          {...props}
        />
      );
      return ConnectedField;
  };