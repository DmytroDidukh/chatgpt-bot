import { Context } from 'telegraf';

interface ISession {
    authenticated: boolean;
    isAdmin: boolean;
}

interface IMessage {
    text: string;
}

interface IContext extends Context {
    session?: ISession;
    message: IMessage & Context['message'];
}

export { IContext };
