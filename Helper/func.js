const { openai } = require("openai");

const apiKey = process.env.API
  
const openaiInstance = new openai(apiKey);

const getChat = async (text) => {
    try {
      const response = await openaiInstance.createCompletion({
        model: "text-davinci-003",
        prompt: text,
        temperature: 0,
        max_tokens: 500,
      });
  
      return response.data.choices[0].text;
    } catch (error) {
      console.log(error);
      logger.error("Error while generating Answer");
    }
  };

module.exports = { openai, getChat };