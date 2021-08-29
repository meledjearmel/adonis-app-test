import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'
import Faker, { random } from 'faker'
import slugify from 'slugify'

export default class PostSeeder extends BaseSeeder {
  public async run () {
    Faker.locale = 'fr'
    for (let index = 0; index < 50; index++) {

      let fakeTitle = Faker.lorem.words(10)

      let post = await Post.create({
        slug: slugify(fakeTitle),
        title: fakeTitle,
        excerpt: Faker.lorem.paragraph(),
        content: Faker.lorem.paragraphs(3),
      })

      console.log(post)

    }
  }
}
