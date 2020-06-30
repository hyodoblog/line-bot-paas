import { client, Line } from '../line.config'
import { makeReplyMessages } from '../lib/line'

/**
 * Main function
 * @param {event} event line event info
 * @returns {string} process content
 */
export default async (
  event: Line.WebhookEvent & Line.ReplyableEvent
): Promise<string> => {
  // Webhookの検証
  if (event.replyToken && event.replyToken.match(/^(.)\1*$/)) {
    return 'Webhookの検証'
  }

  if (!event.source.userId) {
    return ''
  }
  const { userId } = event.source
  const eventType = event.type

  try {
    switch (eventType) {
      case 'follow': {
        break
      }
      case 'unfollow': {
        break
      }
      case 'message': {
        break
      }
      default:
    }
    console.log(event)
    return ''
  } catch (err) {
    await client.pushMessage(userId, makeReplyMessages('エラーが発生しました'))
    return err
  }
}
