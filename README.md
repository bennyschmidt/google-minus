# google-minus
Google Search that excludes Reddit and Quora.

<img width="3024" height="1654" alt="Screenshot 2025-07-12 at 9 58 30 AM" src="https://github.com/user-attachments/assets/3b0029fc-338e-4c71-b3d6-8014f7309b66" />

In just 10 lines of JavaScript you can go back to a time when Google was actually good. A time before 2 cancerous websites existed: Reddit and Quora.

## Mirrors

• [https://google-minus.vercel.app](https://google-minus.vercel.app)

• [https://exactchange.network/google](https://exactchange.network/google)

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
