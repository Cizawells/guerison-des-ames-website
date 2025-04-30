import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const causes = defineType({
  name: "causes",
  title: "Causes",
  type: "document",
  icon: ImageIcon, // Optional: Add an icon for better UI in Sanity Studio
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title for the hero slider (optional)",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "Title for the hero slider (optional)",
    }),

    defineField({
      name: "image",
      title: "Image",
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
