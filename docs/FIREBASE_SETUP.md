# Firebase Setup & Database Connection Guide

This document explains how to set up and connect the Firebase backend for the Superteam Australia website. Use this guide if you are exporting the project to work locally in VS Code.

## 1. Firebase Configuration

The application uses the following configuration to connect to Firebase. You can find this in `firebase-applet-config.json` in the root directory.

```json
{
  "projectId": "gen-lang-client-0873412899",
  "appId": "1:47298399706:web:07355ac50eab2bfd48c4e3",
  "apiKey": "AIzaSyCNBPv7by_6i-U-X-YMkH_1wVxCJjoTI68",
  "authDomain": "gen-lang-client-0873412899.firebaseapp.com",
  "firestoreDatabaseId": "ai-studio-020b8166-4170-4a5b-8aef-7dbe3b20ad0d",
  "storageBucket": "gen-lang-client-0873412899.firebasestorage.app",
  "messagingSenderId": "47298399706",
  "measurementId": ""
}
```

> **Note:** If you want to use your own Firebase project, create a new project in the [Firebase Console](https://console.firebase.google.com/), enable Firestore and Authentication, and replace the values above with your own web app credentials.

## 2. Firebase Services Used

### Authentication
- **Provider:** Google Login.
- **Setup:** Enable Google as a sign-in provider in the Firebase Console under **Authentication > Sign-in method**.
- **Domain Allowlist:** Ensure `localhost` is added to the **Authorized domains** list in the Firebase Console under **Authentication > Settings**.

### Firestore Database
- **Mode:** Production (using Security Rules).
- **Database ID:** `ai-studio-020b8166-4170-4a5b-8aef-7dbe3b20ad0d` (or `(default)` if you are using a standard setup).

## 3. Database Structure (Collections)

The following collections are used in Firestore:

| Collection | Description | Key Fields |
|------------|-------------|------------|
| `users` | Member profiles | `uid`, `name`, `role`, `skills`, `avatar`, `twitter`, `company`, `isCore` |
| `events` | Ecosystem events | `title`, `date`, `location`, `lumaUrl`, `image`, `type` |
| `projects` | Partner projects | `name`, `logo`, `url` |
| `applications` | Membership apps | `uid`, `name`, `email`, `role`, `status`, `createdAt` |

## 4. Security Rules

Copy and paste these rules into the **Firestore > Rules** tab in your Firebase Console to ensure data is protected while remaining accessible for the directory.

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    function isAuthenticated() {
      return request.auth != null;
    }

    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }

    function isAdmin() {
      return isAuthenticated() &&
        (get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin' ||
         (request.auth.token.email == "Marvel1698@gmail.com" && request.auth.token.email_verified == true));
    }

    function isValidUser(data) {
      return data.keys().hasAll(['uid', 'name', 'role']) &&
             data.uid is string && data.uid.size() > 0 &&
             data.name is string && data.name.size() > 0 && data.name.size() < 100 &&
             data.role is string && data.role.size() > 0;
    }

    match /users/{userId} {
      allow read: if true;
      allow create: if isOwner(userId) && isValidUser(request.resource.data) && request.resource.data.role != 'admin';
      allow update: if isOwner(userId) && isValidUser(request.resource.data) && request.resource.data.role == resource.data.role;
      allow write: if isAdmin();
    }

    match /events/{eventId} {
      allow read: if true;
      allow write: if isAdmin();
    }

    match /projects/{projectId} {
      allow read: if true;
      allow write: if isAdmin();
    }

    match /applications/{applicationId} {
      allow read: if isAdmin() || (isAuthenticated() && resource.data.uid == request.auth.uid);
      allow create: if isAuthenticated();
      allow update, delete: if isAdmin();
    }
  }
}
```

## 5. Local Development Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env` file in the root and add your Gemini API key if you plan to use AI features:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

3. **Run the App:**
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`.
