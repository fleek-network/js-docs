# Fleek Functions - Global APIs

## Development

Render docs locally:

```bash
# Concat all declarations
cat dts/* > index.d.ts

# Generate html documentation
deno doc --html --name="Fleek Functions - Global APIs" index.d.ts

# Move the source to the html output
mv index.d.ts docs/

# Patch source paths
sed -i "s|$((printf "file://" && realpath index.d.ts) | sed -e "s|/|\&#x2F;|g")|../index.d.ts|g" docs/**/*.html
```
