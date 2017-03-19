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

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    skills: {
      type: new graphql.GraphQLList(skillType),
      resolve: () => {
        return skillsApi.listAllSkills()
      }
    }
  }
});

const schema = new graphql.GraphQLSchema({
  query: queryType
});

module.exports = schema;