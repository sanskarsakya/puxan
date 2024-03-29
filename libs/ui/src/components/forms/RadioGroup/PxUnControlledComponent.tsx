import {
  Box,
  Radio,
  RadioGroup,
  Stack,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
import { PxUncontrollerComponentProps } from './interface';
import { usePxRadioGroup } from './usePxRadioGroup';

import * as fromHelpers from '../../../helpers';
import { isEmpty } from 'lodash';

function RadioCard(props: any) {
  const { state, getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  const { errors, name } = usePxRadioGroup();

  return (
    <Box as="label">
      <input {...input} />
      {props.children({ checkbox, state })}
    </Box>
  );
}

// THIS IS MAIN COMPONENT FOR COMPONENT INJECTION
function Example(props: any) {
  const { components, name, errors, ...contextRest } = usePxRadioGroup();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: props.name,
    value: props.value,
    onChange: props.onChange,
  });

  // omit ref to prevent forwardref related error
  const { ref, ...rest } = getRootProps();

  const error =
    errors && fromHelpers.resolveObjectValueByPath(errors, name)?.message;

  const isInvalid = !isEmpty(error);

  return (
    <components.wrapper {...rest}>
      {props.options.map((option: any) => {
        const radio = getRadioProps({ value: option.value });

        return (
          <RadioCard key={option.value} {...radio}>
            {({ checkbox, state }: any) => {
              return (
                <components.item
                  option={option}
                  {...checkbox}
                  state={state}
                  isInvalid={isInvalid}
                  {...contextRest}
                />
              );
            }}
          </RadioCard>
        );
      })}
    </components.wrapper>
  );
}

export const PxUncontrollerComponent = (
  props: PxUncontrollerComponentProps
) => {
  const {
    onChangeRHF,
    // contains rhf defined value
    ...rest
  } = props;

  const pxContext = usePxRadioGroup();

  const {
    name,
    options,

    // this is user defined value for uncontrolled component
    value,
    onChange: _onChange,
  } = pxContext;

  const handleChange = (fromValue: any) => {
    _onChange?.(name, fromValue);
    onChangeRHF?.(fromValue);
  };

  return (
    <Example
      onChange={handleChange}
      name={name}
      value={value}
      options={options}
      {...rest}
    />
  );
};

// LEVERAGE COMPONENT INJECTION AS WELL
