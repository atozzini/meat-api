import * as restify from 'restify'
import { Router } from '../common/router'


class UsersRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get('/users', (req, resp, next) => {
      resp.json({ message: 'users router' })
    })
  }
}

export const usersRouter = new UsersRouter()
