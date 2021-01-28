
export default class Http {
  private readonly host: string
  private readonly devHost = 'http://localchost:5000'
  private readonly prodHost = ''

  constructor() {
    const isDev = process.env.NODE_ENV == 'development'
    this.host = isDev ? this.devHost : this.prodHost
  }

  public async post () {
    try {
      
    } catch (error) {
      
    }
  }

}