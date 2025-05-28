#!/bin/bash

FILE_IDS=("1bDo0Axr4RYxzKN0DG_X0ZVhCfvjonjYK" "13-brKfIG2-0Hg962e2aJhTtIPLKBJbDb")
FILE_NAMES=("model-house.glb" "model-car.glb")
SUBFOLDERS=("house" "car")

BASE_DIR="./public"

for i in "${!FILE_IDS[@]}"; do
  FILEID=${FILE_IDS[$i]}
  FILENAME=${FILE_NAMES[$i]}
  SUBDIR=${SUBFOLDERS[$i]}
  DEST_DIR="${BASE_DIR}/${SUBDIR}"

  mkdir -p "$DEST_DIR"

  echo "🔽 Downloading $FILENAME..."

  CONFIRM=$(wget --quiet --save-cookies cookies.txt --keep-session-cookies \
    --no-check-certificate "https://drive.google.com/uc?export=download&id=${FILEID}" -O- \
    | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1/p')

  wget --load-cookies cookies.txt \
    "https://drive.google.com/uc?export=download&confirm=${CONFIRM}&id=${FILEID}" \
    -O "${DEST_DIR}/${FILENAME}"

  echo "✅ Saved at ${DEST_DIR}/${FILENAME}"
done

# Cleanup
rm -f cookies.txt

echo "✅ All files were downloaded and saved in ./public/[house|car]/"
