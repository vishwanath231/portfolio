self.__BUILD_MANIFEST = function(s, e) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, e, "static/chunks/pages/index-59b6eb8595c1aeab.js"],
        "/_error": ["static/chunks/pages/_error-a4ba2246ff8fb532.js"],
        "/index-dark": [s, e, "static/chunks/pages/index-dark-1cb80652b0aadbd2.js"],
        "/intro": ["static/chunks/pages/intro-fca6ae0288273e24.js"],
        sortedPages: ["/", "/_app", "/_error", "/index-dark", "/intro"]
    }
}("static/chunks/590-180e89d4c2cff508.js", "static/chunks/737-26fee00dc835e358.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();