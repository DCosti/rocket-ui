import Tooltip from "./index";
import Typography from "@totalsoft_oss/rocket-ui.components.data-display.typography";

export const abstract =
  "Display informative text when users hover over, focus on, or tap an element.";

export const labels = ["react", "ui"];

export const examples = [
  {
    scope: {
      Tooltip,
      Typography,
    },
    title: "Example",
    description: "A basic usage of Tooltip component",
    code: `<Typography tooltip='Example of using tooltip'>Hover on me to see the magic</Typography>`,
  },
];
