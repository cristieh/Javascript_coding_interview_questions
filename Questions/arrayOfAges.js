// An array of people with ages.  Sort, filter and display them in different ways. 

const people = [
    { 'name': 'John', 'age': 30 },
    { 'name': 'Emily', 'age': 25 },
    { 'name': 'Brian', 'age': 30 },
    { 'name': 'Sarah', 'age': 25 },
    { 'name': 'David', 'age': 40 },
    { 'name': 'Rachel', 'age': 38 },
    { 'name': 'Tom', 'age': 19 },
    { 'name': 'Zack', 'age': 25 },
    { 'name': 'Alf', 'age': 25 },
    { 'name': 'Mary', 'age': 25 },
  ];
  
  
function groupByAge(people) {
    const ageGroups = {};
  
    people.forEach(person => {
      const { age, name } = person;
      if (!ageGroups[age]) {
        ageGroups[age] = [];
      }
      ageGroups[age].push(name);
      // Sort names within the current age group
      ageGroups[age].sort();
    });
  
    // Group statistics: count the number of people in each group
    const ageGroupStats = {};
    for (const age in ageGroups) {
      ageGroupStats[age] = ageGroups[age].length;
    }
  
    return { ageGroups, ageGroupStats };
  }
  
  function findAgeRanges(people) {
    const { ageGroups, ageGroupStats } = groupByAge(people);
    const youngest = people.reduce((minAge, person) => person.age < minAge ? person.age : minAge, Infinity);
    const oldest = people.reduce((maxAge, person) => person.age > maxAge ? person.age : maxAge, 0);
    const totalAges = people.reduce((sum, person) => sum + person.age, 0);
    const averageAge = totalAges / people.length; // Assumes that the people array is not empty
  
    return {
      ageGroups,
      ageGroupStats,
      youngestAge: youngest,
      oldestAge: oldest,
      averageAge
    };
  }
  
  const { ageGroups, ageGroupStats, youngestAge, oldestAge, averageAge } = findAgeRanges(people);
  console.log({ ageGroups, ageGroupStats, youngestAge, oldestAge, averageAge });
