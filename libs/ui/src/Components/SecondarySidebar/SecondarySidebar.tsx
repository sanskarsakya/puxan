import React from 'react';
import { Box, Divider, HStack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CalendarIcon, SettingsIcon } from '@chakra-ui/icons';

interface ObsidianLogoProps {
  height?: number;
  width?: number;
}
const ObsidianLogo = (props:ObsidianLogoProps) => {
  const { height = 40, width= 40 } = props
  
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 256 332"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <radialGradient
          cx="72.819%"
          cy="96.934%"
          fx="72.819%"
          fy="96.934%"
          r="163.793%"
          gradientTransform="rotate(-104 11141.322 0)"
          id="a"
        >
          <stop stopColor="#FFF" stopOpacity={0.4} offset="0%" />
          <stop stopOpacity={0.1} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="52.917%"
          cy="90.632%"
          fx="52.917%"
          fy="90.632%"
          r="190.361%"
          gradientTransform="rotate(-82 10746.75 0)"
          id="b"
        >
          <stop stopColor="#FFF" stopOpacity={0.6} offset="0%" />
          <stop stopColor="#FFF" stopOpacity={0.1} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="31.174%"
          cy="97.138%"
          fx="31.174%"
          fy="97.138%"
          r="178.714%"
          gradientTransform="rotate(-77 10724.606 0)"
          id="c"
        >
          <stop stopColor="#FFF" stopOpacity={0.8} offset="0%" />
          <stop stopColor="#FFF" stopOpacity={0.4} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="71.813%"
          cy="99.994%"
          fx="71.813%"
          fy="99.994%"
          r="92.086%"
          gradientTransform="translate(0 22251839.658) skewY(-90)"
          id="d"
        >
          <stop stopColor="#FFF" stopOpacity={0.3} offset="0%" />
          <stop stopOpacity={0.3} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="117.013%"
          cy="34.769%"
          fx="117.013%"
          fy="34.769%"
          r="328.729%"
          gradientTransform="rotate(102 -1004.443 0)"
          id="e"
        >
          <stop stopColor="#FFF" stopOpacity={0} offset="0%" />
          <stop stopColor="#FFF" stopOpacity={0.2} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="-9.431%"
          cy="8.712%"
          fx="-9.431%"
          fy="8.712%"
          r="153.492%"
          gradientTransform="rotate(45 1674.397 0)"
          id="f"
        >
          <stop stopColor="#FFF" stopOpacity={0.2} offset="0%" />
          <stop stopColor="#FFF" stopOpacity={0.4} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="103.902%"
          cy="-22.172%"
          fx="103.902%"
          fy="-22.172%"
          r="394.771%"
          gradientTransform="rotate(80 3757.522 0)"
          id="g"
        >
          <stop stopColor="#FFF" stopOpacity={0.1} offset="0%" />
          <stop stopColor="#FFF" stopOpacity={0.3} offset="100%" />
        </radialGradient>
        <radialGradient
          cx="99.348%"
          cy="89.193%"
          fx="99.348%"
          fy="89.193%"
          r="203.824%"
          gradientTransform="translate(0 -38783246.548) skewY(-90)"
          id="h"
        >
          <stop stopColor="#FFF" stopOpacity={0.2} offset="0%" />
          <stop stopColor="#FFF" stopOpacity={0.2} offset="50%" />
          <stop stopColor="#FFF" stopOpacity={0.3} offset="100%" />
        </radialGradient>
      </defs>
      <path
        d="M209.056 308.305c-2.043 14.93-16.738 26.638-31.432 22.552-20.823-5.658-44.946-14.616-66.634-16.266l-33.317-2.515a22.002 22.002 0 0 1-14.144-6.522L6.167 246.778a21.766 21.766 0 0 1-4.244-24.124s35.36-77.478 36.775-81.485c1.257-4.008 6.13-39.211 8.958-58.07a22.002 22.002 0 0 1 7.072-12.965L122.462 9.47a22.002 22.002 0 0 1 31.903 2.672l57.048 71.978a23.18 23.18 0 0 1 4.872 14.38c0 13.594 1.179 41.646 8.8 59.72a236.756 236.756 0 0 0 27.974 45.732 11.001 11.001 0 0 1 .786 12.258c-4.95 8.408-14.851 24.595-28.76 45.26a111.738 111.738 0 0 0-16.108 46.834h.079Z"
        fillOpacity={0.3} />
      <path
        d="M209.606 305.79c-2.043 15.009-16.737 26.717-31.432 22.71-20.744-5.737-44.79-14.695-66.555-16.345L78.38 309.64a21.923 21.923 0 0 1-14.144-6.6L6.874 244.106a21.923 21.923 0 0 1-4.243-24.36s35.438-77.792 36.774-81.878c1.336-4.007 6.13-39.289 8.958-58.305a22.002 22.002 0 0 1 7.072-13.044L123.17 5.621a22.002 22.002 0 0 1 31.902 2.75l56.97 72.292a23.338 23.338 0 0 1 4.871 14.38c0 13.673 1.18 41.804 8.723 59.955a238.092 238.092 0 0 0 27.974 45.969 11.001 11.001 0 0 1 .864 12.336c-5.03 8.487-14.851 24.674-28.838 45.497a112.603 112.603 0 0 0-16.03 46.99Z"
        fill="#6C31E3" />
      <path
        d="M70.365 307.44c26.638-53.983 25.93-92.722 14.537-120.225-10.372-25.459-29.781-41.489-45.025-51.468a19.233 19.233 0 0 1-1.415 4.243L2.631 219.747a21.923 21.923 0 0 0 4.321 24.36l57.284 58.933a23.762 23.762 0 0 0 6.129 4.4Z"
        fill="url(#a)" />
      <path
        d="M142.814 197.902a86.025 86.025 0 0 1 21.06 4.793c21.844 8.172 41.724 26.56 58.147 61.999 1.179-2.043 2.357-4.008 3.615-5.894a960.226 960.226 0 0 0 28.838-45.497 11.001 11.001 0 0 0-.786-12.336 238.092 238.092 0 0 1-28.052-45.969c-7.544-18.073-8.644-46.282-8.723-59.955 0-5.186-1.65-10.294-4.871-14.38l-56.97-72.292-.943-1.178c4.165 13.75 3.93 24.752 1.336 34.731-2.357 9.272-6.757 17.68-11.394 26.56-1.571 2.986-3.143 6.05-4.636 9.193a110.01 110.01 0 0 0-12.415 45.576c-.786 19.016 3.064 42.825 15.716 74.65h.078Z"
        fill="url(#b)" />
      <path
        d="M142.736 197.902c-12.652-31.824-16.502-55.633-15.716-74.65.786-18.858 6.286-33.002 12.415-45.575l4.715-9.193c4.558-8.88 8.88-17.288 11.315-26.56a61.684 61.684 0 0 0-1.336-34.731c-8.136-8.94-21.96-9.642-30.96-1.572L55.436 66.519a22.002 22.002 0 0 0-7.072 13.044l-8.25 54.69c0 .55-.158 1.022-.236 1.572 15.244 9.901 34.574 25.931 45.025 51.312 2.043 5.029 3.772 10.294 5.029 16.03a157.157 157.157 0 0 1 52.805-5.343v.078Z"
        fill="url(#c)" />
      <path
        d="M178.253 328.5c14.616 4.007 29.31-7.701 31.353-22.789a120.225 120.225 0 0 1 12.494-41.017c-16.502-35.44-36.382-53.827-58.148-61.999-23.18-8.643-48.404-5.736-74.021.472 5.736 26.01 2.357 60.034-19.487 104.273 2.436 1.257 5.186 1.965 7.936 2.2l34.496 2.593c18.701 1.336 46.597 11.001 65.377 16.266Z"
        fill="url(#d)" />
      <path
        d="M127.177 122.074c-.864 18.859 1.493 40.39 14.144 72.135l-3.929-.393c-11.394-33.081-13.908-50.054-13.044-69.149.786-19.094 6.994-33.789 13.123-46.361 1.571-3.143 5.186-9.037 6.758-12.023 4.557-8.879 7.622-13.515 10.215-21.609 3.772-11.315 2.986-16.658 2.514-22.001 2.908 19.251-8.172 35.988-16.501 53.04a113.939 113.939 0 0 0-13.358 46.361h.078Z"
        fill="url(#e)" />
      <path
        d="M88.674 188.551c1.571 3.458 2.907 6.287 3.85 10.608l-3.379.786c-1.336-5.029-2.357-8.643-4.322-12.965-11.472-26.953-29.86-40.861-44.79-51.076 18.074 9.744 36.697 25.066 48.64 52.647Z"
        fill="url(#f)" />
      <path
        d="M92.681 202.617c6.286 29.467-.786 66.948-21.609 103.409 17.445-36.146 25.931-70.8 18.859-102.938l2.75-.55v.079Z"
        fill="url(#g)" />
      <path
        d="M164.659 199.867c34.181 12.808 47.383 40.86 57.205 64.355-12.18-24.516-29.074-51.626-58.462-61.684-22.317-7.7-41.175-6.758-73.471.55l-.707-3.143c34.26-7.858 52.176-8.8 75.435 0v-.078Z"
        fill="url(#h)" />
    </svg>
  );
};



