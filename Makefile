.PHONY: install
install:
	npm install

.PHONY: start
start:
	npm start

.PHONY: build
build:
	npm run build

.PHONY: storybook
storybook:
	npm run storybook

.PHONY: test
	npm run cypress:run
