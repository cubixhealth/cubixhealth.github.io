$(document).ready(function() {
	var elem = $("#toggle-video");
	elem.click(function() {
		if (elem.text() == 'See After') {
			elem.text('See Before');
	        $("#before").hide();
	        $("#after").fadeIn(2000);
		} else if (elem.text() == 'See Before') {
			elem.text('See After');
	        $("#after").hide();
	        $("#before").fadeIn(500);
		}
	});

	var modal = $("#contactModal");
	var btn = $("#contactBtn");

	btn.click(function() {
		modal.addClass('is-active');
	});

	$(".modal-background, #cancel, .delete").click(function() {
		modal.removeClass('is-active');
	});

	$("#sendBtn").click(function() {
		var email = $("#email");
		var sub = $("#sub");
		var msg = $("#msg");

		var emailText = $("#email").val();
		var subjectText = $("#sub").val();
		var msgText = $("#msg").val();

		console.log(msgText);

		var mailto = 'mailto:brooke.stephanian@gmail.com?Subject=' + encodeURI(subjectText) + '&body=' + encodeURI(msgText);

		var samsemail = 'stsai25@jhmi.edu';

		$("#sendBtn").attr('href', mailto);

		email.val('');
		sub.val('');
		msg.val('');
		modal.removeClass('is-active');
	});
	
	$("#toggleNight").click(function() {
		if ($("#toggleNight").hasClass('is-light')) {
			$(".is-dark").addClass('is-light');
			$(".is-light").removeClass('is-dark');
			$("#toggleNight, #contactBtn").addClass('is-dark');
			$("#toggleNight, #contactBtn").removeClass('is-light');
		} else if ($("#toggleNight").hasClass('is-dark')){
			$(".is-light").addClass('is-dark');
			$(".is-dark").removeClass('is-light');
			$("#toggleNight, #contactBtn").addClass('is-light');
			$("#toggleNight, #contactBtn").removeClass('is-dark');
		}
	});
});


