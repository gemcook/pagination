start:
	yarn run storybook

clean:
	rm -rf ./lib/

build-cjs:
	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	BABEL_ENV=production \
	yarn run build:cjs

build-es:
	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	BABEL_ENV=production \
	yarn run build:es

prepublish:
	$(MAKE) clean

	$(MAKE) build-cjs

	$(MAKE) build-es

	cp -r ./src/styles/ ./lib/styles/

build:
	yarn run build-storybook

publish:
	yarn publish --access public
