import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const databseURL = drizzle(
    postgres(process.env.DATABASE_URL!, { ssl: "require", max: 1 })
);

async function main() {
    try {
        console.info("🟠 Migration started");
        await migrate(databseURL, { migrationsFolder: "./src/db/migrations" });
        console.info("🟢 Migration successful");
    } catch (error) {
        console.error(error);
        console.info("🔴 Migration failed");
    }
    process.exit(0);
}

main();
