const MobileDetect = require('mobile-detect');
class Browser {
    /*eslint complexity: off*/
    static checkIsBrowser(req) {
        let userAgent = req && req.headers ? req.headers['user-agent'] : '';
        if (!userAgent) {
            return false;
        }
        userAgent = userAgent.toLowerCase();
        const isBot = (userAgent.indexOf('bot') >= 0 || userAgent.indexOf('slurp') >= 0 || userAgent.indexOf('ia_archiver') >= 0 || userAgent.indexOf('teoma') >= 0 || userAgent.indexOf('curl') >= 0 || userAgent.indexOf('gamespy') >= 0 || userAgent.indexOf('grub') >= 0 || userAgent.indexOf('scooter') >= 0 || userAgent.indexOf('wget') >= 0 || userAgent.indexOf('yahoo') >= 0 || userAgent.indexOf('baiduspider') >= 0 || userAgent.indexOf('healthchecker') >= 0 || userAgent.indexOf('jikespider') >= 0);
        const isBrowser = (userAgent.indexOf('msie') >= 0 || userAgent.indexOf('firefox') >= 0 || userAgent.indexOf('safari') >= 0 || userAgent.indexOf('netscape') >= 0 || userAgent.indexOf('pie') >= 0 || userAgent.indexOf('konqueror') >= 0 || userAgent.indexOf('gecko') >= 0 || userAgent.indexOf('mozilla') >= 0 || userAgent.indexOf('palmos') >= 0 || userAgent.indexOf('applewebkit') >= 0 || userAgent.indexOf('opera') >= 0 || userAgent.indexOf('psp') >= 0 || userAgent.indexOf('links') >= 0 || userAgent.indexOf('w3m') >= 0 || userAgent.indexOf('lynx') >= 0);
        return !isBot && isBrowser;
    }

    static getClientIPAddress(req) {
        var ip = (req.headers['x-forwarded-for'] || '').split(',')[0] || (req.connection ? req.connection.remoteAddress : '');
        if (ip) {
            ip = ip.replace('::ffff:', '');
        }
        return ip;
    }

    static getBrowserInfo(req) {
        const ua = req && req.headers['user-agent'];
        const md = new MobileDetect(ua);
        let language = 'en';
        if (req && req.acceptsLanguages() && req.acceptsLanguages().length) {
            language = req.acceptsLanguages()[0];
        }
        const isMobile = (md.mobile() !== null);
        return {
            isMobile: isMobile,
            isPhone: md ? !!md.phone() : false,
            isTablet: md ? !!md.tablet() : false,
            userAgent: req ? req.headers['user-agent'] : '',
            OS: isMobile ? md.os() : 'Desktop',
            language: language,
            ip: Browser.getClientIPAddress(req),
            isUserBrowser: Browser.checkIsBrowser(req),
            requestUrlRaw: req.url,
            referUrl: (req && req.headers && req.headers.referer) ? req.headers.referer : '',
            session: req.session,
            cookies: req.cookies
        };
    }
}

module.exports = Browser;
