CREATE TABLE `quiz_responses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`primaryGoal` varchar(100) NOT NULL,
	`healthBaseline` varchar(255),
	`symptoms` text,
	`medications` text,
	`bloodWorkHistory` varchar(255),
	`sportStatus` varchar(100),
	`lifestyleFactors` text,
	`eligible` int NOT NULL DEFAULT 1,
	`ineligibilityReason` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `quiz_responses_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `quiz_results` (
	`id` int AUTO_INCREMENT NOT NULL,
	`quizResponseId` int NOT NULL,
	`recommendedProgram` varchar(100) NOT NULL,
	`personalizedMessage` text,
	`emailCaptured` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `quiz_results_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `waitlist_signups` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`source` varchar(100) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `waitlist_signups_id` PRIMARY KEY(`id`),
	CONSTRAINT `waitlist_signups_email_unique` UNIQUE(`email`)
);
