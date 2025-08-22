
dummy:

bd:
	npm run build

run: bd
	npm run serve

push:
	git push

depl: bd push
	GIT_USER=upfall-james npm run deploy
