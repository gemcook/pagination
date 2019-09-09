.PHONY: start build publish

# Storybookを起動する
start:
	yarn run storybook

# ライブラリのためのビルドをする
build:
	yarn run rollup -c

# ライブラリの publish をする
publish:
	yarn publish --access public
