/**
 * Ejemplo mi primer proyecto con Jison utilizando Nodejs en Ubuntu
 */
 %{ const Nodo = require('./nodo');
    let arreglo = [];
    let comentarios = [];
  %} 

/* Definición Léxica */
%lex


%options case-sensitive

%%

/* comentarios */
"//".*                                { comentarios.push( yytext )}
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]   { comentarios.push( yytext )}

// \'[^"]*\'                                                      {}

//Cadenas
\"[^"]*\"                                                           { arreglo.push( new Nodo(yytext, 500)) }

//Palabras Clave
"while"                     { arreglo.push( new Nodo(yytext, 100)) }
"do"                        { arreglo.push( new Nodo(yytext, 100)) }
"for"                       { arreglo.push( new Nodo(yytext, 100)) }
"if"                        { arreglo.push( new Nodo(yytext, 100)) }
"else"                      { arreglo.push( new Nodo(yytext, 100)) }
"switch"                    { arreglo.push( new Nodo(yytext, 100)) }
"case"                      { arreglo.push( new Nodo(yytext, 100)) }
"break"                     { arreglo.push( new Nodo(yytext, 100)) }
"continue"                  { arreglo.push( new Nodo(yytext, 100)) }

"int"                       { arreglo.push( new Nodo(yytext, 100)) }
"char"                      { arreglo.push( new Nodo(yytext, 100)) }
"string"                    { arreglo.push( new Nodo(yytext, 100)) }
"float"                     { arreglo.push( new Nodo(yytext, 100)) }
"bool"                      { arreglo.push( new Nodo(yytext, 100)) }
"double"                    { arreglo.push( new Nodo(yytext, 100)) }
"true"                      { arreglo.push( new Nodo(yytext, 100)) }
"false"                     { arreglo.push( new Nodo(yytext, 100)) }
"void"                      { arreglo.push( new Nodo(yytext, 100)) }

"struct"                    { arreglo.push( new Nodo(yytext, 100)) }
"endl"                      { arreglo.push( new Nodo(yytext, 100)) }
"return"                    { arreglo.push( new Nodo(yytext, 100)) }
"const"                     { arreglo.push( new Nodo(yytext, 100)) }
"include"                   { arreglo.push( new Nodo(yytext, 100)) }
"template"                  { arreglo.push( new Nodo(yytext, 100)) }
"cout"                      { arreglo.push( new Nodo(yytext, 100)) }
"cin"                       { arreglo.push( new Nodo(yytext, 100)) }


//Operadores
//de fjujo
">>"                        { arreglo.push( new Nodo(yytext, 300)) }
"<<"                        { arreglo.push( new Nodo(yytext, 300)) }  
//relacionales
">="                        { arreglo.push( new Nodo(yytext, 300)) }
"<="                        { arreglo.push( new Nodo(yytext, 300)) }
">"                         { arreglo.push( new Nodo(yytext, 300)) }
"<"                         { arreglo.push( new Nodo(yytext, 300)) }
"=="                        { arreglo.push( new Nodo(yytext, 300)) }
"!="                        { arreglo.push( new Nodo(yytext, 300)) }
//incremento y decremento
"++"                        { arreglo.push( new Nodo(yytext, 300)) }
"--"                        { arreglo.push( new Nodo(yytext, 300)) }
//de asignacion
"+="                        { arreglo.push( new Nodo(yytext, 300)) }
"-="                        { arreglo.push( new Nodo(yytext, 300)) }
"*="                        { arreglo.push( new Nodo(yytext, 300)) }
"/="                        { arreglo.push( new Nodo(yytext, 300)) }
"="                         { arreglo.push( new Nodo(yytext, 300)) }
//aritmeticos
"+"                         { arreglo.push( new Nodo(yytext, 300)) }
"-"                         { arreglo.push( new Nodo(yytext, 300)) }
"*"                         { arreglo.push( new Nodo(yytext, 300)) }
"/"                         { arreglo.push( new Nodo(yytext, 300)) }
"%"                         { arreglo.push( new Nodo(yytext, 300)) }
//logigos
"!"                         { arreglo.push( new Nodo(yytext, 300)) }
"&&"                        { arreglo.push( new Nodo(yytext, 300)) }
"||"                        { arreglo.push( new Nodo(yytext, 300)) }

//Simbolos
"."                         { arreglo.push( new Nodo(yytext, 600)) }
","                         { arreglo.push( new Nodo(yytext, 600)) }
"#"                         { arreglo.push( new Nodo(yytext, 600)) }
":"                         { arreglo.push( new Nodo(yytext, 600)) }
";"                         { arreglo.push( new Nodo(yytext, 600)) }
"("                         { arreglo.push( new Nodo(yytext, 600)) }
")"                         { arreglo.push( new Nodo(yytext, 600)) }
"["                         { arreglo.push( new Nodo(yytext, 600)) }
"]"                         { arreglo.push( new Nodo(yytext, 600)) }
"{"                         { arreglo.push( new Nodo(yytext, 600)) }
"}"                         { arreglo.push( new Nodo(yytext, 600)) }

//Constantes numericas
[0-9]+("."[0-9]+)?\b        { arreglo.push( new Nodo(yytext, 400)) }


//Identificadores
[a-zA-Z_]+([a-zA-Z_]|[0-9])*                        { arreglo.push( new Nodo(yytext, 200)) }


/* Espacios en blanco */
[ \r\t]+            {}
\n                  {}


.                       { }

<<EOF>>           return 'EOF'

/lex



/* Asociación de operadores y precedencia */
%start expressions

%% /* language grammar */

expressions : EOF { 
    const arr = [...arreglo];
    const com = [...comentarios];
    arreglo = [];
    comentarios = [];
    return [ arr, com ];
} ;
