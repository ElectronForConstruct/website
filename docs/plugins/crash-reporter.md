# Crash reporter plugin

This is module useful for reporting crashes from users to a cloud based crash report server.

::: tip
Due to data being gathered and sent from a users platform, a GDPR notice is likely required. \ 
Developers should review their GDPR policy.
::: 

## Installing
Please refer to [this section](/plugins/using-plugins.html#installing-a-plugin) to get help on how to install this plugin.

## Configuration
The entry to add to the `plugins` key to enable it is `'crash-reporter'`
This addon support configuration under the `'crash-reporter'` key

| key | type | default | description|
|-----|------|---------|------------|
| enable | boolean | false | Enable Crash Reporter Module
| productName | string | "" | Project Name
| companyName | string | "" | Company Name
| submitURL | string | "" | URL to submit crash report to
| uploadToServer | boolean | true | Upload crash report to submitURL

## Using this plugin
This plugin has been sucessfully tested with the [backtrace.io service](https://backtrace.io). 
After creating a backtrace.io account, create a project based on Electron, upload the [Electron symbols](https://github.com/electron/electron/releases) for the version of Electron being used and change the submitURL to point at your project's specific upload backtrace.io URL (this URL is available on the backtrace.io project site.)
