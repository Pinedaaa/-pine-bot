module.exports = {
    name: 'pause',
    aliases: ['pause', 'hold'],
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`${client.emotes.error} | ¡Aquí no hay nada en la cola ahora mismo!`)
      if (queue.paused) {
        queue.resume()
        return message.channel.send('Reanudé la canción para ti :)')
      }
      queue.pause()
      message.channel.send('Pausé la canción para ti :)')
    }
  }