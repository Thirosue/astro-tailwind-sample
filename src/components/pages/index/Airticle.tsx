import { Card } from '../../../components/Card'
import { formatDate } from '../../../lib/formatDate'

interface Article {
    title: string
    date: string
    description: string
    slug: string
}

interface ArticleProps {
    article: Article
}

export const Article = ({ article }: ArticleProps) =>
    <Card as="article">A
        <Card.Title href={`/articles/${article.slug}`}>
            {article.title}
        </Card.Title>
        <Card.Eyebrow as="time" dateTime={article.date} decorate>
            {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
    </Card>
