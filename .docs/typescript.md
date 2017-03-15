# TypeScript

We make use of TypeScript within this stater kit and there are couple of useful things to be aware of before working with TypeScript.

## Declaration Files

In order for TypeScript to interact with npm packages which are not written in TypeScript, we must provide so-called [declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html). [Getting type declarations in TypeScript 2.0 and above](https://blog.mariusschulz.com/2016/10/23/typescript-2-0-acquiring-type-declaration-files) requires no tools apart from npm. As an example, getting the declarations for a library like lodash takes nothing more than the following command:

```bash
npm install --save-dev @types/lodash
```

From there you’ll be able to use lodash in your TypeScript code with no fuss. This works for both modules and global code. For example, once you’ve `npm install`-ed your type declarations, you can use imports and write:

```js
import * as _ from "lodash";
_.padStart("Hello TypeScript!", 20, " ");
```

or if you’re not using modules, you can just use the global variable `_`:

```js
_.padStart("Hello TypeScript!", 20, " ");
```

### Searching for Declaration Files

For the most part, type declaration packages should always have the same name as the package name on npm, but prefixed with `@types/`, but if you need, you can check out [https://aka.ms/types](https://aka.ms/types) to find the package for your favorite library.

### Working with Other JavaScript Libraries

In some cases (hopefully not for the majority), we will not be able to find the declaration files. In these situations, we need to [declare the API that the library exposes](https://www.typescriptlang.org/docs/handbook/modules.html#working-with-other-javascript-libraries) in order to describe the shape of libraries not written in TypeScript. Following is an example of a `module` declaration which has two functions in it:

```ts
declare module "foo" {
    export function getPerpetualEnergy(): any[];
    export function endWorldHunger(n: boolean): void;
}
```

You can place this under `./typings/foo.d.ts` file and make use of it like below:

```ts
/// <reference path="../../typings/foo.d.ts"/>
import * as foo from 'foo';
foo.endWorldHunger(true);
```

> This is assuming that you already have `foo` module installed through npm. Otherwise, you will get a smilar error as below when you run `npm run build`:
>
> ```
> ERROR in ./src/js/utils.ts
> Module not found: Error: Cannot resolve module 'foo' in D:\dev\sqlclone\RedGate.SqlClone.Client.Web\src\js
> ```

With this approach, you will get all the benefits of a strongly-typed language (e.g. IntelliSense, compile time safety, etc.). For example, if you misstype `foo.endWorldHunger` as `foo.endWorldunger`, you will get the below error:

```
ERROR in ./src/js/utils.ts
(5,5): error TS2339: Property 'endWorldunger' does not exist on type 'typeof "foo"'.
```
