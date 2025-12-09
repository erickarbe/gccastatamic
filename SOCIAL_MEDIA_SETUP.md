# Social Media Links - Editable Footer Icons

## What's Been Set Up

I've made the social media icons in your footer fully editable through the Statamic control panel. Now you or your client can easily add, edit, or remove social media links without touching any code.

## What Was Created

### 1. Global Settings File

**Location:** `content/globals/social_media.yaml`

This file stores all the social media links. The existing links have been migrated:

-   Facebook
-   Instagram
-   LinkedIn
-   YouTube

### 2. Blueprint File

**Location:** `resources/blueprints/globals/social_media.yaml`

This defines the control panel interface with these fields:

-   **Platform** (dropdown): Select from Facebook, Instagram, LinkedIn, YouTube, TikTok, Twitter/X, Pinterest, Snapchat, Threads
-   **URL** (text field): Enter the full URL to the social profile
-   **Enabled** (toggle): Show or hide the link without deleting it

### 3. Updated Footer Template

**Location:** `resources/views/partials/footer.antlers.html`

The hardcoded social media links have been replaced with a dynamic loop that reads from the global settings.

## How to Use in the Control Panel

1. Log into your Statamic control panel
2. Navigate to **Globals** in the sidebar
3. Click on **Social Media**
4. You'll see a list of all your social media links
5. To add a new platform (like TikTok):
    - Click "Add Social Link"
    - Select the platform from the dropdown
    - Enter the URL
    - Toggle "Enabled" on
    - Save
6. To edit an existing link:
    - Click on the link item
    - Update the URL or toggle enabled/disabled
    - Save
7. To remove a link:
    - Either toggle "Enabled" to off (hides it but keeps the data)
    - Or delete the item entirely

## Supported Platforms

The following platforms have SVG icons ready to use:

-   Facebook
-   Instagram
-   LinkedIn
-   YouTube
-   TikTok
-   Twitter / X
-   Pinterest
-   Snapchat
-   Threads

## Technical Details

-   The footer loops through `social_media:social_links`
-   Only enabled links are displayed
-   Each platform has a conditional check that displays the appropriate SVG icon
-   Links open in a new tab (`target="_blank"`) with proper security (`rel="noopener"`)
-   Accessibility labels are automatically generated from the platform name

## Need More Platforms?

If you need a platform that's not in the list, you can:

1. Add the platform option to the blueprint at `resources/blueprints/globals/social_media.yaml`
2. Add the corresponding SVG icon code to the footer template at `resources/views/partials/footer.antlers.html`

Or reach out to your developer to add it for you!
