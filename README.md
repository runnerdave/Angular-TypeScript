# Angular-TypeScript (Fork from Deborah Kurata's pluralsight course)
Starter files and support materials for the Pluralsight course: "Angular with TypeScript"

NOTE:
- In the productResourceMock.ts file, on some systems the id variable is typed as "any" and the code works "as is".
- In other cases, the implicit typing marks the id variable as a string. When this happens, the compiler generates an error on the comparison saying the operator "==" cannot be applied to types "number" and "string". The solution is to use the "+" unary operator to convert the array element to an integer:

`var id = +parameters[length - 1];`

## TSD is deprecated, use typings instead:

````$ npm install typings --global
  $ typings install dt~angular --save
  $ typings install dt~angular@1.4.0 --save --global
  $ typings install dt~angular-resource --save
  $ typings install dt~angular-mocks --save
````




