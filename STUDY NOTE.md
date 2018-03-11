Mar 7, 2018
## two ways of setting static image
### 1
- import image within import statement or within require statement
- if using this way to show the local image, react native will automatically take image's heigh and width
### 2
- image fetch from web
- using ``uri`` property
- for web image, we have to set size for that

## using menu on smimulator to debug
## using react-native-debugger to debug

## link outside library
Additionally, a lot of libraries take some extra steps during the linking process which can't be automated.

For libraries that don't require such extra steps, there is an automated way of linking available though.

You'll need to install an extra package: ``react-native``

It's actually installed locally in your project already but if you want to run commands with it, you need to install it globally.

Install it globally via ``npm install -g react-native`` 

Thereafter, in your project folder, you can run ``react-native link``  to automatically link all libraries that require linking.

Important: ALWAYS check the docs (e.g. on the Github repo page) of the library you're using! You definitely have to ensure that no additional steps are required!

