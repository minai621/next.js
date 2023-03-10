import data from '../../../data/articles';

export default (req, res) => {
  const id = req.query.id;
  const requestedArticle = data.find((article) => article.id === id);
  requestedArticle
    ? res.status(200).json(requestedArticle)
    : res.status(404).json({ error: 'not found' });
};
