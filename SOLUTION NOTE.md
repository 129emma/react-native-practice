##1.the Haste package 'react-native-vector-icons'   

delete the JSON file at ``node_modules/react-native/local-cli/core/fixtures/files/package.json``

or
`` "scripts": {
    "postinstall": "rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json"
} ``