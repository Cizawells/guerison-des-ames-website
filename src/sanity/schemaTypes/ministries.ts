import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const ministries = defineType({
  name: "ministries",
  title: "Ministries",
  type: "document",
  icon: ImageIcon, // Optional: Add an icon for better UI in Sanity Studio
  fields: [
    defineField({
      name: "ministryTitle",
      title: "Ministry Title",
      type: "string",
      description: "Title for the hero slider (optional)",
    }),
    defineField({
      name: "ministryDescription",
      title: "Ministry Description",
      type: "string",
      description: "Title for the hero slider (optional)",
    }),

    defineField({
      name: "ministryImage",
      title: "Ministry Image",
      type: "image",
      options: {
        hotspot: true, // Allows cropping
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Describe the image for accessibility",
        }),
      ],
    }),
  ],
});
