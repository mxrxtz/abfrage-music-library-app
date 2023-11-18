import type { Config } from "drizzle-kit";

export default {
    driver: "pg",
    out: "./src/db/migrations",
    schema: "./src/db/schema.ts",
    dbCredentials: {
        connectionString: process.env.DATABSE_URL!,
    },
} satisfies Config;
