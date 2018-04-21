start:
	yarn run storybook

clean:
	rm -rf ./lib/

build-umd:
	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	BABEL_ENV=production \
	yarn run build:umd

build-es:
	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	BABEL_ENV=production \
	yarn run build:es

prepublish:
	$(MAKE) clean

	$(MAKE) build-umd

	$(MAKE) build-es

	cp ./flow-typed/index.umd.js.flow ./lib/umd/index.umd.js.flow

	cp ./flow-typed/index.es.js.flow ./lib/es/index.es.js.flow

	cp -r ./src/styles/ ./lib/styles/

	#mv ./base.css ./lib/base.css

build:
	yarn run build-storybook

publish:
	yarn publish --access public
