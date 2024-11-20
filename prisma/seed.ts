import bcrypt from "bcrypt";
import db from "../lib/db";

async function main() {
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
}

main()
  .then(() => db.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
