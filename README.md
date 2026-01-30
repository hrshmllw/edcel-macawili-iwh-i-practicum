# Welcome to the Integrating With HubSpot I: Foundations Practicum

This repository is for the Integrating With HubSpot I: Foundations course. This practicum is one of two requirements for receiving your Integrating With HubSpot I: Foundations certification. You must also take the exam and receive a passing grade (at least 75%).

To read the full directions, please go to the [practicum instructions](https://app.hubspot.com/academy/l/tracks/1092124/1093824/5493?language=en).

**Custom Objects URL:** https://app.hubspot.com/contacts/245028778/objects/2-224711481/views/all/list

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/hrshmllw/edcel-macawili-iwh-i-practicum.git
cd edcel-macawili-iwh-i-practicum
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory of the project:

```bash
touch .env
```

Add the following variables to your `.env` file:

```
HUBSPOT_ACCESS_TOKEN=your_private_app_access_token_here
CUSTOM_OBJECT_NAME=your_custom_object_name_here
```

**Where to get these values:**

- **HUBSPOT_ACCESS_TOKEN**:
  1. Go to your HubSpot test account
  2. Navigate to Settings → Integrations → Private Apps
  3. Create or open your private app
  4. Copy the access token
- **CUSTOM_OBJECT_NAME**:
  1. This is the API name of your custom object (e.g., `pets`, `p1234567_my_custom_object`)
  2. You can find this in Settings → Data Management → Objects → Your Custom Object

**⚠️ IMPORTANT:** Never commit your `.env` file to GitHub. It's already included in `.gitignore`.

### 4. Run the Application

```bash
node index.js
```

The server will start on `http://localhost:3000`

### 5. Test the Application

- Visit `http://localhost:3000` to view the custom object table
- Click "Add/Update this table" to create new records
- Fill out the form and submit to add new custom objects

---

## Tips:

- Commit to your repository often. Even if you make small tweaks to your code, it’s best to be committing to your repository frequently.
- The subject of the custom object is up to you. Feel free to get creative!
- Please create a test account but DO NOT include your private app access token in your repo.
- Ensure you re-merge any working branches into the main branch.

## Pre-requisites:

- Using [Node](https://nodejs.org/en/download) and node packages
- Using [Express](https://expressjs.com/en/starter/installing.html)
- Using [Axios](https://axios-http.com/docs/intro)
- Using [Pug templating system](https://pugjs.org/api/getting-started.html)
- Using the command line
- Using [Git and GitHub](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)

## Requirements

- All work must be your own. During the grading process we will check the revision history. Submissions that do not meet this requirement will not be considered.
- You must have at least three new routes in your index.js file and two new pug templates, one for the homepage and one for the form.
- You must create a developer test account and link to the custom object list page in your README.md file. Submissions that do not meet this requirement will not be considered.
