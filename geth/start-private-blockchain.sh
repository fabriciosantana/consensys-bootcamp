#!/bin/sh

echo "Starting private blockchain"

GENESIS=/root/genesis.json
DATA_DIR=/root/private
KEYSTORE="$DATA_DIR"/keystore
PASS=/root/pass
ACCOUNTS=
ETHERBASE=

if [ ! -d "$DATA_DIR" ]; then
	echo "Creating a private blockchain ..."
	echo "Data dir: $DATA_DIR"
	echo "Genesis: $GENESIS"
	geth	--datadir "$DATA_DIR" \
		init "$GENESIS"

	echo "Creating new account"
	geth 	--datadir "$DATA_DIR" \
		--keystore "$KEYSTORE" \
		account new --password "$PASS"

fi

echo "Getting accounts list"
ACCOUNTS=$(geth	--datadir "$DATA_DIR" \
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
	--miner.etherbase="$ETHERBASE"
