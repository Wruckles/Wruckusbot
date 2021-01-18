module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Music", {
    type: "Playing",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
