module.exports = function (migration) {
  // Create a new category field in the Preview Test content type.
  const previewTest = migration.editContentType('previewTest');
  previewTest.createField('location')
    .name('Location')
    .type('Symbol')
    .required(true);
}
