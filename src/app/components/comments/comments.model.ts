export class CommentsModel {
    id: number
    respondsTo: { id: number }
    author: { id: number, username: string }
    timestamp: Date
    content: string
    title: string
    subtitle: string
}
