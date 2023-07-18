import { Configuration, OpenAIApi } from 'openai';

import config from 'config/config';

const configuration = new Configuration({
    apiKey: config.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getAnswer(question: string): Promise<string> {
    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: question,
            temperature: 0,
        });

        return response.data.choices[0].text;
    } catch (e) {
        console.log('OPENAI ERROR: ', e);
    }
}

const openaiService = {
    getAnswer,
};

export { openaiService };
