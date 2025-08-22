
dummy:

build:
	npm run build

run: build
	npm run serve

push:
	git push

depl: build push
	GIT_USER=upfall-james npm run deploy
