# How to

- Create an angular project
- In any html, write your text and only put <i18n> pipe
- Then e

# Commandes

- Launch the website with french
> ng serve --configuration=fr

- By default, the command creates a file named messages.xlf in your src/
> ng xi18n

- Change location
> ng xi18n --output-path src/locale

- Change the file name
> ng xi18n --out-file source.xlf
	
- Change the format 
> ng xi18n  --i18n-format=xlf
> ng xi18n  --i18n-format=xlf2
> ng xi18n  --i18n-format=xmb

- Specify the locale
> ng xi18n --i18n-locale fr

- Start angular app with a language
> ng serve --aot \
           --i18n-file=src/i18n/messages.es.xlf \
           --locale=es \
           --i18n-format=xlf


## Information

- i18n is a custom attribute, recognized by Angular tools and compilers. After translation, 
the compiler removes it. It is not an Angular directive.
    <h1 i18n>Hello i18n!</h1>

- You add context by beginning the i18n attribute value with the meaning and separating it 
from the description with the | character: <meaning>|<description>
    <h1 i18n="site header|An introduction header for this sample">Hello i18n!</h1>

- To mark an attribute for translation, add an attribute in the form of i18n-x, where x is the name of the attribute to translate.
    <img [src]="logo" i18n-title title="Angular logo" />    

### Pluralization

- How to use a plural ICU expression to display one of those three options based on when the update occurred

    <span i18n>Updated {minutes, plural, =0 {just now} =1 {one minute ago} other {{{minutes}} minutes ago}}</span>

    .The first parameter is the key. It is bound to the component property (minutes), which determines the number of minutes.
    .The second parameter identifies this as a plural translation type.
    .The third parameter defines a pluralization pattern consisting of pluralization categories and their matching values.

Pluralization categories include (depending on the language):
=0 (or any other number)
zero
one
two
few
many
other

### select ICU expression
- The following format message in the component template binds to the component's gender property
    <span i18n>The author is {gender, select, male {male} female {female} other {other}}</span>


### Nesting plural and select ICU expressions
- You can also nest different ICU expressions together, as shown :

<span i18n>Updated: {minutes, plural,
  =0 {just now}
  =1 {one minute ago}
  other {{{minutes}} minutes ago by {gender, select, male {male} female {female} other {other}}}}
</span>



## Other tutorials

- https://angular-templates.io/tutorials/about/angular-internationalization-i18n-multi-language-app

## Other translate services

- https://github.com/ngx-translate/core