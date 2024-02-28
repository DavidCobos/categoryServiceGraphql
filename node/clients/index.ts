import { IOClients } from '@vtex/api'

import CategoryClient from './category'
import CategoryERPClient from './categoryerp'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {

  public get category() {
    return this.getOrSet('category', CategoryClient)
  }
  public get categoryerp() {
    return this.getOrSet('categoryerp', CategoryERPClient)
  }
}
