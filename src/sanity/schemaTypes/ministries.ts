import { ImageIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const ministries = defineType({
  name: "ministries",
  title: "Ministries",
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
      name: "ministryOne",
      title: "First ministry Image",
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
      name: "ministryTwo",
      title: "Second Ministry Image",
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
      name: "ministryThree",
      title: "Third Ministry Image",
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
      name: "fourthMinistry",
      title: "Fourth Ministry Image ",
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
      name: "fifthMinistry",
      title: "Fifth Ministry Image",
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
