import React from 'react';

function EmailTemplate({ firstName , msg , email  }) {
  return (
    
    <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 2px 4px #888888">
      <p style="font-size: 16px; color: #444; text-align: left;">You've received a new message from {{firstName}}:</p>
      <div style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; background-color: #f9f9f9;">
      <p style="font-size: 16px; color: #555; text-align: left;">{{msg}}</p>
      </div>
      <p style="font-size: 16px; color: #444; margin-top: 20px; text-align: left;">Recipient's Email: <a style="text-decoration: none; color: #0077b5;" href="mailto:${{email}}">{{email}}</a></p>
      <p style="font-size: 16px; color: #444; margin-top: 20px; text-align: left;">Best wishes for me</p>
      <p style="font-size: 16px; color: #777; margin-top: 10px; text-align: left;"><br/><br/></p>
    </div>
    
  );
}

export default EmailTemplate;
