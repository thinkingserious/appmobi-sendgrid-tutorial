# AppMobi + SendGrid = iPhone or Android Powered Email #

This tutorial is based on code created at the [App Developer Conference Conference and Hackathon](http://appdevconf.engagedigital.com) in Santa Clara, CA as a result of about 4 hours of hack time. Thus, it is extremely rough, though it should serve as a good starting point for working with both [AppMobi](http://www.appmobi.com) and the [SendGrid API](http://docs.sendgrid.com/documentation/api). This code has been tested on a MacBook Air running Lion. The iOS portion was tested using an iPhone 4s using the AppMobi labs iPhone app.

This program will allow you to send an email within your iPhone or Android app, view rudimentary account statistics and receive a SMS message when a link is clicked in your email.

## Getting Starting ##

The pre-requisites for this tutorial is installation of the [appMobi platform](http://xdk.appmobi.com), [Twilio account](http://www.twilio.com) and a [SendGrid account](http://sendgrid.com/pricing.html) (a free account will work). 

Once you have completed the above, you are ready to begin.

## Setup a New AppMobi Project ##

Click Start New to get started.

![Start New](http://github.com/thinkingserious/appmobi-sendgrid-tutorial/raw/master/readme-images/start-new.png "Start New")

Choose the Client-Side project.

![Client Side](http://github.com/thinkingserious/appmobi-sendgrid-tutorial/raw/master/readme-images/client-side.png "Client Side")

Choose your project name and select which API's you would like to include in your project. For this tutorial, I did not choose any APIs.

Now you should see a screen similar to:

![New Blank Project](http://github.com/thinkingserious/appmobi-sendgrid-tutorial/raw/master/readme-images/new-blank-project.png "New Blank Project")

## Code! ##

Click the Development icon to jump to the folder where your code will be stored.

![Development Icon](http://github.com/thinkingserious/appmobi-sendgrid-tutorial/raw/master/readme-images/development.png "Development Icon")

Note that if you jump up two directories, you will find a ton of sample code to enjoy. I used the [Klout](http://www.klout.com) source code as my starting point.

![Demo Code](http://github.com/thinkingserious/appmobi-sendgrid-tutorial/raw/master/readme-images/demo-code.png "Demo Code")

Copying this code into your AppMobi directory should produce a working solution for you, which is demonstrated in the video below. Note that you will need to replace the SendGrid and Twilio credentials.

## Setup 'SMS on Link Click' Functionality ##

For the SMS alert to be sent when a link is clicked in your email, you will need to setup the webhook [here](http://sendgrid.com/app/appSettings/type/eventnotify/id/15).

![Webhook](http://github.com/thinkingserious/appmobi-sendgrid-tutorial/raw/master/readme-images/webhook.png "Development Icon")

You can find the code for the webhook in the webhook directory. This code is placed at the link you specified above.
