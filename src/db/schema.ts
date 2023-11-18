import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const albumSchema = pgTable("album", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }).notNull(),
    artist: varchar("artist", { length: 256 }).notNull(),
    genre: varchar("genre", { length: 256 }).notNull(),
});

export const songSchema = pgTable("song", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    duration: integer("duration").notNull(),
    albumId: integer("album_id")
        .notNull()
        .references(() => albumSchema.id),
});

export type AlbumType = typeof albumSchema.$inferSelect;
export type SongType = typeof songSchema.$inferSelect;