interface SecondarySidebarProps {
  items: string[];
  routeEnum: any;
}

export const SecondarySidebar = ({
  items,
  routeEnum,
}: SecondarySidebarProps) => {
  const lowerMenus = [
    'Releases',
    'Issues and filters',
    'Pages',
    'Reports',
    'Components',
  ];
  return (
    <VStack
      borderRight="1px"
      borderColor="gray.200"
      left={14}
      bg="gray.50"
      px={4}
      py={6}
      w={56}
      h="100vh"
      flexShrink={0}
      spacing={6}
      alignItems="Start"
    >
      <HStack alignItems="center" spacing={2}>
        <ObsidianLogo />
        <Box>
          <Text fontSize="sm">Singularity 1.0</Text>
          <Text fontSize="xs">Software Project</Text>
        </Box>
      </HStack>
      <Box w="full">
        <Link to={routeEnum.PROJECTBOARD}>
          <HStack
            cursor="pointer"
            spacing={3}
            p={3}
            borderRadius="sm"
            _hover={{ bg: 'gray.200' }}
          >
            <CalendarIcon color="gray.600" h={4} w={4} />
            <Text color="gray.900" fontSize="sm">
              Kanban Board
            </Text>
          </HStack>
        </Link>
        <Link to={routeEnum.PROJECTSETTING}>
          <HStack
            cursor="pointer"
            spacing={3}
            p={3}
            borderRadius="sm"
            _hover={{ bg: 'gray.200' }}
          >
            <SettingsIcon color="gray.600" h={4} w={4} />
            <Text color="gray.900" fontSize="sm">
              Project Settings
            </Text>
          </HStack>
        </Link>
      </Box>
      <Divider borderColor="gray.400" />
      <Box w="full">
        {lowerMenus.map((menu, idx: number) => {
          return (
            <HStack
              cursor="not-allowed"
              key={idx}
              spacing={3}
              px={3}
              py={2}
              borderRadius="sm"
              _hover={{ bg: 'gray.200' }}
            >
              <Box
                h={5}
                w={5}
                borderRadius="sm"
                flexShrink={0}
                bg="gray.400"
              ></Box>
              <Text fontSize="sm">{menu}</Text>
            </HStack>
          );
        })}
      </Box>
    </VStack>
  );
};
