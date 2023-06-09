import { Button, ChakraProvider, Container, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import ConnectForm from '../ConnectForm/ConnectForm';
import FormProvider from '../FormProvider/FormProvider';
import Select from '.';

const SELECT_OPTIONS = [
  {
    label: 'one',
    value: '1',
  },
  {
    label: 'Two',
    value: '2',
  },
  {
    label: 'Three',
    value: '3',
  },
];

const STATUS_OPTIONS = [
  { value: '1', label: 'Done', bg: 'green.500', color: 'white' },
  {
    value: '2',
    label: 'Backlog',
    bg: 'gray.300',
    color: 'gray.900',
  },
  {
    value: '3',
    label: 'Selected For Development',
    bg: 'gray.300',
    color: 'gray.900',
  },
  {
    value: '4',
    label: 'In Progress',
    bg: 'blue.500',
    color: 'white',
  },
];

const PRIORITY_OPTIONS = [
  { value: 'highest', label: 'Highest', icon: 'up' },
  { value: 'high', label: 'High', icon: 'up' },
  { value: 'medium', label: 'Medium', icon: 'up' },
  { value: 'low', label: 'Low', icon: 'down' },
  { value: 'lowest', label: 'Lowest', icon: 'down' },
];

const REPORTER_OPTIONS = [
  {
    value: '1',
    label: 'Lord Gaben',
    src: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
  },
  {
    value: '2',
    label: 'Baby Yoda',
    src: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
  },
  {
    value: '3',
    label: 'Pickle Rick',
    src: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
  },
];

const Story: Meta<typeof Select> = {
  component: () => {
    const commonProps = {
      options: SELECT_OPTIONS,
    };

    return (
      <ChakraProvider>
        <FormProvider
          onSubmit={(data: any) => {
            console.log({
              data,
            });
          }}
          defaultValues={{
            empty: '',
            default: SELECT_OPTIONS[1],
            composed: SELECT_OPTIONS[2],
            status: STATUS_OPTIONS[1],
            priority: PRIORITY_OPTIONS[1],
            reporter: REPORTER_OPTIONS[1],
          }}
          showDevTool
        >
          <ConnectForm>
            {(formProps: any) => {
              const {
                control,
                formState: { errors },
              } = formProps;

              const inputProps = {
                control,
                errors,
              };

              return (
                <Container
                  maxW="xl"
                  py={5}
                  display="flex"
                  flexDirection="column"
                  gap={3}
                >
                  <Select.Default
                    name="empty"
                    label="Empty"
                    required={true}
                    getOptionLabel={(option: any) =>
                      `${option.label}: ${option.value}`
                    }
                    {...inputProps}
                    {...commonProps}
                  />

                  <Select.Default
                    name="default"
                    label="Default"
                    {...inputProps}
                    isDisabled
                    required
                    {...commonProps}
                  />

                  <Select
                    name="composed"
                    label="Composed"
                    {...inputProps}
                    required
                    {...commonProps}
                  >
                    <Select.FormControl>
                      <Flex gap={2}>
                        <Select.FormLabel />
                      </Flex>
                      <Select.Component />
                      <Select.HelperText />
                      <Select.ErrorLabel />
                    </Select.FormControl>
                  </Select>

                  <Select.Default
                    name="uncontrolled"
                    label="Uncontrolled"
                    value={'1'}
                    onChange={(name: string, value: string) => {
                      console.log({ name, value });
                    }}
                    {...commonProps}
                  />

                  <Select
                    name="status"
                    label="Status"
                    {...inputProps}
                    options={STATUS_OPTIONS}
                    required
                  >
                    <Select.FormControl>
                      <Flex gap={2}>
                        <Select.FormLabel />
                        <Select.HelperText />
                      </Flex>
                      <Select.StatusComponent />
                      <Select.ErrorLabel />
                    </Select.FormControl>
                  </Select>

                  <Select
                    name="priority"
                    label="Priority"
                    {...inputProps}
                    options={PRIORITY_OPTIONS}
                    required
                  >
                    <Select.FormControl>
                      <Flex gap={2}>
                        <Select.FormLabel />
                        <Select.HelperText />
                      </Flex>
                      <Select.PriorityComponent />
                      <Select.ErrorLabel />
                    </Select.FormControl>
                  </Select>

                  <Select
                    name="reporter"
                    label="Reporter"
                    {...inputProps}
                    options={REPORTER_OPTIONS}
                    required
                  >
                    <Select.FormControl>
                      <Flex gap={2}>
                        <Select.FormLabel />
                        <Select.HelperText />
                      </Flex>
                      <Select.ReporterComponent />
                      <Select.ErrorLabel />
                    </Select.FormControl>
                  </Select>

                  <Select.Default
                    name="uncontrolled"
                    label="Uncontrolled"
                    value={'1'}
                    onChange={(name: string, value: string) => {
                      console.log({ name, value });
                    }}
                    {...commonProps}
                  />

                  <Flex>
                    <Button type="submit">Submit</Button>
                  </Flex>
                </Container>
              );
            }}
          </ConnectForm>
        </FormProvider>
      </ChakraProvider>
    );
  },
  title: 'Forms/Input Select',
};

export default Story;

export const Default = {
  args: {},
};
