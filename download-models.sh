#!/bin/bash

FILE_IDS=("1bDo0Axr4RYxzKN0DG_X0ZVhCfvjonjYK" "13-brKfIG2-0Hg962e2aJhTtIPLKBJbDb")
FILE_NAMES=("model-house.glb" "model-car.glb")

DEST_DIR="./public"
mkdir -p $DEST_DIR

for i in "${!FILE_IDS[@]}"; do
  FILEID=${FILE_IDS[$i]}
  FILENAME=${FILE_NAMES[$i]}

  echo "🔽 Download $FILENAME..."

  CONFIRM=$(wget --quiet --save-cookies cookies.txt --keep-session-cookies \
    --no-check-certificate "https://drive.google.com/uc?export=download&id=${FILEID}" -O- \
    | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1/p')

  wget --load-cookies cookies.txt \
    "https://drive.google.com/uc?export=download&confirm=${CONFIRM}&id=${FILEID}" \
    -O "${DEST_DIR}/${FILENAME}"

  echo "✅ Saving on ${DEST_DIR}/${FILENAME}"
done

# Limpieza
rm -f cookies.txt

echo "✅ All the files was generetd on ./public"
