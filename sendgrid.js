// Update with your SendGrid credentials - http://www.SendGrid.com/pricing.html
var api_user = 'XXXXXX';
var api_key = 'XXXXXX';

// Utility function to hide the flash message
function clearEmail()
{
	$("#flash").hide();
}

// Send an email via SendGrid using the Web API
function sendEmail()
{
	var to = $('#to').val();
	var from = $('#from').val();
	var subject = $('#subject').val();
	var message = $('#message').val();
	if (!message){
		message = "Failed";
	}
	var url = 'https://sendgrid.com/api/mail.send.json?to=' + to + '&from=' + from + '&subject=' + subject + '&text=' + message + '&api_user=' + api_user + '&api_key=' + api_key; 
	AppMobi.device.getRemoteData(url,"GET","","emailSent","displayFlashMessage");	
}

// Check if your email was sent successfully
function emailSent(rawPayload)
{
	var data = $.parseJSON(rawPayload);

	if (data.message == "success") {
		$("#flash").show();
		$('#flash').addClass('green');
		$("#flash").html('<p style="text-align:center">Your email was sent successfully!</p>');
	} else {
		$("#flash").show();
		$('#flash').addClass('red');
		$("#flash").html('<p>Your email was not sent!</p>');
	}
	$('#menu').show();
}

// Get today's SendGrid statistics
function showStatus()
{
	var url = 'https://sendgrid.com/api/stats.get.json?api_user=' + api_user + '&api_key=' + api_key + '&days=0';
	AppMobi.device.getRemoteData(url,"GET","","todaysStatus","displayFlashMessage");
}

// Show your SendGrid statisticcs
function todaysStatus(rawPayload)
{
	var data = $.parseJSON(rawPayload);
	$("#statustext").show();
	$("#statustext").html('<p>Emails sent: ' + data[0].requests + '</br>' + '<p>Emails delivered: ' + data[0].delivered + '</br>' + '<p>Clicks: ' + data[0].clicks + '</br>');
}

function displayFlashMessage (rawPayload) 
{
	$('#flash').show();
	$('#flash').addClass('red');
	$('#flash').html("<p class='center green'>Ack! Something went wrong!</p>");
}
