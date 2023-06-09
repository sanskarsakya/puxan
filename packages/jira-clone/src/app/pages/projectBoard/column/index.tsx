import { Box, Flex, Text } from '@chakra-ui/react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import useFlexGridMaker from '../../../hooks/use-flex-grid-maker';
import CardWrapper from '../card-wrapper';

const Column = (props: any) => {
  const { EACH_COL_WIDTH, GUTTER_WIDTH } = useFlexGridMaker();

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided: any) => (
        <Box
          w={EACH_COL_WIDTH}
          px={GUTTER_WIDTH}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Flex
            w="full"
            direction="column"
            border="1px"
            borderColor="gray.300"
            borderRadius="md"
            minWidth="220px"
            bg="gray.100"
            minHeight={96}
          >
            <Text
              textTransform="uppercase"
              fontSize="xs"
              p="2"
              {...provided.dragHandleProps}
            >
              {props.column.name}
            </Text>
            <Droppable droppableId={props.column.id} type="task">
              {(provided: any, snapshot: any) => (
                <Box
                  p="2"
                  bg={`${snapshot.isDraggingOver ? 'gray.300' : 'white'}`}
                  transition="background-color 0.5s ease"
                  // flexGrow=""
                  minHeight="100px"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <CardWrapper
                    handleOpenIssueDetailModal={
                      props.handleOpenIssueDetailModal
                    }
                    blocks={props.blocks}
                  />
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </Flex>
        </Box>
      )}
    </Draggable>
  );
};

export default Column;
