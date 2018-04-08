start:
	yarn run storybook

clean:
	rm -rf ./lib/

build-umd:
	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	BABEL_ENV=production \
	yarn run build:umd

prepublish:
	$(MAKE) clean

	$(MAKE) build-umd

	cp ./flow-typed/index.js.flow ./lib/index.js.flow

	cp -r ./src/styles/ ./lib/styles/

	mv ./base.css ./lib/base.css
