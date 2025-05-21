#!/bin/bash
# Script to manually run the package update process

set -e

echo "=== Installing dependencies ==="
bun install

echo "=== Ensuring Playwright is installed ==="
bunx playwright install chromium --with-deps

echo "=== Running updatePackages script ==="
bun src/tools/updatePackages.ts

echo "=== Done! ==="