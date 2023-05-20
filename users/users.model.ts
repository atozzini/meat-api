const users = [
  { id: '1', name: 'Peter Parker', email: 'peter@marve.com' },
  { id: '2', name: 'Bruce Wayne', email: 'bruce@dc.com' },
]

export class User {
  static findAll(): Promise<any[]> {
    return Promise.resolve(users)
  }

  static findById(id: string): Promise<any> {
    return new Promise(resolve => {
      const fintered = users.filter(user => user.id === id)
      let user = undefined

      if (fintered.length > 0) {
        user = fintered[0]
      }
      resolve(user)
    })
  }
}
