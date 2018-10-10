install:
	npm install

start:
	npm run babel-node -- src/bin/gendiff.js

publish:
	npm publish

lint:
	npx run eslint .

test:
	npm test

.PHONY: test