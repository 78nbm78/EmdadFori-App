import bcrypt from "bcrypt";
import db from "../lib/db";

async function main() {
    const password = bcrypt.hashSync("R@UbikSC0@", 12);

    await db.users.upsert({
        where: { email: "navid.behroozimajd78@gmail.com" },
        update: {},
        create: {
            email: "navid.behroozimajd78@gmail.com",
            password,
            mobile: "09397967117",
            role: "ADMIN",
            isAdmin: true,
        },
    });
}
main()
    .then(() => db.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await db.$disconnect();
        process.exit(1);
    });