# pagesource-collector-base

This project serves only as a base to download a desired page source and write it to file. The program currently only downloads the homepage of yahoo finance. You must make your desired adjustments to pagesource-collector-base-app.js and use selenium to navigate to the webpage that you want.

I will not be adding anymore specific code to pagesource-collector-base-app.js, it is up to you to implement it for your needs to download the page that you want.

This base project was made with the intention of being used for stocks (hence the usage of TickerSymbol in the code), but the base is general enough to really be used for anything.

The choosen file name will have a timestamp suffix (before the extension)



# Limitations

The current version does not allow you to change the desired filename outside of changing the source code at the moment.  You can change it by going to the file .\lib\save-pagesource.js and editing the function "newFileName", by changing the argument in  line that has "generateFileName()" to a filename of your choice (currently "TickerSymbol" is in there).


# Future versions

Although I have a very rough version for myself, I will eventually edit and upload functionalty that makes this program headless, read each line of a list to collect page sources. Also to make each run parallel.

