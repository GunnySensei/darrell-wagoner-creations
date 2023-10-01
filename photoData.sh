# #!/bin/bash

# entryCount=0
# status="continue"

# generateEntry() {
# echo "Enter the Product Name"
# read productName
# echo $productName "entered"

# echo "Enter the Imgur URL"
# read imgURL
# echo $imgURL "entered"

# echo "Enter the Image Description"
# read imgDesc
# echo $imgDesc "entered"

# echo "Is there another image? enter y or n"
# read nextEntry
# echo "$nextEntry"
# echo "$entryCount"

# if [ "$nextEntry" == "n" ] && [ $entryCount -eq 0 ]
#     then
#         jsonEntry={\"productName\":\"$productName\",\"imageUrl\":\"$imgURL\",\"imgDesc\":\"$imgDesc\"}
#         echo "Writing single entry: "  
#         echo $jsonEntry | tee data.json
#         return
# fi

# if [ "$nextEntry" == "y" ] && [ $entryCount -eq 0 ]
#     then
#         jsonEntry="[{\"productName\":\"$productName\",\"imageUrl\":\"$imgURL\",\"imgDesc\":\"$imgDesc\"},"
#         # jq -n -r -s --arg jsonEntry "$jsonEntry" "$jsonEntry" >> data.json
#         ((entryCount++))
#         generateEntry
# fi

# if [ "$nextEntry" == "y" ] && [ $entryCount -ne 0 ]
#     then
#         jsonEntry="$jsonEntry {\"productName\":\"$productName\",\"imageUrl\":\"$imgURL\",\"imgDesc\":\"$imgDesc\"},"
#         ((entryCount++))
#         generateEntry
# fi

# if [ "$nextEntry" == "n" ] && [ $entryCount -ne 0 ] && [ "$status" == "continue" ]
#     then
#         jsonEntry="$jsonEntry {\"productName\":\"$productName\",\"imageUrl\":\"$imgURL\",\"imgDesc\":\"$imgDesc\"}]"
#         status="stop"
#         echo "Writing final entries"
#         echo $jsonEntry | tee data.json
#         return
# fi


# }

# generateEntry


curl --location -g 'https://api.imgur.com/3/album/RBee9LZ/images' --header 'Authorization: Client-ID 5c7c9cd823f9da7' > ./Assets/photoData.json
