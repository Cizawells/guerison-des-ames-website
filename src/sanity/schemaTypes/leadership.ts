import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const leadership = defineType({
  name: "leadership",
  title: "Leadership team",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "A short title for this gallery",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "A short title for this gallery",
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
