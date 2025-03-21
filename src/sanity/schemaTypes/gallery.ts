import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Image Gallery",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "category",
      title: "Image category",
      type: "string",
      description: "A short title for this gallery",
    }),
    defineField({
      name: "image",
      title: "Gallery image",
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
