module.exports = function (migration) {
  // Simplistic function deducing a location from title.
  const locationFromTitles = (titleList) => {
    if (tagList.includes('javascript')) {
      return 'Development'
    }
    return 'General'
  }

  // Derives location based on titles and links these back to preview test entries.
  migration.transformEntries({
    // Start from preview test's title field
    contentType: 'previewTest',
    from: ['title'],
    // We'll only create a location using a name for now.
    to: ['location'],
    transformEntryForLocale: async (from, locale) => {
      return {
        location: locationFromTitles(from.title[locale])
      }
    }
  })
}
