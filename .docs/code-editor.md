# Code Editor

In order to build the web application with this starter kit, you are not tied to any code editor. However, the development process is streamlined on [Visual Studio Code](https://code.visualstudio.com/). It's highly recommended to use the latest version of VS Code with the below extensions to develop an application by basing it on this starter kit:

 - [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
 - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 
 - [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
 - [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

> When you open up the VS Code under this path, you may see a warning like below:
>
> *"Version mismatch! global tsc (2.0.3) != VS Code's language service (2.2.1). Inconsistent compile errors might occur"*
>
> This means that you have TypeScript compiler installed as a global npm package and its version is not the same as what VS Code is using. To resolve this issue, follow the below steps:
>
>  - Open up a command prompt
>  - Run `tsc --version` to verify that you have 2.0.3 installed (according to the above error message)
>  - Run `npm install typescript@2.2.1 -g` (according to the above error message) to upgrade it to the necessary version

## Optional but Recommended

 - Install [Redux DevTools chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
