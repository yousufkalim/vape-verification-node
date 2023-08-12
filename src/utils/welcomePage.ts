/**
 * Welcome page for the application.
 * @author Yousuf Kalim
 */

const welcomePage = `
<!DOCTYPE html>
<html>

<head>
    <title>VeriScan API</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background: linear-gradient(#11c4ef, #172b4d);
            color: #ffffff;
        }

        .Hero {
            text-align: center;
        }

        .Hero-logo {
            height: 40vmin;
            pointer-events: none;
            margin-bottom: 10px;
        }

        @media (prefers-reduced-motion: no-preference) {
            .Hero-logo {
                animation: Hero-logo-spin infinite 20s linear;
            }
        }

        .Hero-header {
            background: transparent;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: #ffffff;
        }

        .Hero-header p,
        .Hero-header h4,
        .api-support,
        .api-support a {
            color: #ffffff;
        }

        .api-support {
            margin-top: 20px;
            text-align: center;
            font-size: 18px;
            font-weight: 400;
        }

        .api-support a {
            color: #0397eb;
            text-decoration: underline;
        }

        @keyframes Hero-logo-spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    </style>
</head>

<body>
    <div class="app">
        <div class="Hero">
            <header class="Hero-header">
                <a href="https://getveriscan.com/">
                    <img src="5968322.png" class="Hero-logo" alt="logo" />
                </a>
                <h4>Welcome to VeriScan</h4>
                <p>This is the main route of our application.</p>
                <div class="api-support">
                    <p>For API support, please <a href="https://getveriscan.com/contact/">contact us</a>.</p>
                </div>
            </header>
        </div>
    </div>
</body>

</html>
`;

export default welcomePage;
