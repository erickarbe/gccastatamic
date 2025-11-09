# Tracking Codes Reference

These are your existing tracking codes that were hardcoded in the layout. You can now manage these from the Statamic dashboard under **Globals > Custom Scripts**.

## Header Scripts

Copy and paste this into the "Header Scripts" field:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MV5NX75');</script>
<!-- End Google Tag Manager -->

<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1106942688012345');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1106942688012345&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
```

## Footer Scripts (Body Scripts)

Copy and paste this into the "Footer Scripts" field:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MV5NX75"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

---

## How to Use

1. Log into your Statamic dashboard
2. Navigate to **Globals** in the main menu
3. Click on **Custom Scripts**
4. Paste the above codes into their respective fields
5. Click **Save**

Your tracking codes will now be active on all pages. You can edit or update them anytime from the dashboard without touching any code files!

