<?php

global $project;
$project = 's3';

global $databaseConfig;
$databaseConfig = array(
	"type" => 'MySQLDatabase',
	"server" => 'localhost', 
	"username" => 'root', 
	"password" => '', 
	"database" => 'SS_S3',
	"path" => '',
);

MySQLDatabase::set_connection_charset('utf8');

// This line set's the current theme. More themes can be
// downloaded from http://www.silverstripe.org/themes/
SSViewer::set_theme('s3');

// Set the site locale
i18n::set_locale('en_US');

// enable nested URLs for this site (e.g. page/sub-page/)
SiteTree::enable_nested_urls();

// Setup Logger
SS_Log::add_writer(new SS_LogFileWriter('../errors.log'), SS_Log::WARN, '<=');