import { ImageIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const contact = defineType({
  name: "contact",
  title: "Contact",
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
      name: "phone1",
      title: "Phone Number 1",
      type: "string",
    }),
    defineField({
      name: "phone2",
      title: "Phone Number 2",
      type: "string",
    }),
    defineField({
      name: "email1",
      title: "Email 1",
      type: "string",
    }),
    defineField({
      name: "email2",
      title: "Email 2",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
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
    defineField({
      name: "breadcrumbImage",
      title: "BreadCrumb Image",
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
