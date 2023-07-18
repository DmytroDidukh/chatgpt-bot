import config from 'config/config';

import type { IContext } from 'typescript/interfaces';

const authorizedUsers: string[] = config.AUTHORIZED_USERS.split(',');

function isAuthenticated(ctx: IContext, next: () => Promise<void>) {
    if (ctx.session?.authenticated) {
        return next();
    }

    const userId = ctx.message.from.id.toString();
    const isUserAuthorized = authorizedUsers.includes(userId);

    if (isUserAuthorized) {
        ctx.session ??= { authenticated: true };
        return next();
    }

    return ctx.reply('ERROR: FORBIDDEN');
}

const authMiddlewares = { isAuthenticated };

export { authMiddlewares };
