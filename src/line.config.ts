import * as Line from '@line/bot-sdk'
import * as Types from '@line/bot-sdk/dist/types'

const accessToken = process.env.ACCESS_TOKEN as string
const channelSecret = process.env.CHANNEL_SECRET as string

const config = {
  channelAccessToken: accessToken,
  channelSecret,
}
const client = new Line.Client(config)

const errorMessage = 'エラーが発生しました'

export { client, config, errorMessage, Line, Types }
