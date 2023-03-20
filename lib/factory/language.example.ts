interface Language {
    name: string,
    code: string
}

class English implements Language {
    name = "English";
    code = "en"
}


class Turkish implements Language {
    name = "Turkish";
    code = "tr"
}

class LanguageFactory {
    createLanguage(code: string): Language {
        switch (code) {
            case "en":
                return new English();
            case "tr":
                return new Turkish();
            default:
                throw new Error("plase create a new language")
        }
    }
}

const factory = new LanguageFactory()
const language = factory.createLanguage("en")
console.log(language.name);


