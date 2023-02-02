# Subiect 2 (2.5 pts)
# Tematica: Javascript

# Avand urmatoarea functie function `bowdlerize(input, dictionary)` unde:
- `input` este un string (ex. "This is a cat")
- `dictionary` este un vector ce contine o serie de string-uri.

# Completati urmatoarele taskuri:
- `input` trebuie sa fie de tip `string`. Daca este dat un input de alt tip se va arunca un `Error` cu mesajul `Input should be a string`; (0.5 pts)
- `dictionary` este un vector de elemente de tip `string`. Daca cel putin un element nu este `string` se va arunca un `Error` cu mesajul `Invalid dictionary format`; (0.5 pts)
- Daca `dictionary` contine cuvinte, vor fi inlocuite in `input` cu prima litera, urmată de  o serie de caractere `*` urmate de ultima litera. Lungimea cuvantului rezultat este acceasi ca a celui initial (ex. 'test' va deveni 't**t') ; (0.5 pts)
- Se va returna un nou string, `input` nefiind modificat; (0.5 pts)
- Functia returneaza rezultatul corect si pentru cuvinte care incep cu litere mari. (0.5 pts)