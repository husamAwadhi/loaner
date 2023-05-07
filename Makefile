ifndef env
	env=dev
endif

up:
	docker-compose -f docker/$(env).yml up --build -d
down:
	docker-compose -f docker/$(env).yml down
test:
	docker-compose -f docker/$(env).yml run --rm --no-deps loaner-python \
		bash -c "cd /usr/src/app && python -m unittest discover tests/ -p '*_test.py'"
