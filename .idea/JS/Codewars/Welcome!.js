//Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries.
// Marketing thinks it would be great to welcome visitors to the site in their own language.
// Luckily you already use an API that detects the user's location, so this is an easy win.
// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
function greet(language) {
  switch (language){
    case 'english': return 'Welcome';
    case 'czech':return 'Vitejte';
      break;
    case 'danish': return'Velkomst';break;
    case 'dutch': return'Welkom';break;
    case 'estonian': return'Tere tulemast';break;
    case 'finnish': return'Tervetuloa';break;
    case 'flemish': return'Welgekomen';break;
    case 'french':return 'Bienvenue';break;
    case 'german': return'Willkommen';break;
    case 'irish': return'Failte';break;
    case 'italian':return 'Benvenuto';break;
    case 'latvian': return'Gaidits';break;
    case 'lithuanian':return 'Laukiamas';break;
    case 'polish': return'Witamy';break;
    case 'spanish': return'Bienvenido';break;
    case 'swedish': return'Valkommen';break;
    case 'welsh': return'Croeso';break;
    default: return'Welcome';break;}
}