/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
//CKEDITOR.config.filebrowserBrowseUrl = '/browse.php';
//CKEDITOR.config.filebrowserUploadUrl = '/upload.php';
CKEDITOR.editorConfig = function (config) {
  var host_path = window.location.origin;
  config.filebrowserBrowseUrl = host_path + '/asset/admin/plugins/ckfinder/ckfinder.html';
  config.filebrowserImageBrowseUrl = host_path + '/asset/admin/plugins/ckfinder/ckfinder.html?type=Images';
  config.filebrowserFlashBrowseUrl = host_path + '/asset/admin/plugins/ckfinder/ckfinder.html?type=Flash';
  config.filebrowserUploadUrl = host_path + '/asset/admin/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files';
  config.filebrowserImageUploadUrl = host_path + '/asset/admin/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';
  config.filebrowserFlashUploadUrl = host_path + '/asset/admin/plugins/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash';


  // Define changes to default configuration here. For example:
  // config.language = 'fr';
  // config.uiColor = '#AADC6E';
  // config.extraPlugins = 'filebrowser';
};
