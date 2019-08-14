default: highlight

clean:
	rm -rf ./highlight

setup: clean
	mkdir -p ./highlight

highlight: setup
	highlight \
		--batch-recursive=*.js \
		--out-format=rtf \
		--font-size=24 \
		-l \
		--output-dir=./highlight 

