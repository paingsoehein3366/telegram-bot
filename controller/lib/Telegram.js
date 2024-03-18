const { axiosInstance } = require('./axios');

function sendMessage(messageObj, messageText) {
      return axiosInstance.get('sendMessage', {
            chat_id: messageObj.chat.id,
            text: messageText,
      })
};

function handleMessage(messageObj) {
      const messageText = messageObj.text || "";

      if (messageText === 'Hello') {
            return sendMessage(messageObj, 'Hello! Welcom to my page!')
      } else if (messageText === 'How are you?') {
            return sendMessage(messageObj, "I'm fine")
      } else if (messageText === 'I love you') {
            return sendMessage(messageObj, ('me too.'));
      } else if (messageText === 'Where are you from?') {
            return sendMessage(messageObj, ('I from Arakan!!!!!'))
      }

      if (messageText.charAt(0) === "/") {
            const command = messageText.substr(1);
            switch (command) {
                  case 'start':
                        // We want to send a welcome message to the user.
                        return sendMessage(
                              messageObj,
                              "Hi! I'm a bot.I can help you to get started"
                        );
                  default:
                        return sendMessage(messageObj, "Hey hi,i don't know")
            }
      } else {
            // we can send same message back to the user
            return sendMessage(messageObj, messageText);
      }
};
module.exports = { handleMessage };