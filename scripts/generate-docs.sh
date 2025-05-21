#!/usr/bin/env sh

# Generate package documentation from the entire pantry
# Usage: ./scripts/generate-docs.sh [output-path]

# Default output path
OUTPUT_PATH="docs/package-catalog.md"

# If argument is provided, use it as the output path
if [ "$1" != "" ]; then
  OUTPUT_PATH="$1"
fi

# Run the generate-docs command
echo "Generating package documentation to $OUTPUT_PATH..."
bun run bin/cli.ts generate-docs --output "$OUTPUT_PATH"

# Make the output file executable if successful
if [ $? -eq 0 ]; then
  chmod +x "$OUTPUT_PATH"
  echo "Documentation generated successfully!"
  exit 0
else
  echo "Error generating documentation."
  exit 1
fi