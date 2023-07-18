import path from 'path';

import dotenv from 'dotenv';

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, '../config/config.env') });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these variables or not setup a .env file at all

interface ENV {
    NODE_ENV: string | undefined;
    PORT: number | undefined;
    BOT_TOKEN: string | undefined;
    AUTHORIZED_USERS: string | undefined;
    OPENAI_API_KEY: string | undefined;
    OPENAI_API_ORGANIZATION_ID: string | undefined;
}

interface Config {
    NODE_ENV: string;
    PORT: number;
    BOT_TOKEN: string;
    AUTHORIZED_USERS: string;
    OPENAI_API_KEY: string;
    OPENAI_API_ORGANIZATION_ID: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
    return {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PORT ? Number(process.env.PORT) : 8080,
        BOT_TOKEN: process.env.BOT_TOKEN,
        AUTHORIZED_USERS: process.env.AUTHORIZED_USERS,
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        OPENAI_API_ORGANIZATION_ID: process.env.OPENAI_API_ORGANIZATION_ID,
    };
};

// Throwing an Error if any field was undefined we don't
// want our app to run if it can't connect to DB and ensure
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type
// definition.

const getSanitizedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in config.env`);
        }
    }
    return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;
