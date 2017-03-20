const graphql = require('graphql');

const skillsApi = require('./app/api/skills');

const skillType = new graphql.GraphQLObjectType({
  name: 'Skill',
  fields: {
    skill: {
      type: graphql.GraphQLString
    }
  }
});

const personType = new graphql.GraphQLObjectType({
  name: 'Person',
  fields: {
    name: {
      type: graphql.GraphQLString
    }
  }
});

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    skills: {
      type: new graphql.GraphQLList(skillType),
      resolve: () => skillsApi.listAllSkills()
    },
    people: {
      type: new graphql.GraphQLList(personType),
      resolve: () => skillsApi.listAllPeople()
    }
  }
});

const schema = new graphql.GraphQLSchema({
  query: queryType
});

module.exports = schema;