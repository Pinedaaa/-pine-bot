module.exports = {
    name: 'volume',
    aliases: ['v', 'set', 'set-volume'],
    inVoiceChannel: true,
    run: async (client, message, args) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`¡No hay nada en la cola ahora mismo!`)
      const volume = parseInt(args[0])
      if (isNaN(volume)) return message.channel.send(`¡Por favor ingrese un número valido!`)
      queue.setVolume(volume)
      message.channel.send(`Volumen ajustado a \`${volume}\``)
    }
  }