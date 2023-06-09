import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Heading,
  Spinner,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { ProjectSettingForm } from 'ui';
import * as fromInterface from '../../ts';

const ProjectSetting = () => {
  // VARIABLES

  // HOOKS
  const dispatch = useDispatch();

  // LOCAL STATE

  // SELECTORS

  // FUNCITONS

  return (
    <Box maxW="2xl" mx="auto" h="100vh" p={8} minHeight="100vh">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="sm" href="#">
            Projects
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink fontSize="sm" href="#">
            Singularity 1.0
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink fontSize="sm" href="#">
            Project Details
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading mb={4} fontSize="24px" fontWeight="medium" lineHeight="short">
        Project Details
      </Heading>

      <ProjectSettingForm projectCategoriesOptions={[]} />
    </Box>
  );
};

export default ProjectSetting;
