# google-minus
Google Search that excludes Reddit and Quora.

<img width="3012" height="1706" alt="Screenshot 2025-07-19 at 6 50 11 AM" src="https://github.com/user-attachments/assets/9019cd05-6e2e-4055-a90e-b4c9a5347c31" />

In just 10 lines of JavaScript you can go back to a time when Google was actually good. A time before 2 cancerous websites existed: Reddit and Quora.

-----

### Chrome (simple)

1. In Chrome, go to **Chrome** > **Settings...** > **On Startup** > **Open a specific page or set of pages**

2. Enter the URL of one of the mirrors above.

-----

### Chrome (local install with **New Tab** support)

1. Download this repository.

2. In Chrome, go to **Chrome** > **Settings...** > **On Startup** > **Open a specific page or set of pages**

3. Enter the path to the `index.html` file of the downloaded repository.

4. In Chrome, go to **Window** > **Extensions**

5. Make sure **Developer Mode** is enabled. 

6. Click **Load Unpacked**. 

7. Choose the root directory of the downloaded repository.

-----

### iOS Safari

1. In iOS Safari, navigate to one of the above mirrors and **Add to Favorites**.

_Note: Tap the **Google Minus** app icon instead of the address bar to initiate a search._

-----

## Blacklist 

To edit the blacklist, look for this in [`index.js`](https://github.com/bennyschmidt/google-minus/blob/master/index.js):

```javascript
  const BLACKLIST = [
    'reddit.com',
    'quora.com'
  ];
```
