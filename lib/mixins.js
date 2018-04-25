class Mixins {
    static calcDistance(fromLat, fromLon, toLat, toLon) {
        const RADIUS = 6371;
        const toRad = function (n) {
            return n * Math.PI / 180;
        };
        var dLat = toRad(toLat - fromLat);
        var dLon = toRad(toLon - fromLon);
        var fLat = toRad(fromLat);
        var tLat = toRad(toLat);
        var a = Math.pow(Math.sin(dLat / 2), 2) +
            (Math.pow(Math.sin(dLon / 2), 2) * Math.cos(fLat) * Math.cos(tLat));
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return RADIUS * c * 0.62;
    }
}

module.exports = Mixins;