// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
  res.status(200).json({ name: 'Hello, world!' });
};
