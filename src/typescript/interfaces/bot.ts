import { Context } from 'telegraf';

interface ISession {
    authenticated: boolean;
}

interface IContext extends Context {
    session?: ISession;
}

export { IContext };
