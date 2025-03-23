import { events } from "../shared/event";

figma.showUI(__html__, {
  width: 390,
  height: 600,
});

events("notify").on(({ message }) => {
  figma.notify(message);
});
