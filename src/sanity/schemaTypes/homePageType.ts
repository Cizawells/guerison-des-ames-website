import { ImageIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const heroSlider = defineType({
  name: "heroSlider",
  title: "Hero Page Slider",
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
      name: "imageOne",
      title: "First Image",
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
      name: "imageTwo",
      title: "Second Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Describe the second image",
        }),
      ],
      
    }),
    defineField({
      name: "imageThree",
      title: "Third Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Describe the third image",
        }),
      ],
      
    }),
    defineField({
      name: 'mission',
      type: 'text',
    }),
    defineField({
      name: 'vision',
      type: 'text',
    }),
  ],
});
