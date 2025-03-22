import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const programs = defineType({
  name: "programs",
  title: "Our Programs",
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
      name: "time",
      title: "Time",
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
