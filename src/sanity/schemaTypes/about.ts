import { ImageIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  icon: ImageIcon, // Optional: Add an icon for better UI in Sanity Studio
  fields: [
    defineField({
      name: "title",
      title: "Slider Title",
      type: "string",
      description: "Title for the hero slider (optional)",
    }),
    defineField({
      name: "image",
      title: "About Image",
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
 
    defineField({
      name: 'aboutText',
      type: 'text',
    }),
   
  ],
});
