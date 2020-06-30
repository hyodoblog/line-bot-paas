import { client, Line } from '../../line.config'
import { makeReplyMessages } from '../../lib/line'

export const text = async (event: Line.MessageEvent): Promise<void> => {
  const { replyToken } = event
  await client.replyMessage(
    replyToken,
    makeReplyMessages('友達追加ありがとうございます')
  )
}
