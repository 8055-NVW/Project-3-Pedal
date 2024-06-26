

export function sendError(error, res) {
  console.error(error)


  if (error.name === 'ValidationError') return res.status(422).json(error)

  if (error.name === 'DocumentNotFoundError') return res.status(404).json({ message: error.query })

  if (error.name === 'MongoServerError' && error.code === 11000) {
    const [keyName, keyValue] = Object.entries(error.keyValue)[0]
    return res.status(409).json({
      [keyName]: `${keyValue} has already been used. Please select another ${keyName}.`,
    })
  }

  return res.status(500).json({ message: 'Something went wrong' })
}

export const sendUnauthorized = (res) => {
  return res.status(401).json({ message: 'Please confirm details and try again' })
}

