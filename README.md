# Test Library Project

The purpose of this project is just for custom library testing.

## Linking the library to a local project

Use these commands in the library project.

```bash
  yarn link
  yarn install
  cd node_modules/react
  yarn link
  cd node_modules/react-dom
  yarn link
```

Then use these commands in the project in order to link your library.

```bash
  yarn link react
  yarn link reat-dom
  yarn link <library-name>
```

## Notes

You need to link `react` and `react-dom` to be sure the project only has one instance of each.
