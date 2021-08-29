import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

export default class PostsController {
  public async index ({request, view}: HttpContextContract) {

    const page = request.input('page', 1)
    const limit = 10
    const posts = await Database.from('posts').paginate(page, limit)

    // Changes the baseURL for the pagination links
    posts.baseUrl('/posts')

    return view.render('posts/index', { posts })
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
