class Formatter {
    static formatNumByComma(n) {
        if (!n) {
            return n;
        }
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}

module.exports = Formatter;
