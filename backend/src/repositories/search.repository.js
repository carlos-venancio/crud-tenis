import produto from "../models/Produto.js";

const { q } = req.query;

 if (!q) {
    return res.status(400).json({ error: 'a busca não pode estar vazia.' });
 }

 try {
    const products = await produto.find({
      $or: [
        { modelo: { $regex: q, $options: 'i' } },
        { fk_marcanome: { $regex: q, $options: 'i' } },
      ],
    });

    if (!products.length) {
      return res.status(404).json({ error: 'nenhum produto encontrado.' });
    }

    return res.json(products);
 } catch (error) {
    return res.status(500).json({ error: 'erro ao pesquisar produtos.' });
 };
