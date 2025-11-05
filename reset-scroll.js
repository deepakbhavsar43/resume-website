// Emergency scroll reset - Run this in browser console if page won't scroll
console.log('Current body overflow:', document.body.style.overflow);
document.body.style.overflow = 'auto';
document.documentElement.style.overflow = 'auto';
console.log('Body overflow reset to auto');
console.log('Page should now be scrollable');