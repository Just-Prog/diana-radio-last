CREATE TABLE `users` (
	`email` text NOT NULL,
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uname` text NOT NULL,
	`2fa_key` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_uname_unique` ON `users` (`uname`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_2fa_key_unique` ON `users` (`2fa_key`);