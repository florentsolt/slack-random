export default async function handler(request, response) {
  if (
    request.body === undefined ||
    request.body.text === undefined ||
    request.body.text.trim().length < 1
  ) {
    return response.status(200).json({
      text: 'Invalid request',
    });
  }

  const items = request.body.text.split(' ').map((i) => i.trim());
  const winner = items[Math.floor(Math.random() * items.length)];

  return response.status(200).json({
    response_type: 'in_channel',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'plain_text',
          text: `And the winner is : ${winner} 🎉`,
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'plain_text',
            text: items.join(', ') || '',
            emoji: true,
          },
        ],
      },
    ],
  });
}
