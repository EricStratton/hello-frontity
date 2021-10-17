import Root from './components';

const myFirstTheme = {
  name: "my-first-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: true,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
    },
  },
}

export default myFirstTheme;