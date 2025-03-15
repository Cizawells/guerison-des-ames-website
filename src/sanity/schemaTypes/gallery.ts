import { ImageIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Image Gallery",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "title",
      title: "Gallery Title",
      type: "string",
      description: "A short title for this gallery",
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alternative Text",
                  type: "string",
                  description: "Describe the image for accessibility",
                },
              ],
            },
            {
              name: "category",
              title: "Category",
              type: "string",
              options: {
                list: [
                  { title: "Worship", value: "Worship" },
                  { title: "Preaching", value: "Preaching" },
                  { title: "Audience", value: "Audience" },
                ],
                layout: "dropdown",
              },
              description: "Select a category for this image",
            },
          ],
        },
      ],
      description: "Upload multiple images and assign categories",
    }),
  ],
});
