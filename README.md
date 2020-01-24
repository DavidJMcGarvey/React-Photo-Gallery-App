--------------------------------------------
#      React Photo Gallery App      #
--------------------------------------------

Welcome to my React Photo Gallery App, where you come for the components, but you stay for props and state. This app uses the React UI library to present pictures from flickr.

## Application Description and Goals:

To run: 
1. Download dependencies using **npm install** in your Terminal/CLI.
2. Get API Key (non-comercial) from flikr: https://www.flickr.com/services/apps/create/apply/
3. Create a **config.js** file in main directory and in it copy the following, except with your API Key as a string:
      ```
      const apiKey = '12345example67890';
      export default apiKey
      ```
4. Back in your Terminal/CLI, type: **npm start**

Or:
1. Go to: https://react-gallery-app.davidjmcgarveygithub.now.sh/


**BASIC FEATURES**
Using React components and the Flickr API, this web app allows users to search all of Flickr for whatever they would like. Upon search, 24 photos from the web will be displayed for the user's enjoyment. There are also 4 buttons that will search what is written on the button. Search results are reflected in the URL. 

  **EXTRA FEATURES**
- A "Loading..." indicator is present during the data fectching. 
- If the user's search fails to retreive any photos, a message will appear encouraging them to try again.
- 404-like error route that lets user know that their url ain't cutting it.  

## Technologies:

1. JavaScript
2. React
3. Axios

## Screenshots:
![img](https://user-images.githubusercontent.com/42125523/72557006-b8f9ac00-3854-11ea-8b18-5e3b8af292a4.png)
![img](https://user-images.githubusercontent.com/42125523/72557008-b8f9ac00-3854-11ea-87e9-a9fcb36f35a3.png)
![img](https://user-images.githubusercontent.com/42125523/72557010-b8f9ac00-3854-11ea-88fb-440a02385747.png)

Author: David J McGarvey  
Created: 2019-11-19  
Updated: 2020-01-24
