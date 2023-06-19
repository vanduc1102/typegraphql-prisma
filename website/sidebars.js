/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  docs: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "category",
      label: "Basics",
      link: {
        type: "generated-index",
        title: "Basic steps",
        description: "Learn about the first steps!",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "basics",
        },
      ],
    },
    {
      type: "category",
      label: "Advanced",
      link: {
        type: "generated-index",
        title: "Advanced concept",
        description: "Learn about the more advanced concepts!",
      },
      // manually define order here
      items: [
        "advanced/exposing-models",
        "advanced/exposing-actions",
        "advanced/hiding-field",
        "advanced/adding-fields",
        "advanced/custom-operations",
        "advanced/emit-blocks",
        "advanced/additional-decorators",
        "advanced/simple-inputs",
        "advanced/renaming-model",
        "advanced/renaming-field",
        "advanced/unchecked-scalars",
        "advanced/simple-resolvers",
        "advanced/emit-id-type",
        "advanced/override-plural",
        "advanced/custom-prisma-import",
        "advanced/custom-prisma-context-key",
        "advanced/emit-redundant-types-info",
        "advanced/overriding-object-decorator",
        "advanced/emit-is-abstract",
      ],
    },
  ],
  examples: [
    {
      type: "ref",
      id: "examples",
    },
  ],
};

module.exports = sidebars;
