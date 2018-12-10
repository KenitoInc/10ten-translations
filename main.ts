
let data = require('./countries.json');

function getTranslations (data, translation_key){
    try{
        let available_translations = data.filter(country => (country.translations.hasOwnProperty(translation_key)));
        if (available_translations.length < 1){

            throw new Error('Translations  missing');
        }
        else {

            return available_translations.map(country => (country.translations[translation_key].official)).join('\n');
        }
    }
    catch(e) {
        console.log((<Error>e).message);
    }
}


try {
    const translation_key: string = process.argv.splice(2)[0];
    if (!translation_key || translation_key.length < 1) {
        throw new Error("Translation Key is missing");
    }
    else {
        console.log(getTranslations(data, translation_key));
    }

} catch (e) {
    console.log(e.message);
}
