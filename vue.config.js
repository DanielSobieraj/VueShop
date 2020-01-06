module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/VueShop'
        : 'https://danielsobieraj.github.io/VueShop/',
    "transpileDependencies": [
        "vuetify"
    ]
};
