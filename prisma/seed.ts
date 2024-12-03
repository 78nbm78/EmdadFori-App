import { servicesData } from "../mock/ServicesData";
import { brandsData } from "../mock/BrandsData";
import bcrypt from "bcrypt";
import db from "../lib/db";

async function main() {
  // insert users
  const users = [
    {
      email: "navid.behroozimajd78@gmail.com",
      password: bcrypt.hashSync("R@UbikSC0@", 12),
      mobile: "09397967117",
      role: "ADMIN",
      isAdmin: true,
    },
    {
      email: "mohammad.masiha23@gmail.com",
      password: bcrypt.hashSync("Masih123!@#", 12),
      mobile: "09355151481",
      role: "ADMIN",
      isAdmin: true,
    },
    {
      email: "mn.safari97@gmail.com",
      password: bcrypt.hashSync("Mahbobe123!@#", 12),
      mobile: "09229052545",
      role: "ADMIN",
      isAdmin: true,
    },
  ];

  for (const user of users) {
    await db.users.upsert({
      where: { email: user.email },
      update: {},
      create: {
        email: user.email,
        password: user.password,
        mobile: user.mobile,
        role: "ADMIN",
        isAdmin: user.isAdmin,
      },
    });
  }

  // insert services
  for (const service of servicesData) {
    await db.services.upsert({
      where: { slug: service.slug },
      update: {},
      create: {
        title: service.title,
        thumbnail: service.thumbnail,
        slug: service.slug,
        greenIcon: service.greenIcon,
        description: service.description,
      },
    });
  }

  // insert brands
  for (const brand of brandsData) {
    await db.brands.upsert({
      where: { slug: brand.slug },
      update: {},
      create: {
        title: brand.title,
        thumbnail: brand.thumbnail,
        slug: brand.slug,
        description: brand.description,
      },
    });
  }

  // insert blogs
  for (let i = 0; i < 4; i++) {
    await db.blogs.upsert({
      where: { slug: `slug-${[i]}` },
      update: {},
      create: {
        title: `blog-${[i]}`,
        thumbnail: null,
        slug: `blog-${[i]}`,
        description: `blog description ${[i]}`,
        isPublished: true,
      },
    });
  }
}

main()
  .then(() => db.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
