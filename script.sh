#!/bin/zsh

ASSETS_FOLDER=$1

if [ ! -d "$ASSETS_FOLDER" ]; then
  echo "Error: '$ASSETS_FOLDER' is not a valid directory."
  exit 1
fi

counter=1

for img in "$ASSETS_FOLDER"/*.JPG; do
  if [ ! -e "$img" ]; then
    echo "No .jpg files found in '$ASSETS_FOLDER'."
    exit 0
  fi
  
  new_name="$ASSETS_FOLDER/$counter.jpg"
  
  mv "$img" "$new_name"
  
  echo "Renamed $img to $new_name"
  ((counter++))
done

echo "Renaming complete. Processed $((counter - 1)) images."
