#!/bin/sh
echo "Starting goerli blockchain"

DATA_DIR=/root/goerli
KEYSTORE="$DATA_DIR"/keystore
PASS=/root/pass
ACCOUNTS=
ETHERBASE=
NETWORK=goerli

echo "Creating new account"
geth 	--datadir "$DATA_DIR" \
	--keystore "$KEYSTORE" \
	--"$NETWORK" \
	account new --password "$PASS"

echo "Getting accounts list"
ACCOUNTS=$(geth	--datadir "$DATA_DIR" \
		--"$NETWORK" \
		account list)
echo "Accounts list: $ACCOUNTS"

echo "Getting ether base address"
ETHERBASE=$(echo "$ACCOUNTS" | cut -c14-53)
ETHERBASE=$(echo "0x$ETHERBASE")
echo "Etherbase: $ETHERBASE"

echo "Staring geth"
geth	--allow-insecure-unlock \
	--datadir "$DATA_DIR"
	--keystore "$KEYSTORE"
	--networkid 4568 \
	--http \
	--http.addr '0.0.0.0' \
	--http.corsdomain "*" \
	--http.port 8502 \
	--http.api 'personal,eth,net,web3,txpool,miner' \
	--mine \
	--miner.etherbase="$ETHERBASE" \
	--"$NETWORK" \
	--syncmode "light"
