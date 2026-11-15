# Animated Embossed Login

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/animated-embossed-login-1/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 18-second tutorial video, titled **Animated Embossed Login**.

## What the video shows

- Light blue-grey background with a large circular neumorphic login panel.
- Red heading: `Animated Embossed Login`.
- Centered `SIGN IN` form with username and password fields.
- Inputs have inset embossed shadows; focus/typing produces a soft red highlight.
- A raised pill-shaped `Login` button with blue text.
- On successful demo submit, the form transitions to a green check icon and:
  - `Welcome Back!`
  - `Login Successful`

## Visible HTML structure transcribed from the video

```html
<div class="login-circle" id="loginContainer">
  <div class="success-msg" id="successMsg">
    <div class="check-circle">✓</div>
    <h2>Welcome Back!</h2>
    <p>Login Successful</p>
  </div>

  <div class="form-content" id="formContent">
    <h2>SIGN IN</h2>
    <p class="hint"></p>
    <div class="input-group">
      <input type="text" id="username"
             placeholder="Username" required>
    </div>
    <div class="input-group">
      <input type="password" id="password"
             placeholder="Password" required>
    </div>
    <button class="btn-submit"
            onclick="handleLogin()">Login</button>
  </div>
</div>
```

The visible source panel clearly shows the `login-circle`, `success-msg`, `check-circle`, `form-content`, `input-group`, `username`, `password`, and `btn-submit` structure. The rest of the project fills in the CSS and JavaScript needed to reproduce the observed UI and success transition.

## Features

- Neumorphic circular login container.
- Soft inset shadows on username and password inputs.
- Red focus glow while typing.
- Raised embossed login button with hover/press states.
- Animated transition from login form to success message.
- Green embossed checkmark.
- Reset button to return to the form.
- Responsive layout and reduced-motion support.
- No external dependencies.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Demo behavior

Enter any non-empty username and password and click **Login**. The success screen is a front-end demonstration only; no credentials are sent to a server and no real authentication takes place.

## Project structure

```text
animated-embossed-login/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Accuracy note

The HTML structure and visible labels were transcribed from the recording. The complete original CSS and JavaScript are not fully readable in the video, so the neumorphic styling, focus effect and state transition are functional reconstructions rather than a verbatim copy of the creator's source.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
