import { client, Line } from '../line.config'
import { makeReplyMessages } from '../lib/line'

module.exports = async (event: Line.MessageEvent) => {
  const { replyToken } = event
  await client.replyMessage(
    replyToken,
    makeReplyMessages('エラーが発生しました')
  )
}
