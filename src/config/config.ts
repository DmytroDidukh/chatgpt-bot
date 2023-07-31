import path from 'path';

import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

interface ENV {
    BOT_TOKEN: string | undefined;
    BOT_TOKEN_DEV: string | undefined;
    AUTHORIZED_USERS: string | undefined;
    ADMIN_ID: string | undefined;
    OPENAI_API_KEY: string | undefined;
    OPENAI_API_ORGANIZATION_ID: string | undefined;
}

interface Config {
    BOT_TOKEN: string;
    BOT_TOKEN_DEV: string;
    AUTHORIZED_USERS: string;
    ADMIN_ID: string;
    OPENAI_API_KEY: string;
    OPENAI_API_ORGANIZATION_ID: string;
}

const getConfig = (): ENV => {
    return {
        BOT_TOKEN: process.env.BOT_TOKEN,
        BOT_TOKEN_DEV: process.env.BOT_TOKEN_DEV,
        AUTHORIZED_USERS: process.env.AUTHORIZED_USERS,
        ADMIN_ID: process.env.ADMIN_ID,
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        OPENAI_API_ORGANIZATION_ID: process.env.OPENAI_API_ORGANIZATION_ID,
    };
};

const getSanitizedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in .env config file.`);
        }
    }
    return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;
