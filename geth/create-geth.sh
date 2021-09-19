#!/bin/sh

docker pull ethereum/client-go:stable

docker run 	-it \
		--name geth \
		-v $HOME/docker-volume/geth/root:/root \
		-p 8545:8545 \
		-p 30303:30303 \
		-p 8502:8502 \
		--entrypoint="sh" \
		ethereum/client-go:stable

