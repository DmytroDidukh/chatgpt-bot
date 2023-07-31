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
        const isUserAdmin = config.ADMIN_ID === userId;

        ctx.session ??= { authenticated: true, isAdmin: isUserAdmin };
        return next();
    }

    return ctx.reply('ERROR: FORBIDDEN');
}

const authMiddlewares = { isAuthenticated };

export { authMiddlewares };
