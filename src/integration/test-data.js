const faker = require('faker');

module.exports = generateArticleData = () => {
  const articleData = [];

  for (let i = 0; i < 50; i += 1) {
    const id = faker.random.number();
    const title = faker.lorem.text();
    const author = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const headline = faker.lorem.sentence();

    articleData.push({
      'id': id,
      'title': title,
      'author': author,
      'headline': headline
    });
  }

  return {
    'articles': articleData
  }
};