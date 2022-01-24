import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "_content");

export function getPostSlugs() {
  const allPosts = fs.readdirSync(contentDirectory);

  return allPosts.map((filename) => {
    const slug = filename.replace(".md", "");
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, filename),
      "utf8"
    );
    const { data, content } = matter(fileContents);

    return {
      data,
      content,
      slug,
    };
  });
}

export const blogPosts = [
  {
    title: "My first post",
    slug: "first",
    date: new Date().toDateString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in massa maximus, faucibus nibh at, gravida erat. Donec tempus, turpis vel scelerisque porta, nulla sapien sollicitudin tortor, vel lacinia libero sem in ipsum. Fusce in egestas eros. Donec a porta justo, a cursus felis. Duis sagittis mauris nec pellentesque vulputate. Quisque at nibh volutpat est gravida porttitor. Nam vitae sem justo.",
  },
  {
    title: "Second Again !",
    slug: "second",
    date: new Date().toDateString(),
    content:
      "Nulla lacinia justo in diam aliquet euismod. Mauris sit amet ultrices dui. Nullam sit amet semper sem. In hac habitasse platea dictumst. Suspendisse porttitor odio interdum dui tincidunt pellentesque. Phasellus et quam ex. In id massa bibendum, pulvinar lectus finibus, hendrerit ante. Nullam porttitor commodo quam, in eleifend lacus ornare sed. Phasellus pharetra massa nec lectus elementum, vel cursus metus cursus.",
  },
  {
    title: "Third is the best !",
    slug: "third",
    date: new Date().toDateString(),
    content:
      "Suspendisse lorem orci, luctus id nisi a, eleifend viverra lectus. Fusce sodales odio et sem semper, nec maximus enim rutrum. Donec in nunc cursus, feugiat dui at, imperdiet augue. Integer leo arcu, faucibus eu magna sed, viverra faucibus enim. Etiam sagittis mi sed arcu tristique vulputate. Vestibulum semper rutrum mi, eu vestibulum dolor mattis eget. Cras sed commodo sapien. Vivamus aliquet eros et malesuada sodales. Proin suscipit arcu ex, sagittis egestas risus sodales nec. Nullam sed enim sem.",
  },
  {
    title: "Wow a FOURTH !",
    slug: "fourth",
    date: new Date().toDateString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in massa maximus, faucibus nibh at, gravida erat. Donec tempus, turpis vel scelerisque porta, nulla sapien sollicitudin tortor, vel lacinia libero sem in ipsum. Fusce in egestas eros. Donec a porta justo, a cursus felis. Duis sagittis mauris nec pellentesque vulputate. Quisque at nibh volutpat est gravida porttitor. Nam vitae sem justo.",
  },
];
