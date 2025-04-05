import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const footerGallery = defineType({
  name: "footerGallery",
  title: "Footer Gallery",
  type: "document",
  icon: ImageIcon,
  fields: [
    
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
