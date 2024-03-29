import { faker } from '@faker-js/faker';
import uniqueId from 'lodash/uniqueId';
export const seedProjectCategories = [
  { id: uniqueId(), name: 'Software' },
  { id: uniqueId(), name: 'Marketing' },
  { id: uniqueId(), name: 'Business' },
];
export const seedUsers = [
  {
    id: uniqueId(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.internet.avatar(),
  },
  {
    id: uniqueId(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.internet.avatar(),
  },
];

export const seedProjects = [
  {
    id: uniqueId(),
    name: faker.random.words(),
    url: faker.internet.url(),
    description: faker.hacker.phrase(),
    projectCategoryId: seedProjectCategories[0].id,
  },
  {
    id: uniqueId(),
    name: faker.random.words(),
    url: faker.internet.url(),
    description: faker.hacker.phrase(),
    projectCategoryId: seedProjectCategories[0].id,
  },
];

export const seedIssueType = [
  {
    id: uniqueId(),
    name: 'story',
  },
  {
    id: uniqueId(),
    name: 'bug',
  },
  {
    id: uniqueId(),
    name: 'task',
  },
];

export const seedIssueStatuses = [
  {
    id: uniqueId(),
    name: 'backlog',
    position: 1,
    bg: "gray.300",
    color: "gray.900",
  },
  {
    id: uniqueId(),
    name: 'inprogress',
    position: 2,
    bg: "blue.500",
    color: "white",
  },
  {
    id: uniqueId(),
    name: 'Selected For Development',
    position: 3,
    bg: "gray.300",
    color: "gray.900",
  },
  {
    id: uniqueId(),
    name: 'done',
    position: 4,
    bg: "green.500",
    color: "white",
  },
];

export const seedIssuePriorities = [
  {
    id: uniqueId(),
    name: 'Highest',
    icon: 'up',
  },
  {
    id: uniqueId(),
    name: 'High',
    icon: 'up',
  },
  {
    id: uniqueId(),
    name: 'Medium',
    icon: 'up',
  },
  {
    id: uniqueId(),
    name: 'Low',
    icon: 'down',
  },
  {
    id: uniqueId(),
    name: 'Lowest',
    icon: 'down',
  },
];

export const seedIssues = [
  {
    id: uniqueId(),
    title: faker.random.words(),
    typeId: seedIssueType[0].id,
    statusId: seedIssueStatuses[0].id,
    priorityId: seedIssuePriorities[0].id,
    listPosition: 0,
    description: faker.hacker.phrase(),
    descriptionText: faker.hacker.phrase(),
    reporterId: seedUsers[0].id,
    projectId: seedProjects[0].id,
  },
  {
    id: uniqueId(),
    title: faker.random.words(),
    typeId: seedIssueType[0].id,
    statusId: seedIssueStatuses[0].id,
    priorityId: seedIssuePriorities[0].id,
    listPosition: 0.1,
    description: faker.hacker.phrase(),
    descriptionText: faker.hacker.phrase(),
    reporterId: seedUsers[0].id,
    projectId: seedProjects[0].id,
  },
  {
    id: uniqueId(),
    title: faker.random.words(),
    typeId: seedIssueType[0].id,
    statusId: seedIssueStatuses[0].id,
    priorityId: seedIssuePriorities[0].id,
    listPosition: 0.2,
    description: faker.hacker.phrase(),
    descriptionText: faker.hacker.phrase(),
    reporterId: seedUsers[0].id,
    projectId: seedProjects[0].id,
  },
  {
    id: uniqueId(),
    title: faker.random.words(),
    typeId: seedIssueType[0].id,
    statusId: seedIssueStatuses[0].id,
    priorityId: seedIssuePriorities[0].id,
    listPosition: 0.3,
    description: faker.hacker.phrase(),
    descriptionText: faker.hacker.phrase(),
    reporterId: seedUsers[0].id,
    projectId: seedProjects[0].id,
  },
  {
    id: uniqueId(),
    title: faker.random.words(),
    typeId: seedIssueType[0].id,
    statusId: seedIssueStatuses[1].id,
    priorityId: seedIssuePriorities[0].id,
    listPosition: 0,
    description: faker.hacker.phrase(),
    descriptionText: faker.hacker.phrase(),
    reporterId: seedUsers[0].id,
    projectId: seedProjects[0].id,
  },
  {
    id: uniqueId(),
    title: faker.random.words(),
    typeId: seedIssueType[0].id,
    statusId: seedIssueStatuses[1].id,
    priorityId: seedIssuePriorities[0].id,
    listPosition: 0.1,
    description: faker.hacker.phrase(),
    descriptionText: faker.hacker.phrase(),
    reporterId: seedUsers[0].id,
    projectId: seedProjects[0].id,
  },
  {
    id: uniqueId(),
    title: faker.random.words(),
    typeId: seedIssueType[0].id,
    statusId: seedIssueStatuses[2].id,
    priorityId: seedIssuePriorities[0].id,
    listPosition: 0.2,
    description: faker.hacker.phrase(),
    descriptionText: faker.hacker.phrase(),
    reporterId: seedUsers[0].id,
    projectId: seedProjects[0].id,
  },
  {
    id: uniqueId(),
    title: faker.random.words(),
    typeId: seedIssueType[0].id,
    statusId: seedIssueStatuses[2].id,
    priorityId: seedIssuePriorities[0].id,
    listPosition: 0.3,
    description: faker.hacker.phrase(),
    descriptionText: faker.hacker.phrase(),
    reporterId: seedUsers[0].id,
    projectId: seedProjects[0].id,
  },
  {
    id: uniqueId(),
    title: faker.random.words(),
    typeId: seedIssueType[0].id,
    statusId: seedIssueStatuses[3].id,
    priorityId: seedIssuePriorities[0].id,
    listPosition: 0,
    description: faker.hacker.phrase(),
    descriptionText: faker.hacker.phrase(),
    reporterId: seedUsers[0].id,
    projectId: seedProjects[0].id,
  },
  {
    id: uniqueId(),
    title: faker.random.words(),
    typeId: seedIssueType[0].id,
    statusId: seedIssueStatuses[3].id,
    priorityId: seedIssuePriorities[0].id,
    listPosition: 0.1,
    description: faker.hacker.phrase(),
    descriptionText: faker.hacker.phrase(),
    reporterId: seedUsers[0].id,
    projectId: seedProjects[0].id,
  },
  {
    id: uniqueId(),
    title: faker.random.words(),
    typeId: seedIssueType[0].id,
    statusId: seedIssueStatuses[3].id,
    priorityId: seedIssuePriorities[0].id,
    listPosition: 0.2,
    description: faker.hacker.phrase(),
    descriptionText: faker.hacker.phrase(),
    reporterId: seedUsers[0].id,
    projectId: seedProjects[0].id,
  },
  {
    id: uniqueId(),
    title: faker.random.words(),
    typeId: seedIssueType[0].id,
    statusId: seedIssueStatuses[3].id,
    priorityId: seedIssuePriorities[0].id,
    listPosition: 0.3,
    description: faker.hacker.phrase(),
    descriptionText: faker.hacker.phrase(),
    reporterId: seedUsers[0].id,
    projectId: seedProjects[0].id,
  },
];

export const seedProjectUsers = [
  {
    id: uniqueId(),
    projectId: seedProjects[0].id,
    userId: seedUsers[0].id,
  },
  {
    id: uniqueId(),
    projectId: seedProjects[0].id,
    userId: seedUsers[1].id,
  },
  {
    id: uniqueId(),
    projectId: seedProjects[1].id,
    userId: seedUsers[0].id,
  },
  {
    id: uniqueId(),
    projectId: seedProjects[1].id,
    userId: seedUsers[1].id,
  },
];

export const seedComments = [
  {
    id: uniqueId(),
    body: faker.hacker.phrase(),
    userId: seedUsers[0].id,
    issueId: seedIssues[0].id,
  },
];

export const seedAssignees = [
  {
    id: uniqueId(),
    issueId: seedIssues[0].id,
    userId: seedUsers[0].id,
  },
  {
    id: uniqueId(),
    issueId: seedIssues[0].id,
    userId: seedUsers[1].id,
  },
];
