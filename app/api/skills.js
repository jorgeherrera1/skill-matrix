const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyDWh1aBTyaFvtwF'}).base('apprJ5BJVK86Rt8X8');

module.exports.listAllSkills = function() {
  const selectOpts = {fields: ['Skill']};
  const p = new Promise((resolve, reject) => {
    let allSkills = [];
    base('Skills').select(selectOpts).eachPage((records, fetchNextPage) => {
      allSkills = allSkills.concat(records.map(record => {
        return {
          skill: record.get('Skill')
        }
      }));

      fetchNextPage();
    }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(allSkills);
      }
    });
  })

  return p;
};

module.exports.listAllPeople = function() {
  const selectOpts = {fields: ['Name']};
  const p = new Promise((resolve, reject) => {
    let allPeople = [];
    base('Team').select(selectOpts).eachPage((records, fetchNextPage) => {
      allPeople = allPeople.concat(records.map(record => {
        return {
          name: record.get('Name')
        }
      }));

      fetchNextPage();
    }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(allPeople);
      }
    });
  })

  return p;
};
