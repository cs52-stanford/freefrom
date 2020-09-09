import emailjs from 'emailjs-com';

export default function sendEmail(userType, timeInterval, userName, email) {
  emailjs.init('user_Cm97WelCVRaMQZcPi8FOu');

  var templateParams = {};
  var template = '';
  var match_type = '';

  if (userType === 'lawyer') {
    match_type = 'survivors';
  } else {
    match_type = 'lawyers';
  }

  if (timeInterval === 'Weekly') {
    template = 'time_interval_email';
    templateParams = {
      name: userName,
      to_email: email,
      time: 'week',
      time_interval: 'weekly',
      matchType: match_type,
    };
  } else if (timeInterval === 'Monthly') {
    template = 'time_interval_email';
    templateParams = {
      name: userName,
      to_email: email,
      time: 'month',
      time_interval: 'monthly',
      matchType: match_type,
    };
  } else if (timeInterval === 'For every new match') {
    template = 'every_match';
    templateParams = {
      name: userName,
      to_email: email,
    };
  }

  emailjs.send('default_service', template, templateParams)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
      console.log('FAILED...', error);
    });

}



