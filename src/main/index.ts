figma.showUI(__html__, {
  width: 390,
  height: 600,
});

figma.ui.on("message", (event) => {
  console.log(event.data);
});
