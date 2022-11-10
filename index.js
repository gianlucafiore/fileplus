const {
    input,
    div,
    text,
    script,
    domReady,
    text_attr,
  } = require("@saltcorn/markup/tags");
  
  const fileplus = {
    type: "File",
    isEdit: true,
    configFields: [
      {
        name: "mime",
        label: "Mimetype",
        type: "String",
      },
      {
        name: "max_size",
        label: "Max size",
        type: "Integer",
        //sublabel: "Do not pick time",
      } 
    ],
    run: (nm, v, attrs, cls) => {
      const rndid = Math.floor(Math.random() * 16777215).toString(16);
      return (
        input({
          type: "file",
          class: ["form-control", cls],
          name: text_attr(nm),
          disabled: attrs.disabled,
          id: `input${text_attr(nm)}${rndid}`,
          ...(typeof v !== "undefined" &&
            v !== null && {
            value: text_attr(
              typeof v === "string" ? v : v ? v.toISOString() : undefined
            ),
          }),
        })
      );
    },
  };
  
  module.exports = {
    sc_plugin_api_version: 1,
    fieldviews: { fileplus },
    plugin_name: "fileplus"
  };
 