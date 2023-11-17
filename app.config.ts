export default defineAppConfig({
  ui: {
    primary: "green",
    gray: "slate",
    button: {
      default: {
        variant: "outline",
      },
      base: "transition backdrop-blur-sm",
      variant: {
        // dont know why {color}-400 not working
        outline: "dark:hover:bg-{color}-500 dark:hover:text-gray-800",
        soft: "dark:bg-{color}-950 dark:text-{color}-100 dark:hover:bg-{color}-500 dark:hover:text-gray-800",
      },
    },
  },
})
