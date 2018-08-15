# Stylight Frontend Developer task (currency-convertor)
____________
Introduction
------------

This is a currency conversion application which convert EUR to USD and JPY with Fixer API.
User can convert the currency to the latest trends and also to the previous trends.

Features/Functionality
---------

- Used Fixer API for getting the latest rates.
- Used axios for making ajax call.
- Loader will be displayed when user hit the convert button unless he/she get the data from Fixer API.
- Date functionality for getting previous date data for the currency conversion.
- Numbers will be converted to Millions, Trillion, and so on if the output number is big.
- Beautiful simple design with fully responsive.
- User gets the error message on the top fixed message strip. Errors are handled for both client and server side.

Architecture Details
------------
- Imagine for a moment an app with only one folder for all your files, the JS, HTML, and everything.
A terrible idea, of course. The problem with the large number of files is to navigate them.
So, For this reason I structured the application in a effiecent manner.
##### Directory Structure :-
![directory-structure](https://s8.postimg.cc/5x2eeo9d1/Screen_Shot_2018-08-15_at_5.35.22_PM.png)
- You can see in the above structure that scripts, styles and others are seperated as per the need. So, when the project goes bigger we can get our file with ease.


Some Examples/Screenshots
--------------------
- Normal conversion view:
![Normal-Conversion](https://s8.postimg.cc/fudf7pm3p/Screen_Shot_2018-08-15_at_4.13.09_PM.png)
- Big number output view:
![Big-num](https://s8.postimg.cc/ne6i9x7md/Screen_Shot_2018-08-15_at_5.56.37_PM.png)

- Mobile view:
![mobile-view](https://s8.postimg.cc/bp7kikf45/Screen_Shot_2018-08-15_at_5.57.42_PM.png)

- Client side error message:
![error-msg](https://s8.postimg.cc/69tsl0zed/Error_msg.png)

### Mnay thanks for looking out !