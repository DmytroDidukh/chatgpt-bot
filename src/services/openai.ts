import { Configuration, OpenAIApi } from 'openai';

import config from 'config/config';
import { OPENAI_MODELS } from 'consts/index';

const configuration = new Configuration({
    apiKey: config.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getAnswer(question: string): Promise<string> {
    try {
        const response = await openai.createCompletion({
            model: OPENAI_MODELS.DAVINCI,
            prompt: question,
            temperature: 0.5,
            max_tokens: 1000,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
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
