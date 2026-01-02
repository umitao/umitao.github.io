#!/bin/bash
set -e

# Define source and target
SOURCE_DIR=$(pwd)
TARGET_DIR="$HOME/Dev/umitso"
REMOTE_URL="https://github.com/umitao/umitao.github.io.git"

echo "🚀 Starting Launch Sequence for Umitso..."

echo "[1/8] Ensuring ~/Dev exists..."
mkdir -p "$HOME/Dev"

echo "[2/8] Copying project to $TARGET_DIR..."
# Remove if exists to ensure clean state based on current scratchpad
if [ -d "$TARGET_DIR" ]; then
    echo "  - Removing existing directory at target..."
    rm -rf "$TARGET_DIR"
fi
cp -r "$SOURCE_DIR" "$TARGET_DIR"

echo "[3/8] Navigating to new directory..."
cd "$TARGET_DIR"

echo "[4/8] Clean & Initialize Git..."
# Remove existing git history from the scratchpad to start fresh
rm -rf .git
git init

echo "[5/8] Committing files..."
git add .
git commit -m "Initial commit: umitso launch"

echo "[6/8] Renaming branch to main..."
git branch -M main

echo "[7/8] Adding remote origin..."
git remote add origin "$REMOTE_URL"

echo "[8/8] Pushing to GitHub..."
echo "⚠️  Note: You may be prompted for your GitHub credentials."
git push -u origin main

echo "✅ DONE! Project successfully launched."
echo "   Location: $TARGET_DIR"
echo "   Remote:   $REMOTE_URL"
