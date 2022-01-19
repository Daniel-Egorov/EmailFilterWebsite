# EmailFilterWebsite

This is a very simple website that I made for my dad. All it does is allow the user to upload a `.txt` file and it will automatically download a new file to the users system with the emails that were in the uploaded document.

## How I run the script

I have a raspberry pi 4 that runs it 24/7, and the site can be accessed on my network only.

The steps to run are:
- download the files to a directory on your computer
- open terminal/command prompt and navigate it to the directory using `cd Directory/of/your/folder`
- type `python3 -m http.server`
- the website is now running on localhost:8000
- it can be accessed by any device on the network by typing the ip address of the host device followed by :8000

This site can probably be run differently but I decided to go with a very simple Python server that is already made for me rather than figuring out a complicated solution to something that doesn't need it