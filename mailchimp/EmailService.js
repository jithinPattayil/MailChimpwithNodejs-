var request = require('superagent');
var mailchimpInstance = '',
    listUniqueId = '',
    mailchimpApiKey = '';

module.exports.Userreg = function(data) {
    request
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey).toString('base64'))
        .send({
            'email_address': data.email,
            'status': 'subscribed',
            'merge_fields': {
                'FNAME': data.userName,
                'body': data.token
            }
        })
        .end(function(err, response) {
            console.log('err' + err)
        });
    console.log(data.email);

}