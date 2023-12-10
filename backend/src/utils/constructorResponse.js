export default {
  200: (res, message) =>
    res.status(200).send({
      message,
    }),
  201: (res, message, data) =>
    res.status(201).send({
      message,
      data,
    }),
  500: (res, message, error) =>
    res.status(500).send({
      message,
      error,
    }),
  400: (res, message) =>
    res.status(400).send({
      message,
    }),
  401: (res, message) =>
    res.status(401).send({
      message,
    }),
};
