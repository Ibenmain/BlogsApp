install:
	npm i && npx prisma generate && npm run dev

.PHONY: install